/* Prosty service worker: najpierw sieć, a gdy jej brak, kopia z pamięci. Dzięki temu aplikacja otwiera się też offline. */
var CACHE = "flm-v62";
var SHELL = ["./", "index.html", "style.css", "app.js", "config.js", "supabase-db.js", "manifest.webmanifest?v=3", "lm-icon-192.png", "lm-icon.svg", "kod-qr.svg"];

self.addEventListener("install", function (e) {
  e.waitUntil(caches.open(CACHE).then(function (c) { return c.addAll(SHELL); }).catch(function () {}));
  self.skipWaiting();
});
self.addEventListener("activate", function (e) {
  e.waitUntil(
    caches.keys().then(function (keys) { return Promise.all(keys.filter(function (k) { return k !== CACHE; }).map(function (k) { return caches.delete(k); })); })
      .then(function () { return self.clients.claim(); })
  );
});
self.addEventListener("fetch", function (e) {
  var req = e.request;
  if (req.method !== "GET" || new URL(req.url).origin !== location.origin) return;
  e.respondWith(
    fetch(req).then(function (res) {
      var copy = res.clone();
      caches.open(CACHE).then(function (c) { c.put(req, copy); });
      return res;
    }).catch(function () {
      return caches.match(req).then(function (r) { return r || caches.match("index.html"); });
    })
  );
});

/* Powiadomienia push (dla administratora) */
self.addEventListener("push", function (e) {
  var d = {};
  try { d = e.data ? e.data.json() : {}; } catch (x) {}
  e.waitUntil(self.registration.showNotification(d.title || "Fryzjer Last Minute", {
    body: d.body || "",
    icon: "lm-icon-192.png",
    badge: "lm-icon-192.png",
    data: { url: d.url || "./" }
  }));
});
self.addEventListener("notificationclick", function (e) {
  e.notification.close();
  var url = (e.notification.data && e.notification.data.url) || "./";
  e.waitUntil(self.clients.matchAll({ type: "window", includeUncontrolled: true }).then(function (list) {
    for (var i = 0; i < list.length; i++) {
      var c = list[i];
      if ("focus" in c) { if (c.navigate) { try { c.navigate(url); } catch (x) {} } return c.focus(); }
    }
    return self.clients.openWindow(url);
  }));
});
