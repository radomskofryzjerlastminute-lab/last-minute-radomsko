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
  var mode="client", sview="add", curId=null, loginMode="login";
  var user={key:"centrum",lat:PLACES[0].lat,lng:PLACES[0].lng};
  var dayF="all", q="", sort="dist", restoreId=null, loginInfo="";
    var addState={day:0,time:"",svc:"",promo:""};
  function telHref(p){var d=String(p||"").replace(/\D/g,"");if(d.length===11&&d.indexOf("48")===0)d=d.slice(2);return "tel:"+(d.length===9?"+48":"")+d}

  /* ---------- narzędzia ---------- */
  function esc(s){return String(s==null?"":s).replace(/[&<>"']/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]})}
  function $(id){return document.getElementById(id)}
  function pad(n){return n<10?"0"+n:""+n}
  function toMin(t){var p=String(t).split(":");return parseInt(p[0],10)*60+parseInt(p[1],10)}
  function fromMin(m){return pad(Math.floor(m/60))+":"+pad(m%60)}
  function nowMin(){var d=new Date();return d.getHours()*60+d.getMinutes()}
  function zl(n){return String(n).replace(".",",")+" zł"}
  function num(v){if(v==null||v==="")return null;var n=parseFloat(String(v).replace(",","."));return isNaN(n)?null:n}
  function ymd(d){return d.getFullYear()+"-"+pad(d.getMonth()+1)+"-"+pad(d.getDate())}
  function dateOf(off){var d=new Date();d.setDate(d.getDate()+off);return ymd(d)}
  function offsetOf(s){var p=String(s).split("-"),a=new Date(+p[0],+p[1]-1,+p[2]),n=new Date();n=new Date(n.getFullYear(),n.getMonth(),n.getDate());return Math.round((a-n)/864e5)}
  function dayDate(off){var d=new Date();d.setDate(d.getDate()+off);return d.toLocaleDateString("pl-PL",{weekday:"long",day:"numeric",month:"long"})}
  function todayIdx(){return (new Date().getDay()+6)%7}
  function km(a){return a<1?(Math.round(a*100)*10)+" m":(Math.round(a*10)/10).toString().replace(".",",")+" km"}
  function dist(lat,lng){
    var R=6371,r=Math.PI/180,a1=(lat-user.lat)*r,a2=(lng-user.lng)*r;
    var a=Math.sin(a1/2)*Math.sin(a1/2)+Math.cos(user.lat*r)*Math.cos(lat*r)*Math.sin(a2/2)*Math.sin(a2/2);
    return 2*R*Math.asin(Math.sqrt(a));
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
  function nameKey(n){return n.trim().toLowerCase().replace(/\s+/g," ")}
  function hex(buf){return Array.prototype.map.call(new Uint8Array(buf),function(b){return ("0"+b.toString(16)).slice(-2)}).join("")}
  async function sha(s){return hex(await crypto.subtle.digest("SHA-256",new TextEncoder().encode(s)))}
  function newSalt(){var a=new Uint8Array(12);crypto.getRandomValues(a);return hex(a)}

  /* ---------- terminy ---------- */
  function slotOff(x){return offsetOf(x.date)}
  function isPast(x){var o=slotOff(x);return o<0||(o===0&&toMin(x.time)<=nowMin())}
  function minsUntil(x){return slotOff(x)*1440+toMin(x.time)-nowMin()}
  function eff(x){return x.promo!=null?x.promo:x.price}
  function allSlots(){return Object.keys(slots).map(function(k){return slots[k]})}
  function ownSlots(){return allSlots().filter(function(x){return x.salonId===curId})}
  function sortSlots(a,b){return a.date<b.date?-1:a.date>b.date?1:toMin(a.time)-toMin(b.time)}
  function priceHtml(x){return x.promo!=null?'<s>'+zl(x.price)+'</s><b>'+zl(x.promo)+'</b>':'<b>'+zl(x.price)+'</b>'}
  function isTaken(x){return !!(x.taken||x.booked)}

  /* ---------- połączenie z bazą ---------- */
  async function init(){
    render();
    var userNs=null;
    try{if(window.claude&&window.claude.use)userNs=await window.claude.use("user")}catch(e){}
    try{if(userNs)canWrite=await userNs.can("data.write")}catch(e){}
    try{if(window.claude&&window.claude.use)db=await window.claude.use("db")}catch(e){db=null}
    if(!db){dbMissing=true;render();return}
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
    if(mode==="salon"&&!curId)return;
    if(mode==="salon"&&sview==="profil")return;
    keepFocus(render);
  }

  /* ---------- baner stanu ---------- */
  function renderBanner(){
    var h="";
    if(dbMissing){var st=window.FLM_STATUS,why=st==="no-config"?"Nie znaleziono pliku config.js. Wgraj go do repozytorium na GitHub razem z pozostałymi plikami.":st==="placeholder"?"W pliku config.js nie ma jeszcze klucza projektu Supabase. Wklej klucz (Publishable key) i wgraj plik ponownie.":st==="no-lib"?"Nie wczytała się biblioteka Supabase. Sprawdź połączenie z internetem albo czy sieć (np. firmowa) nie blokuje stron cdn.jsdelivr.net i unpkg.com.":"Sprawdź połączenie z internetem i plik config.js.";h='<div class="note warn"><b>Aplikacja nie jest połączona z bazą danych.</b> '+esc(why)+'</div>'}
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
  function findHtml(){
    var opts=PLACES.map(function(p){return '<option value="'+p.k+'"'+(user.key===p.k?' selected':'')+'>'+esc(p.n)+'</option>'}).join("")+(user.key==="gps"?'<option value="gps" selected>Moja lokalizacja</option>':'');
    var res=[];
    Object.keys(salons).forEach(function(k){
      var s=salons[k],v=visibleSlots(s); if(!v.length)return;
      var d=dist(s.lat||PLACES[0].lat,s.lng||PLACES[0].lng);
      res.push({s:s,v:v,d:d,first:slotOff(v[0])*1440+toMin(v[0].time),cheap:Math.min.apply(null,v.map(eff))});
    });
    res.sort(function(a,b){return sort==="time"?a.first-b.first:sort==="price"?a.cheap-b.cheap:a.d-b.d});
    var noSalons=!Object.keys(salons).length;
    return '<div class="panel"><div class="loc"><div class="field" style="margin:0"><label class="f" for="place">Skąd liczyć odległość</label><select id="place">'+opts+'</select></div>'+
      '<button class="btn ghost" id="gps" type="button">Użyj mojej lokalizacji</button></div>'+
      '<div class="filters"><div class="seg" role="group" aria-label="Dzień">'+
      [["all","Wszystkie"],["0","Dziś"],["1","Jutro"]].map(function(d){return '<button type="button" data-cday="'+d[0]+'" aria-pressed="'+(dayF===d[0])+'">'+d[1]+'</button>'}).join("")+'</div>'+
      '<input type="search" id="q" value="'+esc(q)+'" placeholder="Szukaj usługi lub salonu, np. koloryzacja" aria-label="Szukaj usługi lub salonu"></div></div>'+
      '<div class="sortrow"><p class="count">'+(res.length?res.length+" "+(res.length===1?"salon":res.length<5?"salony":"salonów")+" z wolnymi terminami":"")+'</p>'+
      '<div style="display:flex;gap:8px;align-items:center"><label class="meta" for="sort">Sortuj:</label><select id="sort"><option value="dist"'+(sort==="dist"?" selected":"")+'>najbliżej</option><option value="time"'+(sort==="time"?" selected":"")+'>najwcześniejszy termin</option><option value="price"'+(sort==="price"?" selected":"")+'>najtaniej</option></select></div></div>'+
      '<div class="list">'+(res.length?res.map(cardHtml).join(""):noSalons?'<p class="empty">W bazie nie ma jeszcze żadnych salonów. Przejdź do trybu „Dla salonów”, załóż konto i dodaj pierwszy termin.</p>':'<p class="empty">Brak wolnych terminów dla tych filtrów. Wybierz „Wszystkie” albo zmień wyszukiwaną frazę.</p>')+'</div>';
  }
  function cardHtml(r){
    var s=r.s,h=(s.hours||[])[todayIdx()],hrs=h&&!h.closed?"dziś "+h.from+"–"+h.to:"dziś zamknięte",html="",last="";
    r.v.forEach(function(x){
      var o=slotOff(x);
      if(x.date!==last){html+='<div class="daylab d'+o+'"><b>'+DAYS[o]+'</b> '+esc(dayDate(o))+'</div>';last=x.date}
      var off=x.promo!=null?Math.round((1-x.promo/x.price)*100):0;
      html+='<div class="slot d'+o+'"><div class="tcol"><div class="t">'+esc(x.time)+'</div><span class="dchip d'+o+'">'+DAYS[o]+'</span></div><div class="sv"><div>'+esc(x.service)+' <span class="meta">· '+x.dur+' min</span></div>'+
        '<div class="price">'+priceHtml(x)+(off>0?'<span class="off">−'+off+'%</span>':'')+'</div></div>'+
        '<div class="go"><a class="btn sm" href="'+esc(telHref(s.phone))+'">Zadzwoń</a></div></div>';
    });
    return '<article class="card"><div class="shead"><h3>'+esc(s.name)+'</h3><span class="dist">'+km(r.d)+' od Ciebie</span></div>'+
      '<div class="body">'+
      '<div class="meta">'+esc(s.address)+', Radomsko · '+esc(hrs)+'</div>'+(s.desc?'<p class="desc">'+esc(s.desc)+'</p>':'')+'</div>'+html+
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
    if(sview==="add")renderAdd(v,s);else if(sview==="mine")renderMine(v);else renderProfil(v,s);
  }
  function renderLogin(){
    var reg=loginMode==="register";
    $("app").innerHTML='<div class="login card pad"><h2>'+(reg?"Załóż konto salonu":"Zaloguj się")+'</h2>'+
      '<p class="sub">'+(reg?"Podaj nazwę salonu, adres e-mail i hasło. Resztę danych uzupełnisz w profilu.":"Zaloguj się adresem e-mail i hasłem, które ustawiłeś przy zakładaniu konta.")+'</p>'+
      '<form id="loginForm" novalidate>'+
      (reg?'<div class="field"><label class="f" for="ln">Nazwa salonu</label><input id="ln" autocomplete="organization"></div>':'')+
      '<div class="field"><label class="f" for="le">Adres e-mail</label><input id="le" type="email" inputmode="email" autocomplete="username" autocapitalize="none"></div>'+
      '<div class="field"><label class="f" for="lp">Hasło</label><span class="pw"><input id="lp" type="password" autocomplete="'+(reg?"new-password":"current-password")+'"><button type="button" class="pwb" data-pw="lp" aria-pressed="false">Pokaż</button></span></div>'+
      (reg?'<div class="field"><label class="f" for="lp2">Powtórz hasło</label><span class="pw"><input id="lp2" type="password" autocomplete="new-password"><button type="button" class="pwb" data-pw="lp2" aria-pressed="false">Pokaż</button></span></div>':'')+
      '<p class="err" id="lerr" hidden></p>'+
      (loginInfo?'<p class="note">'+esc(loginInfo)+'</p>':'')+
      '<div class="btn-row"><button class="btn" type="submit" id="lsub">'+(reg?"Załóż konto":"Zaloguj")+'</button><button class="link" type="button" id="switchMode">'+(reg?"Mam już konto":"Załóż konto")+'</button></div></form>'+
      (reg?'<p class="hint">Hasło musi mieć co najmniej 6 znaków.</p>':'')+'</div>';
  }
  function authMsg(e){
    var m=String(e&&e.message||"").toLowerCase(),c=e&&e.code;
    if(c==="name_taken")return "Salon o takiej nazwie już istnieje. Wybierz inną nazwę.";
    if(m.indexOf("invalid login")>=0)return "Nieprawidłowy e-mail lub hasło.";
    if(m.indexOf("already registered")>=0||m.indexOf("already been registered")>=0)return "Konto z tym adresem e-mail już istnieje. Zaloguj się.";
    if(m.indexOf("not confirmed")>=0)return "Najpierw potwierdź adres e-mail (link w wiadomości od nas), a potem zaloguj się.";
    if(m.indexOf("rate limit")>=0||m.indexOf("too many")>=0)return "Za dużo prób. Spróbuj ponownie za kilka minut.";
    if(m.indexOf("password")>=0)return "Hasło jest za słabe. Użyj co najmniej 6 znaków.";
    if(m.indexOf("valid email")>=0||m.indexOf("invalid email")>=0)return "Wpisz poprawny adres e-mail.";
    if(m.indexOf("fetch")>=0||m.indexOf("network")>=0)return "Brak połączenia z internetem. Spróbuj ponownie.";
    return "Nie udało się zalogować. Spróbuj ponownie.";
  }
  async function ensureSalon(user,nameOpt){
    var ex=await db.doc("salons/"+user.id).get();
    if(ex.exists){salons[user.id]=Object.assign({id:user.id},ex.data());return}
    var n=(nameOpt||(user.user_metadata&&user.user_metadata.name)||"").trim();
    if(n.length<2)n="Mój salon";
    var doc={name:n,nameKey:nameKey(n),address:"",phone:"",desc:"",mapUrl:"",placeKey:"centrum",lat:PLACES[0].lat,lng:PLACES[0].lng,services:[],
      hours:WD.map(function(_,k){return {closed:k>=6,from:"09:00",to:"17:00"}})};
    await db.doc("salons/"+user.id).set(doc);
    salons[user.id]=Object.assign({id:user.id},doc);
    return true;
  }
  async function doLogin(){
    var reg=loginMode==="register",n=reg?$("ln").value.trim():"",em=$("le").value.trim(),p=$("lp").value,err=$("lerr"),btn=$("lsub");
    function bad(m){err.textContent=m;err.hidden=false}
    err.hidden=true;loginInfo="";
    if(reg&&n.length<2)return bad("Wpisz nazwę salonu.");
    if(!em||!p)return bad("Wpisz adres e-mail i hasło.");
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
          loginMode="login";loginInfo="Konto założone. Wysłaliśmy wiadomość na adres "+em+". Kliknij w niej link potwierdzający, a potem zaloguj się.";
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
      addState={day:0,time:"",svc:"",promo:""};render();
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
    if(!(s.services||[]).length){v.innerHTML='<h2>Dodaj termin last minute</h2><p class="empty">Najpierw dodaj przynajmniej jedną usługę w zakładce „Profil”, w sekcji Cennik.</p>';return}
    if(!addState.time)addState.time=fromMin(Math.min(Math.ceil((nowMin()+60)/15)*15,23*60+45));
    if(!addState.svc||!s.services.some(function(x){return String(x.id)===String(addState.svc)}))addState.svc=String(s.services[0].id);
    v.innerHTML='<h2>Dodaj termin last minute</h2><p class="sub">Termin trafia od razu na listę klientów. Gdy oznaczysz termin jako zajęty albo minie jego godzina, sam znika z listy.</p>'+
      '<form id="addForm" class="card pad" novalidate><div class="field"><span style="display:block;font-weight:500;font-size:14px;margin-bottom:4px">Dzień</span><div class="seg" id="daySeg" role="group" aria-label="Dzień">'+
      DAYS.map(function(d,i){return '<button type="button" data-sday="'+i+'" aria-pressed="'+(addState.day===i)+'">'+d+'</button>'}).join("")+'</div></div>'+
      '<div class="row3"><div class="field"><label class="f" for="at">Godzina</label><select id="at">'+timeOpts(addState.time)+'</select></div>'+
      '<div class="field"><label class="f" for="as">Usługa</label><select id="as">'+s.services.map(function(x){return '<option value="'+esc(x.id)+'"'+(String(x.id)===String(addState.svc)?' selected':'')+'>'+esc(x.name)+' ('+x.dur+' min, '+zl(x.price)+')</option>'}).join("")+'</select></div>'+
      '<div class="field"><label class="f" for="ap">Cena promocyjna (zł)</label><input id="ap" inputmode="decimal" placeholder="opcjonalnie" value="'+esc(addState.promo)+'"></div></div>'+
      '<p class="err" id="aerr" hidden></p><p class="hint" id="aprev" style="margin:0 0 12px"></p><div class="btn-row"><button class="btn" type="submit">Opublikuj termin</button></div></form>';
    addPrev(s);
  }
  function addPrev(s){
    var el=$("aprev"); if(!el)return;
    var sv=(s.services||[]).filter(function(x){return String(x.id)===String(addState.svc)})[0],p=num(addState.promo);
    if(!sv||!addState.time){el.textContent="";return}
    el.textContent="Klient zobaczy: "+DAYS[addState.day]+" "+addState.time+"–"+fromMin(toMin(addState.time)+sv.dur)+", "+sv.name+", "+(p!=null?zl(p)+" zamiast "+zl(sv.price):zl(sv.price))+".";
  }
  async function submitAdd(){
    if(!needWrite())return;
    var s=salons[curId],err=$("aerr"),t=addState.time,sv=s.services.filter(function(x){return String(x.id)===String(addState.svc)})[0],praw=String(addState.promo).trim(),p=praw?num(praw):null;
    function bad(m){err.textContent=m;err.hidden=false}
    if(!t)return bad("Wpisz godzinę rozpoczęcia.");
    if(addState.day===0&&toMin(t)<=nowMin())return bad("Ta godzina już minęła. Wybierz późniejszą godzinę albo inny dzień.");
    if(praw&&(p==null||p<0))return bad("Cena promocyjna musi być liczbą, np. 70.");
    if(p!=null&&p>=sv.price)return bad("Cena promocyjna powinna być niższa niż regularna ("+zl(sv.price)+").");
    var date=dateOf(addState.day),a=toMin(t),b=a+sv.dur;
    var ov=ownSlots().filter(function(x){return x.date===date&&a<toMin(x.time)+x.dur&&toMin(x.time)<b})[0];
    if(ov)return bad("Ten czas nachodzi na termin "+ov.time+"–"+fromMin(toMin(ov.time)+ov.dur)+" ("+ov.service+"). Wybierz inną godzinę.");
    try{
      await db.collection("slots").doc().set({salonId:curId,date:date,time:t,dur:sv.dur,service:sv.name,price:sv.price,promo:p,taken:false});
      toast("Termin opublikowany: "+DAYS[addState.day].toLowerCase()+" "+t+".");
      addState.time="";addState.promo="";renderSalon();
    }catch(e){toast(errMsg(e))}
  }

  /* --- moje terminy --- */
  function stateOf(x){return isPast(x)?"past":(isTaken(x)?"taken":"free")}
  function pill(st){return st==="free"?'<span class="pill free">Wolny</span>':st==="taken"?'<span class="pill booked">Zajęty</span>':'<span class="pill past">Minął</span>'}
  function renderMine(v){
    var list=ownSlots().filter(function(x){var o=slotOff(x);return o>=0&&o<=2}).sort(sortSlots),html='<h2>Moje terminy</h2><p class="sub">Wszystko, co opublikowałeś na najbliższe dni. Gdy ktoś zarezerwuje termin telefonicznie, kliknij „Zajęty”, a zniknie z oferty dla klientów.</p>';
    if(!list.length){v.innerHTML=html+'<p class="empty">Nie masz jeszcze żadnych terminów. Dodaj pierwszy w zakładce „Dodaj termin”.</p>';return}
    var free=list.filter(function(x){return stateOf(x)==="free"}).length;
    html+='<p class="hint" style="margin:-8px 0 0">Widoczne dla klientów teraz: <b>'+free+'</b></p>';
    [0,1,2].forEach(function(d){
      var rows=list.filter(function(x){return slotOff(x)===d});if(!rows.length)return;
      html+='<div class="daylab free d'+d+'"><b>'+DAYS[d]+'</b> '+esc(dayDate(d))+'</div><div class="card pad" style="padding-top:4px;padding-bottom:4px">'+rows.map(function(x){
        var st=stateOf(x);
        return '<div class="srow'+(st==="past"?' dim':'')+'"><div class="t">'+esc(x.time)+'</div><div class="sv"><div>'+esc(x.service)+' <span class="meta">· '+x.dur+' min</span></div><div class="meta price">'+priceHtml(x)+'</div></div>'+
          '<div class="act btn-row">'+pill(st)+(st==="free"?'<button class="btn sm" data-stake="'+esc(x.id)+'" type="button">Zajęty</button><button class="btn ghost sm" data-sdel="'+esc(x.id)+'" type="button">Usuń</button>':st==="taken"?'<button class="btn ghost sm" data-sfree="'+esc(x.id)+'" type="button">Znów wolny</button><button class="btn ghost sm" data-sdel="'+esc(x.id)+'" type="button">Usuń</button>':'')+'</div></div>';
      }).join("")+'</div>';
    });
    v.innerHTML=html;
  }

  /* --- profil --- */
  function renderProfil(v,s){
    var hrs=s.hours&&s.hours.length===7?s.hours:WD.map(function(_,i){return {closed:i>=6,from:"09:00",to:"17:00"}});
    v.innerHTML='<h2>Profil salonu</h2><p class="sub">To widzą klienci na liście salonów w Radomsku.</p><div class="list">'+
    '<form id="profForm" class="card pad" novalidate><h3 style="margin-bottom:12px">Dane salonu</h3>'+
      '<div class="field"><label class="f" for="pn">Nazwa salonu</label><input id="pn" value="'+esc(s.name)+'"></div>'+
      '<div class="two"><div class="field"><label class="f" for="pa">Adres</label><input id="pa" value="'+esc(s.address)+'" placeholder="ul. Przykładowa 1"></div>'+
      '<div class="field"><label class="f" for="pt">Telefon</label><input id="pt" inputmode="tel" value="'+esc(s.phone)+'" placeholder="500 100 200"></div></div>'+
      '<div class="field"><label class="f" for="pplace">Okolica miasta</label><select id="pplace">'+PLACES.map(function(p){return '<option value="'+p.k+'"'+(s.placeKey===p.k?' selected':'')+'>'+esc(p.n)+'</option>'}).join("")+'</select><p class="hint">W prototypie przybliżone położenie wybierasz z listy. W pełnej wersji wyliczymy je z adresu.</p></div>'+
      '<div class="field"><label class="f" for="pd">Opis</label><textarea id="pd" rows="4" maxlength="400">'+esc(s.desc)+'</textarea></div>'+
      '<div class="field"><label class="f" for="pm">Link do mapy</label><input id="pm" value="'+esc(s.mapUrl)+'" placeholder="https://maps.google.com/..."><p class="hint"><button class="link" id="mapGen" type="button">Utwórz link z adresu</button></p></div>'+
      '<h3 style="margin:18px 0 10px">Godziny otwarcia</h3>'+
      hrs.map(function(h,i){return '<div class="hrs"><span>'+WD[i]+'</span><input type="time" id="hf'+i+'" aria-label="'+WD[i]+' od" value="'+esc(h.from)+'"'+(h.closed?' disabled':'')+'><input type="time" id="ht'+i+'" aria-label="'+WD[i]+' do" value="'+esc(h.to)+'"'+(h.closed?' disabled':'')+'>'+
        '<label class="chk" for="hc'+i+'"><input type="checkbox" id="hc'+i+'" '+(h.closed?'checked':'')+'> zamknięte</label></div>'}).join("")+
      '<div class="btn-row" style="margin-top:16px"><button class="btn" type="submit">Zapisz profil</button></div></form>'+
    '<div class="card pad"><h3 style="margin-bottom:4px">Cennik usług</h3><p class="hint" style="margin:0 0 12px">Z tej listy wybierasz usługę przy dodawaniu terminu.</p><div id="svcList"></div>'+
      '<form id="svcForm" class="svc-row" novalidate style="margin-top:12px"><input id="sn" placeholder="Nazwa usługi" aria-label="Nazwa usługi"><input id="sd" inputmode="numeric" placeholder="min" aria-label="Czas w minutach"><input id="sp" inputmode="decimal" placeholder="zł" aria-label="Cena w złotych"><button class="btn sm" type="submit">Dodaj</button></form>'+
      '<p class="err" id="serr" hidden style="margin-top:8px"></p></div></div>';
    renderSvc(s);
  }
  function renderSvc(s){
    var el=$("svcList");if(!el)return;
    var l=s.services||[];
    el.innerHTML=l.length?l.map(function(x){return '<div class="srow" style="grid-template-columns:minmax(0,1fr) auto auto"><div class="sv">'+esc(x.name)+'</div><div class="meta price"><b>'+zl(x.price)+'</b> · '+x.dur+' min</div><button class="btn danger sm" data-svcdel="'+esc(x.id)+'" type="button">Usuń</button></div>'}).join(""):'<p class="hint">Brak usług. Dodaj pierwszą poniżej.</p>';
  }
  async function saveProfile(){
    if(!needWrite())return;
    var s=salons[curId],n=$("pn").value.trim();
    if(!n){toast("Nazwa salonu nie może być pusta.");return}
    var place=PLACES.filter(function(p){return p.k===$("pplace").value})[0]||PLACES[0];
    var upd={name:n,nameKey:nameKey(n),address:$("pa").value.trim(),phone:$("pt").value.trim(),desc:$("pd").value.trim(),mapUrl:$("pm").value.trim(),
      hours:WD.map(function(_,i){return {closed:$("hc"+i).checked,from:$("hf"+i).value||"09:00",to:$("ht"+i).value||"17:00"}})};
    if(place.k!==s.placeKey){upd.placeKey=place.k;upd.lat=place.lat;upd.lng=place.lng}
    try{
      if(upd.nameKey!==s.nameKey){
        var f=await db.collection("salons").where("nameKey","==",upd.nameKey).limit(1).get();
        if(!f.empty&&f.docs[0].id!==curId){toast("Salon o takiej nazwie już istnieje.");return}
      }
      await db.doc("salons/"+curId).update(upd);
      salons[curId]=Object.assign({},s,upd);
      toast("Profil zapisany.");
    }catch(e){toast(errMsg(e))}
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
  document.addEventListener("click",function(e){
    var t=e.target,b;
    if((b=t.closest("[data-mode]"))){mode=b.dataset.mode;render();return}
    if((b=t.closest("[data-cday]"))){dayF=b.dataset.cday;render();return}
    if((b=t.closest("[data-copy]"))){
      var num0=b.dataset.copy;
      try{navigator.clipboard.writeText(num0).then(function(){toast("Numer skopiowany: "+num0)},function(){toast("Nie udało się skopiować. Numer salonu: "+num0)})}
      catch(er){toast("Nie udało się skopiować. Numer salonu: "+num0)}
      return;
    }
    if(t.id==="gps"){
      if(!navigator.geolocation){toast("Ta przeglądarka nie udostępnia lokalizacji. Wybierz punkt z listy.");return}
      try{navigator.geolocation.getCurrentPosition(function(p){user={key:"gps",lat:p.coords.latitude,lng:p.coords.longitude};render();toast("Odległości liczone od twojej lokalizacji.")},function(){toast("Nie udało się pobrać lokalizacji. Wybierz punkt z listy.")},{timeout:8000})}
      catch(err){toast("Nie udało się pobrać lokalizacji. Wybierz punkt z listy.")}
      return;
    }
    if(t.id==="logout"){curId=null;restoreId=null;loginMode="login";loginInfo="";if(window.FLM_AUTH)window.FLM_AUTH.signOut();render();return}
    if(t.id==="switchMode"){loginMode=loginMode==="register"?"login":"register";renderLogin();return}
    if((b=t.closest("[data-snav]"))){sview=b.dataset.snav;render();return}
    if((b=t.closest("[data-sday]"))){addState.day=parseInt(b.dataset.sday,10);document.querySelectorAll("#daySeg button").forEach(function(x){x.setAttribute("aria-pressed",x===b?"true":"false")});addPrev(salons[curId]);return}
    if((b=t.closest("[data-sdel]"))){
      if(!needWrite())return;var sid=b.dataset.sdel,x=slots[sid];
      db.doc("slots/"+sid).delete().then(function(){delete slots[sid];toast("Termin usunięty z oferty.");render()}).catch(function(er){toast(errMsg(er))});return;
    }
    if((b=t.closest("[data-stake]"))||(b=t.closest("[data-sfree]"))){
      if(!needWrite())return;var tk=!!b.dataset.stake,tid=b.dataset.stake||b.dataset.sfree;
      db.doc("slots/"+tid).update({taken:tk,booked:null}).then(function(){slots[tid]=Object.assign({},slots[tid],{taken:tk,booked:null});toast(tk?"Termin oznaczony jako zajęty i zniknął z oferty.":"Termin znów jest widoczny dla klientów.");render()}).catch(function(er){toast(errMsg(er))});return;
    }
    if(t.id==="mapGen"){var a=$("pa").value.trim();if(!a){toast("Najpierw wpisz adres.");return}$("pm").value="https://www.google.com/maps/search/?api=1&query="+encodeURIComponent(a+", Radomsko");toast("Link do mapy utworzony.");return}
    if((b=t.closest("[data-svcdel]"))){
      var s=salons[curId];saveServices((s.services||[]).filter(function(x){return String(x.id)!==b.dataset.svcdel}),"Usługa usunięta z cennika. Opublikowane terminy zostają bez zmian.");return;
    }
  });
  document.addEventListener("change",function(e){
    var id=e.target.id;
    if(id==="place"){var p=PLACES.filter(function(x){return x.k===e.target.value})[0];if(p){user={key:p.k,lat:p.lat,lng:p.lng};render()}}
    if(id==="sort"){sort=e.target.value;render()}
    if(id&&id.indexOf("hc")===0&&/^hc\d$/.test(id)){var i=id.slice(2);$("hf"+i).disabled=e.target.checked;$("ht"+i).disabled=e.target.checked}
  });
  document.addEventListener("input",function(e){
    var id=e.target.id;
    if(id==="q"){q=e.target.value.trim().toLowerCase();var pos=e.target.selectionStart;render();var i=$("q");if(i){i.focus();try{i.setSelectionRange(pos,pos)}catch(x){}}return}
    if(id==="at"){addState.time=e.target.value;addPrev(salons[curId])}
    if(id==="as"){addState.svc=e.target.value;addPrev(salons[curId])}
    if(id==="ap"){addState.promo=e.target.value;addPrev(salons[curId])}
  });
  document.addEventListener("submit",function(e){
    var f=e.target;e.preventDefault();
    if(f.id==="loginForm"){doLogin();return}
    if(f.id==="addForm"){submitAdd();return}
    if(f.id==="profForm"){saveProfile();return}
    if(f.id==="svcForm"){
      var s=salons[curId],n=$("sn").value.trim(),d=parseInt($("sd").value,10),pr=num($("sp").value),er=$("serr");
      function bad(m){er.textContent=m;er.hidden=false}
      if(!n)return bad("Wpisz nazwę usługi.");
      if(!(d>=5&&d<=480))return bad("Czas podaj w minutach, od 5 do 480.");
      if(pr==null||pr<=0)return bad("Podaj cenę w złotych, np. 90.");
      er.hidden=true;
      saveServices((s.services||[]).concat([{id:Date.now().toString(36)+Math.random().toString(36).slice(2,5),name:n,dur:d,price:pr}]),"Usługa dodana.").then(function(){var a=$("sn");if(a){a.value="";$("sd").value="";$("sp").value=""}});
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
