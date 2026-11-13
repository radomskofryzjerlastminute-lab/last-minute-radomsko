(function(){
  var DAYS=["Dziś","Jutro","Pojutrze"], WD=["Poniedziałek","Wtorek","Środa","Czwartek","Piątek","Sobota","Niedziela"];
  var PLACES=[
    {k:"centrum",n:"Centrum (Plac 3 Maja)",lat:51.0677,lng:19.4451},
    {k:"dworzec",n:"Okolice dworca",lat:51.0715,lng:19.4400},
    {k:"polnoc",n:"Północ miasta",lat:51.0820,lng:19.4450},
    {k:"poludnie",n:"Południe miasta",lat:51.0540,lng:19.4480},
    {k:"wschod",n:"Wschód miasta",lat:51.0680,lng:19.4800},
    {k:"zachod",n:"Zachód miasta",lat:51.0670,lng:19.4100}
  ];

  /* ---------- stan ---------- */
  var db=null, canWrite=null, dbMissing=false, loadSlow=false, loadErr=false;
  var salons={}, slots={}, ready={s:false,t:false}, slotsFirst=true;
  var mode="client", sview="add", curId=null, loginMode="login", profDirty=false, profSaving=null;
  var user=null, locState="idle";
  var dayF="all", q="", restoreId=null, loginInfo="", editState=null;
    var addState={day:0,time:"",to:"",kind:"range",svc:"",promo:""};
  function telHref(p){var d=String(p||"").replace(/\D/g,"");if(d.length===11&&d.indexOf("48")===0)d=d.slice(2);return "tel:"+(d.length===9?"+48":"")+d}

  /* ---------- narzędzia ---------- */
  function esc(s){return String(s==null?"":s).replace(/[&<>"']/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]})}
  function $(id){return document.getElementById(id)}
  function pad(n){return n<10?"0"+n:""+n}
  function toMin(t){var p=String(t).split(":");return parseInt(p[0],10)*60+parseInt(p[1],10)}
  function fromMin(m){return pad(Math.floor(m/60))+":"+pad(m%60)}
  function nowMin(){var d=new Date();return d.getHours()*60+d.getMinutes()}
  function zl(n){return String(n).replace(".",",")+" zł"}
  /* ceny: tryb "exact" (dokładna), "from" (od ... zł), "ask" (ustalana w salonie, opcjonalnie zniżka %) */
  function modeOf(o){return (o&&(o.priceMode||o.pm))||"exact"}
  function pz(n,m){return (m==="from"?"od ":"")+zl(n)}
  function priceLabel(o){var m=modeOf(o);return m==="ask"?"cena w salonie":pz(o.price,m)}
  function offPct(x){var m=modeOf(x);if(m==="ask")return x.promoPct||0;return(x.promo!=null&&x.price)?Math.round((1-x.promo/x.price)*100):0}
  function priceText(o){
    var m=modeOf(o);
    if(m==="ask")return "cena ustalana w salonie"+(o.promoPct?", zniżka −"+o.promoPct+"%":"");
    return o.promo!=null?pz(o.promo,m)+" zamiast "+pz(o.price,m):pz(o.price,m);
  }
  function promoCheck(sv,raw){
    raw=String(raw==null?"":raw).trim();
    var m=modeOf(sv);
    if(!raw)return {promo:null,pct:null};
    var n=num(raw);
    if(m==="ask"){
      if(n==null||n<1||n>90||Math.floor(n)!==n)return {err:"Zniżka musi być liczbą całkowitą od 1 do 90 (%), np. 30."};
      return {promo:null,pct:n};
    }
    if(n==null||n<=0)return {err:"Cena promocyjna musi być liczbą, np. 70."};
    if(n>=sv.price)return {err:"Cena promocyjna powinna być niższa niż regularna ("+priceLabel(sv)+")."};
    return {promo:n,pct:null};
  }
  function num(v){if(v==null||v==="")return null;var n=parseFloat(String(v).replace(",","."));return isNaN(n)?null:n}
  function ymd(d){return d.getFullYear()+"-"+pad(d.getMonth()+1)+"-"+pad(d.getDate())}
  function dateOf(off){var d=new Date();d.setDate(d.getDate()+off);return ymd(d)}
  function offsetOf(s){var p=String(s).split("-"),a=new Date(+p[0],+p[1]-1,+p[2]),n=new Date();n=new Date(n.getFullYear(),n.getMonth(),n.getDate());return Math.round((a-n)/864e5)}
  function dayDate(off){var d=new Date();d.setDate(d.getDate()+off);return d.toLocaleDateString("pl-PL",{weekday:"long",day:"numeric",month:"long"})}
  function todayIdx(){return (new Date().getDay()+6)%7}
  function km(a){return a<1?(Math.round(a*100)*10)+" m":(Math.round(a*10)/10).toString().replace(".",",")+" km"}
  function hav(la1,ln1,la2,ln2){
    var R=6371,r=Math.PI/180,a1=(la2-la1)*r,a2=(ln2-ln1)*r;
    var a=Math.sin(a1/2)*Math.sin(a1/2)+Math.cos(la1*r)*Math.cos(la2*r)*Math.sin(a2/2)*Math.sin(a2/2);
    return 2*R*Math.asin(Math.sqrt(a));
  }
  function dist(lat,lng){return user?hav(user.lat,user.lng,lat,lng):null}
  /* położenie salonu z adresu (OpenStreetMap Nominatim); tylko okolice Radomska */
  async function geoQuery(q){
    var tm=null;
    try{
      var ctrl=new AbortController();tm=setTimeout(function(){ctrl.abort()},9000);
      var r=await fetch("https://nominatim.openstreetmap.org/search?format=jsonv2&limit=1&countrycodes=pl&accept-language=pl&viewbox=18.85,51.45,20.05,50.70&q="+encodeURIComponent(q),{headers:{"Accept":"application/json"},signal:ctrl.signal});
      if(!r.ok)return null;
      var j=await r.json();if(!j||!j.length)return null;
      var lat=parseFloat(j[0].lat),lng=parseFloat(j[0].lon);
      if(isNaN(lat)||isNaN(lng))return null;
      if(hav(lat,lng,PLACES[0].lat,PLACES[0].lng)>40)return null;
      return {lat:lat,lng:lng};
    }catch(e){return null}
    finally{clearTimeout(tm)}
  }
  /* położenie salonu z adresu (OpenStreetMap Nominatim): Radomsko i okolice (do 40 km) */
  async function geocode(addr){
    var full=withCity(addr),g=await geoQuery(full);
    if(g)return g;
    var i=full.lastIndexOf(",");
    if(i>0){var town=full.slice(i+1).trim();g=town?await geoQuery(town):null;if(g){g.approx=true;return g}}
    return null;
  }
  function legacyGeo(s){return s.lat==null||s.lng==null||PLACES.some(function(p){return p.lat===s.lat&&p.lng===s.lng})}
  var geoTried=false;
  async function maybeGeo(){
    if(geoTried||!curId||!db||canWrite===false)return;
    var s=salons[curId];if(!s)return;
    geoTried=true;
    if(!(s.address||"").trim()||!legacyGeo(s))return;
    var g=await geocode(s.address);if(!g)return;
    try{
      await db.doc("salons/"+curId).update({lat:g.lat,lng:g.lng});
      salons[curId]=Object.assign({},salons[curId],{lat:g.lat,lng:g.lng});
      toast("Ustaliliśmy położenie salonu na podstawie adresu.");
    }catch(e){}
  }
  function locate(){
    if(!navigator.geolocation){locState="denied";return}
    locState="loading";
    try{navigator.geolocation.getCurrentPosition(
      function(p){user={lat:p.coords.latitude,lng:p.coords.longitude};locState="ok";keepFocus(render)},
      function(){locState="denied";keepFocus(render)},
      {timeout:10000,maximumAge:300000})}
    catch(e){locState="denied"}
  }
  var toastTimer;
  function toast(t){var el=$("toast");el.textContent=t;el.classList.add("on");clearTimeout(toastTimer);toastTimer=setTimeout(function(){el.classList.remove("on")},3800)}
  function errMsg(e){
    var c=e&&e.code;
    if(c==="name_taken")return "Salon o takiej nazwie już istnieje.";
    if(c==="forbidden")return "Brak uprawnień. Zaloguj się ponownie jako ten salon.";
    if(c==="invalid_argument")return "Zapis odrzucony. Sprawdź, czy twoje konto ma prawo zapisu w tej aplikacji.";
    if(c==="quota_exceeded")return "Baza danych jest pełna. Usuń stare dane.";
    if(c==="resource_exhausted")return "Za dużo operacji naraz. Spróbuj za chwilę.";
    return "Nie udało się zapisać. Spróbuj ponownie.";
  }
  function needWrite(){if(canWrite===false){toast("Twoje konto ma tylko podgląd, więc nie może zapisywać zmian.");return false}if(!db){toast("Baza danych jest niedostępna.");return false}return true}
  function keepFocus(fn){
    var a=document.activeElement,id=a&&a.id,s=null,e=null;
    try{s=a.selectionStart;e=a.selectionEnd}catch(x){}
    fn();
    if(id){var n=$(id);if(n&&n!==document.activeElement){try{n.focus();if(s!=null)n.setSelectionRange(s,e)}catch(x){}}}
  }
  function slug(n){
    var m={"ą":"a","ć":"c","ę":"e","ł":"l","ń":"n","ó":"o","ś":"s","ź":"z","ż":"z"};
    var s=n.toLowerCase().replace(/[ąćęłńóśźż]/g,function(c){return m[c]}).replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"").slice(0,40);
    return s||"salon";
  }
  function withCity(a){a=String(a||"").trim();if(!a)return "Radomsko";return(a.indexOf(",")>=0||/radomsko/i.test(a))?a:a+", Radomsko"}
  function mapLink(a){return "https://www.google.com/maps/search/?api=1&query="+encodeURIComponent(withCity(a))}
  function toEmail(v){return v.indexOf("@")>=0?v:v+"@"+((window.FLM_CONFIG&&window.FLM_CONFIG.loginDomain)||"salony.invalid")}
  var LOGIN_RE=/^[a-z0-9][a-z0-9._-]{1,28}[a-z0-9]$/;
  function nameKey(n){return n.trim().toLowerCase().replace(/\s+/g," ")}
  function hex(buf){return Array.prototype.map.call(new Uint8Array(buf),function(b){return ("0"+b.toString(16)).slice(-2)}).join("")}
  async function sha(s){return hex(await crypto.subtle.digest("SHA-256",new TextEncoder().encode(s)))}
  function newSalt(){var a=new Uint8Array(12);crypto.getRandomValues(a);return hex(a)}

  /* ---------- terminy ---------- */
  function slotOff(x){return offsetOf(x.date)}
  /* zakres wolnych godzin = termin bez usługi i bez ceny (service = ""), trwa do godziny końca */
  function isRange(x){return !x.service}
  function endOf(x){return fromMin(toMin(x.time)+x.dur)}
  function slotLabel(x){return x.service||"wolne godziny"}
  function isPast(x){var o=slotOff(x);return o<0||(o===0&&(isRange(x)?toMin(x.time)+x.dur:toMin(x.time))<=nowMin())}
  function minsUntil(x){return slotOff(x)*1440+toMin(x.time)-nowMin()}
  function eff(x){return x.promo!=null?x.promo:x.price}
  function allSlots(){return Object.keys(slots).map(function(k){return slots[k]})}
  function ownSlots(){return allSlots().filter(function(x){return x.salonId===curId})}
  function sortSlots(a,b){return a.date<b.date?-1:a.date>b.date?1:toMin(a.time)-toMin(b.time)}
  function priceHtml(x){
    var m=modeOf(x);
    if(m==="ask")return '<span class="ask">Cena ustalana w salonie</span>';
    return x.promo!=null?'<s>'+pz(x.price,m)+'</s><b>'+pz(x.promo,m)+'</b>':'<b>'+pz(x.price,m)+'</b>';
  }
  function isTaken(x){return !!(x.taken||x.booked)}

  /* ---------- połączenie z bazą ---------- */
  async function init(){
    render();
    var userNs=null;
    try{if(window.claude&&window.claude.use)userNs=await window.claude.use("user")}catch(e){}
    try{if(userNs)canWrite=await userNs.can("data.write")}catch(e){}
    try{if(window.claude&&window.claude.use)db=await window.claude.use("db")}catch(e){db=null}
    if(!db){dbMissing=true;render();return}
    trackView();
    setTimeout(function(){if(!(ready.s&&ready.t)){loadSlow=true;renderBanner()}},10000);
    function onErr(e){loadErr=true;renderBanner()}
    if(window.FLM_AUTH){window.FLM_AUTH.current().then(function(u){if(u){restoreId=u.id;if(salons[u.id]&&!curId){curId=u.id;render()}}}).catch(function(){})}
    db.collection("salons").onSnapshot(onSalons,onErr);
    db.collection("slots").onSnapshot(onSlots,onErr);
    render();
  }
  function onSalons(snap){
    var m={};
    snap.docs.forEach(function(d){if(d.exists){m[d.id]=Object.assign({id:d.id},d.data())}});
    salons=m;ready.s=true;
    if(restoreId&&salons[restoreId]&&!curId)curId=restoreId;
    afterData();
  }
  function onSlots(snap){
    var old=slots,m={};
    snap.docs.forEach(function(d){if(d.exists){m[d.id]=Object.assign({id:d.id},d.data())}});
    slots=m;ready.t=true;
    slotsFirst=false;afterData();
  }
  function afterData(){
    renderBanner();
    maybeGeo();
    if(mode==="salon"&&!curId)return;
    if(mode==="salon"&&sview==="profil")return;
    keepFocus(render);
  }

  /* ---------- baner stanu ---------- */
  function renderBanner(){
    var h="";
    if(dbMissing){var st=window.FLM_STATUS,why=st==="no-config"?"Nie znaleziono pliku config.js. Wgraj go do repozytorium na GitHub razem z pozostałymi plikami.":st==="placeholder"?"W pliku config.js nie ma jeszcze klucza projektu Supabase. Wklej adres projektu (Project URL) i klucz (Publishable key) i wgraj plik ponownie.":st==="no-lib"?"Nie wczytała się biblioteka Supabase. Sprawdź połączenie z internetem albo czy sieć (np. firmowa) nie blokuje stron cdn.jsdelivr.net i unpkg.com.":"Sprawdź połączenie z internetem i plik config.js.";h='<div class="note warn"><b>Aplikacja nie jest połączona z bazą danych.</b> '+esc(why)+'</div>'}
    else if(loadErr)h='<div class="note warn">Nie udało się wczytać danych z bazy. Odśwież stronę.</div>';
    else if(loadSlow&&!(ready.s&&ready.t))h='<div class="note warn">Dane ładują się dłużej niż zwykle. Sprawdź połączenie z internetem.</div>';
    else if(canWrite===false)h='<div class="note warn">Twoje konto ma tylko podgląd: możesz przeglądać oferty, ale nie możesz zmieniać danych salonu.</div>';
    $("banner").innerHTML=h;
  }

  /* ---------- szkielet ---------- */
  function render(){
    $("modeC").setAttribute("aria-pressed",mode==="client");
    $("modeS").setAttribute("aria-pressed",mode==="salon");
    renderBanner();
    if(dbMissing){$("app").innerHTML="";return}
    if(mode==="client")renderClient();else renderSalon();
  }
  function loadingHtml(){return '<p class="empty">Wczytuję dane…</p>'}

  /* ================= KLIENT ================= */
  function renderClient(){
    var app=$("app");
    if(locState==="idle")locate();
    if(!(ready.s&&ready.t)){app.innerHTML=loadingHtml();return}
    app.innerHTML=findHtml();
  }
  function visibleSlots(s){
    return allSlots().filter(function(x){
      if(x.salonId!==s.id||isTaken(x))return false;
      var o=slotOff(x); if(o<0||o>2||isPast(x))return false;
      if(dayF!=="all"&&o!==parseInt(dayF,10))return false;
      if(q&&(x.service+" "+s.name).toLowerCase().indexOf(q)<0)return false;
      return true;
    }).sort(sortSlots);
  }
  /* --- "Brakuje Twojego salonu?" + kontakt ukryty do kliknięcia (bez Google reCAPTCHA, żeby nie wysyłać danych do Google) --- */
  var pitchOpen=false,contactOpen=false,contactChecked=false,contactShown=false,contactOpenedAt=0,contactErr="";
  function ic(p){return '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'+p+'</svg>'}
  var IC_STORE='<path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7"/><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4"/><path d="M2 7h20"/><path d="M22 7v3a2 2 0 0 1-2 2 2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12a2 2 0 0 1-2-2V7"/>';
  var IC_SEND='<path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/>';
  var IC_HEAD='<path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"/>';
  var IC_UNLOCK='<rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 9.9-1"/>';
  function contactLinks(){
    var raw=String((window.FLM_CONFIG&&window.FLM_CONFIG.contact)||"").trim();
    if(!raw)return '<p class="meta" style="margin:0">Dane kontaktowe nie zostały jeszcze uzupełnione przez administratora.</p>';
    return raw.split(/[;,|]/).map(function(x){
      x=x.trim();if(!x)return "";
      if(x.indexOf("@")>=0)return '<a class="btn" href="mailto:'+esc(x)+'?subject='+encodeURIComponent("Zgłoszenie salonu – Fryzjer Last Minute Radomsko")+'">'+esc(x)+'</a>';
      return '<a class="btn" href="tel:'+esc(x.replace(/[^\d+]/g,""))+'">'+esc(x)+'</a>';
    }).join("");
  }
  function pitchHtml(){
    return '<div class="contactbox" id="pitchbox"><span class="ico big" aria-hidden="true">'+ic(IC_STORE)+'</span><h3>Dla właściciela salonu</h3>'+
      '<p class="sub">Ta aplikacja pokazuje klientom wolne terminy last minute w Radomsku i okolicach. Salon dodaje wolny termin, a klient dzwoni i rezerwuje. Aplikacja jest bezpłatna.</p>'+
      '<ol class="steps"><li>Zeskanuj kod lub otwórz link do aplikacji.</li><li>Wybierz „Dla salonów” i „Załóż konto”.</li><li>Dodaj wolny termin w zakładce „Dodaj termin”.</li></ol>'+
      '<img class="qr" src="kod-qr.svg" width="180" height="180" alt="Kod QR do aplikacji">'+
      '<div class="btn-row" style="justify-content:center"><button class="btn ghost" type="button" id="closePitch">Zamknij</button></div></div>';
  }
  function inviteHtml(){
    var h='<div class="invite"><span class="ico" aria-hidden="true">'+ic(IC_STORE)+'</span><div class="txt"><b>Nie ma Twojego fryzjera na liście?</b><span>Pokaż mu tę aplikację podczas wizyty. Im więcej salonów dodaje wolne terminy, tym więcej okazji last minute dla Ciebie.</span></div>'+
      '<div class="btn-row"><button class="btn" type="button" id="pitchBtn" aria-expanded="'+pitchOpen+'">Pokaż salonowi</button><button class="btn ghost" type="button" id="shareBtn">'+ic(IC_SEND)+'Wyślij link</button></div></div>'+
      '<p class="hint" style="text-align:center">Wolisz, żebyśmy sami skontaktowali się z salonem? <button class="link" type="button" id="reportBtn">Zgłoś salon nam</button></p>';
    if(pitchOpen)return h+pitchHtml();
    if(!contactOpen)return h;
    h+='<div class="contactbox" id="contactbox"><span class="ico big" aria-hidden="true">'+ic(IC_HEAD)+'</span><h3>Skontaktuj się z nami</h3>';
    if(contactShown)h+='<p class="sub">Napisz lub zadzwoń. Podaj nazwę salonu, adres i numer telefonu.</p><div class="btn-row" style="justify-content:center">'+contactLinks()+'</div>';
    else h+='<p class="sub">Potwierdź, że nie jesteś robotem, aby zobaczyć dane kontaktowe.</p>'+
      '<label class="human"><input type="checkbox" id="human"'+(contactChecked?' checked':'')+'> Nie jestem robotem</label>'+
      '<p class="err" id="cerr"'+(contactErr?'':' hidden')+'>'+esc(contactErr)+'</p>'+
      '<button class="btn" type="button" id="reveal">'+ic(IC_UNLOCK)+'Odkryj dane</button>';
    return h+'</div>';
  }
  async function shareApp(){
    var url=location.origin+location.pathname,data={title:"Fryzjer last minute Radomsko",text:"Zobacz aplikację z wolnymi terminami u fryzjera w Radomsku i okolicach. Może dodasz w niej swój salon?",url:url};
    try{
      if(navigator.share){await navigator.share(data);return}
      if(navigator.clipboard&&navigator.clipboard.writeText){await navigator.clipboard.writeText(url);toast("Link skopiowany. Wklej go w wiadomości do salonu.");return}
    }catch(e){if(e&&e.name==="AbortError")return}
    toast("Link do aplikacji: "+url);
  }
  function findHtml(){
    var res=[];
    Object.keys(salons).forEach(function(k){
      var s=salons[k],v=visibleSlots(s); if(!v.length)return;
      var d=(user&&s.lat!=null&&s.lng!=null)?dist(s.lat,s.lng):null;
      res.push({s:s,v:v,d:d,first:slotOff(v[0])*1440+toMin(v[0].time)});
    });
    /* zawsze od najbliższych terminów; przy tym samym czasie bliżej wygrywa salon położony bliżej */
    res.sort(function(a,b){return (a.first-b.first)||(a.d!=null&&b.d!=null?a.d-b.d:0)});
    var noSalons=!Object.keys(salons).length,loc;
    if(locState==="ok")loc='<div class="loc"><div><b>Odległości liczone od Twojej lokalizacji.</b><p class="hint" style="margin:2px 0 0">Lokalizacja zostaje tylko w Twojej przeglądarce.</p></div><button class="btn ghost" id="gps" type="button">Odśwież lokalizację</button></div>';
    else if(locState==="loading")loc='<p class="meta" style="margin:0">Ustalam Twoją lokalizację…</p>';
    else loc='<div class="loc"><div><b>Nie znamy Twojej lokalizacji.</b><p class="hint" style="margin:2px 0 0">Zezwól przeglądarce na dostęp do lokalizacji, a pokażemy, jak daleko jest każdy salon.</p></div><button class="btn" id="gps" type="button">Użyj mojej lokalizacji</button></div>';
    return '<div class="panel">'+loc+
      '<div class="filters"><div class="seg" role="group" aria-label="Dzień">'+
      [["all","Wszystkie"],["0","Dziś"],["1","Jutro"]].map(function(d){return '<button type="button" data-cday="'+d[0]+'" aria-pressed="'+(dayF===d[0])+'">'+d[1]+'</button>'}).join("")+'</div>'+
      '<input type="search" id="q" value="'+esc(q)+'" placeholder="Szukaj usługi lub salonu, np. koloryzacja" aria-label="Szukaj usługi lub salonu"></div></div>'+
      '<div class="sortrow"><p class="count">'+(res.length?res.length+" "+(res.length===1?"salon":res.length<5?"salony":"salonów")+" z wolnymi terminami, od najbliższych terminów":"")+'</p></div>'+
      '<div class="list">'+(res.length?res.map(cardHtml).join(""):noSalons?'<p class="empty">W bazie nie ma jeszcze żadnych salonów. Przejdź do trybu „Dla salonów”, załóż konto i dodaj pierwszy termin.</p>':'<p class="empty">Brak wolnych terminów dla tych filtrów. Wybierz „Wszystkie” albo zmień wyszukiwaną frazę.</p>')+'</div>'+inviteHtml();
  }
  function cardHtml(r){
    var s=r.s,h=(s.hours||[])[todayIdx()],hrs=h&&!h.closed?"dziś "+h.from+"–"+h.to:"dziś zamknięte",html="",last="";
    r.v.forEach(function(x){
      var o=slotOff(x);
      if(x.date!==last){html+='<div class="daylab d'+o+'"><b>'+DAYS[o]+'</b> '+esc(dayDate(o))+'</div>';last=x.date}
      var off=offPct(x);
      html+='<div class="slot d'+o+'"><div class="tcol"><div class="t">'+esc(x.time)+'</div><span class="dchip d'+o+'">'+DAYS[o]+'</span></div><div class="sv">'+(isRange(x)?'<div>Wolne godziny <span class="meta">· do '+endOf(x)+'</span></div><div class="meta">Usługę i cenę ustalisz z salonem</div>':'<div>'+esc(x.service)+' <span class="meta">· '+x.dur+' min</span></div><div class="price">'+priceHtml(x)+(off>0?'<span class="off">−'+off+'%</span>':'')+'</div>')+'</div>'+
        '<div class="go"><a class="btn sm" data-call="'+esc(s.id)+'" href="'+esc(telHref(s.phone))+'">Zadzwoń</a></div></div>';
    });
    return '<article class="card"><div class="shead"><h3>'+esc(s.name)+'</h3>'+(r.d!=null?'<span class="dist">'+km(r.d)+' od Ciebie</span>':'')+'</div>'+
      '<div class="body">'+
      '<div class="meta">'+esc(withCity(s.address))+' · '+esc(hrs)+'</div>'+(s.desc?'<p class="desc">'+esc(s.desc)+'</p>':'')+'</div>'+html+
      '<div class="foot callrow"><span>Zadzwoń i zarezerwuj telefonicznie: <span class="phone">'+esc(s.phone)+'</span></span>'+
      '<span class="btn-row"><button class="btn ghost sm" type="button" data-copy="'+esc(s.phone)+'">Kopiuj numer</button>'+(s.mapUrl?'<a href="'+esc(s.mapUrl)+'" target="_blank" rel="noopener">Mapa</a>':'')+'</span></div></article>';
  }
  /* ================= SALON ================= */
  function renderSalon(){
    var app=$("app");
    if(!curId){renderLogin();return}
    if(!(ready.s&&ready.t)){app.innerHTML=loadingHtml();return}
    var s=salons[curId];
    if(!s){curId=null;renderLogin();return}
    app.innerHTML='<div class="who"><span>Zalogowano: <b>'+esc(s.name)+'</b></span><button class="btn ghost sm" id="logout" type="button">Wyloguj</button></div>'+
      '<nav class="tabs" role="tablist" aria-label="Panel salonu">'+
      [["add","Dodaj termin"],["mine","Moje terminy"],["profil","Profil"]].map(function(t){
        return '<button role="tab" data-snav="'+t[0]+'" aria-selected="'+(sview===t[0])+'">'+t[1]+'</button>';
      }).join("")+'</nav><div id="sbanner"></div><section id="sview"></section>';
    var v=$("sview");
    if(sview==="add")renderAdd(v,s);else if(sview==="mine"){renderMine(v);loadStats()}else renderProfil(v,s);
  }
  function renderLogin(){
    var reg=loginMode==="register";
    $("app").innerHTML='<div class="login card pad"><h2>'+(reg?"Załóż konto salonu":"Zaloguj się")+'</h2>'+
      '<p class="sub">'+(reg?"Aplikacja jest bezpłatna. Podaj nazwę salonu, wybrany login i hasło. Resztę danych uzupełnisz w profilu.":"Zaloguj się loginem i hasłem, które ustawiłeś przy zakładaniu konta.")+'</p>'+
      '<form id="loginForm" novalidate>'+
      (reg?'<div class="field"><label class="f" for="ln">Nazwa salonu</label><input id="ln" autocomplete="organization"></div>':'')+
      '<div class="field"><label class="f" for="le">Login</label><input id="le" type="text" inputmode="text" autocomplete="username" autocapitalize="none" autocorrect="off" spellcheck="false"></div>'+
      '<div class="field"><label class="f" for="lp">Hasło</label><span class="pw"><input id="lp" type="password" autocomplete="'+(reg?"new-password":"current-password")+'"><button type="button" class="pwb" data-pw="lp" aria-pressed="false">Pokaż</button></span></div>'+
      (reg?'<div class="field"><label class="f" for="lp2">Powtórz hasło</label><span class="pw"><input id="lp2" type="password" autocomplete="new-password"><button type="button" class="pwb" data-pw="lp2" aria-pressed="false">Pokaż</button></span></div>':'')+
      '<p class="err" id="lerr" hidden></p>'+
      (loginInfo?'<p class="note">'+esc(loginInfo)+'</p>':'')+
      '<div class="btn-row"><button class="btn" type="submit" id="lsub">'+(reg?"Załóż konto":"Zaloguj")+'</button><button class="link" type="button" id="switchMode">'+(reg?"Mam już konto":"Załóż konto")+'</button>'+'</div></form>'+
      (reg?'<p class="hint">Login: 3–30 znaków, małe litery bez polskich znaków, cyfry oraz . _ - (np. salon-greg). Nie podawaj adresu e-mail. Hasło musi mieć co najmniej 6 znaków. Nie ma odzyskiwania hasła, więc zapisz je w bezpiecznym miejscu.</p>':'')+'</div>';
  }
  function authMsg(e){
    var m=String(e&&e.message||"").toLowerCase(),c=e&&e.code;
    if(c==="name_taken")return "Salon o takiej nazwie już istnieje. Wybierz inną nazwę.";
    if(m.indexOf("invalid login")>=0)return "Nieprawidłowy login lub hasło.";
    if(m.indexOf("already registered")>=0||m.indexOf("already been registered")>=0)return "Konto z tym loginem już istnieje. Wybierz inny login albo zaloguj się.";
    if(m.indexOf("not confirmed")>=0)return "Konto nie jest potwierdzone. Administrator musi wyłączyć opcję Confirm email w Supabase.";
    if(m.indexOf("rate limit")>=0||m.indexOf("too many")>=0)return "Za dużo prób. Spróbuj ponownie za kilka minut.";
    if(m.indexOf("password")>=0)return "Hasło jest za słabe. Użyj co najmniej 6 znaków.";
    if(m.indexOf("valid email")>=0||m.indexOf("invalid email")>=0||m.indexOf("is invalid")>=0)return "Serwer odrzucił ten login. Spróbuj innego albo zgłoś problem administratorowi.";
    if(m.indexOf("fetch")>=0||m.indexOf("network")>=0)return "Brak połączenia z internetem. Spróbuj ponownie.";
    return "Nie udało się zalogować. Spróbuj ponownie.";
  }
  async function ensureSalon(user,nameOpt){
    var ex=await db.doc("salons/"+user.id).get();
    if(ex.exists){salons[user.id]=Object.assign({id:user.id},ex.data());return}
    var n=(nameOpt||(user.user_metadata&&user.user_metadata.name)||"").trim();
    if(n.length<2)n="Mój salon";
    var doc={name:n,nameKey:nameKey(n),address:"",phone:"",desc:"",mapUrl:"",placeKey:"centrum",lat:null,lng:null,services:[],
      hours:WD.map(function(_,k){return {closed:k>=6,from:"09:00",to:"17:00"}})};
    await db.doc("salons/"+user.id).set(doc);
    salons[user.id]=Object.assign({id:user.id},doc);
    return true;
  }
  async function doLogin(){
    var reg=loginMode==="register",n=reg?$("ln").value.trim():"",lg=$("le").value.trim().toLowerCase(),em="",p=$("lp").value,err=$("lerr"),btn=$("lsub");
    function bad(m){err.textContent=m;err.hidden=false}
    err.hidden=true;loginInfo="";
    if(reg&&n.length<2)return bad("Wpisz nazwę salonu.");
    if(!lg||!p)return bad("Wpisz login i hasło.");
    if(reg&&!LOGIN_RE.test(lg))return bad("Login ma mieć 3–30 znaków: małe litery bez polskich znaków, cyfry oraz . _ - (bez spacji i bez @).");
    em=toEmail(lg);
    if(!db||!window.FLM_AUTH)return bad("Baza danych jest niedostępna.");
    if(reg){
      if(p.length<6)return bad("Hasło musi mieć co najmniej 6 znaków.");
      if(p!==$("lp2").value)return bad("Hasła nie są takie same.");
    }
    btn.disabled=true;
    try{
      if(reg){
        var found=await db.collection("salons").where("nameKey","==",nameKey(n)).limit(1).get();
        if(!found.empty)return bad("Salon o takiej nazwie już istnieje. Wybierz inną nazwę.");
        var r=await window.FLM_AUTH.signUp(em,p,n);
        if(!r.hasSession){
          loginMode="login";loginInfo="Konto zostało założone, ale wymaga potwierdzenia, a ta aplikacja nie wysyła e-maili. Administrator musi wyłączyć opcję Confirm email w Supabase.";
          render();return;
        }
        await ensureSalon(r.user,n);
        curId=r.user.id;sview="profil";loginMode="login";
        toast("Konto założone. Uzupełnij profil salonu.");
      }else{
        var u=await window.FLM_AUTH.signIn(em,p);
        await ensureSalon(u);
        curId=u.id;sview="add";
        pruneOld(u.id);
      }
      addState={day:0,time:"",svc:"",promo:""};render();maybeGeo();
    }catch(e){bad(authMsg(e))}
    finally{var b=$("lsub");if(b)b.disabled=false}
  }
  async function pruneOld(id){
    if(canWrite===false)return;
    var old=allSlots().filter(function(x){return x.salonId===id&&slotOff(x)<0}).slice(0,20);
    for(var i=0;i<old.length;i++){try{await db.doc("slots/"+old[i].id).delete()}catch(e){break}}
  }

  /* --- dodaj termin --- */
  function timeOpts(sel){var o="";for(var m=6*60;m<=23*60+45;m+=15){var t=fromMin(m);o+='<option value="'+t+'"'+(t===sel?' selected':'')+'>'+t+'</option>'}return o}
  function renderAdd(v,s){
    var hasSvc=(s.services||[]).length>0;
    if(!hasSvc)addState.kind="range";
    if(!addState.time)addState.time=fromMin(Math.min(Math.ceil((nowMin()+60)/15)*15,23*60+45));
    if(!addState.to||toMin(addState.to)<=toMin(addState.time))addState.to=fromMin(Math.min(toMin(addState.time)+120,23*60+45));
    var range=addState.kind==="range",lab='<span style="display:block;font-weight:500;font-size:14px;margin-bottom:4px">';
    var html='<h2>Dodaj termin last minute</h2><p class="sub">Termin trafia od razu na listę klientów. Gdy oznaczysz termin jako zajęty albo minie jego godzina, sam znika z listy.</p>'+
      '<form id="addForm" class="card pad" novalidate>'+
      (hasSvc?'<div class="field">'+lab+'Rodzaj terminu</span><div class="seg" role="group" aria-label="Rodzaj terminu">'+[["range","Wolne godziny"],["svc","Konkretna usługa"]].map(function(k){return '<button type="button" data-akind="'+k[0]+'" aria-pressed="'+(addState.kind===k[0])+'">'+k[1]+'</button>'}).join("")+'</div></div>':'')+
      '<div class="field">'+lab+'Dzień</span><div class="seg" id="daySeg" role="group" aria-label="Dzień">'+
      DAYS.map(function(d,i){return '<button type="button" data-sday="'+i+'" aria-pressed="'+(addState.day===i)+'">'+d+'</button>'}).join("")+'</div></div>';
    if(range){
      html+='<div class="two"><div class="field"><label class="f" for="at">Od</label><select id="at">'+timeOpts(addState.time)+'</select></div>'+
        '<div class="field"><label class="f" for="at2">Do</label><select id="at2">'+timeOpts(addState.to)+'</select></div></div>'+
        '<p class="hint" style="margin:-4px 0 12px">Klient zobaczy zakres wolnych godzin i zadzwoni, żeby ustalić usługę i cenę.</p>';
    }else{
      if(!addState.svc||!s.services.some(function(x){return String(x.id)===String(addState.svc)}))addState.svc=String(s.services[0].id);
      var addAsk=modeOf(s.services.filter(function(x){return String(x.id)===String(addState.svc)})[0])==="ask";
      html+='<div class="row3"><div class="field"><label class="f" for="at">Godzina</label><select id="at">'+timeOpts(addState.time)+'</select></div>'+
        '<div class="field"><label class="f" for="as">Usługa</label><select id="as">'+s.services.map(function(x){return '<option value="'+esc(x.id)+'"'+(String(x.id)===String(addState.svc)?' selected':'')+'>'+esc(x.name)+' ('+x.dur+' min, '+priceLabel(x)+')</option>'}).join("")+'</select></div>'+
        '<div class="field"><label class="f" for="ap">'+(addAsk?'Zniżka (%)':'Cena promocyjna (zł)')+'</label><input id="ap" inputmode="decimal" placeholder="opcjonalnie" value="'+esc(addState.promo)+'"></div></div>'+
        (addAsk?'<p class="hint" style="margin:-4px 0 12px">Ta usługa nie ma podanej ceny, więc zamiast ceny promocyjnej możesz wpisać zniżkę procentową, np. 30.</p>':'');
    }
    html+='<p class="err" id="aerr" hidden></p><p class="hint" id="aprev" style="margin:0 0 12px"></p><div class="btn-row"><button class="btn" type="submit">Opublikuj termin</button></div></form>'+
      (hasSvc?'':'<p class="hint">Chcesz dodawać też terminy z konkretną usługą i ceną? Uzupełnij cennik w zakładce „Profil”.</p>');
    v.innerHTML=html;
    addPrev(s);
  }
  function addPrev(s){
    var el=$("aprev"); if(!el)return;
    if(addState.kind==="range"){
      if(!addState.time||!addState.to){el.textContent="";return}
      el.textContent="Klient zobaczy: "+DAYS[addState.day]+" "+addState.time+"–"+addState.to+", wolne godziny (usługę i cenę ustalicie telefonicznie).";
      return;
    }
    var sv=(s.services||[]).filter(function(x){return String(x.id)===String(addState.svc)})[0];
    if(!sv||!addState.time){el.textContent="";return}
    var pc=promoCheck(sv,addState.promo),fake={price:sv.price,priceMode:modeOf(sv),promo:pc.err?null:pc.promo,promoPct:pc.err?null:pc.pct};
    el.textContent="Klient zobaczy: "+DAYS[addState.day]+" "+addState.time+"–"+fromMin(toMin(addState.time)+sv.dur)+", "+sv.name+", "+priceText(fake)+".";
  }
  async function submitAdd(){
    if(!needWrite())return;
    var s=salons[curId],err=$("aerr"),t=addState.time,range=addState.kind==="range";
    function bad(m){err.textContent=m;err.hidden=false}
    if(!t)return bad("Wpisz godzinę rozpoczęcia.");
    var sv=null,pc={promo:null,pct:null},a=toMin(t),b;
    if(range){
      b=toMin(addState.to);
      if(!(b>a))return bad("Godzina „Do” musi być późniejsza niż „Od”.");
      if(b-a>480)return bad("Zakres może mieć najwyżej 8 godzin.");
      if(addState.day===0&&b<=nowMin())return bad("Ten zakres już minął. Wybierz późniejsze godziny albo inny dzień.");
    }else{
      sv=(s.services||[]).filter(function(x){return String(x.id)===String(addState.svc)})[0];
      if(!sv)return bad("Wybierz usługę.");
      if(addState.day===0&&a<=nowMin())return bad("Ta godzina już minęła. Wybierz późniejszą godzinę albo inny dzień.");
      pc=promoCheck(sv,addState.promo);if(pc.err)return bad(pc.err);
      b=a+sv.dur;
    }
    var date=dateOf(addState.day);
    var ov=ownSlots().filter(function(x){return x.date===date&&a<toMin(x.time)+x.dur&&toMin(x.time)<b})[0];
    if(ov)return bad("Ten czas nachodzi na termin "+ov.time+"–"+endOf(ov)+" ("+slotLabel(ov)+"). Wybierz inną godzinę.");
    try{
      var rec;
      if(range)rec={salonId:curId,date:date,time:t,dur:b-a,service:"",price:null,promo:null,taken:false,priceMode:"ask"};
      else{
        rec={salonId:curId,date:date,time:t,dur:sv.dur,service:sv.name,price:sv.price==null?null:sv.price,promo:pc.promo,taken:false};
        if(modeOf(sv)!=="exact")rec.priceMode=modeOf(sv);
        if(pc.pct!=null)rec.promoPct=pc.pct;
      }
      await db.collection("slots").doc().set(rec);
      toast("Termin opublikowany: "+DAYS[addState.day].toLowerCase()+" "+t+(range?"–"+addState.to:"")+".");
      addState.time="";addState.to="";addState.promo="";renderSalon();
    }catch(e){toast(errMsg(e))}
  }

  /* --- moje terminy --- */
  function stateOf(x){return isPast(x)?"past":(isTaken(x)?"taken":"free")}
  function pill(st){return st==="free"?'<span class="pill free">Wolny</span>':st==="taken"?'<span class="pill booked">Zajęty</span>':'<span class="pill past">Minął</span>'}
  function renderMine(v){
    var list=ownSlots().filter(function(x){var o=slotOff(x);return o>=0&&o<=2}).sort(sortSlots),html='<h2>Moje terminy</h2><div class="note" id="statsBox" hidden></div><p class="sub">Wszystko, co opublikowałeś na najbliższe dni. Gdy ktoś zarezerwuje termin telefonicznie, kliknij „Zajęty”, a zniknie z oferty dla klientów. Przyciskiem „Edytuj” zmienisz dzień, godzinę, usługę lub cenę promocyjną.</p>';
    if(!list.length){v.innerHTML=html+'<p class="empty">Nie masz jeszcze żadnych terminów. Dodaj pierwszy w zakładce „Dodaj termin”.</p>';return}
    var free=list.filter(function(x){return stateOf(x)==="free"}).length;
    html+='<p class="hint" style="margin:-8px 0 0">Widoczne dla klientów teraz: <b>'+free+'</b></p>';
    [0,1,2].forEach(function(d){
      var rows=list.filter(function(x){return slotOff(x)===d});if(!rows.length)return;
      html+='<div class="daylab free d'+d+'"><b>'+DAYS[d]+'</b> '+esc(dayDate(d))+'</div><div class="card pad" style="padding-top:4px;padding-bottom:4px">'+rows.map(function(x){
        var st=stateOf(x);
        if(editState&&editState.id===x.id&&st!=="past")return editHtml(x);
        return '<div class="srow'+(st==="past"?' dim':'')+'"><div class="t">'+esc(x.time)+'</div><div class="sv">'+(isRange(x)?'<div>Wolne godziny <span class="meta">· '+esc(x.time)+'–'+endOf(x)+'</span></div><div class="meta">bez usługi i ceny</div>':'<div>'+esc(x.service)+' <span class="meta">· '+x.dur+' min</span></div><div class="meta price">'+priceHtml(x)+(modeOf(x)==="ask"&&x.promoPct?'<span class="off">−'+x.promoPct+'%</span>':'')+'</div>')+'</div>'+
          '<div class="act btn-row">'+pill(st)+(st==="free"?'<button class="btn sm" data-stake="'+esc(x.id)+'" type="button">Zajęty</button><button class="btn ghost sm" data-sedit="'+esc(x.id)+'" type="button">Edytuj</button><button class="btn ghost sm" data-sdel="'+esc(x.id)+'" type="button">Usuń</button>':st==="taken"?'<button class="btn ghost sm" data-sfree="'+esc(x.id)+'" type="button">Znów wolny</button><button class="btn ghost sm" data-sedit="'+esc(x.id)+'" type="button">Edytuj</button><button class="btn ghost sm" data-sdel="'+esc(x.id)+'" type="button">Usuń</button>':'')+'</div></div>';
      }).join("")+'</div>';
    });
    v.innerHTML=html;
  }

  /* --- edycja terminu --- */
  function editSvcOpts(x,sel){
    var s=salons[curId],o='<option value="cur"'+(sel==="cur"?" selected":"")+'>Bez zmiany: '+esc(x.service)+' ('+x.dur+' min, '+priceLabel(x)+')</option>';
    (s.services||[]).forEach(function(v){o+='<option value="'+esc(v.id)+'"'+(String(v.id)===String(sel)?" selected":"")+'>'+esc(v.name)+' ('+v.dur+' min, '+priceLabel(v)+')</option>'});
    return o;
  }
  function rangeEditHtml(e){
    return '<div class="srow" style="grid-template-columns:minmax(0,1fr)"><form id="editForm" class="book" novalidate><h3 style="font-size:16px;margin-bottom:10px">Edytuj wolne godziny</h3>'+
      '<div class="field"><span style="display:block;font-weight:500;font-size:14px;margin-bottom:4px">Dzień</span><div class="seg" id="edaySeg" role="group" aria-label="Dzień">'+
      DAYS.map(function(d,i){return '<button type="button" data-eday="'+i+'" aria-pressed="'+(e.day===i)+'">'+d+'</button>'}).join("")+'</div></div>'+
      '<div class="two"><div class="field"><label class="f" for="et">Od</label><select id="et">'+timeOpts(e.time)+'</select></div>'+
      '<div class="field"><label class="f" for="et2">Do</label><select id="et2">'+timeOpts(e.to)+'</select></div></div>'+
      '<p class="err" id="eerr" hidden></p><div class="btn-row"><button class="btn sm" type="submit">Zapisz zmiany</button><button class="btn ghost sm" type="button" data-secancel="1">Anuluj</button></div></form></div>';
  }
  function editHtml(x){
    var e=editState;if(e.range)return rangeEditHtml(e);
    var em=e.svc==="cur"?modeOf(x):modeOf((salons[curId].services||[]).filter(function(v){return String(v.id)===String(e.svc)})[0]);
    return '<div class="srow" style="grid-template-columns:minmax(0,1fr)"><form id="editForm" class="book" novalidate><h3 style="font-size:16px;margin-bottom:10px">Edytuj termin</h3>'+
      '<div class="field"><span style="display:block;font-weight:500;font-size:14px;margin-bottom:4px">Dzień</span><div class="seg" id="edaySeg" role="group" aria-label="Dzień">'+
      DAYS.map(function(d,i){return '<button type="button" data-eday="'+i+'" aria-pressed="'+(e.day===i)+'">'+d+'</button>'}).join("")+'</div></div>'+
      '<div class="row3"><div class="field"><label class="f" for="et">Godzina</label><select id="et">'+timeOpts(e.time)+'</select></div>'+
      '<div class="field"><label class="f" for="es">Usługa</label><select id="es">'+editSvcOpts(x,e.svc)+'</select></div>'+
      '<div class="field"><label class="f" for="ep">'+(em==="ask"?'Zniżka (%)':'Cena promocyjna (zł)')+'</label><input id="ep" inputmode="decimal" placeholder="'+(em==="ask"?'brak zniżki':'brak promocji')+'" value="'+esc(e.promo)+'"></div></div>'+
      '<p class="err" id="eerr" hidden></p><div class="btn-row"><button class="btn sm" type="submit">Zapisz zmiany</button><button class="btn ghost sm" type="button" data-secancel="1">Anuluj</button></div></form></div>';
  }
  async function submitEdit(){
    if(!needWrite())return;
    var e=editState,x=e&&slots[e.id],s=salons[curId],err=$("eerr");
    function bad(m){err.textContent=m;err.hidden=false}
    if(!x){editState=null;render();return}
    if(e.range){
      var a2=toMin(e.time),b2=toMin(e.to);
      if(!(b2>a2))return bad("Godzina „Do” musi być późniejsza niż „Od”.");
      if(b2-a2>480)return bad("Zakres może mieć najwyżej 8 godzin.");
      if(e.day===0&&b2<=nowMin())return bad("Ten zakres już minął. Wybierz późniejsze godziny albo inny dzień.");
      var date2=dateOf(e.day);
      var ov2=ownSlots().filter(function(y){return y.id!==x.id&&y.date===date2&&a2<toMin(y.time)+y.dur&&toMin(y.time)<b2})[0];
      if(ov2)return bad("Te godziny nachodzą na termin "+ov2.time+"–"+endOf(ov2)+" ("+slotLabel(ov2)+"). Wybierz inne godziny.");
      var upd2={date:date2,time:e.time,dur:b2-a2};
      try{
        await db.doc("slots/"+x.id).update(upd2);
        slots[x.id]=Object.assign({},x,upd2);
        editState=null;toast("Termin zaktualizowany.");render();
      }catch(er){toast(errMsg(er))}
      return;
    }
    var sv=e.svc==="cur"?{name:x.service,dur:x.dur,price:x.price,pm:modeOf(x)}:(s.services||[]).filter(function(v){return String(v.id)===String(e.svc)})[0];
    if(!sv)return bad("Wybierz usługę.");
    var t=e.time;
    if(!t)return bad("Wybierz godzinę.");
    if(e.day===0&&toMin(t)<=nowMin())return bad("Ta godzina już minęła. Wybierz późniejszą godzinę albo inny dzień.");
    var pc=promoCheck(sv,e.promo);if(pc.err)return bad(pc.err);
    var date=dateOf(e.day),a=toMin(t),b=a+sv.dur;
    var ov=ownSlots().filter(function(y){return y.id!==x.id&&y.date===date&&a<toMin(y.time)+y.dur&&toMin(y.time)<b})[0];
    if(ov)return bad("Ten czas nachodzi na termin "+ov.time+"–"+fromMin(toMin(ov.time)+ov.dur)+" ("+slotLabel(ov)+"). Wybierz inną godzinę.");
    var upd={date:date,time:t,dur:sv.dur,service:sv.name,price:sv.price==null?null:sv.price,promo:pc.promo};
    var md=modeOf(sv);
    if(md!=="exact"||pc.pct!=null||(x.priceMode&&x.priceMode!=="exact")||x.promoPct!=null){upd.priceMode=md;upd.promoPct=pc.pct}
    try{
      await db.doc("slots/"+x.id).update(upd);
      slots[x.id]=Object.assign({},x,upd);
      editState=null;toast("Termin zaktualizowany.");render();
    }catch(er){toast(errMsg(er))}
  }

  /* --- profil --- */
  function renderProfil(v,s){
    var hrs=s.hours&&s.hours.length===7?s.hours:WD.map(function(_,i){return {closed:i>=6,from:"09:00",to:"17:00"}});
    v.innerHTML='<h2>Profil salonu</h2><p class="sub">To widzą klienci na liście salonów w Radomsku i okolicach.</p><div class="list">'+
    '<form id="profForm" class="card pad" novalidate><h3 style="margin-bottom:12px">Dane salonu</h3>'+
      '<div class="field"><label class="f" for="pn">Nazwa salonu</label><input id="pn" value="'+esc(s.name)+'"></div>'+
      '<div class="two"><div class="field"><label class="f" for="pa">Adres</label><input id="pa" value="'+esc(s.address)+'" placeholder="ul. Przykładowa 1, Miejscowość"></div>'+
      '<div class="field"><label class="f" for="pt">Telefon</label><input id="pt" inputmode="tel" value="'+esc(s.phone)+'" placeholder="500 100 200"></div></div>'+
      '<p class="hint" style="margin:-4px 0 12px">Wpisz ulicę, numer i miejscowość po przecinku, np. Krasickiego 1, Radomsko albo Główna 5, Gomunice. Bez miejscowości przyjmujemy Radomsko. Na podstawie adresu ustalimy położenie salonu i odległość pokazywaną klientom.</p>'+
      '<div class="field"><label class="f" for="pd">Opis</label><textarea id="pd" rows="4" maxlength="400">'+esc(s.desc)+'</textarea></div>'+
      '<div class="field"><label class="f" for="pm">Link do mapy</label><input id="pm" value="'+esc(s.mapUrl)+'" placeholder="https://maps.google.com/..."><p class="hint"><button class="link" id="mapGen" type="button">Utwórz link z adresu</button></p></div>'+
      '<h3 style="margin:18px 0 10px">Godziny otwarcia</h3>'+
      hrs.map(function(h,i){return '<div class="hrs"><span>'+WD[i]+'</span><input type="time" id="hf'+i+'" aria-label="'+WD[i]+' od" value="'+esc(h.from)+'"'+(h.closed?' disabled':'')+'><input type="time" id="ht'+i+'" aria-label="'+WD[i]+' do" value="'+esc(h.to)+'"'+(h.closed?' disabled':'')+'>'+
        '<label class="chk" for="hc'+i+'"><input type="checkbox" id="hc'+i+'" '+(h.closed?'checked':'')+'> zamknięte</label></div>'}).join("")+
      '<div class="btn-row" style="margin-top:16px"><button class="btn" type="submit">Zapisz profil</button><span class="tag" id="dirtyTag" hidden>Niezapisane zmiany</span></div><p class="hint">Zmiany zapisują się automatycznie po przejściu do innej zakładki.</p></form>'+
    '<div class="card pad"><h3 style="margin-bottom:4px">Cennik usług</h3><p class="hint" style="margin:0 0 12px">Z tej listy wybierasz usługę przy dodawaniu terminu. Cenę możesz podać dokładnie, jako „od … zł” albo zostawić do ustalenia w salonie.</p><div id="svcList"></div>'+
      '<form id="svcForm" novalidate style="margin-top:12px"><div class="field"><label class="f" for="sn">Nazwa usługi</label><input id="sn" placeholder="np. Strzyżenie damskie"></div>'+
      '<div class="row3"><div class="field"><label class="f" for="sd">Czas (min)</label><input id="sd" inputmode="numeric" placeholder="30"></div>'+
      '<div class="field"><label class="f" for="spm">Cena</label><select id="spm"><option value="exact">Dokładna cena</option><option value="from">Od … zł</option><option value="ask">Ustalana w salonie</option></select></div>'+
      '<div class="field" id="spw"><label class="f" for="sp">Kwota (zł)</label><input id="sp" inputmode="decimal" placeholder="90"></div></div>'+
      '<div class="btn-row"><button class="btn sm" type="submit">Dodaj usługę</button></div></form>'+
      '<p class="err" id="serr" hidden style="margin-top:8px"></p></div></div>';
    setDirty(false);
    renderSvc(s);
  }
  function renderSvc(s){
    var el=$("svcList");if(!el)return;
    var l=s.services||[];
    el.innerHTML=l.length?l.map(function(x){return '<div class="srow" style="grid-template-columns:minmax(0,1fr) auto auto"><div class="sv">'+esc(x.name)+'</div><div class="meta price"><b>'+priceLabel(x)+'</b> · '+x.dur+' min</div><button class="btn danger sm" data-svcdel="'+esc(x.id)+'" type="button">Usuń</button></div>'}).join(""):'<p class="hint">Brak usług. Dodaj pierwszą poniżej.</p>';
  }
  /* --- anonimowe statystyki: odsłony i kliknięcia "Zadzwoń" (zliczane raz na wejście do aplikacji, nic nie zapisujemy na urządzeniu) --- */
  var viewTracked=false,callTracked={},statsCache=null;
  function trackView(){if(viewTracked)return;viewTracked=true;try{if(window.FLM_STATS)window.FLM_STATS.view()}catch(e){}}
  function trackCall(id){if(!id||callTracked[id])return;callTracked[id]=true;try{if(window.FLM_STATS)window.FLM_STATS.call(id)}catch(e){}}
  function statsHtml(rows){
    var t=dateOf(0),w=dateOf(-6),a=0,b=0,c=0;
    rows.forEach(function(r){var n=r.count||0;c+=n;if(r.day>=w)b+=n;if(r.day===t)a+=n});
    return '<b>Kliknięcia „Zadzwoń” przy Twoim salonie:</b> dziś '+a+' · ostatnie 7 dni '+b+' · ostatnie 30 dni '+c;
  }
  async function loadStats(){
    var box=$("statsBox");if(!box||!curId||!window.FLM_STATS)return;
    try{
      if(!statsCache||statsCache.id!==curId||Date.now()-statsCache.t>60000)statsCache={id:curId,t:Date.now(),rows:await window.FLM_STATS.callsFor(curId)};
      var b2=$("statsBox");if(b2){b2.innerHTML=statsHtml(statsCache.rows);b2.hidden=false}
    }catch(e){}
  }
  function setDirty(v){profDirty=!!v;var t=$("dirtyTag");if(t)t.hidden=!profDirty}
  /* zapis profilu: wywoływany przyciskiem, a także automatycznie przy opuszczaniu zakładki */
  function saveProfile(opts){
    if(profSaving)return profSaving;
    profSaving=doSaveProfile(opts).then(function(r){profSaving=null;return r},function(){profSaving=null;return false});
    return profSaving;
  }
  async function guardLeave(go){
    if(mode==="salon"&&curId&&sview==="profil"&&profDirty){
      toast("Zapisuję profil…");
      var ok=await saveProfile({auto:true});
      if(!ok&&!window.confirm("Profil nie został zapisany. Wyjść bez zapisywania zmian?"))return;
      setDirty(false);
    }
    go();
  }
  async function doSaveProfile(opts){
    opts=opts||{};
    if(!needWrite())return false;
    if(!$("pn"))return true;
    var s=salons[curId],n=$("pn").value.trim();
    if(!n){toast("Nazwa salonu nie może być pusta."+(opts.auto?" Profil nie został zapisany.":""));return false}
    var upd={name:n,nameKey:nameKey(n),address:$("pa").value.trim(),phone:$("pt").value.trim(),desc:$("pd").value.trim(),mapUrl:$("pm").value.trim(),
      hours:WD.map(function(_,i){return {closed:$("hc"+i).checked,from:$("hf"+i).value||"09:00",to:$("ht"+i).value||"17:00"}})};
    if(upd.address!==(s.address||"").trim()&&upd.mapUrl===(s.mapUrl||"").trim()&&upd.address)upd.mapUrl=mapLink(upd.address);
    var btn=document.querySelector("#profForm button[type=submit]"),geoWarn="";
    if(btn)btn.disabled=true;
    try{
      if(!upd.address){upd.lat=null;upd.lng=null}
      else if(upd.address!==(s.address||"").trim()||legacyGeo(s)){
        var g=await geocode(upd.address);
        if(g){upd.lat=g.lat;upd.lng=g.lng;if(g.approx)geoWarn=" Nie znaleziono dokładnego adresu, więc odległość liczymy do środka miejscowości."}
        else{upd.lat=null;upd.lng=null;geoWarn=" Nie udało się ustalić położenia adresu, więc odległość nie będzie pokazywana. Sprawdź, czy wpisano ulicę, numer i miejscowość po przecinku, np. Główna 5, Gomunice."}
      }
      if(upd.nameKey!==s.nameKey){
        var f=await db.collection("salons").where("nameKey","==",upd.nameKey).limit(1).get();
        if(!f.empty&&f.docs[0].id!==curId){toast("Salon o takiej nazwie już istnieje.");return false}
      }
      await db.doc("salons/"+curId).update(upd);
      salons[curId]=Object.assign({},s,upd);
      setDirty(false);
      toast((opts.auto?"Profil zapisany automatycznie.":"Profil zapisany.")+geoWarn);
      return true;
    }catch(e){toast(errMsg(e));return false}
    finally{if(btn)btn.disabled=false}
  }
  async function saveServices(list,msg){
    if(!needWrite())return;
    try{
      await db.doc("salons/"+curId).update({services:list});
      salons[curId]=Object.assign({},salons[curId],{services:list});
      renderSvc(salons[curId]);toast(msg);
    }catch(e){toast(errMsg(e))}
  }

  /* ---------- zdarzenia ---------- */
  window.addEventListener("beforeunload",function(e){
    if(profDirty&&mode==="salon"&&curId&&sview==="profil"){e.preventDefault();e.returnValue=""}
  });
  document.addEventListener("visibilitychange",function(){
    if(document.hidden&&profDirty&&mode==="salon"&&curId&&sview==="profil")saveProfile({auto:true});
  });
  document.addEventListener("click",function(e){
    var t=e.target,b;
    if((b=t.closest("[data-call]")))trackCall(b.dataset.call);
    if((b=t.closest("[data-mode]"))){var nm=b.dataset.mode;guardLeave(function(){mode=nm;render()});return}
    if((b=t.closest("[data-cday]"))){dayF=b.dataset.cday;render();return}
    if((b=t.closest("[data-copy]"))){
      var num0=b.dataset.copy;
      try{navigator.clipboard.writeText(num0).then(function(){toast("Numer skopiowany: "+num0)},function(){toast("Nie udało się skopiować. Numer salonu: "+num0)})}
      catch(er){toast("Nie udało się skopiować. Numer salonu: "+num0)}
      return;
    }
    if(t.closest("#gps")){locate();render();return}
    if(t.closest("#reportBtn")){
      contactOpen=!contactOpen;if(contactOpen){contactOpenedAt=Date.now();pitchOpen=false}contactErr="";render();
      if(contactOpen){var cb=document.getElementById("contactbox");if(cb&&cb.scrollIntoView)cb.scrollIntoView({block:"center"})}
      return;
    }
    if((b=t.closest("[data-akind]"))){addState.kind=b.dataset.akind;renderSalon();return}
    if(t.closest("#pitchBtn")){
      pitchOpen=!pitchOpen;if(pitchOpen)contactOpen=false;render();
      if(pitchOpen){var pb=document.getElementById("pitchbox");if(pb&&pb.scrollIntoView)pb.scrollIntoView({block:"center"})}
      return;
    }
    if(t.closest("#closePitch")){pitchOpen=false;render();return}
    if(t.closest("#shareBtn")){shareApp();return}
    if(t.closest("#reveal")){
      if(!contactChecked){contactErr="Zaznacz pole „Nie jestem robotem”.";render();return}
      if(Date.now()-contactOpenedAt<800){contactErr="Spróbuj jeszcze raz.";render();return}
      contactShown=true;contactErr="";render();return;
    }
    if(t.id==="logout"){guardLeave(function(){curId=null;editState=null;geoTried=false;restoreId=null;loginMode="login";loginInfo="";if(window.FLM_AUTH)window.FLM_AUTH.signOut();render()});return}
    if(t.id==="switchMode"){loginMode=loginMode==="register"?"login":"register";renderLogin();return}
    if((b=t.closest("[data-snav]"))){var nv=b.dataset.snav;if(nv===sview)return;guardLeave(function(){sview=nv;editState=null;render()});return}
    if((b=t.closest("[data-sedit]"))){
      var ex=slots[b.dataset.sedit];if(!ex)return;
      editState={id:ex.id,range:isRange(ex),to:endOf(ex),day:slotOff(ex),time:ex.time,svc:"cur",promo:ex.promoPct!=null?String(ex.promoPct):(ex.promo!=null?String(ex.promo).replace(".",","):"")};render();return;
    }
    if(t.closest("[data-secancel]")){editState=null;render();return}
    if((b=t.closest("[data-eday]"))&&editState){editState.day=parseInt(b.dataset.eday,10);document.querySelectorAll("#edaySeg button").forEach(function(x){x.setAttribute("aria-pressed",x===b?"true":"false")});return}
    if((b=t.closest("[data-sday]"))){addState.day=parseInt(b.dataset.sday,10);document.querySelectorAll("#daySeg button").forEach(function(x){x.setAttribute("aria-pressed",x===b?"true":"false")});addPrev(salons[curId]);return}
    if((b=t.closest("[data-sdel]"))){
      if(!needWrite())return;var sid=b.dataset.sdel,x=slots[sid];
      db.doc("slots/"+sid).delete().then(function(){delete slots[sid];toast("Termin usunięty z oferty.");render()}).catch(function(er){toast(errMsg(er))});return;
    }
    if((b=t.closest("[data-stake]"))||(b=t.closest("[data-sfree]"))){
      if(!needWrite())return;var tk=!!b.dataset.stake,tid=b.dataset.stake||b.dataset.sfree;
      db.doc("slots/"+tid).update({taken:tk,booked:null}).then(function(){slots[tid]=Object.assign({},slots[tid],{taken:tk,booked:null});toast(tk?"Termin oznaczony jako zajęty i zniknął z oferty.":"Termin znów jest widoczny dla klientów.");render()}).catch(function(er){toast(errMsg(er))});return;
    }
    if(t.id==="mapGen"){var a=$("pa").value.trim();if(!a){toast("Najpierw wpisz adres.");return}$("pm").value=mapLink(a);setDirty(true);toast("Link do mapy utworzony.");return}
    if((b=t.closest("[data-svcdel]"))){
      var s=salons[curId];saveServices((s.services||[]).filter(function(x){return String(x.id)!==b.dataset.svcdel}),"Usługa usunięta z cennika. Opublikowane terminy zostają bez zmian.");return;
    }
  });
  document.addEventListener("change",function(e){
    var id=e.target.id;
    if(id&&id.indexOf("hc")===0&&/^hc\d$/.test(id)){var i=id.slice(2);$("hf"+i).disabled=e.target.checked;$("ht"+i).disabled=e.target.checked}
  });
  document.addEventListener("input",function(e){
    var id=e.target.id;
    if(e.target.closest&&e.target.closest("#profForm")&&!profDirty)setDirty(true);
    if(id==="q"){q=e.target.value.trim().toLowerCase();var pos=e.target.selectionStart;render();var i=$("q");if(i){i.focus();try{i.setSelectionRange(pos,pos)}catch(x){}}return}
    if(id==="spm"){var w0=$("spw");if(w0)w0.hidden=e.target.value==="ask";return}
    if(id==="human"){contactChecked=e.target.checked;return}
    if(editState&&id==="et"){
      editState.time=e.target.value;
      if(editState.range&&toMin(editState.to)<=toMin(editState.time)){editState.to=fromMin(Math.min(toMin(editState.time)+60,23*60+45));render()}
      return;
    }
    if(editState&&id==="et2"){editState.to=e.target.value;return}
    if(editState&&id==="es"){
      var xe=slots[editState.id],se=salons[curId].services||[];
      function mo(v){return v==="cur"?modeOf(xe):modeOf(se.filter(function(y){return String(y.id)===String(v)})[0])}
      if(mo(editState.svc)!==mo(e.target.value))editState.promo="";
      editState.svc=e.target.value;render();return;
    }
    if(editState&&id==="ep"){editState.promo=e.target.value;return}
    if(id==="at"){
      addState.time=e.target.value;
      if(addState.kind==="range"&&toMin(addState.to)<=toMin(addState.time)){addState.to=fromMin(Math.min(toMin(addState.time)+60,23*60+45));renderSalon();return}
      addPrev(salons[curId]);return;
    }
    if(id==="at2"){addState.to=e.target.value;addPrev(salons[curId]);return}
    if(id==="as"){
      var sa=salons[curId].services||[],oa=sa.filter(function(x){return String(x.id)===String(addState.svc)})[0],na=sa.filter(function(x){return String(x.id)===String(e.target.value)})[0];
      if(modeOf(oa)!==modeOf(na))addState.promo="";
      addState.svc=e.target.value;renderSalon();return;
    }
    if(id==="ap"){addState.promo=e.target.value;addPrev(salons[curId])}
  });
  document.addEventListener("submit",function(e){
    var f=e.target;e.preventDefault();
    if(f.id==="loginForm"){doLogin();return}
    if(f.id==="addForm"){submitAdd();return}
    if(f.id==="editForm"){submitEdit();return}
    if(f.id==="profForm"){saveProfile();return}
    if(f.id==="svcForm"){
      var s=salons[curId],n=$("sn").value.trim(),d=parseInt($("sd").value,10),pm=$("spm").value,pr=pm==="ask"?null:num($("sp").value),er=$("serr");
      function bad(m){er.textContent=m;er.hidden=false}
      if(!n)return bad("Wpisz nazwę usługi.");
      if(!(d>=5&&d<=480))return bad("Czas podaj w minutach, od 5 do 480.");
      if(pm!=="ask"&&(pr==null||pr<=0))return bad("Podaj kwotę w złotych, np. 90, albo wybierz „Ustalana w salonie”.");
      er.hidden=true;
      saveServices((s.services||[]).concat([{id:Date.now().toString(36)+Math.random().toString(36).slice(2,5),name:n,dur:d,price:pr,pm:pm}]),"Usługa dodana.").then(function(){var a=$("sn");if(a){a.value="";$("sd").value="";$("sp").value="";$("spm").value="exact";var w=$("spw");if(w)w.hidden=false}});
      return;
    }
  });

  init();
})();

/* --- pokaż/ukryj hasło --- */
document.addEventListener("click",function(e){
  var b=e.target.closest&&e.target.closest("[data-pw]");if(!b)return;
  var i=document.getElementById(b.getAttribute("data-pw"));if(!i)return;
  var show=i.type==="password";i.type=show?"text":"password";
  b.textContent=show?"Ukryj":"Pokaż";b.setAttribute("aria-pressed",show?"true":"false");
});
/* --- motyw jasny / ciemny --- */
(function(){
  var root=document.documentElement,btn=document.getElementById("themeBtn"),meta=document.getElementById("themeColor");
  var sun='<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>';
  var moon='<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"/></svg>';
  function paint(){
    var dark=root.getAttribute("data-theme")==="dark";
    if(btn)btn.innerHTML=dark?sun+" Jasny":moon+" Ciemny";
    if(meta)meta.setAttribute("content",dark?"#241846":"#5B3FD1");
  }
  if(btn)btn.addEventListener("click",function(){
    var dark=root.getAttribute("data-theme")==="dark";
    if(dark)root.removeAttribute("data-theme");else root.setAttribute("data-theme","dark");
    try{localStorage.setItem("flm_theme",dark?"light":"dark")}catch(e){}
    paint();
  });
  paint();
})();
