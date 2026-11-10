/*
 * Warstwa bazy danych oparta o Supabase.
 * Udostępnia aplikacji ten sam interfejs, który wcześniej dawała lokalna baza:
 * doc(), collection(), get, set, update, delete, where, limit, onSnapshot.
 * Dodatkowo: window.FLM_AUTH (rejestracja i logowanie salonów przez Supabase Auth).
 */
(function () {
  var cfg = window.FLM_CONFIG || {};
  if (!window.FLM_CONFIG) { window.FLM_STATUS = "no-config"; return; }       // brak pliku config.js
  if (!cfg.url || !cfg.key || /WKLEJ/.test(cfg.key)) { window.FLM_STATUS = "placeholder"; return; } // brak klucza
  if (!(window.supabase && window.supabase.createClient)) { window.FLM_STATUS = "no-lib"; return; }  // biblioteka się nie wczytała
  window.FLM_STATUS = "ok";
  var sb = window.supabase.createClient(cfg.url, cfg.key, { auth: { persistSession: true, autoRefreshToken: true } });

  var MAP = {
    salons: { table: "salons", cols: { name: "name", nameKey: "name_key", address: "address", phone: "phone", desc: "description", mapUrl: "map_url", placeKey: "place_key", lat: "lat", lng: "lng", hours: "hours", services: "services" } },
    slots:  { table: "slots",  cols: { salonId: "salon_id", date: "date", time: "time", dur: "dur", service: "service", price: "price", promo: "promo", taken: "taken" } }
  };
  function toRow(m, obj) { var r = {}; Object.keys(obj).forEach(function (k) { if (m.cols[k]) r[m.cols[k]] = obj[k]; }); return r; }
  function fromRow(m, row) { var o = {}; Object.keys(m.cols).forEach(function (k) { o[k] = row[m.cols[k]]; }); return o; }
  function newId() { return (window.crypto && crypto.randomUUID) ? crypto.randomUUID() : "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) { var r = Math.random() * 16 | 0; return (c === "x" ? r : (r & 3 | 8)).toString(16); }); }
  function check(res) {
    if (res && res.error) {
      var e = new Error(res.error.message || "Błąd bazy danych");
      e.code = res.error.code === "23505" ? "name_taken" : (res.error.code === "42501" ? "forbidden" : (res.error.code || "db_error"));
      throw e;
    }
    return res;
  }
  function mkDoc(m, row) { var data = fromRow(m, row), id = row.id; return { id: id, exists: true, data: function () { return Object.assign({}, data); } }; }

  function Query(m) { this.m = m; this.filters = []; this.max = null; }
  Query.prototype.where = function (f, op, v) { if (op !== "==") throw new Error("Obsługiwane jest tylko =="); this.filters.push([f, v]); return this; };
  Query.prototype.limit = function (n) { this.max = n; return this; };
  Query.prototype.get = async function () {
    var q = sb.from(this.m.table).select("*"), m = this.m;
    this.filters.forEach(function (f) { q = q.eq(m.cols[f[0]] || f[0], f[1]); });
    q = q.limit(this.max || 1000);
    var res = check(await q), docs = (res.data || []).map(function (r) { return mkDoc(m, r); });
    return { docs: docs, empty: docs.length === 0, size: docs.length };
  };
  Query.prototype.onSnapshot = function (cb, err) {
    var self = this, timer = null, dead = false, ch = null;
    function load() {
      self.get().then(function (snap) { if (!dead) cb(snap); }, function (e) { if (!dead && err) err(e); });
    }
    function soon() { clearTimeout(timer); timer = setTimeout(load, 250); }
    load();
    try {
      ch = sb.channel("flm_" + self.m.table + "_" + newId().slice(0, 8))
        .on("postgres_changes", { event: "*", schema: "public", table: self.m.table }, soon).subscribe();
    } catch (e) {}
    var poll = setInterval(load, 30000);                                      // zapas, gdyby połączenie na żywo zawiodło
    document.addEventListener("visibilitychange", function () { if (!document.hidden) load(); });
    return function () { dead = true; clearInterval(poll); clearTimeout(timer); try { if (ch) sb.removeChannel(ch); } catch (e) {} };
  };

  function Coll(name) { this.name = name; this.m = MAP[name]; if (!this.m) throw new Error("Nieznana kolekcja: " + name); }
  Coll.prototype.doc = function (id) { return new Doc(this.name, id || newId()); };
  Coll.prototype.where = function (f, op, v) { return new Query(this.m).where(f, op, v); };
  Coll.prototype.get = function () { return new Query(this.m).get(); };
  Coll.prototype.onSnapshot = function (cb, err) { return new Query(this.m).onSnapshot(cb, err); };

  function Doc(name, id) { this.name = name; this.m = MAP[name]; this.id = id; }
  Doc.prototype.get = async function () {
    var res = check(await sb.from(this.m.table).select("*").eq("id", this.id).limit(1));
    var row = (res.data || [])[0];
    return row ? mkDoc(this.m, row) : { id: this.id, exists: false, data: function () { return undefined; } };
  };
  Doc.prototype.set = async function (obj) {
    var row = toRow(this.m, obj); row.id = this.id;
    check(await sb.from(this.m.table).upsert(row, { onConflict: "id" }));
  };
  Doc.prototype.update = async function (obj) {
    var res = check(await sb.from(this.m.table).update(toRow(this.m, obj)).eq("id", this.id).select("id"));
    if (!res.data || !res.data.length) { var e = new Error("Brak uprawnień lub rekord nie istnieje"); e.code = "forbidden"; throw e; }
  };
  Doc.prototype.delete = async function () {
    var res = check(await sb.from(this.m.table).delete().eq("id", this.id).select("id"));
    if (!res.data || !res.data.length) { var e = new Error("Brak uprawnień lub rekord nie istnieje"); e.code = "forbidden"; throw e; }
  };

  var DB = {
    collection: function (n) { return new Coll(n); },
    doc: function (path) { var p = String(path).split("/"); return new Doc(p[0], p[1]); }
  };

  window.claude = { use: function (name) { return Promise.resolve(name === "db" ? DB : null); } };

  window.FLM_AUTH = {
    current: async function () { var r = await sb.auth.getSession(); return r && r.data && r.data.session ? r.data.session.user : null; },
    signUp: async function (email, password, name) {
      var r = await sb.auth.signUp({ email: email, password: password, options: { data: { name: name } } });
      if (r.error) throw r.error;
      return { user: r.data.user, hasSession: !!r.data.session };
    },
    signIn: async function (email, password) {
      var r = await sb.auth.signInWithPassword({ email: email, password: password });
      if (r.error) throw r.error;
      return r.data.user;
    },
    signOut: async function () { try { await sb.auth.signOut(); } catch (e) {} }
  };
})();
