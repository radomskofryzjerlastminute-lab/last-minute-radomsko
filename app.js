(function(){
  /* ---------- język interfejsu (PL / EN) ---------- */
  var LANG="pl";
  try{var savedLang=localStorage.getItem("flm_lang");if(savedLang==="en"||savedLang==="pl")LANG=savedLang}catch(e){}
  var ST={
 "title": {
  "pl": "Last Minute Radomsko: wolne terminy – uroda i zdrowie",
  "en": "Last Minute Radomsko: free slots – beauty & health"
 },
 "desc": {
  "pl": "Wolne terminy last minute: fryzjer, uroda i zdrowie w Radomsku i okolicach.",
  "en": "Last-minute free appointments for hair, beauty and health in Radomsko and the surrounding area."
 },
 "brand": {
  "pl": "Last Minute<br>Radomsko",
  "en": "Last Minute<br>Radomsko"
 },
 "tagline": {
  "pl": "Wolne terminy na dziś i jutro<br>w Radomsku i okolicach",
  "en": "Free appointments for today and tomorrow<br>in Radomsko and nearby"
 },
 "modeC": {
  "pl": "Dla klientów",
  "en": "For customers"
 },
 "modeS": {
  "pl": "Dla salonów",
  "en": "For salons"
 },
 "appmode": {
  "pl": "Tryb aplikacji",
  "en": "App mode"
 },
 "theme": {
  "pl": "Wygląd aplikacji",
  "en": "App appearance"
 },
 "langgrp": {
  "pl": "Język / Language",
  "en": "Język / Language"
 },
 "herolab": {
  "pl": "Opis",
  "en": "Description"
 },
 "eyebrow": {
  "pl": "Najbliższe dni",
  "en": "Coming days"
 },
 "big": {
  "pl": "Wolne terminy –<br><span class=\"hl\">uroda i&nbsp;zdrowie</span>",
  "en": "Free slots –<br><span class=\"hl\">beauty &amp; health</span>"
 },
 "small": {
  "pl": "Radomsko i okolice. Wybierz usługę, zadzwoń do salonu i płać na miejscu.",
  "en": "Radomsko and nearby. Choose a service, call the salon and pay on site."
 },
 "town": {
  "pl": "uroda i zdrowie",
  "en": "beauty & health"
 },
 "privsum": {
  "pl": "Informacja o prywatności i zasady korzystania",
  "en": "Privacy information and terms of use"
 }
};
  var EN={
 "Dziś": "Today",
 "Jutro": "Tomorrow",
 "Pojutrze": "Day after tomorrow",
 "Poniedziałek": "Monday",
 "Wtorek": "Tuesday",
 "Środa": "Wednesday",
 "Czwartek": "Thursday",
 "Piątek": "Friday",
 "Sobota": "Saturday",
 "Niedziela": "Sunday",
 "zł": "PLN",
 "od ": "from ",
 "cena w salonie": "price at the salon",
 "cena ustalana w salonie": "price set at the salon",
 ", zniżka −{0}%": ", discount −{0}%",
 " zamiast ": " instead of ",
 "Zniżka musi być liczbą całkowitą od 1 do 90 (%), np. 30.": "The discount must be a whole number from 1 to 90 (%), e.g. 30.",
 "Cena promocyjna musi być liczbą, np. 70.": "The promotional price must be a number, e.g. 70.",
 "Cena promocyjna powinna być niższa niż regularna ({0}).": "The promotional price must be lower than the regular price ({0}).",
 "Ustaliliśmy położenie salonu na podstawie adresu.": "We located the salon from its address.",
 "Salon o takiej nazwie już istnieje.": "A salon with this name already exists.",
 "Brak uprawnień. Zaloguj się ponownie jako ten salon.": "No permission. Please log in again as this salon.",
 "Zapis odrzucony. Sprawdź, czy twoje konto ma prawo zapisu w tej aplikacji.": "Save rejected. Check that your account has write access in this app.",
 "Baza danych jest pełna. Usuń stare dane.": "The database is full. Delete old data.",
 "Za dużo operacji naraz. Spróbuj za chwilę.": "Too many operations at once. Try again in a moment.",
 "Nie udało się zapisać. Spróbuj ponownie.": "Could not save. Please try again.",
 "Twoje konto ma tylko podgląd, więc nie może zapisywać zmian.": "Your account is view-only, so it cannot save changes.",
 "Baza danych jest niedostępna.": "The database is unavailable.",
 "wolne godziny": "free hours",
 "Cena ustalana w salonie": "Price set at the salon",
 "Nie znaleziono pliku config.js. Wgraj go do repozytorium na GitHub razem z pozostałymi plikami.": "The config.js file was not found. Upload it to the GitHub repository together with the other files.",
 "W pliku config.js nie ma jeszcze klucza projektu Supabase. Wklej adres projektu (Project URL) i klucz (Publishable key) i wgraj plik ponownie.": "The config.js file does not contain a Supabase project key yet. Paste the Project URL and the Publishable key and upload the file again.",
 "Nie wczytała się biblioteka Supabase. Sprawdź, czy plik supabase.js jest wgrany do repozytorium na GitHub obok index.html, i sprawdź połączenie z internetem.": "The Supabase library did not load. Check that supabase.js is uploaded to the GitHub repository next to index.html, and check your internet connection.",
 "Sprawdź połączenie z internetem i plik config.js.": "Check your internet connection and the config.js file.",
 "Aplikacja nie jest połączona z bazą danych.": "The app is not connected to the database.",
 "Nie udało się wczytać danych z bazy. Odśwież stronę.": "Could not load data from the database. Refresh the page.",
 "Dane ładują się dłużej niż zwykle. Sprawdź połączenie z internetem.": "Data is loading more slowly than usual. Check your internet connection.",
 "Twoje konto ma tylko podgląd: możesz przeglądać oferty, ale nie możesz zmieniać danych salonu.": "Your account is view-only: you can browse offers but cannot change salon data.",
 "Wczytuję dane…": "Loading data…",
 "Zgłoś salon": "Report a salon",
 "Dziękujemy! Zgłoszenie trafiło do administratora.": "Thank you! Your report has been sent to the administrator.",
 "Zgłoś kolejny salon": "Report another salon",
 "Napisz, jakiego salonu brakuje. Nie podajesz swoich danych.": "Tell us which salon is missing. You do not provide any personal data.",
 "Nazwa salonu": "Salon name",
 "Adres lub miejscowość": "Address or town",
 "np. Główna 5, Gidle": "e.g. Główna 5, Gidle",
 "Telefon salonu (jeśli znasz)": "Salon phone (if you know it)",
 "Uwagi (opcjonalnie)": "Notes (optional)",
 "Wyślij zgłoszenie": "Send report",
 "Wpisz nazwę salonu.": "Enter the salon name.",
 "Podaj adres (miejscowość) albo telefon salonu, żebyśmy mogli go znaleźć.": "Provide the address (town) or the salon's phone number so we can find it.",
 "Wysłano już kilka zgłoszeń. Spróbuj później.": "You have already sent several reports. Try again later.",
 "Teraz jest za dużo zgłoszeń. Spróbuj za godzinę.": "There are too many reports right now. Try again in an hour.",
 "Nie udało się wysłać zgłoszenia. Spróbuj później.": "Could not send the report. Try again later.",
 "Dla właściciela salonu": "For salon owners",
 "Salon dodaje wolny termin, a klient dzwoni i rezerwuje. Aplikacja jest bezpłatna.": "The salon adds a free appointment, and the customer calls and books. The app is free.",
 "Zeskanuj kod lub otwórz link.": "Scan the code or open the link.",
 "Wybierz „Dla salonów” → „Załóż konto”.": "Choose “For salons” → “Create account”.",
 "Uzupełnij profil z telefonem i dodaj termin.": "Complete the profile with a phone number and add an appointment.",
 "Zadzwonimy, żeby potwierdzić salon.": "We will call to verify the salon.",
 "Kod QR do aplikacji": "QR code for the app",
 "Zamknij": "Close",
 "Nie ma Twojego salonu na liście?": "Is your salon not on the list?",
 "Pokaż mu aplikację podczas wizyty.": "Show them the app during your visit.",
 "Pokaż salonowi": "Show it to the salon",
 "Wyślij link": "Send link",
 "Zgłoś nam salon": "Report a salon to us",
 "Last Minute Radomsko": "Last Minute Radomsko",
 "Zobacz aplikację z wolnymi terminami: fryzjer, uroda i zdrowie w Radomsku i okolicach. Może dodasz w niej swój salon?": "Check out this app with free appointments for hair, beauty and health in Radomsko and nearby. Maybe you would like to add your salon?",
 "Link skopiowany. Wklej go w wiadomości do salonu.": "Link copied. Paste it in a message to the salon.",
 "Link do aplikacji: ": "App link: ",
 "Brak terminów na {0}. Wybierz „Wszystkie”.": "No appointments for {0}. Choose “All”.",
 "dziś": "today",
 "wczoraj": "yesterday",
 "jutro": "tomorrow",
 "Aplikacja dopiero się rozwija": "The app is just getting started",
 "Salony dopiero do nas dołączają, więc nie ma jeszcze wolnych terminów. Gdy salon zwolni miejsce, pojawi się tutaj.": "Salons are only just joining us, so there are no free appointments yet. When a salon has a free slot, it will appear here.",
 "Masz ulubiony salon?": "Do you have a favourite salon?",
 "Zgłoś go albo pokaż mu aplikację.": "Report them or show them the app.",
 "Odległość liczona od Twojej lokalizacji.": "Distance is calculated from your location.",
 "Odśwież lokalizację": "Refresh location",
 "Ustalam Twoją lokalizację…": "Finding your location…",
 "Nie znamy Twojej lokalizacji.": "We do not know your location.",
 "Zezwól na lokalizację, a pokażemy odległość do salonów.": "Allow location access and we will show the distance to salons.",
 "Użyj mojej lokalizacji": "Use my location",
 "Dzień": "Day",
 "Wszystkie": "All",
 "z wolnymi terminami, od najbliższych terminów": "with free appointments, earliest first",
 "dziś {0}–{1}": "today {0}–{1}",
 "dziś zamknięte": "closed today",
 "Wolne godziny": "Free hours",
 "do": "until",
 "Usługę i cenę ustalisz z salonem": "You agree the service and price with the salon",
 "Zadzwoń": "Call",
 "od Ciebie": "from you",
 "Zadzwoń i zarezerwuj telefonicznie:": "Call and book by phone:",
 "Kopiuj numer": "Copy number",
 "Mapa": "Map",
 "Zgłoś nadużycie": "Report abuse",
 "Numer skopiowany: ": "Number copied: ",
 "Nie udało się skopiować. Numer salonu: ": "Could not copy. Salon number: ",
 "Zalogowano:": "Logged in:",
 "Wyloguj": "Log out",
 "Panel salonu": "Salon panel",
 "Do zatwierdzenia": "To approve",
 "Od klientów": "From customers",
 "Nadużycia": "Abuse reports",
 "Zatwierdzone": "Approved",
 "Dodaj termin": "Add appointment",
 "Moje terminy": "My appointments",
 "Profil": "Profile",
 "Salon czeka na zatwierdzenie.": "The salon is waiting for approval.",
 "Klienci jeszcze go nie widzą. Zadzwonimy na numer z profilu, żeby go potwierdzić.": "Customers cannot see it yet. We will call the number from the profile to verify it.",
 "Uzupełnij numer telefonu w profilu.": "Fill in the phone number in the profile.",
 "Powiadomienia nie są skonfigurowane.": "Notifications are not configured.",
 "Brak zgody na powiadomienia.": "Notification permission was not granted.",
 "Powiadomienia włączone na tym telefonie.": "Notifications enabled on this phone.",
 "Nie udało się włączyć powiadomień.": "Could not enable notifications.",
 "Powiadomienia wyłączone.": "Notifications disabled.",
 "Nie udało się wyłączyć powiadomień.": "Could not disable notifications.",
 "Tak będą wyglądać powiadomienia.": "This is what notifications will look like.",
 "Nie udało się pokazać powiadomienia.": "Could not show the notification.",
 "Ta przeglądarka nie obsługuje powiadomień.": "This browser does not support notifications.",
 "Powiadomienia są zablokowane w ustawieniach przeglądarki.": "Notifications are blocked in the browser settings.",
 "Powiadomienia na tym telefonie są włączone.": "Notifications on this phone are enabled.",
 "Włącz powiadomienia o nowych salonach i zgłoszeniach.": "Turn on notifications about new salons and reports.",
 "Pokaż próbne": "Show a test",
 "Jak znaleźć wolny termin?": "How do I find a free appointment?",
 "Na liście są salony z wolnymi terminami na najbliższe 7 dni, od najbliższych. Pasek z dniami zawęża listę do jednego dnia. „Pokaż odległość do salonów” dopisuje odległość od Ciebie (lokalizacja nie jest nigdzie zapisywana).": "The list shows salons with free appointments in the next 7 days, soonest first. The day bar narrows the list to one day. “Show distance to salons” adds the distance from you (your location is never stored).",
 "Jak się umówić?": "How do I book?",
 "Przy wybranym terminie dotknij „Zadzwoń” albo „SMS” i umów się bezpośrednio z salonem. Nie zakładasz konta, aplikacja nic nie kosztuje, a za wizytę płacisz w salonie.": "Tap “Call” or “Text” next to the appointment and book directly with the salon. No account is needed, the app is free and you pay at the salon.",
 "Wszystkie salony": "All salons",
 "Zakładka „Wszystkie salony” pokazuje wszystkie salony z adresem, godzinami otwarcia, cennikiem i telefonem – także te, które akurat nie mają wolnych terminów.": "The “All salons” tab lists every salon with its address, opening hours, prices and phone – including those without free appointments right now.",
 "Kod QR salonu": "A salon's QR code",
 "Po zeskanowaniu kodu salonu widzisz tylko ten salon, a telefon to zapamiętuje. Żeby wrócić do wszystkich salonów, zeskanuj ogólny kod aplikacji albo otwórz radomskolastminute.pl/#wszystkie.": "After scanning a salon's code you see only that salon, and your phone remembers it. To see all salons again, scan the app's general code or open radomskolastminute.pl/#wszystkie.",
 "Powiadomienia o wolnych terminach": "Free appointment notifications",
 "Przycisk z dzwonkiem nad listą włącza powiadomienia. W widoku jednego salonu dostajesz powiadomienia o jego nowych terminach, na stronie usługi (np. Masaż) – o nowych terminach tej usługi, a na stronie głównej wybierasz rodzaje usług. Kilka nowych terminów łączymy w jedno powiadomienie, z jednego salonu wysyłamy najwyżej jedno na godzinę, przy wszystkich salonach najwyżej trzy dziennie, a między 21:00 a 8:00 nie wysyłamy nic. Wyłączysz je tym samym przyciskiem.": "The bell button above the list turns notifications on. In a single salon's view you get its new appointments, on a service page (e.g. Massage) – new slots of that service, and on the home page you choose the types of service. Several new appointments are combined into one notification, at most one per hour from a salon, at most three a day for all salons, and nothing between 9 pm and 8 am. Turn them off with the same button.",
 "Powiadomienia na iPhonie": "Notifications on iPhone",
 "Na iPhonie powiadomienia działają tylko w aplikacji dodanej do ekranu głównego: w Safari dotknij „Udostępnij”, potem „Do ekranu początkowego”, otwórz aplikację z nowej ikony i włącz powiadomienia.": "On iPhone, notifications only work in the app added to the home screen: in Safari tap “Share”, then “Add to Home Screen”, open the app from the new icon and turn notifications on.",
 "Powiadomienia są zablokowane": "Notifications are blocked",
 "Jeśli przeglądarka zablokowała powiadomienia, dotknij ikony obok adresu strony, wybierz „Uprawnienia” albo „Ustawienia witryny”, potem „Powiadomienia” → „Zezwalaj” i odśwież stronę.": "If your browser blocked notifications, tap the icon next to the address, choose “Permissions” or “Site settings”, then “Notifications” → “Allow” and reload the page.",
 "Aplikacja na ekranie głównym": "App on your home screen",
 "Android: w Chrome dotknij menu ⋮ i wybierz „Zainstaluj aplikację” albo „Dodaj do ekranu głównego”. iPhone: Safari → „Udostępnij” → „Do ekranu początkowego”.": "Android: in Chrome tap the ⋮ menu and choose “Install app” or “Add to Home screen”. iPhone: Safari → “Share” → “Add to Home Screen”.",
 "Brakuje salonu?": "A salon is missing?",
 "Na dole listy wolnych terminów kliknij „Zgłoś nam salon” i podaj jego nazwę – nie podajesz swoich danych.": "At the bottom of the free appointments list tap “Report a salon” and give its name – you don't share any personal data.",
 "Logowanie i konto": "Signing in and your account",
 "Logujesz się loginem i hasłem podanymi przy rejestracji. Nowy salon pojawia się u klientów dopiero po zatwierdzeniu przez administratora. Jeśli zapomnisz hasła, skontaktuj się z administratorem – ustawi nowe.": "Sign in with the login and password from registration. A new salon becomes visible to customers only after the administrator approves it. If you forget your password, contact the administrator to set a new one.",
 "Dodawanie wolnego terminu": "Adding a free appointment",
 "Zakładka „Dodaj termin”: wybierz dzień, godzinę i czas trwania, wpisz usługę i cenę (dokładną, „od” albo do ustalenia w salonie), opcjonalnie promocję. Termin od razu widzą klienci.": "“Add appointment” tab: choose the day, time and duration, enter the service and price (exact, “from” or to be agreed), optionally a promotion. Customers see it right away.",
 "Gdy termin zostanie zajęty": "When an appointment is booked",
 "W „Moje terminy” oznacz go od razu jako „Zajęty”. To najważniejsza zasada: klienci ufają aplikacji, gdy wolne terminy są aktualne. Minione terminy usuwają się same.": "In “My appointments” mark it as “Booked” right away. This is the key rule: customers trust the app when free appointments are up to date. Past appointments are removed automatically.",
 "Profil salonu": "Salon profile",
 "W „Profil” uzupełnij nazwę, adres, telefon, godziny otwarcia, dni wolne, cennik, logo i zdjęcia – to widzą klienci.": "In “Profile” fill in the name, address, phone, opening hours, days off, prices, logo and photos – this is what customers see.",
 "Twój link i kod QR": "Your link and QR code",
 "W „Profil” znajdziesz swój link i kod QR („Pobierz kod QR do druku” daje gotowy plakat). Klient, który z nich wejdzie, widzi tylko Twój salon, a telefon to zapamiętuje.": "Your link and QR code are in “Profile” (“Download QR code to print” gives a ready poster). Customers who use them see only your salon, and their phone remembers it.",
 "Tylko dla moich klientów": "Only for my customers",
 "Na Twoją prośbę administrator może włączyć opcję ukrycia salonu ze wspólnej listy. Wtedy widzą go tylko osoby z Twoim linkiem lub kodem QR.": "At your request the administrator can enable hiding your salon from the shared list. Then only people with your link or QR code can see it.",
 "Powiadomienia dla klientów": "Notifications for customers",
 "Klienci mogą włączyć powiadomienia o Twoich nowych terminach. Gdy dodasz wolny termin, dostaną powiadomienie w ciągu około minuty (między 8:00 a 21:00). Dlatego dodawaj terminy od razu, gdy się zwolnią.": "Customers can turn on notifications about your new appointments. When you add a free appointment, they get a notification within about a minute (between 8 am and 9 pm). So add appointments as soon as they become free.",
 "Przypomnienia dla Ciebie": "Reminders for you",
 "W „Moje terminy” włącz przypomnienia: jeśli przez 3 dni nie zmienisz terminów, przypomnimy Ci o tym na telefonie (najwyżej raz na 3 dni).": "Turn on reminders in “My appointments”: if you don't change your appointments for 3 days, we'll remind you on your phone (at most once every 3 days).",
 "Statystyki": "Statistics",
 "W „Moje terminy” widzisz, ile razy klienci kliknęli przy Twoim salonie „Zadzwoń” albo „SMS” – dziś, w 7 i w 30 dni.": "In “My appointments” you can see how many times customers tapped “Call” or “Text” at your salon – today, in 7 and in 30 days.",
 "Pomoc": "Help",
 "Pomoc – jak to działa": "Help – how it works",
 "Wybierz usługę": "Choose a service",
 "Kosmetyka, paznokcie, brwi i rzęsy. Zadzwoń do salonu i płać na miejscu.": "Beautician, nails, brows and lashes. Call the salon and pay on site.",
 "Fryzjer i barber: strzyżenie, koloryzacja, broda. Zadzwoń do salonu i płać na miejscu.": "Hairdresser and barber: haircuts, colouring, beard. Call the salon and pay on site.",
 "Radomsko i okolice": "Radomsko and nearby",
 "brak terminów": "no slots",
 "Wszystkie usługi": "All services",
 "wolne terminy": "free slots",
 "Strzyżenie, koloryzacja, upięcia. Zadzwoń do salonu i płać na miejscu.": "Haircuts, colouring, styling. Call the salon and pay on site.",
 "Strzyżenie męskie i broda. Zadzwoń do barbera i płać na miejscu.": "Men's haircuts and beard. Call the barber and pay on site.",
 "Zabiegi na twarz i ciało. Zadzwoń do gabinetu i płać na miejscu.": "Face and body treatments. Call the salon and pay on site.",
 "Manicure i pedicure. Zadzwoń do salonu i płać na miejscu.": "Manicure and pedicure. Call the salon and pay on site.",
 "Stylizacja brwi i rzęs. Zadzwoń do salonu i płać na miejscu.": "Brow and lash styling. Call the salon and pay on site.",
 "Masaż relaksacyjny, leczniczy i sportowy. Zadzwoń do gabinetu i płać na miejscu.": "Relaxing, therapeutic and sports massage. Call and pay on site.",
 "Wolne wizyty u dentysty. Zadzwoń do gabinetu i umów się.": "Free dentist appointments. Call the practice to book.",
 "Pozostałe usługi. Zadzwoń do salonu i płać na miejscu.": "Other services. Call the salon and pay on site.",
 "Strony usług": "Service pages",
 "Na stronie głównej wybierz kafelek, np. „Masaż” – zobaczysz tylko gabinety masażu i ich wolne terminy. Każda usługa ma swój adres, np. radomskolastminute.pl/#masaz. „← Wszystkie usługi” wraca do strony głównej.": "On the home page choose a tile, e.g. “Massage” – you will see only massage salons and their free slots. Each service has its own address, e.g. radomskolastminute.pl/#masaz. “← All services” takes you back to the home page.",
 "Strona Twojej branży": "Your service page",
 "Każda usługa ma w aplikacji swoją stronę, np. radomskolastminute.pl/#masaz – klienci widzą tam tylko salony tej branży. Twój salon pojawia się na stronach usług zaznaczonych w „Profil” → „Rodzaj usług”.": "Each service has its own page in the app, e.g. radomskolastminute.pl/#masaz – customers see only salons of that kind there. Your salon appears on the pages of the services ticked in “Profile” → “Type of services”.",
 "Wróć do terminów": "Back to appointments",
 "Jak korzystać z aplikacji": "How to use the app",
 "Jak korzystać z aplikacji – dla salonów": "How to use the app – for salons",
 "Powiadamiaj o wolnych terminach": "Notify me about free appointments",
 "Powiadomienia włączone": "Notifications on",
 "Włącz": "Turn on",
 "Powiadomienia włączone.": "Notifications turned on.",
 "Na iPhonie najpierw dodaj aplikację do ekranu początkowego – zobacz Pomoc.": "On iPhone, first add the app to your home screen – see Help.",
 "Powiadomienia są zablokowane w ustawieniach przeglądarki – zobacz Pomoc.": "Notifications are blocked in your browser settings – see Help.",
 "Widoczność dla klientów:": "Visibility to customers:",
 "PUBLICZNY – widzą go wszyscy": "PUBLIC – everyone can see it",
 "UKRYTY – tylko przez link / QR": "HIDDEN – only via link / QR",
 "Zgoda na ukrycie:": "Permission to hide:",
 "NADANA – salon może sam wybrać": "GRANTED – the salon can choose",
 "BRAK – salon nie może się ukryć": "NONE – the salon cannot hide",
 "Nadaj zgodę na ukrycie": "Grant permission to hide",
 "Odbierz zgodę na ukrycie": "Withdraw permission to hide",
 "Twój salon jest publiczny – widzą go wszyscy klienci aplikacji na wspólnej liście.": "Your salon is public – all app customers can see it on the shared list.",
 "Twój salon jest ukryty – widzą go tylko klienci z Twoim linkiem lub kodem QR.": "Your salon is hidden – only customers with your link or QR code can see it.",
 "Ten link prowadzi prosto do Twojego salonu: klient, który go otworzy albo zeskanuje kod, zobaczy od razu Twoje wolne terminy.": "This link leads straight to your salon: customers who open it or scan the code see your free appointments right away.",
 "Tryb „Tylko dla moich klientów”:": "“Only for my customers” mode:",
 "dozwolony, salon ukryty": "allowed, salon hidden",
 "dozwolony, salon publiczny": "allowed, salon public",
 "niedostępny (salon publiczny)": "not available (salon public)",
 "Zezwól na tryb „Tylko dla moich klientów”": "Allow “Only for my customers” mode",
 "Cofnij zgodę": "Withdraw permission",
 "Zezwolić temu salonowi na ukrycie się ze wspólnej listy? Zrób to tylko na wyraźną prośbę salonu.": "Allow this salon to hide from the shared list? Only do this at the salon's explicit request.",
 "Cofnąć zgodę? Salon od razu wróci na wspólną listę.": "Withdraw permission? The salon will return to the shared list immediately.",
 "Zgoda nadana. Salon może teraz wybrać „Tylko dla moich klientów” w swoim profilu.": "Permission granted. The salon can now choose “Only for my customers” in its profile.",
 "Zgoda cofnięta. Salon jest publiczny.": "Permission withdrawn. The salon is public.",
 "Kontakt od klientów przez aplikację": "Customer contacts through the app",
 "Ile razy klienci kliknęli przy Twoim salonie przycisk „Zadzwoń” albo „SMS”.": "How many times customers tapped “Call” or “Text” at your salon.",
 "7 dni": "7 days",
 "30 dni": "30 days",
 "Razem": "Total",
 "Jeden klient liczy się raz na jedną wizytę w aplikacji. Nie wiemy, czy rozmowa lub wiadomość doszła do skutku.": "Each customer is counted once per visit to the app. We don't know whether the call or message actually happened.",
 "Otwórz stronę salonu:": "Open the salon page:",
 "Wolne terminy": "Free appointments",
 "Zadzwoń do salonu i umów wizytę. Płacisz na miejscu.": "Call the salon to book. You pay on site.",
 "Nie znaleziono salonu z tego linku. Mógł zmienić adres albo jeszcze nie został zatwierdzony.": "No salon found for this link. It may have changed or is not approved yet.",
 "Pokaż wszystkie salony": "Show all salons",
 "Brak wolnych terminów w najbliższych dniach. Zadzwoń do salonu, żeby zapytać o wizytę.": "No free appointments in the coming days. Call the salon to ask about a visit.",
 "Twój link i kod QR dla klientów": "Your link and QR code for customers",
 "Klient, który wejdzie przez ten link albo zeskanuje kod, zobaczy tylko Twój salon i Twoje wolne terminy.": "Customers who open this link or scan the code will see only your salon and your free appointments.",
 "Kopiuj link": "Copy link",
 "Udostępnij": "Share",
 "Pobierz kod QR do druku": "Download QR code to print",
 "Link skopiowany.": "Link copied.",
 "Link zacznie działać po zatwierdzeniu salonu.": "The link will work once your salon is approved.",
 "Widoczność salonu": "Salon visibility",
 "Publiczny": "Public",
 "Salon jest na wspólnej liście w aplikacji i pod Twoim linkiem.": "Your salon is on the shared list in the app and under your link.",
 "Tylko dla moich klientów": "Only for my customers",
 "Salonu nie ma na wspólnej liście. Widzą go tylko osoby z Twoim linkiem lub kodem QR.": "Your salon is not on the shared list. Only people with your link or QR code can see it.",
 "Zapisano: salon jest publiczny.": "Saved: your salon is public.",
 "Zapisano: salon widoczny tylko przez Twój link.": "Saved: your salon is visible only through your link.",
 "Nie udało się zapisać widoczności.": "Could not save visibility.",
 "Zeskanuj telefonem": "Scan with your phone",
 "ukryty": "hidden",
 "Nie udało się przygotować kodu QR.": "Could not prepare the QR code.",
 "Włącz poranne podsumowanie: nowe salony, zgłoszenia i salony do przypomnienia.": "Turn on the morning summary: new salons, reports and salons to remind.",
 "Aktywność": "Activity",
 "Aktywność salonów": "Salon activity",
 "Kiedy salony ostatnio zmieniały terminy. Salonom bez przypomnień na telefonie możesz wysłać SMS.": "When salons last changed their appointments. You can text salons that have no reminders on their phone.",
 "Brak zatwierdzonych salonów.": "No approved salons.",
 "bez zmian od {0} dni": "no changes for {0} days",
 "aktywny": "active",
 "Ostatnia zmiana terminów:": "Last appointment change:",
 "dziś": "today",
 "{0} dni temu": "{0} days ago",
 "Wolne terminy w ofercie:": "Free appointments listed:",
 "Przypomnienia na telefonie:": "Phone reminders:",
 "włączone ({0})": "on ({0})",
 "wyłączone": "off",
 "Wysłane przypomnienia: {0} z 3, ostatnie {1}.": "Reminders sent: {0} of 3, last on {1}.",
 "Automatyczne przypomnienia wstrzymane po 3 próbach. Zadzwoń albo wyślij SMS.": "Automatic reminders paused after 3 attempts. Call or send a text.",
 "Ten salon nie dostaje przypomnień na telefon. Możesz wysłać SMS.": "This salon gets no phone reminders. You can send a text.",
 "Wyślij SMS": "Send a text",
 "Dzień dobry, tu Last Minute Radomsko. Przypominamy o dodaniu wolnych terminów w aplikacji – klienci szukają wizyt last minute. Wystarczy minuta: {0}": "Hello, this is Last Minute Radomsko. A reminder to add your free appointments in the app – customers are looking for last-minute visits. It takes a minute: {0}",
 "Dane o aktywności są niedostępne. Uruchom w Supabase plik supabase-przypomnienia.sql.": "Activity data is unavailable. Run supabase-przypomnienia.sql in Supabase.",
 "Przypomnienia są włączone.": "Reminders are on.",
 "Jeśli przez 3 dni nie zmienisz terminów, przypomnimy Ci o tym na tym telefonie.": "If you don't change your appointments for 3 days, we'll remind you on this phone.",
 "Włącz przypomnienia.": "Turn on reminders.",
 "Gdy przez 3 dni nie zmienisz terminów, przypomnimy Ci na telefonie o dodaniu wolnych miejsc. Najwyżej raz na 3 dni.": "If you don't change your appointments for 3 days, we'll remind you on your phone to add free slots. At most once every 3 days.",
 "Włącz przypomnienia": "Turn on reminders",
 "Przypomnienia na iPhonie działają po dodaniu aplikacji do ekranu głównego: w Safari kliknij „Udostępnij”, potem „Do ekranu początkowego”, otwórz aplikację z nowej ikony i włącz przypomnienia tutaj.": "On iPhone, reminders work after adding the app to the home screen: in Safari tap “Share”, then “Add to Home Screen”, open the app from the new icon and turn on reminders here.",
 "Powiadomienia są zablokowane w ustawieniach przeglądarki. Odblokuj je, żeby dostawać przypomnienia.": "Notifications are blocked in your browser settings. Unblock them to get reminders.",
 "Ta przeglądarka nie obsługuje przypomnień.": "This browser does not support reminders.",
 "Przypomnienia włączone na tym telefonie.": "Reminders turned on for this phone.",
 "Nie udało się włączyć przypomnień.": "Could not turn on reminders.",
 "Przypomnienia wyłączone.": "Reminders turned off.",
 "Nie udało się wyłączyć przypomnień.": "Could not turn off reminders.",
 "Tak będzie wyglądać przypomnienie.": "This is what a reminder will look like.",
 "Wyłącz": "Turn off",
 "Włącz powiadomienia": "Turn on notifications",
 "Zgłoszenie oznaczone jako zatwierdzone.": "Report marked as approved.",
 "Zgłoszenie odrzucone.": "Report rejected.",
 "brak numeru telefonu": "no phone number",
 "Czekają na zatwierdzenie": "Waiting for approval",
 "Zatwierdzaj po telefonie kontrolnym.": "Approve after a verification call.",
 "Zgłoszenia od klientów": "Reports from customers",
 "Salony zgłoszone przez klientów.": "Salons reported by customers.",
 "Zgłoszenia nadużyć": "Abuse reports",
 "Salony zgłoszone jako nieprawdziwe.": "Salons reported as fake.",
 "Zatwierdzone salony": "Approved salons",
 "Salony widoczne dla klientów.": "Salons visible to customers.",
 "Odśwież": "Refresh",
 "brak adresu": "no address",
 "zgłoszono": "reported",
 "Telefon:": "Phone:",
 "Odrzucone": "Rejected",
 "Brak nowych zgłoszeń od klientów.": "No new reports from customers.",
 "Brak zgłoszeń nadużyć.": "No abuse reports.",
 "Brak zatwierdzonych salonów.": "No approved salons.",
 "Brak salonów do zatwierdzenia.": "No salons waiting for approval.",
 "Zgłoszenia:": "Reports:",
 "niezatwierdzony": "not approved",
 "zatwierdzony": "approved",
 "Wstrzymaj": "Suspend",
 "Wyczyść zgłoszenia": "Clear reports",
 "terminów:": "appointments:",
 "założono": "created",
 "Zatwierdź": "Approve",
 "Odrzuć": "Reject",
 "Najpierw zadzwoń i potwierdź salon.": "Call first and verify the salon.",
 "Bez numeru nie da się zweryfikować.": "Without a number it cannot be verified.",
 "Salon zatwierdzony. Klienci już go widzą.": "Salon approved. Customers can see it now.",
 "Salon wstrzymany. Klienci go nie widzą.": "Salon suspended. Customers cannot see it.",
 "Salon odrzucony i usunięty z listy.": "Salon rejected and removed from the list.",
 "Zgłoszenia wyczyszczone.": "Reports cleared.",
 "Ten salon został już przez Ciebie zgłoszony.": "You have already reported this salon.",
 "Zgłosić ten salon administratorowi (np. gdy to nie jest jego salon albo dane są nieprawdziwe)?": "Report this salon to the administrator (e.g. if it is not their salon or the data is false)?",
 "Dziękujemy. Zgłoszenie trafi do administratora.": "Thank you. Your report will go to the administrator.",
 "Załóż konto salonu": "Create a salon account",
 "Zaloguj się": "Log in",
 "Aplikacja jest bezpłatna. Podaj nazwę salonu, login i hasło. Salon pojawi się po weryfikacji telefonicznej.": "The app is free. Enter the salon name, login and password. The salon will appear after phone verification.",
 "Zaloguj się loginem i hasłem.": "Log in with your login and password.",
 "Login": "Login",
 "Hasło": "Password",
 "Pokaż": "Show",
 "Powtórz hasło": "Repeat password",
 "Załóż konto": "Create account",
 "Zaloguj": "Log in",
 "Mam już konto": "I already have an account",
 "Login: 3–30 znaków, małe litery bez polskich znaków, cyfry lub . _ - (np. salon-uroda). Hasło: min. 6 znaków. Nie ma odzyskiwania hasła, więc je zapisz.": "Login: 3–30 characters, lowercase letters without Polish diacritics, digits or . _ - (e.g. salon-beauty). Password: at least 6 characters. There is no password recovery, so write it down.",
 "Salon o takiej nazwie już istnieje. Wybierz inną nazwę.": "A salon with this name already exists. Choose a different name.",
 "Nieprawidłowy login lub hasło.": "Incorrect login or password.",
 "Konto z tym loginem już istnieje. Wybierz inny login albo zaloguj się.": "An account with this login already exists. Choose a different login or log in.",
 "Konto nie jest potwierdzone. Administrator musi wyłączyć opcję Confirm email w Supabase.": "The account is not confirmed. The administrator must turn off the Confirm email option in Supabase.",
 "Za dużo prób. Spróbuj ponownie za kilka minut.": "Too many attempts. Try again in a few minutes.",
 "Hasło jest za słabe. Użyj co najmniej 6 znaków.": "The password is too weak. Use at least 6 characters.",
 "Serwer odrzucił ten login. Spróbuj innego albo zgłoś problem administratorowi.": "The server rejected this login. Try another one or report the problem to the administrator.",
 "Brak połączenia z internetem. Spróbuj ponownie.": "No internet connection. Try again.",
 "Nie udało się zalogować. Spróbuj ponownie.": "Could not log in. Try again.",
 "Wpisz login i hasło.": "Enter your login and password.",
 "Login ma mieć 3–30 znaków: małe litery bez polskich znaków, cyfry oraz . _ - (bez spacji i bez @).": "The login must have 3–30 characters: lowercase letters without Polish diacritics, digits and . _ - (no spaces and no @).",
 "Hasło musi mieć co najmniej 6 znaków.": "The password must have at least 6 characters.",
 "Hasła nie są takie same.": "The passwords do not match.",
 "Konto zostało założone, ale wymaga potwierdzenia, a ta aplikacja nie wysyła e-maili. Administrator musi wyłączyć opcję Confirm email w Supabase.": "The account was created but requires confirmation, and this app does not send emails. The administrator must turn off the Confirm email option in Supabase.",
 "Konto założone. Uzupełnij profil z telefonem.": "Account created. Complete the profile with a phone number.",
 "Dodaj termin last minute": "Add a last-minute appointment",
 "Termin znika sam po godzinie lub gdy oznaczysz go jako zajęty.": "The appointment disappears by itself after its time or when you mark it as taken.",
 "Rodzaj terminu": "Appointment type",
 "Konkretna usługa": "Specific service",
 "Od": "From",
 "Do": "To",
 "Klient zadzwoni i ustali z salonem usługę i cenę.": "The customer will call and agree the service and price with the salon.",
 "Godzina": "Time",
 "Usługa": "Service",
 "Zniżka (%)": "Discount (%)",
 "Cena promocyjna (zł)": "Promotional price (PLN)",
 "opcjonalnie": "optional",
 "Bez ceny możesz podać zniżkę w %, np. 30.": "Without a price you can enter a discount in %, e.g. 30.",
 "Opublikuj termin": "Publish appointment",
 "Terminy z usługą i ceną dodasz po uzupełnieniu cennika w „Profil”.": "You can add appointments with a service and price after filling in the price list in “Profile”.",
 "Klient zobaczy: {0} {1}–{2}, wolne godziny (usługę i cenę ustalicie telefonicznie).": "The customer will see: {0} {1}–{2}, free hours (you agree the service and price by phone).",
 "Klient zobaczy: {0} {1}–{2}, {3}, {4}.": "The customer will see: {0} {1}–{2}, {3}, {4}.",
 "Wpisz godzinę rozpoczęcia.": "Enter the start time.",
 "Godzina „Do” musi być późniejsza niż „Od”.": "The “To” time must be later than the “From” time.",
 "Zakres może mieć najwyżej 8 godzin.": "The range can be 8 hours at most.",
 "Ten zakres już minął. Wybierz późniejsze godziny albo inny dzień.": "This range has already passed. Choose later hours or another day.",
 "Wybierz usługę.": "Choose a service.",
 "Ta godzina już minęła. Wybierz późniejszą godzinę albo inny dzień.": "This time has already passed. Choose a later time or another day.",
 "Ten czas nachodzi na termin {0}–{1} ({2}). Wybierz inną godzinę.": "This time overlaps with the appointment {0}–{1} ({2}). Choose a different time.",
 "Termin opublikowany: {0} {1}.": "Appointment published: {0} {1}.",
 "Gdy ktoś zarezerwuje termin telefonicznie, kliknij „Zajęty”.": "When someone books an appointment by phone, click “Taken”.",
 "Brak terminów. Dodaj pierwszy w „Dodaj termin”.": "No appointments. Add the first one in “Add appointment”.",
 "Widoczne dla klientów teraz:": "Visible to customers now:",
 "bez usługi i ceny": "no service and price",
 "Wolny": "Free",
 "Zajęty": "Taken",
 "Minął": "Past",
 "Znów wolny": "Free again",
 "Edytuj": "Edit",
 "Usuń": "Delete",
 "Bez zmiany:": "No change:",
 "Edytuj wolne godziny": "Edit free hours",
 "Zapisz zmiany": "Save changes",
 "Anuluj": "Cancel",
 "Edytuj termin": "Edit appointment",
 "brak zniżki": "no discount",
 "brak promocji": "no promotion",
 "Wybierz godzinę.": "Choose a time.",
 "Termin zaktualizowany.": "Appointment updated.",
 "Te godziny nachodzą na termin {0}–{1} ({2}). Wybierz inne godziny.": "These hours overlap with the appointment {0}–{1} ({2}). Choose different hours.",
 "Profil salonu": "Salon profile",
 "To widzą klienci.": "This is what customers see.",
 "Dane salonu": "Salon details",
 "Adres": "Address",
 "ul. Przykładowa 1, Miejscowość": "Example St 1, Town",
 "Telefon": "Phone",
 "Wpisz ulicę, numer i miejscowość po przecinku, np. Główna 5, Gidle. Bez miejscowości przyjmujemy Radomsko.": "Enter the street, number and town after a comma, e.g. Główna 5, Gidle. Without a town we assume Radomsko.",
 "Opis": "Description",
 "Link do mapy": "Map link",
 "Utwórz link z adresu": "Create link from address",
 "Godziny otwarcia": "Opening hours",
 "od": "from",
 "zamknięte": "closed",
 "Jak w poniedziałek": "Same as Monday",
 "Wpisz godziny w poniedziałek: wtorek–piątek uzupełnią się same. Każdy dzień możesz potem zmienić.": "Enter the hours for Monday: Tuesday–Friday will fill in automatically. You can change each day afterwards.",
 "Zapisz profil": "Save profile",
 "Niezapisane zmiany": "Unsaved changes",
 "Cennik usług": "Price list",
 "Z tej listy wybierasz usługę przy dodawaniu terminu.": "You choose the service from this list when adding an appointment.",
 "Nazwa usługi": "Service name",
 "np. Strzyżenie damskie, manicure hybrydowy": "e.g. Women's haircut, gel manicure",
 "Cena": "Price",
 "Dokładna cena": "Exact price",
 "Od … zł": "From … PLN",
 "Ustalana w salonie": "Set at the salon",
 "Kwota (zł)": "Amount (PLN)",
 "Dodaj usługę": "Add service",
 "Usługi fryzjerskie": "Hairdressing services",
 "Usługi w salonie": "Services at the salon",
 "Rodzaj usług": "Type of services",
 "Zaznacz wszystko, co oferuje salon.": "Select everything the salon offers.",
 "Klient zobaczy: {0} {1}–{2}, {3}.": "The customer will see: {0} {1}–{2}, {3}.",
 "Klient zobaczy: {0} {1}–{2}, wolne godziny (usługę ustalicie telefonicznie).": "The customer will see: {0} {1}–{2}, free hours (you agree the service by phone).",
 "Klient zadzwoni i ustali z salonem usługę.": "The customer will call and agree the service with the salon.",
 "Usługę ustalisz z salonem": "You agree the service with the salon",
 "bez usługi": "no service",
 "Usługi": "Services",
 "Wybierz co najmniej jeden rodzaj usług.": "Choose at least one type of service.",
 "Podstawowa": "Basic",
 "Kliknięcia „Zadzwoń” przy Twoim salonie:": "Clicks on “Call” for your salon:",
 "ostatnie 7 dni": "last 7 days",
 "ostatnie 30 dni": "last 30 days",
 "W Safari stuknij <b>Udostępnij</b>, potem <b>Do ekranu początkowego</b>.": "In Safari tap <b>Share</b>, then <b>Add to Home Screen</b>.",
 "Znajdziesz ją potem jednym stuknięciem.": "You will then find it with a single tap.",
 "W menu przeglądarki wybierz <b>Dodaj do ekranu głównego</b> lub <b>Zainstaluj aplikację</b>.": "In the browser menu choose <b>Add to Home screen</b> or <b>Install app</b>.",
 "Dodaj do ekranu głównego": "Add to Home screen",
 "Dodaj aplikację do ekranu głównego": "Add the app to your Home screen",
 "Dodaj do ekranu": "Add to screen",
 "Nie teraz": "Not now",
 "Dodaj aplikację do ekranu głównego, żeby łatwo ją znaleźć.": "Add the app to your Home screen so you can find it easily.",
 "Wyślij sobie link": "Send yourself the link",
 "Dodaj aplikację do ekranu głównego, żeby wracać tu jednym stuknięciem.": "Add the app to your Home screen to come back here with a single tap.",
 "Zapisuję profil…": "Saving profile…",
 "Profil nie został zapisany. Wyjść bez zapisywania zmian?": "The profile was not saved. Leave without saving changes?",
 "Nazwa salonu nie może być pusta.": "The salon name cannot be empty.",
 " Profil nie został zapisany.": " The profile was not saved.",
 " Nie znaleziono dokładnego adresu, odległość liczymy do środka miejscowości.": " The exact address was not found; the distance is calculated to the centre of the town.",
 " Nie znaleziono adresu, odległość nie będzie pokazywana. Wpisz ulicę, numer i miejscowość, np. Główna 5, Gidle.": " The address was not found, so the distance will not be shown. Enter the street, number and town, e.g. Główna 5, Gidle.",
 "Profil zapisany automatycznie.": "Profile saved automatically.",
 "Profil zapisany.": "Profile saved.",
 "Usługa usunięta z cennika. Opublikowane terminy zostają bez zmian.": "Service removed from the price list. Published appointments remain unchanged.",
 "Usługa dodana.": "Service added.",
 "Wpisz nazwę usługi.": "Enter the service name.",
 "Podaj kwotę w złotych, np. 90, albo wybierz „Ustalana w salonie”.": "Enter the amount in zloty, e.g. 90, or choose “Set at the salon”.",
 "Odrzucić ten salon? Jego profil i terminy zostaną usunięte. Konto logowania usuniesz w Supabase (Authentication → Users).": "Reject this salon? Its profile and appointments will be deleted. You delete the login account in Supabase (Authentication → Users).",
 "Wstrzymać ten salon? Zniknie z listy klientów.": "Suspend this salon? It will disappear from the customer list.",
 "Odrzucić to zgłoszenie? Zostanie usunięte z listy.": "Reject this report? It will be removed from the list.",
 "Odświeżam zgłoszenia…": "Refreshing reports…",
 "Najpierw wpisz adres.": "Enter the address first.",
 "Link do mapy utworzony.": "Map link created.",
 "Termin usunięty z oferty.": "Appointment removed from the offer.",
 "Termin oznaczony jako zajęty i zniknął z oferty.": "Appointment marked as taken and removed from the offer.",
 "Termin znów jest widoczny dla klientów.": "The appointment is visible to customers again.",
 "Ukryj": "Hide",
 "dziś nieczynne": "closed today",
 "Nieczynne:": "Closed:",
 "Wolne terminy": "Free slots",
 "Poprzedni miesiąc": "Previous month",
 "Następny miesiąc": "Next month",
 "święto": "holiday",
 "zamkn.": "closed",
 "zamknięte": "closed",
 "Wybierz dzień w kalendarzu": "Choose a day in the calendar",
 "Liczba na dniu to Twoje wolne terminy. Dni zamknięte klienci widzą jako nieczynne.": "The number on a day shows your free appointments. Customers see closed days as closed.",
 "Salon jest tego dnia zamknięty. Klienci nie zobaczą terminów z tego dnia.": "The salon is closed on this day. Customers will not see appointments for this day.",
 "Otwórz ten dzień": "Open this day",
 "Otwórz salon tego dnia": "Open the salon on this day",
 "W profilu salonu ten dzień tygodnia jest zamknięty. Jeśli wyjątkowo pracujesz, otwórz salon tego dnia.": "This weekday is set as closed in the salon profile. If you are working this time, open the salon on this day.",
 "Zamknięte (święto, urlop)": "Closed (holiday, leave)",
 "Terminy last minute dodajesz na najbliższe 7 dni. Ten dzień możesz już teraz oznaczyć jako zamknięty.": "Last-minute appointments can be added for the next 7 days. You can already mark this day as closed.",
 "Święto: {0}. Jeśli salon nie pracuje, oznacz dzień jako zamknięty.": "Public holiday: {0}. If the salon is not open, mark the day as closed.",
 "Już dodane:": "Already added:",
 "Tego dnia masz wolne terminy ({0}). Zostaną usunięte z oferty. Zamknąć dzień?": "You have free appointments on this day ({0}). They will be removed from the offer. Close the day?",
 "Dzień oznaczony jako zamknięty.": "Day marked as closed.",
 "Dzień znów jest otwarty.": "The day is open again.",
 "Salon jest tego dnia zamknięty. Wybierz inny dzień.": "The salon is closed on this day. Choose another day.",
 "Wybierz dzień z najbliższego tygodnia.": "Choose a day within the next week.",
 "Logo salonu": "Salon logo",
 "Najlepiej kwadratowe, np. to samo co na Facebooku salonu. Zmniejszymy je automatycznie.": "Square works best, e.g. the same as on the salon's Facebook page. We resize it automatically.",
 "Wybierz zdjęcie": "Choose image",
 "Zmień logo": "Change logo",
 "Usuń logo": "Remove logo",
 "Wybierz plik ze zdjęciem.": "Choose an image file.",
 "Wgrywam logo…": "Uploading logo…",
 "Logo zapisane.": "Logo saved.",
 "Logo usunięte.": "Logo removed.",
 "Nie udało się wgrać logo. Spróbuj ponownie albo wybierz inne zdjęcie.": "Could not upload the logo. Try again or choose another image.",
 "Usunąć logo salonu?": "Remove the salon logo?",
 "Najbliższe 7 dni": "Next 7 days",
 "Odległość od Twojej lokalizacji.": "Distance from your location.",
 "Pokaż odległość do salonów": "Show distance to salons",
 "Dodaj aplikację do ekranu głównego": "Add the app to your Home screen",
 "Tel.": "Tel.",
 "Kopiuj": "Copy",
 "Więcej opcji": "More options",
 "Wcześniejsze tygodnie": "Earlier weeks",
 "Następne tygodnie": "Later weeks",
 "Zdjęcia salonu": "Salon photos",
 "Nasze realizacje": "Our work",
 "Wnętrze, fotele, recepcja. Klient zobaczy, gdzie przyjdzie.": "The interior, chairs, reception. Customers see where they are going.",
 "Fryzury, paznokcie, makijaże i inne efekty Waszej pracy.": "Haircuts, nails, make-up and other results of your work.",
 "Dodaj zdjęcia": "Add photos",
 "Usuń zdjęcie": "Delete photo",
 "Usunąć to zdjęcie?": "Delete this photo?",
 "Zdjęcie usunięte.": "Photo deleted.",
 "Wgrywam zdjęcia {0}/{1}…": "Uploading photos {0}/{1}…",
 "Dodano zdjęcia: {0}.": "Photos added: {0}.",
 "Limit zdjęć w tej sekcji: {0}. Usuń któreś, żeby dodać nowe.": "Photo limit for this section: {0}. Delete one to add new ones.",
 "Nie udało się wgrać zdjęcia. Spróbuj ponownie albo wybierz inne.": "Could not upload the photo. Try again or choose another one.",
 "Publikuj tylko własne zdjęcia. Jeśli widać na nich klienta, musisz mieć jego zgodę.": "Publish only your own photos. If a customer can be seen, you need their consent.",
 "Zdjęcia": "Photos",
 "Pokaż zdjęcie {0} z {1}": "Show photo {0} of {1}",
 "Poprzednie zdjęcie": "Previous photo",
 "Następne zdjęcie": "Next photo",
 "Nowy Rok": "New Year's Day",
 "Trzech Króli": "Epiphany",
 "Święto Pracy": "Labour Day",
 "Święto Konstytucji 3 Maja": "Constitution Day",
 "Wniebowzięcie NMP": "Assumption Day",
 "Wszystkich Świętych": "All Saints' Day",
 "Święto Niepodległości": "Independence Day",
 "Wigilia": "Christmas Eve",
 "Boże Narodzenie": "Christmas Day",
 "Drugi dzień świąt": "Boxing Day",
 "Wielkanoc": "Easter Sunday",
 "Poniedziałek Wielkanocny": "Easter Monday",
 "Zielone Świątki": "Pentecost",
 "Boże Ciało": "Corpus Christi",
 "Jasny": "Light",
 "Ciemny": "Dark",
 "Systemowy": "System",
 "Wygląd": "Look",
 "Tryb": "Mode",
 "Kolor": "Colour",
 "Terakota": "Terracotta",
 "Bordowy": "Burgundy",
 "Styl": "Style",
 "Salon": "Salon",
 "Elegancki": "Elegant",
 "Barber": "Barber",
 "Natura": "Nature",
 "Prosty": "Simple",
 "Zdjęcie w nagłówku": "Header photo",
 "Dopasuj do stylu": "Match the style",
 "Wnętrze salonu": "Salon interior",
 "Fryzura ślubna": "Bridal hair",
 "Strzyżenie brody": "Beard trim",
 "Stanowisko barbera": "Barber station",
 "Logo": "Logo",
 "Fioletowy": "Violet",
 "Purpurowy": "Purple",
 "Pomarańczowy": "Orange",
 "Różowy": "Pink",
 "Złoty": "Gold",
 "Szałwiowy": "Sage",
 "Morski": "Teal",
 "Grafitowy": "Graphite",
 "Wybór zapisuje się w tej przeglądarce.": "Your choice is saved in this browser.",
 "Zmiany zapisują się automatycznie, także po wyjściu z aplikacji.": "Changes are saved automatically, also when you leave the app.",
 "Wszystkie salony": "All salons",
 "Widok klienta": "Customer view",
 "Szukaj salonu lub usługi": "Search for a salon or service",
 "np. koloryzacja, manicure, nazwa salonu": "e.g. colouring, manicure, salon name",
 "Rodzaj salonu": "Type of salon",
 "Kolejność wg odległości od Ciebie.": "Sorted by distance from you.",
 "Kolejność wg odległości od centrum Radomska.": "Sorted by distance from Radomsko centre.",
 "Nie znaleziono salonów dla wybranych filtrów.": "No salons match the selected filters.",
 "Wyczyść filtry": "Clear filters",
 "Pokaż profil": "Show profile",
 "Zwiń profil": "Hide profile",
 "Cennik orientacyjny, cenę potwierdź w salonie.": "Prices are indicative, please confirm the price with the salon.",
 "Salon nie dodał jeszcze cennika.": "The salon has not added a price list yet.",
 "Cenę ustalisz z salonem.": "You will agree the price with the salon.",
 "Wolne terminy: {0}, najbliższy {1}": "Free slots: {0}, next {1}",
 "Zobacz terminy": "See slots",
 "Brak wolnych terminów w najbliższych dniach.": "No free slots in the coming days.",
 "nieczynne": "closed"
};
  /* tr(): tekst po polsku jest kluczem; po angielsku bierzemy tłumaczenie z EN. {0}, {1} to miejsca na wartości. */
  function tr(k,a){var s=(LANG==="en"&&EN[k]!=null)?EN[k]:k;if(a)for(var i=0;i<a.length;i++)s=s.split("{"+i+"}").join(a[i]);return s}
  function lc(){return LANG==="en"?"en-GB":"pl-PL"}
  var DEFAULT_SVC_NAME="Usługi fryzjerskie"; /* wartość zapisana w bazie w starych terminach: NIE zmieniać */
  /* rodzaje usług salonu (kolumna salons.category, wiele wartości po przecinku) */
  var CATS=[{k:"fryzjer",pl:"Fryzjer",en:"Hairdresser"},{k:"barber",pl:"Barber",en:"Barber"},{k:"kosmetyka",pl:"Kosmetyka",en:"Beautician"},{k:"paznokcie",pl:"Paznokcie",en:"Nails"},{k:"brwi",pl:"Brwi i rzęsy",en:"Brows & lashes"},{k:"masaz",pl:"Masaż",en:"Massage"},{k:"stomatolog",pl:"Stomatolog",en:"Dentist"},{k:"inne",pl:"Inne",en:"Other"}];
  /* ikony branż (24×24, obrys) – używane w kafelkach, nagłówku i na kartach */
  var CATIC={
    fryzjer:'<circle cx="6" cy="6" r="3"/><path d="M8.12 8.12 12 12"/><path d="M20 4 8.12 15.88"/><circle cx="6" cy="18" r="3"/><path d="M14.8 14.8 20 20"/>',
    barber:'<path d="M2.5 13.5c2.2.6 3.6-3 6.6-3 1.6 0 2.3.9 2.9 1.8.6-.9 1.3-1.8 2.9-1.8 3 0 4.4 3.6 6.6 3-.9 3.4-4.5 4.6-6.8 3.4-1.2-.6-2-1.4-2.7-2.1-.7.7-1.5 1.5-2.7 2.1-2.3 1.2-5.9 0-6.8-3.4Z"/>',
    kosmetyka:'<path d="M11 3c.7 4.5 2.5 6.3 7 7-4.5.7-6.3 2.5-7 7-.7-4.5-2.5-6.3-7-7 4.5-.7 6.3-2.5 7-7Z"/><path d="M19 15v5M16.5 17.5h5"/>',
    paznokcie:'<path d="M10 2h4v5h-4z"/><path d="M7 12a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v8a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2z"/><path d="M10 9V7M14 9V7"/>',
    brwi:'<path d="M2 14s3.5-6 10-6 10 6 10 6-3.5 6-10 6-10-6-10-6Z"/><circle cx="12" cy="14" r="2.5"/><path d="M5 7.5 6.3 9M12 5v2.2M19 7.5 17.7 9"/>',
    masaz:'<path d="M12 20c-4.2 0-8.2-2-9.2-6.2 3.2-1 6.2.2 9.2 3.2 3-3 6-4.2 9.2-3.2-1 4.2-5 6.2-9.2 6.2Z"/><path d="M12 17c-2.2-2.2-3.2-5.6-2-9.5 1 .5 1.6 1.3 2 2.1.4-.8 1-1.6 2-2.1 1.2 3.9.2 7.3-2 9.5Z"/>',
    stomatolog:'<path d="M7.5 3C5 3 3.5 5 3.5 7.5c0 3 1.5 4.5 2 7.5.4 2.6 1 6 2.6 6s1.6-4.5 3.9-4.5 2.3 4.5 3.9 4.5 2.2-3.4 2.6-6c.5-3 2-4.5 2-7.5C20.5 5 19 3 16.5 3c-2 0-2.7 1-4.5 1S9.5 3 7.5 3Z"/>',
    inne:'<path d="M19 14c1.5-1.5 3-3.2 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.8 0-3 .5-4.5 2-1.5-1.5-2.7-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4 3 5.5l7 7Z"/>',
    uroda:'<path d="M11 3c.7 4.5 2.5 6.3 7 7-4.5.7-6.3 2.5-7 7-.7-4.5-2.5-6.3-7-7 4.5-.7 6.3-2.5 7-7Z"/><path d="M19 15v5M16.5 17.5h5"/>',
    ogolne:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>'
  };
  window.FLM_CATIC=CATIC;
  function catIc(k){return CATIC[k]||CATIC.inne}
  /* nagłówki stron branżowych (#fryzjer, #masaz …) */
  var CAT_TAG={uroda:"Kosmetyka, paznokcie, brwi i rzęsy. Zadzwoń do salonu i płać na miejscu.",fryzjer:"Fryzjer i barber: strzyżenie, koloryzacja, broda. Zadzwoń do salonu i płać na miejscu.",barber:"Strzyżenie męskie i broda. Zadzwoń do barbera i płać na miejscu.",kosmetyka:"Zabiegi na twarz i ciało. Zadzwoń do gabinetu i płać na miejscu.",paznokcie:"Manicure i pedicure. Zadzwoń do salonu i płać na miejscu.",brwi:"Stylizacja brwi i rzęs. Zadzwoń do salonu i płać na miejscu.",masaz:"Masaż relaksacyjny, leczniczy i sportowy. Zadzwoń do gabinetu i płać na miejscu.",stomatolog:"Wolne wizyty u dentysty. Zadzwoń do gabinetu i umów się.",inne:"Pozostałe usługi. Zadzwoń do salonu i płać na miejscu."};
  function brandName(k){return k&&k!=="inne"?catName(k)+" Last Minute":"Last Minute Radomsko"}
  function catName(k){for(var i=0;i<CATS.length;i++)if(CATS[i].k===k)return LANG==="en"?CATS[i].en:CATS[i].pl;for(i=0;i<GROUPS.length;i++)if(GROUPS[i].k===k)return LANG==="en"?GROUPS[i].en:GROUPS[i].pl;return k}
  /* kafelki/strony dla klientów: branże pogrupowane (salon w profilu wybiera dokładne rodzaje usług) */
  var GROUPS=[{k:"fryzjer",pl:"Fryzjer",en:"Hairdresser",c:["fryzjer","barber"]},{k:"uroda",pl:"Uroda",en:"Beauty",c:["kosmetyka","paznokcie","brwi"]},{k:"masaz",pl:"Masaż",en:"Massage",c:["masaz"]},{k:"stomatolog",pl:"Stomatolog",en:"Dentist",c:["stomatolog"]}];
  function grpCats(g){for(var i=0;i<GROUPS.length;i++)if(GROUPS[i].k===g)return GROUPS[i].c;return []}
  function grpOf(k){for(var i=0;i<GROUPS.length;i++)if(GROUPS[i].k===k||GROUPS[i].c.indexOf(k)>=0)return GROUPS[i].k;return ""}
  function inGrp(s,g){var c=grpCats(g);return catsOf(s).some(function(k){return c.indexOf(k)>=0})}
  /* ikona salonu: na stronie grupy pierwsza jego usługa z tej grupy */
  function salonIc(s){var l=catsOf(s);if(branch){var c=grpCats(branch);for(var i=0;i<l.length;i++)if(c.indexOf(l[i])>=0)return catIc(l[i])}return catIc(l[0])}
  function catsOf(s){var l=String((s&&s.category)||"fryzjer").split(",").filter(function(x){return x&&CATS.some(function(c){return c.k===x})});return l.length?l:["fryzjer"]}
  function noPrice(s){return !!s&&catsOf(s).indexOf("stomatolog")>=0}
  function readCats(p){var o=[];CATS.forEach(function(c){var e=document.getElementById(p+c.k);if(e&&e.checked)o.push(c.k)});return o}
  function catPick(p,sel){return '<div class="field"><span style="display:block;font-weight:500;font-size:14px;margin-bottom:4px" id="'+p+'lab">'+tr("Rodzaj usług")+'</span><div class="catpick" role="group" aria-labelledby="'+p+'lab">'+CATS.map(function(c){return '<label class="chk" for="'+p+c.k+'"><input type="checkbox" id="'+p+c.k+'"'+(sel.indexOf(c.k)>=0?' checked':'')+'> '+chipIc(c.k)+esc(catName(c.k))+'</label>'}).join("")+'</div><p class="hint">'+tr("Zaznacz wszystko, co oferuje salon.")+'</p></div>'}
  function catTags(s){return '<div class="cats">'+catsOf(s).map(function(c){return '<span class="tag"><span class="ci">'+ic(catIc(c))+'</span>'+esc(catName(c))+'</span>'}).join("")+'</div>'}
  function chipIc(k){return '<span class="chi">'+ic(catIc(k))+'</span>'}
  /* liczba wolnych terminów na każdy dzień (wszystkie zatwierdzone salony) */
  function dayCounts(){
    var c={all:0};
    allSlots().forEach(function(x){var s=salons[x.salonId];if(!pubOk(s)||isTaken(x)||isPast(x)||closedOn(s,x.date))return;var o=slotOff(x);if(o>=0&&o<NDAYS){c[o]=(c[o]||0)+1;c.all++}});
    return c;
  }
  function freeWord(n){
    if(LANG==="en")return n===1?"free slot":"free slots";
    var t=n%10,h=n%100;return n===1?"wolny termin":(t>=2&&t<=4&&(h<12||h>14))?"wolne terminy":"wolnych terminów";
  }
  /* kalendarz tygodnia dla klientów: dziś + 6 dni, przy każdym dniu liczba wolnych terminów */
  function dayBar(){
    var c=dayCounts();
    if(!c.all&&dayF==="all")return "";
    var h='<div class="week"><div class="weekhead"><b>'+tr("Najbliższe 7 dni")+'</b><button type="button" class="weekall" data-cday="all" aria-pressed="'+(dayF==="all")+'">'+tr("Wszystkie")+'<span class="n">'+c.all+'</span></button></div><div class="weekgrid" role="group" aria-label="'+tr("Dzień")+'">';
    for(var i=0;i<NDAYS;i++){
      var d=new Date();d.setDate(d.getDate()+i);
      var ds=ymd(d),n=c[i]||0,hol=holidayName(ds),we=d.getDay()===0||d.getDay()===6,sel=dayF===String(i);
      var wd=i===0?tr("Dziś"):i===1?tr("Jutro"):d.toLocaleDateString(lc(),{weekday:"short"}).replace(".","");
      wd=wd.charAt(0).toUpperCase()+wd.slice(1);
      var ws=i===0?wd:(LANG==="en"?["Su","Mo","Tu","We","Th","Fr","Sa"]:["Nd","Pn","Wt","Śr","Cz","Pt","So"])[d.getDay()];
      var full=dayDate(i)+(hol?", "+hol:"")+": "+n+" "+freeWord(n);
      h+='<button type="button" class="wday'+(n?'':' none')+(we||hol?' we':'')+(i===0?' today':'')+'" data-cday="'+i+'" aria-pressed="'+sel+'"'+(!n&&!sel?' disabled':'')+' aria-label="'+esc(full)+'" title="'+esc(full)+'">'+
        '<span class="wn"><span class="wl">'+esc(wd)+'</span><span class="ws">'+esc(ws)+'</span></span><span class="wdn">'+d.getDate()+'</span><span class="wmo">'+esc(d.toLocaleDateString(lc(),{month:"short"}).replace(".",""))+'</span>'+(hol?'<span class="whol">'+tr("święto")+'</span>':'')+
        '<span class="wc">'+(n?n:'–')+'</span></button>';
    }
    return h+'</div></div>';
  }
  /* święta w Polsce (stałe i ruchome); podpowiedź w kalendarzach */
  function easter(y){var a=y%19,b=Math.floor(y/100),c=y%100,d=Math.floor(b/4),e=b%4,f=Math.floor((b+8)/25),g=Math.floor((b-f+1)/3),h=(19*a+b-d-g+15)%30,i=Math.floor(c/4),k=c%4,l=(32+2*e+2*i-h-k)%7,m=Math.floor((a+11*h+22*l)/451),n=h+l-7*m+114;return new Date(y,Math.floor(n/31)-1,n%31+1)}
  var HOLY={};
  function holidays(y){
    if(HOLY[y])return HOLY[y];
    var o={};
    [["01-01","Nowy Rok"],["01-06","Trzech Króli"],["05-01","Święto Pracy"],["05-03","Święto Konstytucji 3 Maja"],["08-15","Wniebowzięcie NMP"],["11-01","Wszystkich Świętych"],["11-11","Święto Niepodległości"],["12-24","Wigilia"],["12-25","Boże Narodzenie"],["12-26","Drugi dzień świąt"]].forEach(function(f){o[y+"-"+f[0]]=f[1]});
    var e=easter(y);[[0,"Wielkanoc"],[1,"Poniedziałek Wielkanocny"],[49,"Zielone Świątki"],[60,"Boże Ciało"]].forEach(function(f){var d=new Date(e);d.setDate(d.getDate()+f[0]);o[ymd(d)]=f[1]});
    return HOLY[y]=o;
  }
  function holidayName(ds){var n=holidays(+String(ds).slice(0,4))[ds];return n?tr(n):""}
  /* dzień zamknięty: ręcznie (święto, urlop) albo wg godzin otwarcia z profilu (np. niedziela).
     Wyjątek "otwarte mimo wolnego dnia tygodnia" zapisujemy w closed_days jako "+RRRR-MM-DD". */
  function closedList(s){return s&&Array.isArray(s.closedDays)?s.closedDays:[]}
  function closedManual(s,ds){return closedList(s).indexOf(ds)>=0}
  function weeklyClosed(s,ds){
    if(!s||!Array.isArray(s.hours)||s.hours.length!==7)return false;
    var p=String(ds).split("-"),d=new Date(+p[0],+p[1]-1,+p[2]),h=s.hours[(d.getDay()+6)%7];
    return !!(h&&h.closed);
  }
  function openedOn(s,ds){return closedList(s).indexOf("+"+ds)>=0}
  function closedOn(s,ds){return !!s&&(closedManual(s,ds)||(weeklyClosed(s,ds)&&!openedOn(s,ds)))}
  function initials(n){var w=String(n||"").replace(/["„”]/g,"").trim().split(/\s+/).filter(Boolean);return ((w[0]||"?").charAt(0)+(w[1]?w[1].charAt(0):"")).toUpperCase()}
  function logoHtml(s,cls){
    cls="slogo"+(cls?" "+cls:"");
    if(s&&s.logoUrl)return '<img class="'+cls+'" src="'+esc(s.logoUrl)+'" alt="" loading="lazy" decoding="async">';
    return '<span class="'+cls+' ini" aria-hidden="true">'+esc(initials(s&&s.name))+'</span>';
  }
  /* zdjęcia salonu: kind "salon" (wnętrze) i "work" (prace, np. fryzury) */
  var PHOTO_MAX={salon:6,work:12};
  function photosOf(s,kind){var l=(s&&Array.isArray(s.photos))?s.photos.filter(function(p){return p&&p.url}):[];return kind?l.filter(function(p){return p.kind===kind}):l}
  function galleryOf(s){return photosOf(s,"work").concat(photosOf(s,"salon"))}
  function kindName(k){return k==="salon"?tr("Zdjęcia salonu"):tr("Nasze realizacje")}
  function svcName(n){return n===DEFAULT_SVC_NAME?tr("Usługi w salonie"):n}
  window.FLM_T=tr;
  var NDAYS=7, CAL_MONTHS=6, DAYS=[], WD=[]; /* terminy: dziś + 6 kolejnych dni */
  function dayShort(i){var d=new Date();d.setDate(d.getDate()+i);var w=d.toLocaleDateString(lc(),{weekday:"short"}).replace(".","");return w.charAt(0).toUpperCase()+w.slice(1)+" "+d.getDate()+"."+pad(d.getMonth()+1)}
  function dayHead(o){if(o<2)return '<b>'+DAYS[o]+'</b> '+esc(dayDate(o));var d=new Date();d.setDate(d.getDate()+o);return '<b>'+esc(d.toLocaleDateString(lc(),{weekday:"long"}))+'</b> '+esc(d.toLocaleDateString(lc(),{day:"numeric",month:"long"}))}
  function setNames(){DAYS=[];for(var i=0;i<NDAYS;i++)DAYS.push(i===0?tr("Dziś"):i===1?tr("Jutro"):dayShort(i));WD=[tr("Poniedziałek"),tr("Wtorek"),tr("Środa"),tr("Czwartek"),tr("Piątek"),tr("Sobota"),tr("Niedziela")]}
  setNames();
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
  var mode="client", sview="add", curId=null, loginMode="login", profDirty=false, profSaving=null, isAdmin=false, adminChecked=null, adminReports={}, adminReq=[], adminRepT=0, reported={};
  var user=null, locState="idle";
  var cview="find", catF="all", catQ="", catOpen={};
  var dayF="all", q="", restoreId=null, loginInfo="", editState=null;
  var addState={day:0,calM:0,time:"",to:"",kind:"range",svc:"",promo:""};
  function telHref(p){var d=String(p||"").replace(/\D/g,"");if(d.length===11&&d.indexOf("48")===0)d=d.slice(2);return "tel:"+(d.length===9?"+48":"")+d}
  /* SMS: tylko na polskie numery komórkowe (na stacjonarny, np. 44…, SMS nie dojdzie) */
  function plDigits(p){var d=String(p||"").replace(/\D/g,"");if(d.length===11&&d.indexOf("48")===0)d=d.slice(2);return d}
  function canSms(p){var d=plDigits(p);return d.length===9&&/^(45|50|51|53|57|60|66|69|72|73|78|79|88)/.test(d)}
  function smsHref(p,body){return "sms:+48"+plDigits(p)+(isIOS()?"&":"?")+"body="+encodeURIComponent(body)}
  /* treść SMS zawsze po polsku – czyta ją salon */
  function smsBody(s,x){
    var p=String(x.date).split("-"),d=new Date(+p[0],+p[1]-1,+p[2]);
    var day=d.toLocaleDateString("pl-PL",{weekday:"long",day:"numeric",month:"long"});
    var what=isRange(x)?"wizyty: "+day+", godz. "+x.time+". Usługa: …":"terminu: "+(x.service===DEFAULT_SVC_NAME?"Usługi w salonie":x.service)+" ("+x.dur+" min), "+day+", godz. "+x.time+".";
    return "Dzień dobry, proszę o rezerwację "+what+" Termin z aplikacji Last Minute Radomsko. Proszę o potwierdzenie rezerwacji SMS-em. Dziękuję!";
  }
  function smsBodyGeneral(){return "Dzień dobry, proszę o umówienie wizyty. Usługa: … Proponowany termin: … Kontakt z aplikacji Last Minute Radomsko. Proszę o potwierdzenie terminu SMS-em. Dziękuję!"}

  /* ---------- narzędzia ---------- */
  function esc(s){return String(s==null?"":s).replace(/[&<>"']/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]})}
  function $(id){return document.getElementById(id)}
  function pad(n){return n<10?"0"+n:""+n}
  function toMin(t){var p=String(t).split(":");return parseInt(p[0],10)*60+parseInt(p[1],10)}
  function fromMin(m){return pad(Math.floor(m/60))+":"+pad(m%60)}
  function nowMin(){var d=new Date();return d.getHours()*60+d.getMinutes()}
  function zl(n){return String(n).replace(".",LANG==="en"?".":",")+" "+tr("zł")}
  /* ceny: tryb "exact" (dokładna), "from" (od ... zł), "ask" (ustalana w salonie, opcjonalnie zniżka %) */
  /* usługa podstawowa: zawsze dostępna dla każdego salonu (nie jest zapisywana w bazie, nie można jej usunąć) */
  var DEFAULT_SVC={id:"default",name:"Usługi fryzjerskie",dur:30,price:null,pm:"ask"};
  function allSvc(s){return [DEFAULT_SVC].concat((s&&s.services)||[])}
  function modeOf(o){return (o&&(o.priceMode||o.pm))||"exact"}
  function pz(n,m){return (m==="from"?tr("od "):"")+zl(n)}
  function priceLabel(o){var m=modeOf(o);return m==="ask"?tr("cena w salonie"):pz(o.price,m)}
  function offPct(x){var m=modeOf(x);if(m==="ask")return x.promoPct||0;return(x.promo!=null&&x.price)?Math.round((1-x.promo/x.price)*100):0}
  function priceText(o){
    var m=modeOf(o);
    if(m==="ask")return tr("cena ustalana w salonie")+(o.promoPct?tr(", zniżka −{0}%",[o.promoPct]):"");
    return o.promo!=null?pz(o.promo,m)+tr(" zamiast ")+pz(o.price,m):pz(o.price,m);
  }
  function promoCheck(sv,raw){
    raw=String(raw==null?"":raw).trim();
    var m=modeOf(sv);
    if(!raw)return {promo:null,pct:null};
    var n=num(raw);
    if(m==="ask"){
      if(n==null||n<1||n>90||Math.floor(n)!==n)return {err:tr("Zniżka musi być liczbą całkowitą od 1 do 90 (%), np. 30.")};
      return {promo:null,pct:n};
    }
    if(n==null||n<=0)return {err:tr("Cena promocyjna musi być liczbą, np. 70.")};
    if(n>=sv.price)return {err:tr("Cena promocyjna powinna być niższa niż regularna ({0}).",[priceLabel(sv)])};
    return {promo:n,pct:null};
  }
  function num(v){if(v==null||v==="")return null;var n=parseFloat(String(v).replace(",","."));return isNaN(n)?null:n}
  function ymd(d){return d.getFullYear()+"-"+pad(d.getMonth()+1)+"-"+pad(d.getDate())}
  function dateOf(off){var d=new Date();d.setDate(d.getDate()+off);return ymd(d)}
  function offsetOf(s){var p=String(s).split("-"),a=new Date(+p[0],+p[1]-1,+p[2]),n=new Date();n=new Date(n.getFullYear(),n.getMonth(),n.getDate());return Math.round((a-n)/864e5)}
  function dayDate(off){var d=new Date();d.setDate(d.getDate()+off);return d.toLocaleDateString(lc(),{weekday:"long",day:"numeric",month:"long"})}
  function todayIdx(){return (new Date().getDay()+6)%7}
  function km(a){return a<1?(Math.round(a*100)*10)+" m":(Math.round(a*10)/10).toString().replace(".",LANG==="en"?".":",")+" km"}
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
      var r=await fetch("https://nominatim.openstreetmap.org/search?format=jsonv2&limit=1&countrycodes=pl&accept-language="+LANG+"&viewbox=18.85,51.45,20.05,50.70&q="+encodeURIComponent(q),{headers:{"Accept":"application/json"},signal:ctrl.signal});
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
      toast(tr("Ustaliliśmy położenie salonu na podstawie adresu."));
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
    if(c==="name_taken")return tr("Salon o takiej nazwie już istnieje.");
    if(c==="forbidden")return tr("Brak uprawnień. Zaloguj się ponownie jako ten salon.");
    if(c==="invalid_argument")return tr("Zapis odrzucony. Sprawdź, czy twoje konto ma prawo zapisu w tej aplikacji.");
    if(c==="quota_exceeded")return tr("Baza danych jest pełna. Usuń stare dane.");
    if(c==="resource_exhausted")return tr("Za dużo operacji naraz. Spróbuj za chwilę.");
    return tr("Nie udało się zapisać. Spróbuj ponownie.");
  }
  function needWrite(){if(canWrite===false){toast(tr("Twoje konto ma tylko podgląd, więc nie może zapisywać zmian."));return false}if(!db){toast(tr("Baza danych jest niedostępna."));return false}return true}
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
  function slotLabel(x){return x.service?svcName(x.service):tr("wolne godziny")}
  function isPast(x){var o=slotOff(x);return o<0||(o===0&&(isRange(x)?toMin(x.time)+x.dur:toMin(x.time))<=nowMin())}
  function minsUntil(x){return slotOff(x)*1440+toMin(x.time)-nowMin()}
  function eff(x){return x.promo!=null?x.promo:x.price}
  function allSlots(){return Object.keys(slots).map(function(k){return slots[k]})}
  function ownSlots(){return allSlots().filter(function(x){return x.salonId===curId})}
  function sortSlots(a,b){return a.date<b.date?-1:a.date>b.date?1:toMin(a.time)-toMin(b.time)}
  function priceHtml(x){
    var m=modeOf(x);
    if(m==="ask")return '<span class="ask">'+tr("Cena ustalana w salonie")+'</span>';
    return x.promo!=null?'<s>'+pz(x.price,m)+'</s><b>'+pz(x.promo,m)+'</b>':'<b>'+pz(x.price,m)+'</b>';
  }
  function isTaken(x){return !!(x.taken||x.booked)}

  /* ---------- połączenie z bazą ---------- */
  async function init(){
    var hh=(location.hash||"").replace("#","");
    if(hh.indexOf("adm-")===0){mode="salon";pendingAdm=hh}
    else if(hh==="mine"||hh==="add"){mode="salon";sview=hh;pendingS=hh}
    render();
    var userNs=null;
    try{if(window.claude&&window.claude.use)userNs=await window.claude.use("user")}catch(e){}
    try{if(userNs)canWrite=await userNs.can("data.write")}catch(e){}
    try{if(window.claude&&window.claude.use)db=await window.claude.use("db")}catch(e){db=null}
    if(!db){dbMissing=true;render();return}
    trackView();
    setTimeout(function(){if(!(ready.s&&ready.t)){loadSlow=true;renderBanner()}},10000);
    function onErr(e){loadErr=true;renderBanner()}
    if(window.FLM_AUTH){window.FLM_AUTH.current().then(function(u){if(u){restoreId=u.id;pruneOld(u.id);if(salons[u.id]&&!curId){curId=u.id;render()}}}).catch(function(){})}
    db.collection("salons").onSnapshot(onSalons,onErr);
    db.collection("slots").onSnapshot(onSlots,onErr);
    render();
  }
  function onSalons(snap){
    var m={};
    snap.docs.forEach(function(d){if(d.exists){m[d.id]=Object.assign({id:d.id},d.data())}});
    if(curId&&!m[curId]&&salons[curId])m[curId]=salons[curId];
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
    checkAdmin();
    if(mode==="salon"&&!curId)return;
    if(mode==="salon"&&sview==="profil")return;
    keepFocus(render);
  }

  /* ---------- baner stanu ---------- */
  function renderBanner(){
    var h="";
    if(dbMissing){var st=window.FLM_STATUS,why=st==="no-config"?tr("Nie znaleziono pliku config.js. Wgraj go do repozytorium na GitHub razem z pozostałymi plikami."):st==="placeholder"?tr("W pliku config.js nie ma jeszcze klucza projektu Supabase. Wklej adres projektu (Project URL) i klucz (Publishable key) i wgraj plik ponownie."):st==="no-lib"?tr("Nie wczytała się biblioteka Supabase. Sprawdź, czy plik supabase.js jest wgrany do repozytorium na GitHub obok index.html, i sprawdź połączenie z internetem."):tr("Sprawdź połączenie z internetem i plik config.js.");h='<div class="note warn"><b>'+tr("Aplikacja nie jest połączona z bazą danych.")+'</b> '+esc(why)+'</div>'}
    else if(loadErr)h='<div class="note warn">'+tr("Nie udało się wczytać danych z bazy. Odśwież stronę.")+'</div>';
    else if(loadSlow&&!(ready.s&&ready.t))h='<div class="note warn">'+tr("Dane ładują się dłużej niż zwykle. Sprawdź połączenie z internetem.")+'</div>';
    else if(canWrite===false)h='<div class="note warn">'+tr("Twoje konto ma tylko podgląd: możesz przeglądać oferty, ale nie możesz zmieniać danych salonu.")+'</div>';
    $("banner").innerHTML=h;
  }

  /* ---------- szkielet ---------- */
  function render(){
    setNames();
    $("modeC").setAttribute("aria-pressed",mode==="client");
    $("modeS").setAttribute("aria-pressed",mode==="salon");
    var hero=$("hero");if(hero)hero.hidden=(mode==="salon"&&!!curId);
    paintHero();
    renderBanner();
    if(dbMissing){$("app").innerHTML="";return}
    if(mode==="client")renderClient();else renderSalon();
  }
  function loadingHtml(){return '<p class="empty">'+tr("Wczytuję dane…")+'</p>'}

  /* ================= KLIENT ================= */
  /* --- własny link salonu: #s/nazwa-salonu pokazuje tylko ten salon (zapamiętane na telefonie) --- */
  var mySlug="";try{mySlug=localStorage.getItem("flm_my_salon")||""}catch(e){}
  function setMySlug(v){mySlug=v||"";try{if(mySlug)localStorage.setItem("flm_my_salon",mySlug);else localStorage.removeItem("flm_my_salon")}catch(e){}}
  function mySalon(){if(!mySlug)return null;for(var k in salons){var x=salons[k];if(x&&x.slug===mySlug&&x.approved!==false)return x}return null}
  /* czy salon ma być widoczny dla klienta: z linku tylko ten jeden salon, na wspólnej liście bez ukrytych */
  /* strona branży: #fryzjer, #masaz … pokazuje tylko salony tej branży; "" = strona ogólna */
  var branch="";
  function pubOk(s){if(!s||s.approved===false)return false;if(mySlug)return s.slug===mySlug;if(s.hidden)return false;return !branch||inGrp(s,branch)}
  function readSalonHash(){
    var h=location.hash||"",m=/^#s\/([a-z0-9-]{1,60})$/.exec(h);
    if(m){setMySlug(m[1]);branch="";mode="client";cview="find";dayF="all";return true}
    if(h==="#wszystkie"){setMySlug("");branch="";mode="client";if(cview==="help")cview="find";return true}
    var b=grpOf(h.replace("#",""));
    if(b){setMySlug("");branch=b;mode="client";if(cview==="help")cview="find";dayF="all";catF="all";return true}
    return false
  }
  readSalonHash();
  window.addEventListener("hashchange",function(){var was=branch;if(readSalonHash()){render();if(was!==branch)try{window.scrollTo(0,0)}catch(e){}}});
  /* nagłówek, nazwa w logo i zdjęcie zależne od strony: ogólna / branża / jeden salon */
  var markFry=null,artKey=null;
  function paintHero(){
    var s=(mode==="client"&&mySlug)?mySalon():null,b=s?catsOf(s)[0]:(mode==="client"?branch:"");
    var h=document.querySelector("#hero .big"),p=document.querySelector("#hero .small"),bw=document.querySelector('[data-i="brand"]'),tw=document.querySelector('[data-i="town"]'),mk=$("brandMark");
    if(h&&p){
      if(s){h.innerHTML=esc(tr("Wolne terminy"))+'<br><span class="hl">'+esc(s.name)+'</span>';p.textContent=tr("Zadzwoń do salonu i umów wizytę. Płacisz na miejscu.")}
      else if(b){h.innerHTML=esc(tr("Wolne terminy"))+'<br><span class="hl">'+esc(catName(b))+'</span>';p.textContent=tr(CAT_TAG[b]||CAT_TAG.inne)}
      else{h.innerHTML=ST.big[LANG];p.innerHTML=ST.small[LANG]}
    }
    var bk=b&&b!=="inne"?b:"";
    if(bw)bw.innerHTML=bk?esc(catName(bk))+'<br>Last Minute':ST.brand[LANG];
    if(tw)tw.innerHTML=bk?esc(tr("Radomsko i okolice")):ST.town[LANG];
    if(mk){if(markFry===null)markFry=mk.innerHTML;mk.innerHTML=bk==="fryzjer"?markFry:'<g transform="translate(11 11) scale(1.75)" stroke-width="2.4">'+catIc(bk||"ogolne")+'</g>'}
    document.title=s?s.name+" – "+brandName(bk):bk?brandName(bk)+" Radomsko – "+tr("wolne terminy"):ST.title[LANG];
    var ak=s?(bk||"ogolne"):(bk||"ogolne");
    if(ak!==artKey){artKey=ak;window.FLM_HERO=ak;if(window.FLM_STYLE&&window.FLM_STYLE.refresh)window.FLM_STYLE.refresh()}
  }
  /* kafelki branż na stronie głównej */
  function branchTilesHtml(){
    var cnt={};GROUPS.forEach(function(g){cnt[g.k]=0});
    allSlots().forEach(function(x){var s=salons[x.salonId];if(!s||s.approved===false||s.hidden||isTaken(x)||isPast(x)||closedOn(s,x.date))return;var o=slotOff(x);if(o<0||o>=NDAYS)return;GROUPS.forEach(function(g){if(inGrp(s,g.k))cnt[g.k]++})});
    return '<nav class="btiles" aria-label="'+tr("Wybierz usługę")+'">'+GROUPS.map(function(g){var n=cnt[g.k];
      return '<a class="btile'+(n?' has':'')+'" href="#'+g.k+'"><span class="bic">'+ic(catIc(g.k))+'</span><span class="bt"><b>'+esc(catName(g.k))+'</b>'+(g.c.length>1?'<span class="bsub">'+esc(g.c.map(catName).join(" · "))+'</span>':'')+'<small>'+(n?n+" "+freeWord(n):tr("brak terminów"))+'</small></span></a>'}).join("")+'</nav>';
  }
  /* --- pomoc: rozwijane pytania, bez zagracania głównych widoków --- */
  var HELP_C=[["Jak znaleźć wolny termin?","Na liście są salony z wolnymi terminami na najbliższe 7 dni, od najbliższych. Pasek z dniami zawęża listę do jednego dnia. „Pokaż odległość do salonów” dopisuje odległość od Ciebie (lokalizacja nie jest nigdzie zapisywana)."],["Jak się umówić?","Przy wybranym terminie dotknij „Zadzwoń” albo „SMS” i umów się bezpośrednio z salonem. Nie zakładasz konta, aplikacja nic nie kosztuje, a za wizytę płacisz w salonie."],["Strony usług","Na stronie głównej wybierz kafelek, np. „Masaż” – zobaczysz tylko gabinety masażu i ich wolne terminy. Każda usługa ma swój adres, np. radomskolastminute.pl/#masaz. „← Wszystkie usługi” wraca do strony głównej."],["Wszystkie salony","Zakładka „Wszystkie salony” pokazuje wszystkie salony z adresem, godzinami otwarcia, cennikiem i telefonem – także te, które akurat nie mają wolnych terminów."],["Kod QR salonu","Po zeskanowaniu kodu salonu widzisz tylko ten salon, a telefon to zapamiętuje. Żeby wrócić do wszystkich salonów, zeskanuj ogólny kod aplikacji albo otwórz radomskolastminute.pl/#wszystkie."],["Powiadomienia o wolnych terminach","Przycisk z dzwonkiem nad listą włącza powiadomienia. W widoku jednego salonu dostajesz powiadomienia o jego nowych terminach, na stronie usługi (np. Masaż) – o nowych terminach tej usługi, a na stronie głównej wybierasz rodzaje usług. Kilka nowych terminów łączymy w jedno powiadomienie, z jednego salonu wysyłamy najwyżej jedno na godzinę, przy wszystkich salonach najwyżej trzy dziennie, a między 21:00 a 8:00 nie wysyłamy nic. Wyłączysz je tym samym przyciskiem."],["Powiadomienia na iPhonie","Na iPhonie powiadomienia działają tylko w aplikacji dodanej do ekranu głównego: w Safari dotknij „Udostępnij”, potem „Do ekranu początkowego”, otwórz aplikację z nowej ikony i włącz powiadomienia."],["Powiadomienia są zablokowane","Jeśli przeglądarka zablokowała powiadomienia, dotknij ikony obok adresu strony, wybierz „Uprawnienia” albo „Ustawienia witryny”, potem „Powiadomienia” → „Zezwalaj” i odśwież stronę."],["Aplikacja na ekranie głównym","Android: w Chrome dotknij menu ⋮ i wybierz „Zainstaluj aplikację” albo „Dodaj do ekranu głównego”. iPhone: Safari → „Udostępnij” → „Do ekranu początkowego”."],["Brakuje salonu?","Na dole listy wolnych terminów kliknij „Zgłoś nam salon” i podaj jego nazwę – nie podajesz swoich danych."]];
  var HELP_S=[["Logowanie i konto","Logujesz się loginem i hasłem podanymi przy rejestracji. Nowy salon pojawia się u klientów dopiero po zatwierdzeniu przez administratora. Jeśli zapomnisz hasła, skontaktuj się z administratorem – ustawi nowe."],["Dodawanie wolnego terminu","Zakładka „Dodaj termin”: wybierz dzień, godzinę i czas trwania, wpisz usługę i cenę (dokładną, „od” albo do ustalenia w salonie), opcjonalnie promocję. Termin od razu widzą klienci."],["Gdy termin zostanie zajęty","W „Moje terminy” oznacz go od razu jako „Zajęty”. To najważniejsza zasada: klienci ufają aplikacji, gdy wolne terminy są aktualne. Minione terminy usuwają się same."],["Profil salonu","W „Profil” uzupełnij nazwę, adres, telefon, godziny otwarcia, dni wolne, cennik, logo i zdjęcia – to widzą klienci."],["Strona Twojej branży","Każda usługa ma w aplikacji swoją stronę, np. radomskolastminute.pl/#masaz – klienci widzą tam tylko salony tej branży. Twój salon pojawia się na stronach usług zaznaczonych w „Profil” → „Rodzaj usług”."],["Twój link i kod QR","W „Profil” znajdziesz swój link i kod QR („Pobierz kod QR do druku” daje gotowy plakat). Klient, który z nich wejdzie, widzi tylko Twój salon, a telefon to zapamiętuje."],["Tylko dla moich klientów","Na Twoją prośbę administrator może włączyć opcję ukrycia salonu ze wspólnej listy. Wtedy widzą go tylko osoby z Twoim linkiem lub kodem QR."],["Powiadomienia dla klientów","Klienci mogą włączyć powiadomienia o Twoich nowych terminach. Gdy dodasz wolny termin, dostaną powiadomienie w ciągu około minuty (między 8:00 a 21:00). Dlatego dodawaj terminy od razu, gdy się zwolnią."],["Przypomnienia dla Ciebie","W „Moje terminy” włącz przypomnienia: jeśli przez 3 dni nie zmienisz terminów, przypomnimy Ci o tym na telefonie (najwyżej raz na 3 dni)."],["Statystyki","W „Moje terminy” widzisz, ile razy klienci kliknęli przy Twoim salonie „Zadzwoń” albo „SMS” – dziś, w 7 i w 30 dni."]];
  function helpHtml(list,title){
    return '<section class="help"><h2>'+esc(title)+'</h2>'+list.map(function(x){return '<details><summary>'+esc(tr(x[0]))+'</summary><p>'+esc(tr(x[1]))+'</p></details>'}).join("")+'</section>';
  }
  /* --- powiadomienia dla klienta o nowych wolnych terminach --- */
  var cnState="unknown",cnOpen=false,cnCats=[],cnSynced=false;
  function cnSaved(){try{return JSON.parse(localStorage.getItem("flm_cnotif")||"null")}catch(e){return null}}
  function cnSalon(){var ms=mySlug?mySalon():null;return ms?ms.id:null}
  async function cnRefresh(){
    var st;
    if(!window.FLM_PUSH||!window.FLM_PUSH.saveClient)st="hidden";
    else if(!("serviceWorker" in navigator)||!("PushManager" in window)||!("Notification" in window))st=(isIOS()&&!isStandalone())?"ios":"hidden";
    else if(Notification.permission==="denied")st="denied";
    else{
      try{
        var reg=await navigator.serviceWorker.getRegistration(),sub=reg&&await reg.pushManager.getSubscription(),sv=cnSaved();
        st=(sub&&sv&&sv.endpoint===sub.endpoint&&sameKey(sub,vapidBytes())&&cnMatch(sv))?"on":"off";
        if(st==="on"&&!cnSynced){cnSynced=true;var j=sub.toJSON();window.FLM_PUSH.saveClient({endpoint:j.endpoint,p256dh:j.keys.p256dh,auth:j.keys.auth,salon:sv.salon||null,cats:sv.cats||[]}).catch(function(){cnSynced=false})}
      }catch(e){st="off"}
    }
    if(st!==cnState){cnState=st;paintCn()}
  }
  function cnCatList(){var have={};catSalons().forEach(function(x){catsOf(x).forEach(function(k){have[k]=1})});return CATS.filter(function(c){return have[c.k]})}
  /* czy zapisane powiadomienia dotyczą tego, co klient teraz ogląda */
  function cnMatch(sv){var sal=cnSalon();if(sal||mySlug)return (sv.salon||null)===sal;if(sv.salon)return false;if(branch){var c=sv.cats||[];return !c.length||grpCats(branch).every(function(k){return c.indexOf(k)>=0})}return true}
  function cnInner(){
    if(cnState==="unknown"||cnState==="hidden")return "";
    if(cnState==="on")return '<span style="display:inline-flex;align-items:center;gap:6px;font-weight:600;color:var(--accent-ink)">'+ic(IC_OK)+tr("Powiadomienia włączone")+'</span><button class="link" type="button" id="cnOff">'+tr("Wyłącz")+'</button>';
    if(cnOpen&&!cnSalon()){
      var cats=cnCatList();
      return '<div class="chips" role="group" aria-label="'+tr("Powiadamiaj o wolnych terminach")+'"><button class="chip" type="button" data-cncat="" aria-pressed="'+(!cnCats.length)+'">'+tr("Wszystkie")+'</button>'+
        cats.map(function(c){return '<button class="chip" type="button" data-cncat="'+c.k+'" aria-pressed="'+(cnCats.indexOf(c.k)>=0)+'">'+chipIc(c.k)+esc(catName(c.k))+'</button>'}).join("")+'</div>'+
        '<span class="btn-row"><button class="btn sm" type="button" id="cnSave">'+tr("Włącz")+'</button><button class="btn ghost sm" type="button" id="cnCancel">'+tr("Anuluj")+'</button></span>';
    }
    return '<button class="btn ghost sm" type="button" id="cnOn">'+ic(IC_BELL)+tr("Powiadamiaj o wolnych terminach")+'</button>';
  }
  function cnHtml(){cnRefresh();return '<div id="cnBox" style="display:flex;flex-wrap:wrap;gap:8px;align-items:center;justify-content:flex-end">'+cnInner()+'</div>'}
  function paintCn(){var b=$("cnBox");if(b)b.innerHTML=cnInner()}
  function cnStart(){
    if(cnState==="ios"){toast(tr("Na iPhonie najpierw dodaj aplikację do ekranu początkowego – zobacz Pomoc."));return}
    if(cnState==="denied"){toast(tr("Powiadomienia są zablokowane w ustawieniach przeglądarki – zobacz Pomoc."));return}
    if(cnSalon()||branch){cnEnable();return}
    cnOpen=true;cnCats=[];paintCn();
  }
  async function cnEnable(){
    var salon=cnSalon(),cats=salon?[]:cnCats.slice();
    if(!salon&&branch){var sv0=cnSaved();var gc=grpCats(branch);cats=(sv0&&!sv0.salon&&(sv0.cats||[]).length)?sv0.cats.filter(function(k){return gc.indexOf(k)<0}).concat(gc):gc.slice()}
    try{
      var s=await pushSubscribe();
      await window.FLM_PUSH.saveClient({endpoint:s.endpoint,p256dh:s.p256dh,auth:s.auth,salon:salon,cats:cats});
      try{localStorage.setItem("flm_cnotif",JSON.stringify({endpoint:s.endpoint,salon:salon,cats:cats}))}catch(e){}
      cnSynced=true;cnOpen=false;toast(tr("Powiadomienia włączone."));
    }catch(e){
      var m=String((e&&(e.message||e.code))||"");
      toast(e&&e.code==="denied"?tr("Powiadomienia są zablokowane w ustawieniach przeglądarki – zobacz Pomoc."):m.indexOf("invalid_endpoint")>=0?tr("Ta przeglądarka nie obsługuje powiadomień."):tr("Nie udało się włączyć powiadomień."));
    }
    cnState="unknown";cnRefresh();
  }
  async function cnDisable(){
    try{
      var sv=cnSaved(),left=(branch&&sv&&!sv.salon)?(sv.cats||[]).filter(function(k){return grpCats(branch).indexOf(k)<0}):[];
      if(left.length){
        var s=await pushSubscribe();
        await window.FLM_PUSH.saveClient({endpoint:s.endpoint,p256dh:s.p256dh,auth:s.auth,salon:null,cats:left});
        try{localStorage.setItem("flm_cnotif",JSON.stringify({endpoint:s.endpoint,salon:null,cats:left}))}catch(e){}
      }else{
        if(sv&&sv.endpoint)await window.FLM_PUSH.removeClient(sv.endpoint);
        try{localStorage.removeItem("flm_cnotif")}catch(e){}
      }
      toast(tr("Powiadomienia wyłączone."));
    }catch(e){toast(tr("Nie udało się wyłączyć powiadomień."))}
    cnState="unknown";cnRefresh();
  }
  function renderClient(){
    var app=$("app");
    if(locState==="idle")locate();
    if(!(ready.s&&ready.t)){app.innerHTML=loadingHtml();return}
    if(mySlug){
      var ms=mySalon();paintHero();
      if(!ms){app.innerHTML='<div class="emptycard"><p>'+tr("Nie znaleziono salonu z tego linku. Mógł zmienić adres albo jeszcze nie został zatwierdzony.")+'</p><div class="btn-row" style="justify-content:center"><button class="btn" type="button" id="mySalonClear">'+tr("Pokaż wszystkie salony")+'</button></div></div>';return}
      if(cview==="help"){app.innerHTML='<p style="margin:4px 2px 10px"><button class="link" type="button" data-cview="find">← '+tr("Wróć do terminów")+'</button></p>'+helpHtml(HELP_C,tr("Jak korzystać z aplikacji"));return}
      cview="find";app.innerHTML=findHtml();return;
    }
    paintHero();
    app.innerHTML=(branch?'<p class="bback"><a class="link" href="#wszystkie">← '+tr("Wszystkie usługi")+'</a></p>':(cview!=="help"?branchTilesHtml():''))+clientTabs()+(cview==="all"?catalogHtml():cview==="help"?helpHtml(HELP_C,tr("Jak korzystać z aplikacji")):findHtml());
  }
  function clientTabs(){
    return '<nav class="tabs ctabs" role="tablist" aria-label="'+tr("Widok klienta")+'">'+
      [["find",tr("Wolne terminy")],["all",tr("Wszystkie salony")],["help",tr("Pomoc")]].map(function(x){return '<button role="tab" type="button" data-cview="'+x[0]+'" aria-selected="'+(cview===x[0])+'">'+x[1]+'</button>'}).join("")+'</nav>';
  }
  function visibleSlots(s){
    return allSlots().filter(function(x){
      if(x.salonId!==s.id||isTaken(x)||closedOn(s,x.date))return false;
      var o=slotOff(x); if(o<0||o>=NDAYS||isPast(x))return false;
      if(dayF!=="all"&&o!==parseInt(dayF,10))return false;
      if(q&&(x.service+" "+s.name).toLowerCase().indexOf(q)<0)return false;
      return true;
    }).sort(sortSlots);
  }
  /* --- "Brakuje Twojego salonu?" + kontakt ukryty do kliknięcia (bez Google reCAPTCHA, żeby nie wysyłać danych do Google) --- */
  var pitchOpen=false,contactOpen=false,reqCount=0,reqState={name:"",addr:"",phone:"",note:"",hp:"",sent:false,err:"",busy:false};
  function ic(p){return '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'+p+'</svg>'}
  var IC_STORE='<path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7"/><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4"/><path d="M2 7h20"/><path d="M22 7v3a2 2 0 0 1-2 2 2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12a2 2 0 0 1-2-2V7"/>';
  var IC_PIN='<path d="M20 10c0 4.99-5.54 10.19-7.4 11.8a1 1 0 0 1-1.2 0C9.54 20.19 4 14.99 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/>';
  var IC_CUT='<circle cx="6" cy="6" r="3"/><path d="M8.12 8.12 12 12"/><path d="M20 4 8.12 15.88"/><circle cx="6" cy="18" r="3"/><path d="M14.8 14.8 20 20"/>';
  var IC_PHONE='<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/>';
  var IC_MSG='<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>';
  /* okładka karty salonu: zdjęcie wnętrza (albo realizacji); bez zdjęć duże logo / inicjały */
  function coverHtml(s){
    var g=galleryOf(s),sal=photosOf(s,"salon"),p=sal.length?sal[0]:g[0];
    if(!p)return '<div class="cimg nophoto" aria-hidden="true">'+logoHtml(s,"big")+'</div>';
    var i=g.indexOf(p);
    return '<button type="button" class="cimg" data-ph="'+esc(s.id)+'" data-phi="'+(i<0?0:i)+'" aria-label="'+tr("Pokaż zdjęcie {0} z {1}",[(i<0?0:i)+1,g.length])+'"><img src="'+esc(p.url||p.thumb)+'" alt="" loading="lazy" decoding="async"></button>';
  }
  function hasCover(s){return galleryOf(s).length>0}
  var IC_SEND='<path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/>';
  var IC_BELL='<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>';
  var IC_OK='<path d="M20 6 9 17l-5-5"/>';
  var IC_HEAD='<path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"/>';
  var IC_UNLOCK='<rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 9.9-1"/>';
  function reqBoxHtml(){
    var r=reqState,h='<div class="contactbox" id="contactbox"><span class="ico big" aria-hidden="true">'+ic(IC_HEAD)+'</span><h3>'+tr("Zgłoś salon")+'</h3>';
    if(r.sent)return h+'<p class="sub">'+tr("Dziękujemy! Zgłoszenie trafiło do administratora.")+'</p><div class="btn-row" style="justify-content:center"><button class="btn ghost sm" type="button" id="reqAgain">'+tr("Zgłoś kolejny salon")+'</button></div></div>';
    return h+'<p class="sub">'+tr("Napisz, jakiego salonu brakuje. Nie podajesz swoich danych.")+'</p>'+
      '<form id="reqForm" novalidate style="text-align:left">'+
      '<div class="field"><label class="f" for="rn">'+tr("Nazwa salonu")+'</label><input id="rn" maxlength="80" value="'+esc(r.name)+'"></div>'+
      '<div class="field"><label class="f" for="ra">'+tr("Adres lub miejscowość")+'</label><input id="ra" maxlength="200" placeholder="'+tr("np. Główna 5, Gidle")+'" value="'+esc(r.addr)+'"></div>'+
      '<div class="field"><label class="f" for="rp">'+tr("Telefon salonu (jeśli znasz)")+'</label><input id="rp" type="tel" inputmode="tel" maxlength="40" value="'+esc(r.phone)+'"></div>'+
      '<div class="field"><label class="f" for="rt">'+tr("Uwagi (opcjonalnie)")+'</label><textarea id="rt" rows="2" maxlength="500">'+esc(r.note)+'</textarea></div>'+
      '<input id="rw" tabindex="-1" autocomplete="off" aria-hidden="true" style="position:absolute;left:-9999px;width:1px;height:1px;opacity:0" value="'+esc(r.hp)+'">'+
      '<p class="err" id="rerr"'+(r.err?'':' hidden')+'>'+esc(r.err)+'</p>'+
      '<div class="btn-row" style="justify-content:center"><button class="btn" type="submit"'+(r.busy?' disabled':'')+'>'+ic(IC_SEND)+tr("Wyślij zgłoszenie")+'</button></div></form></div>';
  }
  async function submitRequest(){
    var r=reqState;
    if(r.hp||r.busy)return;
    var name=r.name.trim();
    if(name.length<2){r.err=tr("Wpisz nazwę salonu.");render();return}
    if(!r.addr.trim()&&!r.phone.trim()){r.err=tr("Podaj adres (miejscowość) albo telefon salonu, żebyśmy mogli go znaleźć.");render();return}
    if(reqCount>=3){r.err=tr("Wysłano już kilka zgłoszeń. Spróbuj później.");render();return}
    if(!window.FLM_STATS){r.err=tr("Baza danych jest niedostępna.");render();return}
    r.busy=true;r.err="";render();
    try{
      await window.FLM_STATS.submitRequest({name:name,address:r.addr.trim(),phone:r.phone.trim(),note:r.note.trim()});
      reqCount++;r.sent=true;r.name="";r.addr="";r.phone="";r.note="";
    }catch(e){
      r.err=/too_many/.test((e&&e.message)||"")?tr("Teraz jest za dużo zgłoszeń. Spróbuj za godzinę."):tr("Nie udało się wysłać zgłoszenia. Spróbuj później.");
    }
    r.busy=false;render();
  }
  function pitchHtml(){
    return '<div class="contactbox" id="pitchbox"><span class="ico big" aria-hidden="true">'+ic(IC_STORE)+'</span><h3>'+tr("Dla właściciela salonu")+'</h3>'+
      '<p class="sub">'+tr("Salon dodaje wolny termin, a klient dzwoni i rezerwuje. Aplikacja jest bezpłatna.")+'</p>'+
      '<ol class="steps"><li>'+tr("Zeskanuj kod lub otwórz link.")+'</li><li>'+tr("Wybierz „Dla salonów” → „Załóż konto”.")+'</li><li>'+tr("Uzupełnij profil z telefonem i dodaj termin.")+'</li><li>'+tr("Zadzwonimy, żeby potwierdzić salon.")+'</li></ol>'+
      '<img class="qr" src="kod-qr.svg" width="180" height="180" alt="'+tr("Kod QR do aplikacji")+'">'+
      '<div class="btn-row" style="justify-content:center"><button class="btn ghost" type="button" id="closePitch">'+tr("Zamknij")+'</button></div></div>';
  }
  function inviteHtml(){
    /* bez kafelka (wyglądał jak kolejny salon na liście) – zostaje tylko link do zgłoszenia salonu */
    var h='<p class="hint" style="text-align:center;margin-top:22px">'+tr("Nie ma Twojego salonu na liście?")+' <button class="link" type="button" id="reportBtn">'+tr("Zgłoś nam salon")+'</button></p>';
    if(pitchOpen)return h+pitchHtml();
    if(!contactOpen)return h;
    return h+reqBoxHtml();
  }
  async function shareApp(){
    var url=location.origin+location.pathname,data={title:tr("Last Minute Radomsko"),text:tr("Zobacz aplikację z wolnymi terminami: fryzjer, uroda i zdrowie w Radomsku i okolicach. Może dodasz w niej swój salon?"),url:url};
    try{
      if(navigator.share){await navigator.share(data);return}
      if(navigator.clipboard&&navigator.clipboard.writeText){await navigator.clipboard.writeText(url);toast(tr("Link skopiowany. Wklej go w wiadomości do salonu."));return}
    }catch(e){if(e&&e.name==="AbortError")return}
    toast(tr("Link do aplikacji: ")+url);
  }
  function emptyHtml(){
    if(dayF!=="all")return '<p class="empty">'+tr("Brak terminów na {0}. Wybierz „Wszystkie”.",[DAYS[parseInt(dayF,10)].toLowerCase()])+'</p>';
    return '<div class="emptycard"><span class="ico big" aria-hidden="true">'+ic(IC_STORE)+'</span><h3>'+tr("Aplikacja dopiero się rozwija")+'</h3>'+
      '<p>'+tr("Salony dopiero do nas dołączają, więc nie ma jeszcze wolnych terminów. Gdy salon zwolni miejsce, pojawi się tutaj.")+'</p>'+
      '<p><b>'+tr("Masz ulubiony salon?")+'</b> '+tr("Zgłoś go albo pokaż mu aplikację.")+'</p>'+
      '<div class="btn-row" style="justify-content:center"><button class="btn" type="button" id="emptyReport">'+tr("Zgłoś salon")+'</button><button class="btn ghost" type="button" id="emptyPitch">'+tr("Pokaż salonowi")+'</button></div>'+
      '</div>';
  }
  function findHtml(){
    var res=[];
    Object.keys(salons).forEach(function(k){
      var s=salons[k];if(!pubOk(s))return;var v=visibleSlots(s); if(!v.length&&!mySlug)return;
      var d=(user&&s.lat!=null&&s.lng!=null)?dist(s.lat,s.lng):null;
      res.push({s:s,v:v,d:d,first:v.length?slotOff(v[0])*1440+toMin(v[0].time):1e9});
    });
    /* zawsze od najbliższych terminów; przy tym samym czasie bliżej wygrywa salon położony bliżej */
    res.sort(function(a,b){return (a.first-b.first)||(a.d!=null&&b.d!=null?a.d-b.d:0)});
    var noSalons=!Object.keys(salons).length,loc;
    var pin=ic('<path d="M20 10c0 4.99-5.54 10.19-7.4 11.8a1 1 0 0 1-1.2 0C9.54 20.19 4 14.99 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/>');
    if(locState==="ok")loc='<p class="locline">'+pin+'<span>'+tr("Odległość od Twojej lokalizacji.")+' <button class="link" id="gps" type="button">'+tr("Odśwież")+'</button></span></p>';
    else if(locState==="loading")loc='<p class="locline">'+pin+'<span>'+tr("Ustalam Twoją lokalizację…")+'</span></p>';
    else loc='<p class="locline">'+pin+'<span><button class="link" id="gps" type="button">'+tr("Pokaż odległość do salonów")+'</button></span></p>';
    function salonsWord(n){if(LANG==="en")return n===1?"salon":"salons";var t=n%10,h=n%100;return n===1?"salon":(t>=2&&t<=4&&(h<12||h>14))?"salony":"salonów"}
    return '<div class="panel">'+loc+
      '<div class="filters">'+dayBar()+
      '</div></div>'+
      '<div class="sortrow" style="display:flex;flex-wrap:wrap;gap:8px 12px;align-items:center;justify-content:space-between"><p class="count" style="margin:0">'+(mySlug?(res.length&&!res[0].v.length?tr("Brak wolnych terminów w najbliższych dniach. Zadzwoń do salonu, żeby zapytać o wizytę."):""):(res.length?res.length+" "+salonsWord(res.length)+" "+tr("z wolnymi terminami, od najbliższych terminów"):""))+'</p>'+cnHtml()+'</div>'+
      '<div class="list">'+(res.length?res.map(cardHtml).join(""):emptyHtml())+'</div>'+(mySlug?'<p class="hint" style="text-align:center;margin-top:20px"><button class="link" type="button" data-cview="help">'+tr("Pomoc – jak to działa")+'</button></p>':inviteHtml())+addHomeHtml();
  }
  function cardHtml(r){
    var s=r.s,h=(s.hours||[])[todayIdx()],html="",last="";
    var today=dateOf(0),hasToday=allSlots().some(function(x){return x.salonId===s.id&&x.date===today&&!isTaken(x)&&!isPast(x)});
    var hrs=closedOn(s,today)?tr("dziś nieczynne"):(h&&!h.closed?tr("dziś {0}–{1}",[h.from,h.to]):(hasToday?"":tr("dziś zamknięte")));
    var shut=[];for(var ci=1;ci<NDAYS;ci++)if(closedManual(s,dateOf(ci)))shut.push(DAYS[ci]);
    var call='<a class="btn sm" data-call="'+esc(s.id)+'" href="'+esc(telHref(s.phone))+'">'+ic(IC_PHONE)+tr("Zadzwoń")+'</a>';
    r.v.forEach(function(x){
      var o=slotOff(x);
      if(x.date!==last){html+='<div class="daylab d'+o+'">'+dayHead(o)+'</div>';last=x.date}
      var off=offPct(x),info;
      if(isRange(x))info='<div>'+tr("Wolne godziny")+' <span class="meta">'+tr("do")+' '+endOf(x)+'</span></div><div class="meta">'+(noPrice(s)?tr("Usługę ustalisz z salonem"):tr("Usługę i cenę ustalisz z salonem"))+'</div>';
      else info='<div>'+esc(svcName(x.service))+' <span class="meta">'+x.dur+' min</span></div>'+(noPrice(s)?'':'<div class="price">'+priceHtml(x)+(off>0?'<span class="off">−'+off+'%</span>':'')+'</div>');
      var sms=canSms(s.phone)?'<a class="btn ghost sm" data-sms="'+esc(s.id)+'" href="'+esc(smsHref(s.phone,smsBody(s,x)))+'">'+ic(IC_MSG)+tr("SMS")+'</a>':'';
      html+='<div class="slot d'+o+'"><div class="t">'+esc(x.time)+'</div><div class="sv"><span class="si">'+ic(salonIc(s))+'</span><div class="sx">'+info+'</div></div><div class="go">'+sms+call+'</div></div>';
    });
    var meta=[esc(withCity(s.address))];if(hrs)meta.push(esc(hrs));
    return '<article class="card scard'+(hasCover(s)?'':' nocov')+'" id="sal-'+esc(s.id)+'">'+coverHtml(s)+'<div class="cmain"><div class="shead">'+logoHtml(s)+'<div class="sname"><h3>'+esc(s.name)+'</h3>'+catTags(s)+'</div>'+(r.d!=null?'<span class="dist">'+km(r.d)+'</span>':'')+'</div>'+
      '<div class="body"><div class="meta addr">'+ic(IC_PIN)+'<span>'+meta.join(" · ")+'</span></div>'+(shut.length?'<div class="meta shut">'+tr("Nieczynne:")+' '+esc(shut.join(", "))+'</div>':'')+(s.desc?'<p class="desc">'+esc(s.desc)+'</p>':'')+(galleryOf(s).length>1?galHtml(s):'')+'</div>'+html+
      '<div class="foot"><span class="tel">'+tr("Tel.")+' <span class="phone">'+esc(s.phone)+'</span> <button class="link" type="button" data-copy="'+esc(s.phone)+'">'+tr("Kopiuj")+'</button>'+(s.mapUrl?' · <a href="'+esc(s.mapUrl)+'" target="_blank" rel="noopener">'+tr("Mapa")+'</a>':'')+'</span>'+
      '<details class="more"><summary aria-label="'+tr("Więcej opcji")+'" title="'+tr("Więcej opcji")+'">⋯</summary><div class="menu"><button type="button" data-report="'+esc(s.id)+'">'+tr("Zgłoś nadużycie")+'</button></div></details></div></div></article>';
  }
  function galHtml(s){
    var g=galleryOf(s);if(!g.length)return "";
    return '<div class="gal" role="list" aria-label="'+tr("Zdjęcia")+'">'+g.map(function(p,i){return '<button type="button" role="listitem" data-ph="'+esc(s.id)+'" data-phi="'+i+'" aria-label="'+tr("Pokaż zdjęcie {0} z {1}",[i+1,g.length])+'"><img src="'+esc(p.thumb||p.url)+'" alt="" loading="lazy" decoding="async"></button>'}).join("")+'</div>';
  }
  /* ================= KATALOG: wszystkie salony (bez porównywania cen), kolejność wg odległości ================= */
  function fold(v){var m={"ą":"a","ć":"c","ę":"e","ł":"l","ń":"n","ó":"o","ś":"s","ź":"z","ż":"z"};return String(v||"").toLowerCase().replace(/[ąćęłńóśźż]/g,function(c){return m[c]})}
  function catSalons(){return Object.keys(salons).map(function(k){return salons[k]}).filter(function(s){return pubOk(s)&&s.name})}
  function freeOf(s){
    return allSlots().filter(function(x){if(x.salonId!==s.id||isTaken(x)||isPast(x)||closedOn(s,x.date))return false;var o=slotOff(x);return o>=0&&o<NDAYS}).sort(sortSlots);
  }
  function catMatch(s){
    if(catF!=="all"&&catsOf(s).indexOf(catF)<0)return false;
    var qq=fold(catQ).trim();if(!qq)return true;
    var hay=fold([s.name,s.address,s.desc].concat(catsOf(s).map(catName)).concat((s.services||[]).map(function(v){return v.name})).join(" "));
    return qq.split(/\s+/).every(function(w){return hay.indexOf(w)>=0});
  }
  function catRef(){return user?{lat:user.lat,lng:user.lng}:{lat:PLACES[0].lat,lng:PLACES[0].lng}}
  function catSorted(){
    var r=catRef();
    return catSalons().filter(catMatch).map(function(s){
      return {s:s,d:(s.lat!=null&&s.lng!=null)?hav(r.lat,r.lng,s.lat,s.lng):null};
    }).sort(function(a,b){
      if(a.d==null&&b.d==null)return a.s.name.localeCompare(b.s.name,"pl");
      if(a.d==null)return 1;if(b.d==null)return -1;
      return a.d-b.d||a.s.name.localeCompare(b.s.name,"pl");
    });
  }
  function catalogHtml(){
    var all=catSalons();
    if(!all.length)return emptyHtml()+inviteHtml();
    var used=CATS.filter(function(c){return (!branch||grpCats(branch).indexOf(c.k)>=0)&&all.some(function(s){return catsOf(s).indexOf(c.k)>=0})});
    if(catF!=="all"&&!used.some(function(c){return c.k===catF}))catF="all";
    var pin=ic('<path d="M20 10c0 4.99-5.54 10.19-7.4 11.8a1 1 0 0 1-1.2 0C9.54 20.19 4 14.99 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/>');
    var loc;
    if(locState==="ok")loc='<p class="locline">'+pin+'<span>'+tr("Kolejność wg odległości od Ciebie.")+' <button class="link" id="gps" type="button">'+tr("Odśwież")+'</button></span></p>';
    else if(locState==="loading")loc='<p class="locline">'+pin+'<span>'+tr("Ustalam Twoją lokalizację…")+'</span></p>';
    else loc='<p class="locline">'+pin+'<span>'+tr("Kolejność wg odległości od centrum Radomska.")+' <button class="link" id="gps" type="button">'+tr("Pokaż odległość do salonów")+'</button></span></p>';
    var chips='<div class="chips" role="group" aria-label="'+tr("Rodzaj salonu")+'"><button type="button" class="chip" data-ccat="all" aria-pressed="'+(catF==="all")+'">'+tr("Wszystkie")+'<span class="n">'+all.length+'</span></button>'+
      used.map(function(c){var n=all.filter(function(s){return catsOf(s).indexOf(c.k)>=0}).length;return '<button type="button" class="chip" data-ccat="'+c.k+'" aria-pressed="'+(catF===c.k)+'">'+chipIc(c.k)+esc(catName(c.k))+'<span class="n">'+n+'</span></button>'}).join("")+'</div>';
    return '<div class="panel">'+loc+
      '<div class="field catsearch"><label class="f" for="catq">'+tr("Szukaj salonu lub usługi")+'</label><input id="catq" type="search" autocomplete="off" maxlength="60" placeholder="'+tr("np. koloryzacja, manicure, nazwa salonu")+'" value="'+esc(catQ)+'"></div>'+
      (used.length>1?chips:'')+'</div>'+
      '<div id="catlist">'+catListHtml()+'</div>'+inviteHtml()+addHomeHtml();
  }
  function catListHtml(){
    var res=catSorted();
    if(!res.length)return '<div class="emptycard"><p>'+tr("Nie znaleziono salonów dla wybranych filtrów.")+'</p><div class="btn-row" style="justify-content:center"><button class="btn ghost sm" type="button" id="catClear">'+tr("Wyczyść filtry")+'</button></div></div>';
    function salonsWord(n){if(LANG==="en")return n===1?"salon":"salons";var t=n%10,h=n%100;return n===1?"salon":(t>=2&&t<=4&&(h<12||h>14))?"salony":"salonów"}
    return '<div class="sortrow"><p class="count">'+res.length+' '+salonsWord(res.length)+'</p></div><div class="list">'+res.map(catCardHtml).join("")+'</div>';
  }
  function hoursHtml(s){
    if(!Array.isArray(s.hours)||s.hours.length!==7)return "";
    var ti=todayIdx();
    return '<div class="psec"><h4>'+tr("Godziny otwarcia")+'</h4><dl class="hrsview">'+s.hours.map(function(h,i){
      return '<div'+(i===ti?' class="today"':'')+'><dt>'+esc(WD[i])+'</dt><dd>'+(h&&!h.closed?esc(h.from)+'–'+esc(h.to):tr("nieczynne"))+'</dd></div>'}).join("")+'</dl></div>';
  }
  function priceListHtml(s){
    var l=(s.services||[]).filter(function(v){return v&&v.name});
    var h='<div class="psec"><h4>'+tr("Cennik usług")+'</h4>';
    if(!l.length)return h+'<p class="meta">'+tr("Salon nie dodał jeszcze cennika.")+'</p></div>';
    var np=noPrice(s);
    h+='<ul class="plist">'+l.map(function(v){return '<li><span class="pn">'+esc(v.name)+(v.dur?' <span class="meta">'+esc(v.dur)+' min</span>':'')+'</span>'+(np?'':'<span class="pp">'+esc(priceLabel(v))+'</span>')+'</li>'}).join("")+'</ul>';
    return h+'<p class="pnote">'+(np?tr("Cenę ustalisz z salonem."):tr("Cennik orientacyjny, cenę potwierdź w salonie."))+'</p></div>';
  }
  function catCardHtml(r){
    var s=r.s,open=!!catOpen[s.id],today=dateOf(0),h=(s.hours||[])[todayIdx()];
    var hrs=closedOn(s,today)?tr("dziś nieczynne"):(h&&!h.closed?tr("dziś {0}–{1}",[h.from,h.to]):(Array.isArray(s.hours)&&s.hours.length===7?tr("dziś zamknięte"):""));
    var meta=[esc(withCity(s.address))];if(hrs)meta.push(esc(hrs));
    var fr=freeOf(s),free;
    if(fr.length){var f0=fr[0];free='<div class="freebadge"><span>'+esc(tr("Wolne terminy: {0}, najbliższy {1}",[fr.length,DAYS[slotOff(f0)].toLowerCase()+" "+f0.time]))+'</span><button class="link" type="button" data-catgo="'+esc(s.id)+'">'+tr("Zobacz terminy")+'</button></div>'}
    else free='<div class="meta nofree">'+tr("Brak wolnych terminów w najbliższych dniach.")+'</div>';
    var shut=[];for(var ci=0;ci<NDAYS;ci++)if(closedManual(s,dateOf(ci)))shut.push(DAYS[ci]);
    var hasPhone=!!String(s.phone||"").trim();
    var acts='<div class="btn-row cact">'+
      (hasPhone?'<a class="btn sm" data-call="'+esc(s.id)+'" href="'+esc(telHref(s.phone))+'">'+ic(IC_PHONE)+tr("Zadzwoń")+'</a>':'')+
      (canSms(s.phone)?'<a class="btn ghost sm" data-sms="'+esc(s.id)+'" href="'+esc(smsHref(s.phone,smsBodyGeneral()))+'">'+ic(IC_MSG)+'SMS</a>':'')+
      '<button class="btn ghost sm" type="button" data-catopen="'+esc(s.id)+'" aria-expanded="'+open+'">'+(open?tr("Zwiń profil"):tr("Pokaż profil"))+'</button></div>';
    var prof=open?'<div class="prof">'+galHtml(s)+hoursHtml(s)+priceListHtml(s)+'</div>':'';
    return '<article class="card ccard scard'+(hasCover(s)?'':' nocov')+'">'+coverHtml(s)+'<div class="cmain"><div class="shead">'+logoHtml(s)+'<div class="sname"><h3>'+esc(s.name)+'</h3>'+catTags(s)+'</div>'+(user&&r.d!=null?'<span class="dist">'+km(r.d)+'</span>':'')+'</div>'+
      '<div class="body"><div class="meta addr">'+ic(IC_PIN)+'<span>'+meta.join(" · ")+'</span></div>'+(shut.length?'<div class="meta shut">'+tr("Nieczynne:")+' '+esc(shut.join(", "))+'</div>':'')+
      (s.desc?'<p class="desc'+(open?'':' clamp')+'">'+esc(s.desc)+'</p>':'')+free+prof+acts+'</div>'+
      '<div class="foot"><span class="tel">'+(hasPhone?tr("Tel.")+' <span class="phone">'+esc(s.phone)+'</span> <button class="link" type="button" data-copy="'+esc(s.phone)+'">'+tr("Kopiuj")+'</button>':'')+(s.mapUrl?(hasPhone?' · ':'')+'<a href="'+esc(s.mapUrl)+'" target="_blank" rel="noopener">'+tr("Mapa")+'</a>':'')+'</span>'+
      '<details class="more"><summary aria-label="'+tr("Więcej opcji")+'" title="'+tr("Więcej opcji")+'">⋯</summary><div class="menu"><button type="button" data-report="'+esc(s.id)+'">'+tr("Zgłoś nadużycie")+'</button></div></details></div></div></article>';
  }
  /* powiększenie zdjęcia (strzałki, przesunięcie palcem, Esc) */
  var lb=null;
  function openLb(sid,i){lb={sid:sid,i:i,back:document.activeElement};drawLb()}
  function closeLb(){var el=$("lb");if(el)el.parentNode.removeChild(el);document.body.classList.remove("lbopen");var b=lb&&lb.back;lb=null;if(b&&b.focus)try{b.focus()}catch(e){}}
  function stepLb(d){if(!lb)return;var n=galleryOf(salons[lb.sid]).length;if(n<2)return;lb.i=(lb.i+d+n)%n;drawLb()}
  function drawLb(){
    var s=salons[lb.sid],g=galleryOf(s);if(!g.length){closeLb();return}
    if(lb.i>=g.length)lb.i=0;
    var p=g[lb.i],el=$("lb"),multi=g.length>1;
    if(!el){el=document.createElement("div");el.id="lb";el.setAttribute("role","dialog");el.setAttribute("aria-modal","true");document.body.appendChild(el);document.body.classList.add("lbopen")}
    el.setAttribute("aria-label",s.name);
    el.innerHTML='<div class="lbtop"><span><b>'+esc(s.name)+'</b> · '+esc(kindName(p.kind))+(multi?' · '+(lb.i+1)+'/'+g.length:'')+'</span><button type="button" class="lbx" data-lbclose="1" aria-label="'+tr("Zamknij")+'">×</button></div>'+
      '<div class="lbimg" data-lbclose="1"><img src="'+esc(p.url)+'" alt=""></div>'+
      (multi?'<button type="button" class="lbnav prev" data-lbstep="-1" aria-label="'+tr("Poprzednie zdjęcie")+'">‹</button><button type="button" class="lbnav next" data-lbstep="1" aria-label="'+tr("Następne zdjęcie")+'">›</button>':'');
    var x=el.querySelector(".lbx");if(x)x.focus();
  }
  document.addEventListener("keydown",function(e){if(!lb)return;if(e.key==="Escape")closeLb();else if(e.key==="ArrowLeft")stepLb(-1);else if(e.key==="ArrowRight")stepLb(1)});
  var lbX=null;
  document.addEventListener("touchstart",function(e){if(lb&&e.touches.length===1)lbX=e.touches[0].clientX},{passive:true});
  document.addEventListener("touchend",function(e){if(!lb||lbX==null)return;var dx=e.changedTouches[0].clientX-lbX;lbX=null;if(Math.abs(dx)>50)stepLb(dx<0?1:-1)},{passive:true});
  /* ================= SALON ================= */
  function renderSalon(){
    var app=$("app");
    if(!curId){renderLogin();return}
    if(!(ready.s&&ready.t)){app.innerHTML=loadingHtml();return}
    var s=salons[curId];
    if(!s){curId=null;renderLogin();return}
    app.innerHTML='<div class="who"><span>'+tr("Zalogowano:")+' <b>'+esc(s.name)+'</b></span><button class="btn ghost sm" id="logout" type="button">'+tr("Wyloguj")+'</button></div>'+
      '<nav class="tabs" role="tablist" aria-label="'+tr("Panel salonu")+'">'+
      salonTabs().map(function(t){
        return '<button role="tab" data-snav="'+t[0]+'" aria-selected="'+(sview===t[0])+'">'+t[1]+'</button>';
      }).join("")+'</nav><div id="sbanner">'+approvalHtml(s)+'</div><section id="sview"></section>'+addHomeHtml();
    var v=$("sview");
    if(!isAdmin&&sview.indexOf("adm-")===0)sview="add";
    if(isAdmin&&sview.indexOf("adm-")!==0)sview="adm-pend";
    if(isAdmin){renderAdmin(v);loadReports()}
    else if(sview==="add")renderAdd(v,s);else if(sview==="mine"){renderMine(v);loadStats()}else if(sview==="help"){v.innerHTML=helpHtml(HELP_S,tr("Jak korzystać z aplikacji – dla salonów"))}else{renderProfil(v,s);paintQrPrev(s)}
  }
  /* --- administrator: zatwierdzanie salonów --- */
  function pendingCount(){return Object.keys(salons).filter(function(k){return salons[k].approved===false&&k!==curId}).length}
  function adminAlerts(){return pendingCount()+adminReq.length+Object.keys(adminReports).length}
  function adminLists(){
    var list=Object.keys(salons).map(function(k){return salons[k]}).filter(function(x){return x.id!==curId});
    function nrep(x){return(adminReports[x.id]&&adminReports[x.id].count)||0}
    return {
      nrep:nrep,
      pend:list.filter(function(x){return x.approved===false}).sort(function(a,b){return String(b.createdAt||"").localeCompare(String(a.createdAt||""))}),
      ok:list.filter(function(x){return x.approved!==false}).sort(function(a,b){return nrep(b)-nrep(a)||String(a.name).localeCompare(String(b.name),"pl")}),
      rep:list.filter(function(x){return nrep(x)>0}).sort(function(a,b){return nrep(b)-nrep(a)})
    };
  }
  function salonTabs(){
    if(isAdmin){
      var L=adminLists();
      function bd(n){return n?'<span class="badge">'+n+'</span>':''}
      return [["adm-pend",tr("Do zatwierdzenia")+bd(L.pend.length)],["adm-req",tr("Od klientów")+bd(adminReq.length)],["adm-rep",tr("Nadużycia")+bd(L.rep.length)],["adm-ok",tr("Zatwierdzone")],["adm-act",tr("Aktywność")+bd(actAlerts())]];
    }
    return [["add",tr("Dodaj termin")],["mine",tr("Moje terminy")],["profil",tr("Profil")],["help",tr("Pomoc")]];
  }
  function approvalHtml(s){
    if(isAdmin||s.approved!==false)return "";
    return '<div class="note warn"><b>'+tr("Salon czeka na zatwierdzenie.")+'</b> '+tr("Klienci jeszcze go nie widzą. Zadzwonimy na numer z profilu, żeby go potwierdzić.")+''+((s.phone||"").trim()?"":' <b>'+tr("Uzupełnij numer telefonu w profilu.")+'</b>')+'</div>';
  }
  var pendingAdm="",pendingS="",pushState="unknown";
  /* kliknięcie w powiadomienie, gdy aplikacja jest już otwarta, zmienia tylko końcówkę adresu (#...) */
  window.addEventListener("hashchange",function(){
    var h=(location.hash||"").replace("#","");
    if(h.indexOf("adm-")===0){mode="salon";if(isAdmin){sview=h;adminRepT=0}else pendingAdm=h;render()}
    else if(h==="mine"||h==="add"){mode="salon";if(curId&&!isAdmin){sview=h;remState="unknown"}else pendingS=h;render()}
  });
  function b64ToBytes(b){var p="=".repeat((4-b.length%4)%4),r=(b+p).replace(/-/g,"+").replace(/_/g,"/"),raw=atob(r),o=new Uint8Array(raw.length);for(var i=0;i<raw.length;i++)o[i]=raw.charCodeAt(i);return o}
  async function refreshPush(){
    var st;
    if(!("serviceWorker" in navigator)||!("PushManager" in window)||!("Notification" in window))st="unsupported";
    else if(Notification.permission==="denied")st="denied";
    else{try{var reg=await navigator.serviceWorker.getRegistration();var sub=reg&&await reg.pushManager.getSubscription();st=sub&&sameKey(sub,vapidBytes())?"on":"off"}catch(e){st="off"}}
    if(st!==pushState){pushState=st;if(isAdmin&&sview.indexOf("adm-")===0&&mode==="salon")render()}
  }
  /* klucz publiczny powiadomień; subskrypcja z innym (starym) kluczem jest odnawiana */
  function vapidBytes(){var k=(window.FLM_CONFIG&&window.FLM_CONFIG.vapidPublic)||"";return k?b64ToBytes(k):null}
  function sameKey(sub,want){try{var k=sub&&sub.options&&sub.options.applicationServerKey;if(!k||!want)return true;var a=new Uint8Array(k);if(a.length!==want.length)return false;for(var i=0;i<a.length;i++)if(a[i]!==want[i])return false;return true}catch(e){return true}}
  async function pushSubscribe(){
    var want=vapidBytes();if(!want){var e0=new Error("nokey");e0.code="nokey";throw e0}
    var perm=await Notification.requestPermission();
    if(perm!=="granted"){var e1=new Error("denied");e1.code="denied";throw e1}
    var reg=await navigator.serviceWorker.ready,sub=await reg.pushManager.getSubscription();
    if(sub&&!sameKey(sub,want)){try{await sub.unsubscribe()}catch(x){}sub=null}
    if(!sub)sub=await reg.pushManager.subscribe({userVisibleOnly:true,applicationServerKey:want});
    var j=sub.toJSON();return {endpoint:j.endpoint,p256dh:j.keys.p256dh,auth:j.keys.auth};
  }
  async function enablePush(){
    try{
      var s=await pushSubscribe();
      await window.FLM_ADMIN.savePush(s);
      toast(tr("Powiadomienia włączone na tym telefonie."));
    }catch(e){toast(e&&e.code==="nokey"?tr("Powiadomienia nie są skonfigurowane."):e&&e.code==="denied"?tr("Brak zgody na powiadomienia."):tr("Nie udało się włączyć powiadomień."))}
    refreshPush();
  }
  async function disablePush(){
    try{
      var reg=await navigator.serviceWorker.getRegistration(),sub=reg&&await reg.pushManager.getSubscription();
      if(sub){var ep=sub.endpoint;await sub.unsubscribe();try{await window.FLM_ADMIN.removePush(ep)}catch(e){}}
      toast(tr("Powiadomienia wyłączone."));
    }catch(e){toast(tr("Nie udało się wyłączyć powiadomień."))}
    refreshPush();
  }
  async function testPush(){
    try{var reg=await navigator.serviceWorker.getRegistration();await reg.showNotification("Last Minute Radomsko",{body:tr("Tak będą wyglądać powiadomienia."),icon:"lm-icon-192.png",data:{url:"./"}})}
    catch(e){toast(tr("Nie udało się pokazać powiadomienia."))}
  }
  /* --- przypomnienia dla salonu: powiadomienie po 3 dniach bez zmian w terminach --- */
  var remState="unknown",remFor=null,remSynced="";
  function remKey(){return "flm_rem_"+curId}
  async function refreshRem(){
    if(!curId||isAdmin||!window.FLM_PUSH)return;
    var st,id=curId;
    if(!("serviceWorker" in navigator)||!("PushManager" in window)||!("Notification" in window))st=(isIOS()&&!isStandalone())?"ios":"unsupported";
    else if(Notification.permission==="denied")st="denied";
    else{
      try{
        var reg=await navigator.serviceWorker.getRegistration(),sub=reg&&await reg.pushManager.getSubscription(),saved=null;
        try{saved=localStorage.getItem(remKey())}catch(e){}
        st=(sub&&saved===sub.endpoint&&sameKey(sub,vapidBytes()))?"on":"off";
        if(st==="on"&&remSynced!==id){remSynced=id;var j=sub.toJSON();window.FLM_PUSH.saveSalon({endpoint:j.endpoint,p256dh:j.keys.p256dh,auth:j.keys.auth}).catch(function(){remSynced=""})}
      }catch(e){st="off"}
    }
    if(id!==curId)return;
    if(st!==remState){remState=st;if(mode==="salon"&&sview==="mine")render()}
  }
  async function enableRem(){
    try{
      var s=await pushSubscribe();
      await window.FLM_PUSH.saveSalon(s);
      try{localStorage.setItem(remKey(),s.endpoint)}catch(e){}
      remSynced=curId;
      toast(tr("Przypomnienia włączone na tym telefonie."));
    }catch(e){toast(e&&e.code==="denied"?tr("Brak zgody na powiadomienia."):tr("Nie udało się włączyć przypomnień."))}
    refreshRem();
  }
  async function disableRem(){
    try{
      var reg=await navigator.serviceWorker.getRegistration(),sub=reg&&await reg.pushManager.getSubscription();
      if(sub)await window.FLM_PUSH.removeSalon(sub.endpoint);
      try{localStorage.removeItem(remKey())}catch(e){}
      toast(tr("Przypomnienia wyłączone."));
    }catch(e){toast(tr("Nie udało się wyłączyć przypomnień."))}
    refreshRem();
  }
  /* przy wylogowaniu telefon przestaje dostawać przypomnienia tego salonu */
  async function remUnlink(id){
    try{
      if(!id||!window.FLM_PUSH)return;
      var saved=null;try{saved=localStorage.getItem("flm_rem_"+id);localStorage.removeItem("flm_rem_"+id)}catch(e){}
      if(saved)await window.FLM_PUSH.removeSalon(saved);
    }catch(e){}
  }
  async function testRem(){
    try{var reg=await navigator.serviceWorker.getRegistration();await reg.showNotification("Last Minute Radomsko",{body:tr("Tak będzie wyglądać przypomnienie."),icon:"lm-icon-192.png",data:{url:"./#mine"}})}
    catch(e){toast(tr("Nie udało się pokazać powiadomienia."))}
  }
  function remCardHtml(){
    if(isAdmin||!curId||!window.FLM_PUSH)return "";
    if(remFor!==curId){remFor=curId;remState="unknown";remSynced=""}
    if(remState==="unknown"){refreshRem();return ""}
    var msg,btn="";
    if(remState==="on"){msg='<b>'+tr("Przypomnienia są włączone.")+'</b> '+tr("Jeśli przez 3 dni nie zmienisz terminów, przypomnimy Ci o tym na tym telefonie.");btn='<button class="btn ghost sm" type="button" id="remTest">'+tr("Pokaż próbne")+'</button><button class="btn ghost sm" type="button" id="remOff">'+tr("Wyłącz")+'</button>'}
    else if(remState==="off"){msg='<b>'+tr("Włącz przypomnienia.")+'</b> '+tr("Gdy przez 3 dni nie zmienisz terminów, przypomnimy Ci na telefonie o dodaniu wolnych miejsc. Najwyżej raz na 3 dni.");btn='<button class="btn sm" type="button" id="remOn">'+tr("Włącz przypomnienia")+'</button>'}
    else if(remState==="ios")msg=tr("Przypomnienia na iPhonie działają po dodaniu aplikacji do ekranu głównego: w Safari kliknij „Udostępnij”, potem „Do ekranu początkowego”, otwórz aplikację z nowej ikony i włącz przypomnienia tutaj.");
    else if(remState==="denied")msg=tr("Powiadomienia są zablokowane w ustawieniach przeglądarki. Odblokuj je, żeby dostawać przypomnienia.");
    else msg=tr("Ta przeglądarka nie obsługuje przypomnień.");
    return '<div class="note" id="remCard" style="display:flex;flex-wrap:wrap;gap:8px 12px;align-items:center;justify-content:space-between"><span>'+msg+'</span>'+(btn?'<span class="btn-row">'+btn+'</span>':'')+'</div>';
  }
  function pushCardHtml(){
    var msg,btn="";
    if(pushState==="unknown")return "";
    if(pushState==="unsupported")msg=tr("Ta przeglądarka nie obsługuje powiadomień.");
    else if(pushState==="denied")msg=tr("Powiadomienia są zablokowane w ustawieniach przeglądarki.");
    else if(pushState==="on"){msg=tr("Powiadomienia na tym telefonie są włączone.");btn='<button class="btn ghost sm" type="button" id="pushTest">'+tr("Pokaż próbne")+'</button><button class="btn ghost sm" type="button" id="pushOff">'+tr("Wyłącz")+'</button>'}
    else{msg=tr("Włącz poranne podsumowanie: nowe salony, zgłoszenia i salony do przypomnienia.");btn='<button class="btn sm" type="button" id="pushOn">'+tr("Włącz powiadomienia")+'</button>'}
    return '<div class="note" style="display:flex;flex-wrap:wrap;gap:8px 12px;align-items:center;justify-content:space-between"><span>'+msg+'</span><span class="btn-row">'+btn+'</span></div>';
  }
  async function checkAdmin(){
    if(!curId||adminChecked===curId||!window.FLM_ADMIN)return;
    adminChecked=curId;
    try{
      if(await window.FLM_ADMIN.isAdmin()){
        isAdmin=true;
        if(mode==="salon"){
          sview=(["adm-pend","adm-req","adm-rep","adm-ok","adm-act"].indexOf(pendingAdm)>=0)?pendingAdm:"adm-pend";
          pendingAdm="";try{history.replaceState(null,"",location.pathname+location.search)}catch(x){}
          render();
        }
        refreshPush();
      }
    }catch(e){}
  }
  async function loadReports(){
    if(!isAdmin||!window.FLM_ADMIN||Date.now()-adminRepT<15000)return;
    adminRepT=Date.now();
    try{
      var rows=await window.FLM_ADMIN.reports(),reqs=await window.FLM_ADMIN.requests();
      adminReports={};rows.forEach(function(r){adminReports[r.salon_id]=r});
      adminReq=reqs;
      try{var act=await window.FLM_ADMIN.activity();adminAct={};act.forEach(function(r){adminAct[r.salon_id]=r});adminActErr=false}catch(e2){adminActErr=true}
      if(sview.indexOf("adm-")===0&&mode==="salon"&&isAdmin)render();
    }catch(e){}
  }
  async function deleteReq(id,accepted){
    try{await window.FLM_ADMIN.deleteRequest(id);adminReq=adminReq.filter(function(x){return x.id!==id});toast(accepted?tr("Zgłoszenie oznaczone jako zatwierdzone."):tr("Zgłoszenie odrzucone."));render()}catch(e){toast(errMsg(e))}
  }
  function adminPhotos(x){
    var g=galleryOf(x);if(!g.length&&!x.logoUrl)return "";
    return '<div class="gal adm">'+(x.logoUrl?'<span class="aph">'+logoHtml(x)+'</span>':'')+g.map(function(p){return '<span class="aph"><img src="'+esc(p.thumb||p.url)+'" alt="" loading="lazy"><button type="button" class="phdel" data-aphdel="'+esc(x.id)+'|'+esc(p.id)+'" aria-label="'+tr("Usuń zdjęcie")+'">×</button></span>'}).join("")+'</div>';
  }
  async function adminDelPhoto(sid,pid){
    var x=salons[sid];if(!isAdmin||!x)return;
    if(!window.confirm(tr("Usunąć to zdjęcie?")))return;
    var p=photosOf(x).filter(function(q){return q.id===pid})[0],list=photosOf(x).filter(function(q){return q.id!==pid});
    try{
      await db.doc("salons/"+sid).update({photos:list});
      salons[sid]=Object.assign({},x,{photos:list});
      if(p&&window.FLM_STORAGE)window.FLM_STORAGE.removeFiles([p.url,p.thumb]);
      toast(tr("Zdjęcie usunięte."));render();
    }catch(e){toast(errMsg(e))}
  }
  function slotCount(id){return allSlots().filter(function(x){return x.salonId===id}).length}
  /* --- administrator: aktywność salonów i przypomnienia --- */
  var adminAct={},adminActErr=false;
  function actDays(r){return r&&r.last_slot_change?Math.max(0,Math.floor((Date.now()-new Date(r.last_slot_change).getTime())/86400000)):0}
  function actAlerts(){var n=0;Object.keys(salons).forEach(function(k){var x=salons[k],r=adminAct[k];if(x.approved!==false&&k!==curId&&r&&actDays(r)>=3&&!(r.push_devices>0&&r.reminder_count<3))n++});return n}
  function appUrl(){return location.origin+location.pathname.replace(/index\.html$/,"")}
  function salonLink(s){return s&&s.slug?appUrl()+"#s/"+s.slug:""}
  function linkCardHtml(s){
    if(!s||!s.slug)return "";
    var url=salonLink(s),hid=!!s.hidden;
    function opt(val,title,desc){return '<label style="display:flex;gap:10px;align-items:flex-start;margin:10px 0;cursor:pointer"><input type="radio" name="vis" value="'+val+'"'+((val==="1")===hid?' checked':'')+' style="flex:none;width:20px;height:20px;margin:2px 0 0;accent-color:var(--accent)"><span style="min-width:0"><b>'+title+'</b><br><span class="meta">'+desc+'</span></span></label>'}
    return '<div class="card pad"><h3 style="margin-bottom:6px">'+tr("Twój link i kod QR dla klientów")+'</h3>'+
      '<p style="margin:0 0 6px"><span class="pill '+(hid?'booked':'free')+'" style="white-space:normal;display:inline-block;line-height:1.4;padding:5px 10px;height:auto;max-width:100%;box-sizing:border-box">'+(hid?tr("Twój salon jest ukryty – widzą go tylko klienci z Twoim linkiem lub kodem QR."):tr("Twój salon jest publiczny – widzą go wszyscy klienci aplikacji na wspólnej liście."))+'</span></p>'+
      '<p class="meta" style="margin:0 0 10px">'+tr("Ten link prowadzi prosto do Twojego salonu: klient, który go otworzy albo zeskanuje kod, zobaczy od razu Twoje wolne terminy.")+'</p>'+
      '<div style="display:flex;flex-wrap:wrap;gap:14px;align-items:center"><div id="qrPrev" style="flex:none;width:132px;height:132px;background:#fff;border-radius:10px;padding:6px;box-sizing:border-box"></div>'+
      '<div style="flex:1 1 220px;min-width:0"><p style="margin:0 0 8px">'+tr("Otwórz stronę salonu:")+' <a href="'+esc(url)+'" target="_blank" rel="noopener" title="'+esc(url)+'"><b>'+esc(s.name||"")+'</b></a></p>'+
      (s.approved===false?'<p class="hint" style="margin:0 0 8px">'+tr("Link zacznie działać po zatwierdzeniu salonu.")+'</p>':'')+
      '<div class="btn-row"><button class="btn sm" type="button" id="lnkCopy">'+tr("Kopiuj link")+'</button>'+(navigator.share?'<button class="btn ghost sm" type="button" id="lnkShare">'+tr("Udostępnij")+'</button>':'')+'<button class="btn ghost sm" type="button" id="lnkQr">'+tr("Pobierz kod QR do druku")+'</button></div></div></div>'+
      (s.hideAllowed?'<h3 style="margin:16px 0 4px">'+tr("Widoczność salonu")+'</h3><div role="radiogroup" aria-label="'+tr("Widoczność salonu")+'">'+
      opt("0",tr("Publiczny"),tr("Salon jest na wspólnej liście w aplikacji i pod Twoim linkiem."))+
      opt("1",tr("Tylko dla moich klientów"),tr("Salonu nie ma na wspólnej liście. Widzą go tylko osoby z Twoim linkiem lub kodem QR."))+
      '</div>':'')+'</div>';
  }
  /* biblioteka kodów QR ładowana dopiero, gdy jest potrzebna */
  var qrLib=null;
  function loadQr(){
    if(window.qrcode)return Promise.resolve(window.qrcode);
    if(qrLib)return qrLib;
    qrLib=new Promise(function(ok,bad){var sc=document.createElement("script");sc.src="qrcode.js?v=1.5.2";sc.onload=function(){window.qrcode?ok(window.qrcode):bad(new Error("qr"))};sc.onerror=function(){qrLib=null;bad(new Error("qr"))};document.head.appendChild(sc)});
    return qrLib;
  }
  function qrMake(q,url){var c=q(0,"M");c.addData(url);c.make();return c}
  function paintQrPrev(s){
    var box=$("qrPrev");if(!box||!s||!s.slug)return;
    loadQr().then(function(q){var c=qrMake(q,salonLink(s));box.innerHTML=c.createSvgTag({cellSize:4,margin:0,scalable:true});var sv=box.querySelector("svg");if(sv){sv.style.width="100%";sv.style.height="100%";sv.setAttribute("role","img");sv.setAttribute("aria-label","QR")}}).catch(function(){box.hidden=true});
  }
  /* plakat do druku: nazwa salonu, duży kod QR i link (PNG) */
  function downloadQr(s){
    loadQr().then(function(q){
      var url=salonLink(s),c=qrMake(q,url),n=c.getModuleCount(),W=1240,H=1754,cv=document.createElement("canvas");cv.width=W;cv.height=H;
      var g=cv.getContext("2d"),acc=getComputedStyle(document.documentElement).getPropertyValue("--accent").trim()||"#8f1d2c";
      g.fillStyle="#fff";g.fillRect(0,0,W,H);g.textAlign="center";g.fillStyle="#1a1a1a";
      g.font="600 56px system-ui,-apple-system,Segoe UI,Roboto,sans-serif";g.fillText(tr("Wolne terminy"),W/2,200);
      var nm=s.name||"",fs=96;g.font="800 "+fs+"px system-ui,-apple-system,Segoe UI,Roboto,sans-serif";
      while(g.measureText(nm).width>W-160&&fs>40){fs-=4;g.font="800 "+fs+"px system-ui,-apple-system,Segoe UI,Roboto,sans-serif"}
      g.fillStyle=acc;g.fillText(nm,W/2,320);
      var size=900,cell=Math.floor(size/n),qs=cell*n,x0=Math.round((W-qs)/2),y0=440;
      g.fillStyle="#000";for(var r=0;r<n;r++)for(var k=0;k<n;k++)if(c.isDark(r,k))g.fillRect(x0+k*cell,y0+r*cell,cell,cell);
      g.fillStyle="#1a1a1a";g.font="600 52px system-ui,-apple-system,Segoe UI,Roboto,sans-serif";g.fillText(tr("Zeskanuj telefonem"),W/2,y0+qs+130);
      g.fillStyle=acc;g.font="700 34px system-ui,-apple-system,Segoe UI,Roboto,sans-serif";g.fillText(brandName(catsOf(s)[0]),W/2,H-90);
      cv.toBlob(function(b){if(!b){toast(tr("Nie udało się przygotować kodu QR."));return}var a=document.createElement("a");a.href=URL.createObjectURL(b);a.download="kod-qr-"+s.slug+".png";document.body.appendChild(a);a.click();setTimeout(function(){URL.revokeObjectURL(a.href);a.remove()},4000)},"image/png");
    }).catch(function(){toast(tr("Nie udało się przygotować kodu QR."))});
  }
  async function setVisibility(hidden){
    var s=salons[curId];if(!s)return;
    try{
      await db.doc("salons/"+curId).update({hidden:hidden});
      salons[curId]=Object.assign({},s,{hidden:hidden});
      toast(hidden?tr("Zapisano: salon widoczny tylko przez Twój link."):tr("Zapisano: salon jest publiczny."));
    }catch(e){toast(tr("Nie udało się zapisać widoczności."))}
    var lc_=$("linkCard");if(lc_){lc_.innerHTML=linkCardHtml(salons[curId]);paintQrPrev(salons[curId])}
  }
  function actHtml(list,phone){
    if(adminActErr)return '<p class="note warn">'+tr("Dane o aktywności są niedostępne. Uruchom w Supabase plik supabase-przypomnienia.sql.")+'</p>';
    if(!list.length)return '<p class="empty">'+tr("Brak zatwierdzonych salonów.")+'</p>';
    var rows=list.slice().sort(function(a,b){return actDays(adminAct[b.id])-actDays(adminAct[a.id])||String(a.name).localeCompare(String(b.name),"pl")});
    var body=tr("Dzień dobry, tu Last Minute Radomsko. Przypominamy o dodaniu wolnych terminów w aplikacji – klienci szukają wizyt last minute. Wystarczy minuta: {0}",[appUrl()]);
    return rows.map(function(x){
      var r=adminAct[x.id]||{},d=actDays(r),stale=d>=3,dev=r.push_devices||0,cnt=r.reminder_count||0,p=(x.phone||"").trim();
      var free=allSlots().filter(function(y){return y.salonId===x.id&&!isTaken(y)&&!isPast(y)}).length;
      var last=r.last_slot_change?new Date(r.last_slot_change).toLocaleDateString(lc())+' ('+(d===0?tr("dziś"):d===1?tr("wczoraj"):tr("{0} dni temu",[d]))+')':'—';
      var note="";
      if(stale&&dev&&cnt>=3)note=tr("Automatyczne przypomnienia wstrzymane po 3 próbach. Zadzwoń albo wyślij SMS.");
      else if(stale&&!dev)note=tr("Ten salon nie dostaje przypomnień na telefon. Możesz wysłać SMS.");
      return '<div class="card pad" style="margin-bottom:10px"><h3>'+esc(x.name)+' '+(x.hidden?'<span class="pill">'+tr("ukryty")+'</span> ':'')+(stale?'<span class="pill booked">'+tr("bez zmian od {0} dni",[d])+'</span>':'<span class="pill free">'+tr("aktywny")+'</span>')+'</h3>'+
        '<div class="meta">'+tr("Ostatnia zmiana terminów:")+' '+last+' · '+tr("Wolne terminy w ofercie:")+' '+free+'</div>'+
        '<p style="margin:8px 0">'+tr("Przypomnienia na telefonie:")+' <b>'+(dev?tr("włączone ({0})",[dev]):tr("wyłączone"))+'</b>'+(cnt?' · '+tr("Wysłane przypomnienia: {0} z 3, ostatnie {1}.",[cnt,r.last_reminder_at?new Date(r.last_reminder_at).toLocaleDateString(lc()):"—"]):'')+'</p>'+
        '<p style="margin:0 0 8px">'+tr("Telefon:")+' '+phone(x)+'</p>'+
        (note?'<p class="hint" style="margin:0 0 8px">'+note+'</p>':'')+
        (p?'<div class="btn-row"><a class="btn'+(stale?'':' ghost')+' sm" href="'+esc(smsHref(p,body))+'">'+tr("Wyślij SMS")+'</a><a class="btn ghost sm" href="'+esc(telHref(p))+'">'+tr("Zadzwoń")+'</a></div>':'')+
        '</div>';
    }).join("");
  }
  function renderAdmin(v){
    var L=adminLists(),nrep=L.nrep;
    function phone(x){var p=(x.phone||"").trim();return p?'<a class="phone" href="'+esc(telHref(p))+'">'+esc(p)+'</a>':'<b style="color:var(--danger)">'+tr("brak numeru telefonu")+'</b>'}
    function dt(t){return t?new Date(t).toLocaleDateString(lc()):"—"}
    var titles={"adm-pend":[tr("Czekają na zatwierdzenie"),tr("Zatwierdzaj po telefonie kontrolnym.")],
      "adm-req":[tr("Zgłoszenia od klientów"),tr("Salony zgłoszone przez klientów.")],
      "adm-rep":[tr("Zgłoszenia nadużyć"),tr("Salony zgłoszone jako nieprawdziwe.")],
      "adm-ok":[tr("Zatwierdzone salony"),tr("Salony widoczne dla klientów.")],
      "adm-act":[tr("Aktywność salonów"),tr("Kiedy salony ostatnio zmieniały terminy. Salonom bez przypomnień na telefonie możesz wysłać SMS.")]};
    var ttl=titles[sview]||titles["adm-pend"];
    var h='<div class="btn-row" style="justify-content:space-between;margin-bottom:6px"><h2 style="margin:0">'+ttl[0]+'</h2><button class="btn ghost sm" type="button" id="aref">'+tr("Odśwież")+'</button></div><p class="sub">'+ttl[1]+'</p>'+pushCardHtml();
    if(pushState==="unknown")refreshPush();
    if(sview==="adm-req"){
      h+=adminReq.length?adminReq.map(function(x){
        var p=(x.phone||"").trim();
        return '<div class="card pad" style="margin-bottom:10px"><h3>'+esc(x.salon_name)+'</h3><div class="meta">'+esc(x.address||tr("brak adresu"))+' · '+tr("zgłoszono")+' '+dt(x.created_at)+'</div>'+
          (p?'<p style="margin:8px 0">'+tr("Telefon:")+' <a class="phone" href="'+esc(telHref(p))+'">'+esc(p)+'</a></p>':'')+
          (x.note?'<p class="desc" style="-webkit-line-clamp:unset;display:block">'+esc(x.note)+'</p>':'')+
          '<div class="btn-row" style="margin-top:8px">'+(p?'<a class="btn ghost sm" href="'+esc(telHref(p))+'">'+tr("Zadzwoń")+'</a>':'')+'<button class="btn sm" type="button" data-areqok="'+esc(x.id)+'">'+tr("Zatwierdzone")+'</button><button class="btn danger sm" type="button" data-areqno="'+esc(x.id)+'">'+tr("Odrzucone")+'</button></div></div>';
      }).join(""):'<p class="empty">'+tr("Brak nowych zgłoszeń od klientów.")+'</p>';
    }else if(sview==="adm-rep"){
      h+=L.rep.length?L.rep.map(function(x){
        return '<div class="card pad" style="margin-bottom:10px"><h3>'+esc(x.name)+' <span class="pill booked">'+tr("Zgłoszenia:")+' '+nrep(x)+'</span></h3><div class="meta">'+esc(x.address?withCity(x.address):tr("brak adresu"))+' · '+(x.approved===false?tr("niezatwierdzony"):tr("zatwierdzony"))+(x.hidden?' · '+tr("ukryty"):'')+'</div>'+
          '<p style="margin:8px 0">'+tr("Telefon:")+' '+phone(x)+'</p>'+adminPhotos(x)+
          '<div class="btn-row">'+((x.phone||"").trim()?'<a class="btn ghost sm" href="'+esc(telHref(x.phone))+'">'+tr("Zadzwoń")+'</a>':'')+'<button class="btn danger sm" type="button" data-ahold="'+esc(x.id)+'">'+tr("Wstrzymaj")+'</button><button class="btn ghost sm" type="button" data-aclr="'+esc(x.id)+'">'+tr("Wyczyść zgłoszenia")+'</button></div></div>';
      }).join(""):'<p class="empty">'+tr("Brak zgłoszeń nadużyć.")+'</p>';
    }else if(sview==="adm-act"){
      h+=actHtml(L.ok,phone);
    }else if(sview==="adm-ok"){
      h+=L.ok.length?L.ok.map(function(x){
        var n=nrep(x);
        return '<div class="card pad" style="margin-bottom:10px"><h3>'+esc(x.name)+(x.hidden?' <span class="pill booked">'+tr("ukryty")+'</span>':'')+'</h3><div class="meta">'+esc(x.address?withCity(x.address):tr("brak adresu"))+' · '+tr("terminów:")+' '+slotCount(x.id)+'</div>'+
          '<p style="margin:8px 0">'+tr("Telefon:")+' '+phone(x)+(n?' · <span class="pill booked">'+tr("Zgłoszenia:")+' '+n+'</span>':'')+'</p>'+adminPhotos(x)+
          '<table style="border-collapse:collapse;margin:2px 0 10px;font-size:14px"><tr><td style="padding:3px 10px 3px 0;white-space:nowrap">'+tr("Widoczność dla klientów:")+'</td><td style="padding:3px 0"><span class="pill '+(x.hidden?'booked':'free')+'" style="white-space:normal;height:auto;line-height:1.4;padding:3px 9px">'+(x.hidden?tr("UKRYTY – tylko przez link / QR"):tr("PUBLICZNY – widzą go wszyscy"))+'</span></td></tr>'+
          '<tr><td style="padding:3px 10px 3px 0;white-space:nowrap">'+tr("Zgoda na ukrycie:")+'</td><td style="padding:3px 0"><span class="pill'+(x.hideAllowed?' booked':'')+'" style="white-space:normal;height:auto;line-height:1.4;padding:3px 9px'+(x.hideAllowed?'':';background:rgba(127,127,127,.14);color:inherit')+'">'+(x.hideAllowed?tr("NADANA – salon może sam wybrać"):tr("BRAK – salon nie może się ukryć"))+'</span></td></tr></table>'+
          '<div class="btn-row"><button class="btn ghost sm" type="button" data-ahide="'+esc(x.id)+'">'+(x.hideAllowed?tr("Odbierz zgodę na ukrycie"):tr("Nadaj zgodę na ukrycie"))+'</button><button class="btn danger sm" type="button" data-ahold="'+esc(x.id)+'">'+tr("Wstrzymaj")+'</button></div></div>';
      }).join(""):'<p class="empty">'+tr("Brak zatwierdzonych salonów.")+'</p>';
    }else{
      h+=L.pend.length?L.pend.map(function(x){
        var hasP=!!(x.phone||"").trim();
        return '<div class="card pad" style="margin-bottom:10px"><h3>'+esc(x.name)+'</h3><div class="meta">'+esc(x.address?withCity(x.address):tr("brak adresu"))+' · '+tr("założono")+' '+dt(x.createdAt)+' · '+tr("terminów:")+' '+slotCount(x.id)+'</div>'+
          '<p style="margin:8px 0">'+tr("Telefon:")+' '+phone(x)+'</p>'+adminPhotos(x)+
          '<div class="btn-row">'+(hasP?'<a class="btn ghost sm" href="'+esc(telHref(x.phone))+'">'+tr("Zadzwoń")+'</a>':'')+'<button class="btn sm" type="button" data-aok="'+esc(x.id)+'"'+(hasP?'':' disabled')+'>'+tr("Zatwierdź")+'</button><button class="btn danger sm" type="button" data-arej="'+esc(x.id)+'">'+tr("Odrzuć")+'</button></div>'+
          '<p class="hint">'+(hasP?tr("Najpierw zadzwoń i potwierdź salon."):tr("Bez numeru nie da się zweryfikować."))+'</p></div>';
      }).join(""):'<p class="empty">'+tr("Brak salonów do zatwierdzenia.")+'</p>';
    }
    v.innerHTML=h;
  }
  async function setApproved(id,val){
    if(!isAdmin)return;
    try{
      await db.doc("salons/"+id).update({approved:val});
      if(salons[id])salons[id]=Object.assign({},salons[id],{approved:val});
      toast(val?tr("Salon zatwierdzony. Klienci już go widzą."):tr("Salon wstrzymany. Klienci go nie widzą."));render();
    }catch(e){toast(errMsg(e))}
  }
  async function setHideAllowed(id,val){
    if(!isAdmin)return;
    try{
      await db.doc("salons/"+id).update({hideAllowed:val});
      if(salons[id])salons[id]=Object.assign({},salons[id],val?{hideAllowed:true}:{hideAllowed:false,hidden:false});
      toast(val?tr("Zgoda nadana. Salon może teraz wybrać „Tylko dla moich klientów” w swoim profilu."):tr("Zgoda cofnięta. Salon jest publiczny."));render();
    }catch(e){toast(errMsg(e))}
  }
  async function rejectSalon(id){
    if(!isAdmin)return;
    try{
      await db.doc("salons/"+id).delete();
      delete salons[id];
      toast(tr("Salon odrzucony i usunięty z listy."));render();
    }catch(e){toast(errMsg(e))}
  }
  async function clearReports(id){
    try{await window.FLM_ADMIN.clearReports(id);delete adminReports[id];toast(tr("Zgłoszenia wyczyszczone."));render()}catch(e){toast(errMsg(e))}
  }
  async function reportSalon(id){
    if(reported[id]){toast(tr("Ten salon został już przez Ciebie zgłoszony."));return}
    if(!window.confirm(tr("Zgłosić ten salon administratorowi (np. gdy to nie jest jego salon albo dane są nieprawdziwe)?")))return;
    try{await window.FLM_STATS.report(id);reported[id]=true;toast(tr("Dziękujemy. Zgłoszenie trafi do administratora."))}
    catch(e){toast(tr("Nie udało się wysłać zgłoszenia. Spróbuj później."))}
  }
  function renderLogin(){
    var reg=loginMode==="register";
    $("app").innerHTML='<div class="login card pad"><h2>'+(reg?tr("Załóż konto salonu"):tr("Zaloguj się"))+'</h2>'+
      '<p class="sub">'+(reg?tr("Aplikacja jest bezpłatna. Podaj nazwę salonu, login i hasło. Salon pojawi się po weryfikacji telefonicznej."):tr("Zaloguj się loginem i hasłem."))+'</p>'+
      '<form id="loginForm" novalidate>'+
      (reg?'<div class="field"><label class="f" for="ln">'+tr("Nazwa salonu")+'</label><input id="ln" autocomplete="organization"></div>'+catPick("rc_",[]):'')+
      '<div class="field"><label class="f" for="le">'+tr("Login")+'</label><input id="le" type="text" inputmode="text" autocomplete="username" autocapitalize="none" autocorrect="off" spellcheck="false"></div>'+
      '<div class="field"><label class="f" for="lp">'+tr("Hasło")+'</label><span class="pw"><input id="lp" type="password" autocomplete="'+(reg?"new-password":"current-password")+'"><button type="button" class="pwb" data-pw="lp" aria-pressed="false">'+tr("Pokaż")+'</button></span></div>'+
      (reg?'<div class="field"><label class="f" for="lp2">'+tr("Powtórz hasło")+'</label><span class="pw"><input id="lp2" type="password" autocomplete="new-password"><button type="button" class="pwb" data-pw="lp2" aria-pressed="false">'+tr("Pokaż")+'</button></span></div>':'')+
      '<p class="err" id="lerr" hidden></p>'+
      (loginInfo?'<p class="note">'+esc(loginInfo)+'</p>':'')+
      '<div class="btn-row"><button class="btn" type="submit" id="lsub">'+(reg?tr("Załóż konto"):tr("Zaloguj"))+'</button><button class="link" type="button" id="switchMode">'+(reg?tr("Mam już konto"):tr("Załóż konto"))+'</button>'+'</div></form>'+
      (reg?'<p class="hint">'+tr("Login: 3–30 znaków, małe litery bez polskich znaków, cyfry lub . _ - (np. salon-uroda). Hasło: min. 6 znaków. Nie ma odzyskiwania hasła, więc je zapisz.")+'</p>':'')+addHomeHtml()+'</div>';
  }
  function authMsg(e){
    var m=String(e&&e.message||"").toLowerCase(),c=e&&e.code;
    if(c==="name_taken")return tr("Salon o takiej nazwie już istnieje. Wybierz inną nazwę.");
    if(m.indexOf("invalid login")>=0)return tr("Nieprawidłowy login lub hasło.");
    if(m.indexOf("already registered")>=0||m.indexOf("already been registered")>=0)return tr("Konto z tym loginem już istnieje. Wybierz inny login albo zaloguj się.");
    if(m.indexOf("not confirmed")>=0)return tr("Konto nie jest potwierdzone. Administrator musi wyłączyć opcję Confirm email w Supabase.");
    if(m.indexOf("rate limit")>=0||m.indexOf("too many")>=0)return tr("Za dużo prób. Spróbuj ponownie za kilka minut.");
    if(m.indexOf("password")>=0)return tr("Hasło jest za słabe. Użyj co najmniej 6 znaków.");
    if(m.indexOf("valid email")>=0||m.indexOf("invalid email")>=0||m.indexOf("is invalid")>=0)return tr("Serwer odrzucił ten login. Spróbuj innego albo zgłoś problem administratorowi.");
    if(m.indexOf("fetch")>=0||m.indexOf("network")>=0)return tr("Brak połączenia z internetem. Spróbuj ponownie.");
    return tr("Nie udało się zalogować. Spróbuj ponownie.");
  }
  async function ensureSalon(user,nameOpt,catsOpt){
    var ex=await db.doc("salons/"+user.id).get();
    if(ex.exists){salons[user.id]=Object.assign({id:user.id},ex.data());return}
    var n=(nameOpt||(user.user_metadata&&user.user_metadata.name)||"").trim();
    if(n.length<2)n="Mój salon";
    var doc={name:n,nameKey:nameKey(n),address:"",phone:"",desc:"",mapUrl:"",placeKey:"centrum",lat:null,lng:null,services:[],category:(catsOpt&&catsOpt.length?catsOpt:["fryzjer"]).join(","),
      hours:WD.map(function(_,k){return {closed:k>=6,from:"09:00",to:"17:00"}})};
    await db.doc("salons/"+user.id).set(doc);
    salons[user.id]=Object.assign({id:user.id,approved:false},doc);
    return true;
  }
  async function doLogin(){
    var reg=loginMode==="register",n=reg?$("ln").value.trim():"",lg=$("le").value.trim().toLowerCase(),em="",p=$("lp").value,err=$("lerr"),btn=$("lsub");
    function bad(m){err.textContent=m;err.hidden=false}
    err.hidden=true;loginInfo="";
    if(reg&&n.length<2)return bad(tr("Wpisz nazwę salonu."));
    if(reg&&!readCats("rc_").length)return bad(tr("Wybierz co najmniej jeden rodzaj usług."));
    if(!lg||!p)return bad(tr("Wpisz login i hasło."));
    if(reg&&!LOGIN_RE.test(lg))return bad(tr("Login ma mieć 3–30 znaków: małe litery bez polskich znaków, cyfry oraz . _ - (bez spacji i bez @)."));
    em=toEmail(lg);
    if(!db||!window.FLM_AUTH)return bad(tr("Baza danych jest niedostępna."));
    if(reg){
      if(p.length<6)return bad(tr("Hasło musi mieć co najmniej 6 znaków."));
      if(p!==$("lp2").value)return bad(tr("Hasła nie są takie same."));
    }
    btn.disabled=true;
    try{
      if(reg){
        var found=await db.collection("salons").where("nameKey","==",nameKey(n)).limit(1).get();
        if(!found.empty)return bad(tr("Salon o takiej nazwie już istnieje. Wybierz inną nazwę."));
        var r=await window.FLM_AUTH.signUp(em,p,n);
        if(!r.hasSession){
          loginMode="login";loginInfo=tr("Konto zostało założone, ale wymaga potwierdzenia, a ta aplikacja nie wysyła e-maili. Administrator musi wyłączyć opcję Confirm email w Supabase.");
          render();return;
        }
        await ensureSalon(r.user,n,readCats("rc_"));
        curId=r.user.id;sview="profil";loginMode="login";
        toast(tr("Konto założone. Uzupełnij profil z telefonem."));
      }else{
        var u=await window.FLM_AUTH.signIn(em,p);
        await ensureSalon(u);
        curId=u.id;sview=pendingS||"add";pendingS="";
        pruneOld(u.id);
      }
      addState={day:0,calM:0,time:"",to:"",kind:"range",svc:"",promo:""};render();maybeGeo();checkAdmin();openInstallCard();
    }catch(e){bad(authMsg(e))}
    finally{var b=$("lsub");if(b)b.disabled=false}
  }
  async function pruneOld(id){
    if(canWrite===false||!db)return;
    /* minione terminy nie są już pobierane, więc usuwamy je jednym zapytaniem w bazie */
    if(db.pruneOldSlots){try{await db.pruneOldSlots(id)}catch(e){}return}
    var old=allSlots().filter(function(x){return x.salonId===id&&slotOff(x)<0}).slice(0,20);
    for(var i=0;i<old.length;i++){try{await db.doc("slots/"+old[i].id).delete()}catch(e){break}}
  }

  /* --- dodaj termin --- */
  function timeOpts(sel){var o="";for(var m=6*60;m<=23*60+45;m+=15){var t=fromMin(m);o+='<option value="'+t+'"'+(t===sel?' selected':'')+'>'+t+'</option>'}return o}
  /* kalendarz w formularzu "Dodaj termin": wybór dnia + dni zamknięte (święta, urlop) */
  function calHtml(s){
    var now=new Date(),pg=addState.calM||0,start=new Date(now.getFullYear(),now.getMonth(),now.getDate()-((now.getDay()+6)%7)+pg*35),mine={};
    var end=new Date(start);end.setDate(end.getDate()+34);
    ownSlots().forEach(function(x){if(!isTaken(x)&&!isPast(x))mine[x.date]=(mine[x.date]||0)+1});
    function mon(d,y){var t=d.toLocaleDateString(lc(),y?{month:"long",year:"numeric"}:{month:"long"});return t}
    var title=start.getMonth()===end.getMonth()?mon(start,true):(mon(start,start.getFullYear()!==end.getFullYear())+" – "+mon(end,true));
    title=title.charAt(0).toUpperCase()+title.slice(1);
    var h='<div class="cal"><div class="calhead"><button type="button" class="calnav" data-calnav="-1" aria-label="'+tr("Wcześniejsze tygodnie")+'"'+(pg<=0?' disabled':'')+'>‹</button><b>'+esc(title)+'</b><button type="button" class="calnav" data-calnav="1" aria-label="'+tr("Następne tygodnie")+'"'+(pg>=CAL_MONTHS-1?' disabled':'')+'>›</button></div><div class="calgrid">';
    for(var w=0;w<7;w++){var wd=new Date(2024,0,1+w).toLocaleDateString(lc(),{weekday:"short"}).replace(".","");h+='<span class="cwd'+(w>=5?' we':'')+'">'+esc(wd.charAt(0).toUpperCase()+wd.slice(1,3))+'</span>'}
    for(var i=0;i<35;i++){
      var dd=new Date(start);dd.setDate(start.getDate()+i);
      var ds=ymd(dd),off=offsetOf(ds),hol=holidayName(ds),cl=closedOn(s,ds),cls="cd",num=dd.getDate()===1?"1."+pad(dd.getMonth()+1):String(dd.getDate());
      if(off<0)cls+=" past";if(off===0)cls+=" today";if(off===addState.day)cls+=" sel";if(off>=0&&off<NDAYS)cls+=" win";if(cl)cls+=" closed";else if(hol)cls+=" hol";if(i%7>=5)cls+=" we";
      h+='<button type="button" class="'+cls+'" data-cal="'+ds+'"'+(off<0?' disabled':'')+(hol?' title="'+esc(hol)+'"':'')+' aria-label="'+esc(dayDate(off)+(hol?", "+hol:""))+'" aria-pressed="'+(off===addState.day)+'"><span class="dn">'+num+'</span>'+
        (cl?'<span class="dt">'+tr("zamkn.")+'</span>':hol?'<span class="dt">'+tr("święto")+'</span>':mine[ds]?'<span class="dc">'+mine[ds]+'</span>':'')+'</button>';
    }
    return h+'</div><p class="hint">'+tr("Liczba na dniu to Twoje wolne terminy. Dni zamknięte klienci widzą jako nieczynne.")+'</p></div>';
  }
  function renderAdd(v,s){
    var hasSvc=true;
    if(!(addState.day>=0))addState.day=0;
    var selDate=dateOf(addState.day),closed=closedOn(s,selDate),hol=holidayName(selDate),inWin=addState.day<NDAYS;
    var dayInfo='<div class="selday"><b>'+esc(dayDate(addState.day))+'</b>'+(hol?' <span class="tag holtag">'+esc(hol)+'</span>':'')+'</div>';
    var wk=weeklyClosed(s,selDate),wkOnly=closed&&wk&&!closedManual(s,selDate);
    var closeBtn='<button class="btn ghost sm" type="button" data-closeday="1">'+(wkOnly?tr("Otwórz salon tego dnia"):closed?tr("Otwórz ten dzień"):tr("Zamknięte (święto, urlop)"))+'</button>';
    if(closed||!inWin){
      v.innerHTML='<h2>'+tr("Dodaj termin last minute")+'</h2><p class="sub">'+tr("Wybierz dzień w kalendarzu")+'</p><div class="card pad addcard">'+calHtml(s)+dayInfo+
        '<p class="note'+(closed?' warn':'')+'">'+(wkOnly?tr("W profilu salonu ten dzień tygodnia jest zamknięty. Jeśli wyjątkowo pracujesz, otwórz salon tego dnia."):closed?tr("Salon jest tego dnia zamknięty. Klienci nie zobaczą terminów z tego dnia."):tr("Terminy last minute dodajesz na najbliższe 7 dni. Ten dzień możesz już teraz oznaczyć jako zamknięty."))+'</p><div class="btn-row">'+closeBtn+'</div></div>';
      return;
    }
    var dayOwn=ownSlots().filter(function(x){return x.date===selDate&&!isTaken(x)&&!isPast(x)}).sort(sortSlots);
    var dayExtra=(hol?'<p class="hint">'+tr("Święto: {0}. Jeśli salon nie pracuje, oznacz dzień jako zamknięty.",[esc(hol)])+'</p>':'')+
      (dayOwn.length?'<p class="hint">'+tr("Już dodane:")+' '+dayOwn.map(function(x){return '<span class="tag">'+esc(x.time)+'–'+endOf(x)+'</span>'}).join(" ")+'</p>':'');
    if(!addState.time)addState.time=fromMin(Math.min(Math.ceil((nowMin()+60)/15)*15,23*60+45));
    if(!addState.to||toMin(addState.to)<=toMin(addState.time))addState.to=fromMin(Math.min(toMin(addState.time)+120,23*60+45));
    var range=addState.kind==="range",lab='<span style="display:block;font-weight:500;font-size:14px;margin-bottom:4px">';
    var html='<h2>'+tr("Dodaj termin last minute")+'</h2><p class="sub">'+tr("Termin znika sam po godzinie lub gdy oznaczysz go jako zajęty.")+'</p>'+
      '<form id="addForm" class="card pad addcard" novalidate>'+
      calHtml(s)+dayInfo+dayExtra+
      (hasSvc?'<div class="field">'+lab+tr("Rodzaj terminu")+'</span><div class="seg" role="group" aria-label="'+tr("Rodzaj terminu")+'">'+[["range",tr("Wolne godziny")],["svc",tr("Konkretna usługa")]].map(function(k){return '<button type="button" data-akind="'+k[0]+'" aria-pressed="'+(addState.kind===k[0])+'">'+k[1]+'</button>'}).join("")+'</div></div>':'');
    if(range){
      html+='<div class="two"><div class="field"><label class="f" for="at">'+tr("Od")+'</label><select id="at">'+timeOpts(addState.time)+'</select></div>'+
        '<div class="field"><label class="f" for="at2">'+tr("Do")+'</label><select id="at2">'+timeOpts(addState.to)+'</select></div></div>'+
        '<p class="hint" style="margin:-4px 0 12px">'+(noPrice(s)?tr("Klient zadzwoni i ustali z salonem usługę."):tr("Klient zadzwoni i ustali z salonem usługę i cenę."))+'</p>';
    }else{
      var svcs=allSvc(s);
      if(!addState.svc||!svcs.some(function(x){return String(x.id)===String(addState.svc)}))addState.svc=String(svcs[0].id);
      var addAsk=modeOf(svcs.filter(function(x){return String(x.id)===String(addState.svc)})[0])==="ask";
      html+='<div class="'+(noPrice(s)?'two':'row3')+'"><div class="field"><label class="f" for="at">'+tr("Godzina")+'</label><select id="at">'+timeOpts(addState.time)+'</select></div>'+
        '<div class="field"><label class="f" for="as">'+tr("Usługa")+'</label><select id="as">'+svcs.map(function(x){return '<option value="'+esc(x.id)+'"'+(String(x.id)===String(addState.svc)?' selected':'')+'>'+esc(svcName(x.name))+(noPrice(s)?'':' ('+priceLabel(x)+')')+'</option>'}).join("")+'</select></div>'+
        (noPrice(s)?'':'<div class="field"><label class="f" for="ap">'+(addAsk?tr("Zniżka (%)"):tr("Cena promocyjna (zł)"))+'</label><input id="ap" inputmode="decimal" placeholder="'+tr("opcjonalnie")+'" value="'+esc(addState.promo)+'"></div>')+'</div>'+
        (addAsk&&!noPrice(s)?'<p class="hint" style="margin:-4px 0 12px">'+tr("Bez ceny możesz podać zniżkę w %, np. 30.")+'</p>':'');
    }
    html+='<p class="err" id="aerr" hidden></p><p class="hint" id="aprev" style="margin:0 0 12px"></p><div class="btn-row spread"><button class="btn" type="submit">'+tr("Opublikuj termin")+'</button>'+closeBtn+'</div></form>'+
      (hasSvc?'':'<p class="hint">'+tr("Terminy z usługą i ceną dodasz po uzupełnieniu cennika w „Profil”.")+'</p>');
    v.innerHTML=html;
    addPrev(s);
  }
  function addPrev(s){
    var el=$("aprev"); if(!el)return;
    if(addState.kind==="range"){
      if(!addState.time||!addState.to){el.textContent="";return}
      el.textContent=noPrice(s)?tr("Klient zobaczy: {0} {1}–{2}, wolne godziny (usługę ustalicie telefonicznie).",[DAYS[addState.day],addState.time,addState.to]):tr("Klient zobaczy: {0} {1}–{2}, wolne godziny (usługę i cenę ustalicie telefonicznie).",[DAYS[addState.day],addState.time,addState.to]);
      return;
    }
    var sv=allSvc(s).filter(function(x){return String(x.id)===String(addState.svc)})[0];
    if(!sv||!addState.time){el.textContent="";return}
    if(noPrice(s)){el.textContent=tr("Klient zobaczy: {0} {1}–{2}, {3}.",[DAYS[addState.day],addState.time,fromMin(toMin(addState.time)+sv.dur),svcName(sv.name)]);return}
    var pc=promoCheck(sv,addState.promo),fake={price:sv.price,priceMode:modeOf(sv),promo:pc.err?null:pc.promo,promoPct:pc.err?null:pc.pct};
    el.textContent=tr("Klient zobaczy: {0} {1}–{2}, {3}, {4}.",[DAYS[addState.day],addState.time,fromMin(toMin(addState.time)+sv.dur),svcName(sv.name),priceText(fake)]);
  }
  async function submitAdd(){
    if(!needWrite())return;
    var s=salons[curId],err=$("aerr"),t=addState.time,range=addState.kind==="range";
    function bad(m){err.textContent=m;err.hidden=false}
    if(!t)return bad(tr("Wpisz godzinę rozpoczęcia."));
    if(!(addState.day>=0&&addState.day<NDAYS))return bad(tr("Wybierz dzień z najbliższego tygodnia."));
    if(closedOn(s,dateOf(addState.day)))return bad(tr("Salon jest tego dnia zamknięty. Wybierz inny dzień."));
    var sv=null,pc={promo:null,pct:null},a=toMin(t),b;
    if(range){
      b=toMin(addState.to);
      if(!(b>a))return bad(tr("Godzina „Do” musi być późniejsza niż „Od”."));
      if(b-a>480)return bad(tr("Zakres może mieć najwyżej 8 godzin."));
      if(addState.day===0&&b<=nowMin())return bad(tr("Ten zakres już minął. Wybierz późniejsze godziny albo inny dzień."));
    }else{
      sv=allSvc(s).filter(function(x){return String(x.id)===String(addState.svc)})[0];
      if(!sv)return bad(tr("Wybierz usługę."));
      if(addState.day===0&&a<=nowMin())return bad(tr("Ta godzina już minęła. Wybierz późniejszą godzinę albo inny dzień."));
      if(noPrice(s))pc={promo:null,pct:null};else{pc=promoCheck(sv,addState.promo);if(pc.err)return bad(pc.err)}
      b=a+sv.dur;
    }
    var date=dateOf(addState.day);
    var ov=ownSlots().filter(function(x){return x.date===date&&a<toMin(x.time)+x.dur&&toMin(x.time)<b})[0];
    if(ov)return bad(tr("Ten czas nachodzi na termin {0}–{1} ({2}). Wybierz inną godzinę.",[ov.time,endOf(ov),slotLabel(ov)]));
    try{
      var rec;
      if(range)rec={salonId:curId,date:date,time:t,dur:b-a,service:"",price:null,promo:null,taken:false,priceMode:"ask"};
      else{
        rec={salonId:curId,date:date,time:t,dur:sv.dur,service:sv.name,price:sv.price==null?null:sv.price,promo:pc.promo,taken:false};
        if(modeOf(sv)!=="exact")rec.priceMode=modeOf(sv);
        if(pc.pct!=null)rec.promoPct=pc.pct;
        if(noPrice(s)){rec.price=null;rec.promo=null;rec.priceMode="ask";delete rec.promoPct}
      }
      await db.collection("slots").doc().set(rec);
      toast(tr("Termin opublikowany: {0} {1}.",[DAYS[addState.day].toLowerCase(),t+(range?"–"+addState.to:"")]));
      addState.time="";addState.to="";addState.promo="";renderSalon();
    }catch(e){toast(errMsg(e))}
  }

  /* --- moje terminy --- */
  function stateOf(x){return isPast(x)?"past":(isTaken(x)?"taken":"free")}
  function pill(st){return st==="free"?'<span class="pill free">'+tr("Wolny")+'</span>':st==="taken"?'<span class="pill booked">'+tr("Zajęty")+'</span>':'<span class="pill past">'+tr("Minął")+'</span>'}
  function renderMine(v){
    var list=ownSlots().filter(function(x){var o=slotOff(x);return o>=0&&o<NDAYS}).sort(sortSlots),html='<h2>'+tr("Moje terminy")+'</h2>'+remCardHtml()+'<div class="note" id="statsBox" hidden></div><p class="sub">'+tr("Gdy ktoś zarezerwuje termin telefonicznie, kliknij „Zajęty”.")+'</p>';
    if(!list.length){v.innerHTML=html+'<p class="empty">'+tr("Brak terminów. Dodaj pierwszy w „Dodaj termin”.")+'</p>';return}
    var free=list.filter(function(x){return stateOf(x)==="free"}).length;
    html+='<p class="hint" style="margin:-8px 0 0">'+tr("Widoczne dla klientów teraz:")+' <b>'+free+'</b></p>';
    DAYS.forEach(function(_,d){
      var rows=list.filter(function(x){return slotOff(x)===d});if(!rows.length)return;
      html+='<div class="daylab free d'+d+'">'+dayHead(d)+(closedOn(salons[curId],dateOf(d))?' <span class="pill booked">'+tr("zamknięte")+'</span>':'')+'</div><div class="card pad" style="padding-top:4px;padding-bottom:4px">'+rows.map(function(x){
        var st=stateOf(x);
        if(editState&&editState.id===x.id&&st!=="past")return editHtml(x);
        return '<div class="srow'+(st==="past"?' dim':'')+'"><div class="t">'+esc(x.time)+'</div><div class="sv">'+(isRange(x)?'<div>'+tr("Wolne godziny")+' <span class="meta">· '+esc(x.time)+'–'+endOf(x)+'</span></div><div class="meta">'+(noPrice(salons[curId])?tr("bez usługi"):tr("bez usługi i ceny"))+'</div>':'<div>'+esc(svcName(x.service))+' <span class="meta">· '+x.dur+' min</span></div>'+(noPrice(salons[curId])?'':'<div class="meta price">'+priceHtml(x)+(modeOf(x)==="ask"&&x.promoPct?'<span class="off">−'+x.promoPct+'%</span>':'')+'</div>'))+'</div>'+
          '<div class="act btn-row">'+pill(st)+(st==="free"?'<button class="btn sm" data-stake="'+esc(x.id)+'" type="button">'+tr("Zajęty")+'</button><button class="btn ghost sm" data-sedit="'+esc(x.id)+'" type="button">'+tr("Edytuj")+'</button><button class="btn ghost sm" data-sdel="'+esc(x.id)+'" type="button">'+tr("Usuń")+'</button>':st==="taken"?'<button class="btn ghost sm" data-sfree="'+esc(x.id)+'" type="button">'+tr("Znów wolny")+'</button><button class="btn ghost sm" data-sedit="'+esc(x.id)+'" type="button">'+tr("Edytuj")+'</button><button class="btn ghost sm" data-sdel="'+esc(x.id)+'" type="button">'+tr("Usuń")+'</button>':'')+'</div></div>';
      }).join("")+'</div>';
    });
    v.innerHTML=html;
  }

  /* --- edycja terminu --- */
  function editSvcOpts(x,sel){
    var s=salons[curId],o='<option value="cur"'+(sel==="cur"?" selected":"")+'>'+tr("Bez zmiany:")+' '+esc(svcName(x.service))+(noPrice(s)?'':' ('+priceLabel(x)+')')+'</option>';
    allSvc(s).forEach(function(v){o+='<option value="'+esc(v.id)+'"'+(String(v.id)===String(sel)?" selected":"")+'>'+esc(svcName(v.name))+(noPrice(s)?'':' ('+priceLabel(v)+')')+'</option>'});
    return o;
  }
  function rangeEditHtml(e){
    return '<div class="srow" style="grid-template-columns:minmax(0,1fr)"><form id="editForm" class="book" novalidate><h3 style="font-size:16px;margin-bottom:10px">'+tr("Edytuj wolne godziny")+'</h3>'+
      '<div class="field"><span style="display:block;font-weight:500;font-size:14px;margin-bottom:4px">'+tr("Dzień")+'</span><div class="seg days" id="edaySeg" role="group" aria-label="'+tr("Dzień")+'">'+
      DAYS.map(function(d,i){return '<button type="button" data-eday="'+i+'" aria-pressed="'+(e.day===i)+'">'+d+'</button>'}).join("")+'</div></div>'+
      '<div class="two"><div class="field"><label class="f" for="et">'+tr("Od")+'</label><select id="et">'+timeOpts(e.time)+'</select></div>'+
      '<div class="field"><label class="f" for="et2">'+tr("Do")+'</label><select id="et2">'+timeOpts(e.to)+'</select></div></div>'+
      '<p class="err" id="eerr" hidden></p><div class="btn-row"><button class="btn sm" type="submit">'+tr("Zapisz zmiany")+'</button><button class="btn ghost sm" type="button" data-secancel="1">'+tr("Anuluj")+'</button></div></form></div>';
  }
  function editHtml(x){
    var e=editState;if(e.range)return rangeEditHtml(e);
    var em=e.svc==="cur"?modeOf(x):modeOf(allSvc(salons[curId]).filter(function(v){return String(v.id)===String(e.svc)})[0]);
    return '<div class="srow" style="grid-template-columns:minmax(0,1fr)"><form id="editForm" class="book" novalidate><h3 style="font-size:16px;margin-bottom:10px">'+tr("Edytuj termin")+'</h3>'+
      '<div class="field"><span style="display:block;font-weight:500;font-size:14px;margin-bottom:4px">'+tr("Dzień")+'</span><div class="seg days" id="edaySeg" role="group" aria-label="'+tr("Dzień")+'">'+
      DAYS.map(function(d,i){return '<button type="button" data-eday="'+i+'" aria-pressed="'+(e.day===i)+'">'+d+'</button>'}).join("")+'</div></div>'+
      '<div class="'+(noPrice(salons[curId])?'two':'row3')+'"><div class="field"><label class="f" for="et">'+tr("Godzina")+'</label><select id="et">'+timeOpts(e.time)+'</select></div>'+
      '<div class="field"><label class="f" for="es">'+tr("Usługa")+'</label><select id="es">'+editSvcOpts(x,e.svc)+'</select></div>'+
      (noPrice(salons[curId])?'':'<div class="field"><label class="f" for="ep">'+(em==="ask"?tr("Zniżka (%)"):tr("Cena promocyjna (zł)"))+'</label><input id="ep" inputmode="decimal" placeholder="'+(em==="ask"?tr("brak zniżki"):tr("brak promocji"))+'" value="'+esc(e.promo)+'"></div>')+'</div>'+
      '<p class="err" id="eerr" hidden></p><div class="btn-row"><button class="btn sm" type="submit">'+tr("Zapisz zmiany")+'</button><button class="btn ghost sm" type="button" data-secancel="1">'+tr("Anuluj")+'</button></div></form></div>';
  }
  async function submitEdit(){
    if(!needWrite())return;
    var e=editState,x=e&&slots[e.id],s=salons[curId],err=$("eerr");
    function bad(m){err.textContent=m;err.hidden=false}
    if(!x){editState=null;render();return}
    if(e.range){
      var a2=toMin(e.time),b2=toMin(e.to);
      if(!(b2>a2))return bad(tr("Godzina „Do” musi być późniejsza niż „Od”."));
      if(b2-a2>480)return bad(tr("Zakres może mieć najwyżej 8 godzin."));
      if(e.day===0&&b2<=nowMin())return bad(tr("Ten zakres już minął. Wybierz późniejsze godziny albo inny dzień."));
      var date2=dateOf(e.day);
      if(closedOn(s,date2))return bad(tr("Salon jest tego dnia zamknięty. Wybierz inny dzień."));
      var ov2=ownSlots().filter(function(y){return y.id!==x.id&&y.date===date2&&a2<toMin(y.time)+y.dur&&toMin(y.time)<b2})[0];
      if(ov2)return bad(tr("Te godziny nachodzą na termin {0}–{1} ({2}). Wybierz inne godziny.",[ov2.time,endOf(ov2),slotLabel(ov2)]));
      var upd2={date:date2,time:e.time,dur:b2-a2};
      try{
        await db.doc("slots/"+x.id).update(upd2);
        slots[x.id]=Object.assign({},x,upd2);
        editState=null;toast(tr("Termin zaktualizowany."));render();
      }catch(er){toast(errMsg(er))}
      return;
    }
    var sv=e.svc==="cur"?{name:x.service,dur:x.dur,price:x.price,pm:modeOf(x)}:allSvc(s).filter(function(v){return String(v.id)===String(e.svc)})[0];
    if(!sv)return bad(tr("Wybierz usługę."));
    var t=e.time;
    if(!t)return bad(tr("Wybierz godzinę."));
    if(e.day===0&&toMin(t)<=nowMin())return bad(tr("Ta godzina już minęła. Wybierz późniejszą godzinę albo inny dzień."));
    var pc;if(noPrice(s))pc={promo:null,pct:null};else{pc=promoCheck(sv,e.promo);if(pc.err)return bad(pc.err)}
    var date=dateOf(e.day),a=toMin(t),b=a+sv.dur;
    if(closedOn(s,date))return bad(tr("Salon jest tego dnia zamknięty. Wybierz inny dzień."));
    var ov=ownSlots().filter(function(y){return y.id!==x.id&&y.date===date&&a<toMin(y.time)+y.dur&&toMin(y.time)<b})[0];
    if(ov)return bad(tr("Ten czas nachodzi na termin {0}–{1} ({2}). Wybierz inną godzinę.",[ov.time,fromMin(toMin(ov.time)+ov.dur),slotLabel(ov)]));
    var upd={date:date,time:t,dur:sv.dur,service:sv.name,price:sv.price==null?null:sv.price,promo:pc.promo};
    var md=modeOf(sv);
    if(md!=="exact"||pc.pct!=null||(x.priceMode&&x.priceMode!=="exact")||x.promoPct!=null){upd.priceMode=md;upd.promoPct=pc.pct}
    if(noPrice(s)){upd.price=null;upd.promo=null;upd.priceMode="ask";upd.promoPct=null}
    try{
      await db.doc("slots/"+x.id).update(upd);
      slots[x.id]=Object.assign({},x,upd);
      editState=null;toast(tr("Termin zaktualizowany."));render();
    }catch(er){toast(errMsg(er))}
  }

  /* --- profil --- */
  /* Godziny otwarcia: wt-pt podążają za poniedziałkiem, dopóki salon nie zmieni danego dnia ręcznie (hrsManual). */
  var hrsManual={};
  function sameHrs(a,b){return !!a.closed===!!b.closed&&(!!a.closed||(a.from===b.from&&a.to===b.to))}
  function hrsCopy(from,to){
    var f=$("hf"+from).value,t=$("ht"+from).value,c=$("hc"+from).checked;
    $("hc"+to).checked=c;
    if(f)$("hf"+to).value=f;
    if(t)$("ht"+to).value=t;
    $("hf"+to).disabled=c;$("ht"+to).disabled=c;
  }
  function hrsFollow(id){
    var m=/^h([ftc])(\d)$/.exec(id||"");if(!m)return;
    var i=parseInt(m[2],10);
    if(i>=1&&i<=4){hrsManual[i]=true;return}
    if(i!==0)return;
    if(m[1]!=="c"&&!$(id).value)return;
    for(var d=1;d<=4;d++){if(!hrsManual[d])hrsCopy(0,d)}
  }
  function renderProfil(v,s){
    var hrs=s.hours&&s.hours.length===7?s.hours:WD.map(function(_,i){return {closed:i>=6,from:"09:00",to:"17:00"}});
    hrsManual={};for(var q=1;q<=4;q++){if(!sameHrs(hrs[q],hrs[0]))hrsManual[q]=true}
    v.innerHTML='<h2>'+tr("Profil salonu")+'</h2><p class="sub">'+tr("To widzą klienci.")+'</p><div class="list">'+'<div id="linkCard">'+linkCardHtml(s)+'</div>'+logoBoxHtml(s)+photoBoxHtml(s)+
    '<form id="profForm" class="card pad" novalidate><h3 style="margin-bottom:12px">'+tr("Dane salonu")+'</h3>'+
      '<div class="field"><label class="f" for="pn">'+tr("Nazwa salonu")+'</label><input id="pn" value="'+esc(s.name)+'"></div>'+catPick("pc_",catsOf(s))+
      '<div class="two"><div class="field"><label class="f" for="pa">'+tr("Adres")+'</label><input id="pa" value="'+esc(s.address)+'" placeholder="'+tr("ul. Przykładowa 1, Miejscowość")+'"></div>'+
      '<div class="field"><label class="f" for="pt">'+tr("Telefon")+'</label><input id="pt" inputmode="tel" value="'+esc(s.phone)+'" placeholder="500 100 200"></div></div>'+
      '<p class="hint" style="margin:-4px 0 12px">'+tr("Wpisz ulicę, numer i miejscowość po przecinku, np. Główna 5, Gidle. Bez miejscowości przyjmujemy Radomsko.")+'</p>'+
      '<div class="field"><label class="f" for="pd">'+tr("Opis")+'</label><textarea id="pd" rows="4" maxlength="400">'+esc(s.desc)+'</textarea></div>'+
      '<div class="field"><label class="f" for="pm">'+tr("Link do mapy")+'</label><input id="pm" value="'+esc(s.mapUrl)+'" placeholder="https://maps.google.com/..."><p class="hint"><button class="link" id="mapGen" type="button">'+tr("Utwórz link z adresu")+'</button></p></div>'+
      '<h3 style="margin:18px 0 10px">'+tr("Godziny otwarcia")+'</h3>'+
      hrs.map(function(h,i){return '<div class="hrs"><span>'+WD[i]+'</span><input type="time" id="hf'+i+'" aria-label="'+WD[i]+' '+tr("od")+'" value="'+esc(h.from)+'"'+(h.closed?' disabled':'')+'><input type="time" id="ht'+i+'" aria-label="'+WD[i]+' '+tr("do")+'" value="'+esc(h.to)+'"'+(h.closed?' disabled':'')+'>'+
        '<div class="hx"><label class="chk" for="hc'+i+'"><input type="checkbox" id="hc'+i+'" '+(h.closed?'checked':'')+'> '+tr("zamknięte")+'</label>'+(i>=5?'<button type="button" class="link" data-hcopy="'+i+'">'+tr("Jak w poniedziałek")+'</button>':'')+'</div></div>'+(i===0?'<p class="hint" style="margin:-2px 0 10px">'+tr("Wpisz godziny w poniedziałek: wtorek–piątek uzupełnią się same. Każdy dzień możesz potem zmienić.")+'</p>':'')}).join("")+
      '<div class="btn-row" style="margin-top:16px"><button class="btn" type="submit">'+tr("Zapisz profil")+'</button><span class="tag" id="dirtyTag" hidden>'+tr("Niezapisane zmiany")+'</span></div><p class="hint" style="margin:8px 0 0">'+tr("Zmiany zapisują się automatycznie, także po wyjściu z aplikacji.")+'</p></form>'+
    '<div class="card pad"><h3 style="margin-bottom:4px">'+(noPrice(s)?tr("Usługi"):tr("Cennik usług"))+'</h3><p class="hint" style="margin:0 0 12px">'+tr("Z tej listy wybierasz usługę przy dodawaniu terminu.")+'</p><div id="svcList"></div>'+
      '<form id="svcForm" novalidate style="margin-top:12px"><div class="field"><label class="f" for="sn">'+tr("Nazwa usługi")+'</label><input id="sn" placeholder="'+tr("np. Strzyżenie damskie, manicure hybrydowy")+'"></div>'+
      (noPrice(s)?'':'<div class="two"><div class="field"><label class="f" for="spm">'+tr("Cena")+'</label><select id="spm"><option value="exact">'+tr("Dokładna cena")+'</option><option value="from">'+tr("Od … zł")+'</option><option value="ask">'+tr("Ustalana w salonie")+'</option></select></div>'+
      '<div class="field" id="spw"><label class="f" for="sp">'+tr("Kwota (zł)")+'</label><input id="sp" inputmode="decimal" placeholder="90"></div></div>')+
      '<div class="btn-row"><button class="btn sm" type="submit">'+tr("Dodaj usługę")+'</button></div></form>'+
      '<p class="err" id="serr" hidden style="margin-top:8px"></p></div></div>';
    setDirty(false);
    renderSvc(s);
  }
  function logoBoxHtml(s){
    return '<div class="card pad" id="logoBox"><h3 style="margin-bottom:10px">'+tr("Logo salonu")+'</h3><div class="logorow">'+logoHtml(s,"big")+
      '<div><p class="hint" style="margin:0 0 10px">'+tr("Najlepiej kwadratowe, np. to samo co na Facebooku salonu. Zmniejszymy je automatycznie.")+'</p>'+
      '<div class="btn-row"><label class="btn sm" for="logoIn">'+(s.logoUrl?tr("Zmień logo"):tr("Wybierz zdjęcie"))+'</label><input type="file" id="logoIn" class="vh" accept="image/*">'+
      (s.logoUrl?'<button class="btn ghost sm" type="button" id="logoDel">'+tr("Usuń logo")+'</button>':'')+'</div></div></div></div>';
  }
  function photoBoxHtml(s){
    function sec(k){
      var l=photosOf(s,k),max=PHOTO_MAX[k];
      return '<h3 style="margin:'+(k==="salon"?"0":"18px")+' 0 2px">'+kindName(k)+' <span class="meta">'+l.length+'/'+max+'</span></h3>'+
        '<p class="hint" style="margin:0 0 10px">'+(k==="salon"?tr("Wnętrze, fotele, recepcja. Klient zobaczy, gdzie przyjdzie."):tr("Fryzury, paznokcie, makijaże i inne efekty Waszej pracy."))+'</p>'+
        '<div class="phgrid">'+l.map(function(p){return '<div class="ph"><img src="'+esc(p.thumb||p.url)+'" alt="" loading="lazy"><button type="button" class="phdel" data-phdel="'+esc(p.id)+'" aria-label="'+tr("Usuń zdjęcie")+'">×</button></div>'}).join("")+
        (l.length<max?'<label class="ph phadd" for="phIn_'+k+'"><span aria-hidden="true">+</span>'+tr("Dodaj zdjęcia")+'</label><input type="file" id="phIn_'+k+'" class="vh" accept="image/*" multiple>':'')+'</div>';
    }
    return '<div class="card pad" id="photoBox">'+sec("salon")+sec("work")+'<p class="hint" style="margin-top:14px">'+tr("Publikuj tylko własne zdjęcia. Jeśli widać na nich klienta, musisz mieć jego zgodę.")+'</p></div>';
  }
  function refreshPhotoBox(){var el=$("photoBox"),s=salons[curId];if(!el||!s)return;var t=document.createElement("div");t.innerHTML=photoBoxHtml(s);el.parentNode.replaceChild(t.firstChild,el)}
  /* zmniejszanie zdjęć w przeglądarce: "fit" = dłuższy bok do size, "cover" = kwadrat przycięty do środka */
  async function resizeImage(img,size,mode){
    var w=img.naturalWidth,h=img.naturalHeight,c=document.createElement("canvas"),x=c.getContext("2d");
    if(mode==="cover"){var m=Math.min(w,h);c.width=c.height=Math.min(size,m);x.imageSmoothingQuality="high";x.drawImage(img,(w-m)/2,(h-m)/2,m,m,0,0,c.width,c.height)}
    else{var k=Math.min(1,size/Math.max(w,h));c.width=Math.round(w*k);c.height=Math.round(h*k);x.fillStyle="#ffffff";x.fillRect(0,0,c.width,c.height);x.imageSmoothingQuality="high";x.drawImage(img,0,0,c.width,c.height)}
    function tb(t,q){return new Promise(function(r){c.toBlob(r,t,q)})}
    var b=await tb("image/webp",0.82);
    if(!b||b.type!=="image/webp")b=await tb("image/jpeg",0.84);
    if(!b)throw new Error("canvas");
    return b;
  }
  var photoBusy=false;
  async function uploadPhotos(kind,files){
    if(!files.length||photoBusy||!needWrite())return;
    if(!window.FLM_STORAGE){toast(tr("Baza danych jest niedostępna."));return}
    var room=PHOTO_MAX[kind]-photosOf(salons[curId],kind).length;
    if(room<=0){toast(tr("Limit zdjęć w tej sekcji: {0}. Usuń któreś, żeby dodać nowe.",[PHOTO_MAX[kind]]));return}
    files=files.filter(function(f){return /^image\//.test(f.type||"")});
    if(!files.length){toast(tr("Wybierz plik ze zdjęciem."));return}
    var over=files.length>room;files=files.slice(0,room);
    photoBusy=true;var done=0,failed=false;
    try{
      for(var i=0;i<files.length;i++){
        toast(tr("Wgrywam zdjęcia {0}/{1}…",[i+1,files.length]));
        try{
          var img=await loadImg(files[i]);
          var full=await resizeImage(img,1400,"fit"),thumb=await resizeImage(img,360,"cover");
          try{URL.revokeObjectURL(img.src)}catch(e){}
          var up=await window.FLM_STORAGE.uploadPhoto(curId,full,thumb);
          var list=photosOf(salons[curId]).concat([{id:Date.now().toString(36)+Math.random().toString(36).slice(2,5),kind:kind,url:up.url,thumb:up.thumb}]);
          try{await db.doc("salons/"+curId).update({photos:list})}
          catch(e){window.FLM_STORAGE.removeFiles([up.url,up.thumb]);throw e}
          salons[curId]=Object.assign({},salons[curId],{photos:list});
          done++;refreshPhotoBox();
        }catch(e){failed=true;if(e&&e.code==="forbidden"){toast(errMsg(e));break}}
      }
    }finally{photoBusy=false}
    if(failed&&!done)toast(tr("Nie udało się wgrać zdjęcia. Spróbuj ponownie albo wybierz inne."));
    else if(over)toast(tr("Dodano zdjęcia: {0}.",[done])+" "+tr("Limit zdjęć w tej sekcji: {0}. Usuń któreś, żeby dodać nowe.",[PHOTO_MAX[kind]]));
    else if(done)toast(tr("Dodano zdjęcia: {0}.",[done])+(failed?" "+tr("Nie udało się wgrać zdjęcia. Spróbuj ponownie albo wybierz inne."):""));
  }
  async function deletePhoto(pid){
    var s=salons[curId];if(!s||!needWrite())return;
    if(!window.confirm(tr("Usunąć to zdjęcie?")))return;
    var p=photosOf(s).filter(function(q){return q.id===pid})[0],list=photosOf(s).filter(function(q){return q.id!==pid});
    try{
      await db.doc("salons/"+curId).update({photos:list});
      salons[curId]=Object.assign({},s,{photos:list});
      if(p&&window.FLM_STORAGE)window.FLM_STORAGE.removeFiles([p.url,p.thumb]);
      refreshPhotoBox();toast(tr("Zdjęcie usunięte."));
    }catch(e){toast(errMsg(e))}
  }
  function refreshLogoBox(){var el=$("logoBox"),s=salons[curId];if(!el||!s)return;var t=document.createElement("div");t.innerHTML=logoBoxHtml(s);el.parentNode.replaceChild(t.firstChild,el)}
  function loadImg(file){return new Promise(function(res,rej){var u=URL.createObjectURL(file),i=new Image();i.onload=function(){res(i)};i.onerror=function(){URL.revokeObjectURL(u);rej(new Error("img"))};i.src=u})}
  /* logo zmniejszamy w przeglądarce do 256×256 (całe, na białym tle), żeby plik był mały */
  async function shrinkImage(file,size){
    var img=await loadImg(file),w=img.naturalWidth,h=img.naturalHeight;
    if(!w||!h)throw new Error("img");
    var k=Math.min(size/w,size/h);
    var dw=Math.round(w*k),dh=Math.round(h*k),c=document.createElement("canvas");c.width=size;c.height=size;
    var x=c.getContext("2d");x.fillStyle="#ffffff";x.fillRect(0,0,size,size);x.imageSmoothingQuality="high";
    x.drawImage(img,Math.round((size-dw)/2),Math.round((size-dh)/2),dw,dh);
    try{URL.revokeObjectURL(img.src)}catch(e){}
    function tb(t,q){return new Promise(function(r){c.toBlob(r,t,q)})}
    var b=await tb("image/webp",0.86);
    if(!b||b.type!=="image/webp")b=await tb("image/jpeg",0.88);
    if(!b)throw new Error("canvas");
    return b;
  }
  var logoBusy=false;
  async function uploadLogo(file){
    if(!file||logoBusy||!needWrite())return;
    if(!/^image\//.test(file.type||"")){toast(tr("Wybierz plik ze zdjęciem."));return}
    if(!window.FLM_STORAGE){toast(tr("Baza danych jest niedostępna."));return}
    logoBusy=true;toast(tr("Wgrywam logo…"));
    try{
      var blob=await shrinkImage(file,256),old=(salons[curId]||{}).logoUrl;
      var url=await window.FLM_STORAGE.uploadLogo(curId,blob);
      await db.doc("salons/"+curId).update({logoUrl:url});
      salons[curId]=Object.assign({},salons[curId],{logoUrl:url});
      if(old)window.FLM_STORAGE.removeLogo(old);
      refreshLogoBox();toast(tr("Logo zapisane."));
    }catch(e){toast(e&&e.code==="forbidden"?errMsg(e):tr("Nie udało się wgrać logo. Spróbuj ponownie albo wybierz inne zdjęcie."))}
    finally{logoBusy=false}
  }
  async function removeLogo(){
    var s=salons[curId];if(!s||!s.logoUrl||!needWrite())return;
    if(!window.confirm(tr("Usunąć logo salonu?")))return;
    try{
      var old=s.logoUrl;
      await db.doc("salons/"+curId).update({logoUrl:""});
      salons[curId]=Object.assign({},s,{logoUrl:""});
      if(window.FLM_STORAGE)window.FLM_STORAGE.removeLogo(old);
      refreshLogoBox();toast(tr("Logo usunięte."));
    }catch(e){toast(errMsg(e))}
  }
  /* dzień zamknięty (święto, urlop): zapisywany w salons.closed_days jako lista dat RRRR-MM-DD */
  async function toggleClosed(ds){
    if(!needWrite())return;
    var s=salons[curId];if(!s)return;
    var cur=closedList(s).filter(function(d){return offsetOf(String(d).replace(/^\+/,""))>=0}),wk=weeklyClosed(s,ds),closing=!closedOn(s,ds),list,own=[];
    if(closing){
      own=ownSlots().filter(function(x){return x.date===ds&&!isTaken(x)});
      if(own.length&&!window.confirm(tr("Tego dnia masz wolne terminy ({0}). Zostaną usunięte z oferty. Zamknąć dzień?",[own.length])))return;
      list=cur.filter(function(d){return d!=="+"+ds});
      if(!wk)list=list.concat([ds]);
    }else{
      list=cur.filter(function(d){return d!==ds});
      if(wk&&list.indexOf("+"+ds)<0)list=list.concat(["+"+ds]);
    }
    list.sort();
    try{
      await db.doc("salons/"+curId).update({closedDays:list});
      salons[curId]=Object.assign({},salons[curId],{closedDays:list});
      for(var i=0;i<own.length;i++){try{await db.doc("slots/"+own[i].id).delete();delete slots[own[i].id]}catch(e){}}
      toast(closing?tr("Dzień oznaczony jako zamknięty."):tr("Dzień znów jest otwarty."));
      renderSalon();
    }catch(e){toast(errMsg(e))}
  }
  function renderSvc(s){
    var el=$("svcList");if(!el)return;
    var l=s.services||[];
    var def='<div class="srow" style="grid-template-columns:minmax(0,1fr) auto"><div class="sv">'+esc(svcName(DEFAULT_SVC.name))+' <span class="tag">'+tr("Podstawowa")+'</span></div><div class="meta price">'+(noPrice(s)?'':'<b>'+tr("cena w salonie")+'</b>')+'</div></div>';
    el.innerHTML=def+l.map(function(x){return '<div class="srow svcrow"><div class="sv">'+esc(x.name)+'</div><div class="meta price">'+(noPrice(s)?'':'<b>'+priceLabel(x)+'</b>')+'</div><button class="btn danger sm" data-svcdel="'+esc(x.id)+'" type="button">'+tr("Usuń")+'</button></div>'}).join("");
  }
  /* --- anonimowe statystyki: odsłony i kliknięcia "Zadzwoń" (zliczane raz na wejście do aplikacji, nic nie zapisujemy na urządzeniu) --- */
  var viewTracked=false,callTracked={},smsTracked={},statsCache=null;
  function trackView(){if(viewTracked)return;viewTracked=true;try{if(window.FLM_STATS)window.FLM_STATS.view()}catch(e){}}
  function trackCall(id){if(!id||callTracked[id])return;callTracked[id]=true;try{if(window.FLM_STATS)window.FLM_STATS.call(id)}catch(e){}}
  function trackSms(id){if(!id||smsTracked[id])return;smsTracked[id]=true;try{if(window.FLM_STATS&&window.FLM_STATS.sms)window.FLM_STATS.sms(id)}catch(e){}}
  function statsHtml(rows){
    var t=dateOf(0),w=dateOf(-6),C=[0,0,0],M=[0,0,0],hasSms=rows.some(function(r){return r.sms!=null});
    rows.forEach(function(r){var n=r.count||0,m=r.sms||0;C[2]+=n;M[2]+=m;if(r.day>=w){C[1]+=n;M[1]+=m}if(r.day===t){C[0]+=n;M[0]+=m}});
    var th='style="text-align:right;padding:4px 0 4px 14px;font-weight:600"',td='style="text-align:right;padding:4px 0 4px 14px;font-variant-numeric:tabular-nums"',tl='style="text-align:left;padding:4px 0"';
    function row(lab,a,b){return '<tr><td '+tl+'>'+lab+'</td>'+[0,1,2].map(function(k){return '<td '+td+'>'+(b?'<b>'+a[k]+'</b>':a[k])+'</td>'}).join("")+'</tr>'}
    return '<b>'+tr("Kontakt od klientów przez aplikację")+'</b><br><span class="meta">'+tr("Ile razy klienci kliknęli przy Twoim salonie przycisk „Zadzwoń” albo „SMS”.")+'</span>'+
      '<table style="border-collapse:collapse;margin:8px 0 6px;min-width:260px"><thead><tr><th '+tl+'></th><th '+th+'>'+tr("Dziś")+'</th><th '+th+'>'+tr("7 dni")+'</th><th '+th+'>'+tr("30 dni")+'</th></tr></thead><tbody>'+
      row(tr("Zadzwoń"),C)+(hasSms?row(tr("SMS"),M)+'<tr style="border-top:1px solid var(--line,#ddd)">'+row(tr("Razem"),[C[0]+M[0],C[1]+M[1],C[2]+M[2]],true).slice(4):'')+
      '</tbody></table>';
  }
  async function loadStats(){
    var box=$("statsBox");if(!box||!curId||!window.FLM_STATS)return;
    try{
      if(!statsCache||statsCache.id!==curId||Date.now()-statsCache.t>60000)statsCache={id:curId,t:Date.now(),rows:await window.FLM_STATS.callsFor(curId)};
      var b2=$("statsBox");if(b2){b2.innerHTML=statsHtml(statsCache.rows);b2.hidden=false}
    }catch(e){}
  }
  /* --- zachęta do zapisania aplikacji: po powrocie z rozmowy, raz na otwarcie, bez zapisu na urządzeniu --- */
  var deferredInstall=null,callPending=false,installShown=false,installOpen=false,installForced=false;
  function isStandalone(){try{return(window.matchMedia&&window.matchMedia("(display-mode: standalone)").matches)||window.navigator.standalone===true}catch(e){return false}}
  function isIOS(){var ua=navigator.userAgent||"";return /iPad|iPhone|iPod/.test(ua)||(navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1)}
  function isMobile(){return /Android|iPhone|iPad|iPod/i.test(navigator.userAgent||"")||isIOS()}
  /* odświeża tylko blok "Dodaj do ekranu głównego", bez przerysowywania całego widoku (żeby nie zgubić wpisanych danych) */
  function refreshAddHome(){
    var el=document.getElementById("addhome");
    if(!el){render();return}
    var t=document.createElement("div");t.innerHTML=addHomeHtml();
    var n=t.firstChild;
    if(n)el.parentNode.replaceChild(n,el);else el.parentNode.removeChild(el);
  }
  /* otwiera zachętę (raz na otwarcie aplikacji), np. po zalogowaniu salonu; zapisuje się dopiero po stuknięciu przez użytkownika */
  function openInstallCard(){
    if(isStandalone()||!isMobile()||installShown)return;
    installShown=true;installOpen=true;installForced=false;
    refreshAddHome();
    var el=document.getElementById("addhome");if(el&&el.scrollIntoView)el.scrollIntoView({block:"start",behavior:"smooth"});
  }
  window.addEventListener("beforeinstallprompt",function(e){e.preventDefault();deferredInstall=e});
  window.addEventListener("appinstalled",function(){deferredInstall=null;installOpen=false;refreshAddHome()});
  function hideInstallCard(){installOpen=false;refreshAddHome()}
  function showInstallCard(force){
    if(isStandalone())return;
    if(!force&&(installShown||mode!=="client"))return;
    var ios=isIOS();
    if(!force&&!ios&&!deferredInstall)return;
    /* Android z gotowym oknem systemowym: po kliknięciu przycisku otwieramy je od razu */
    if(force&&!ios&&deferredInstall){var p=deferredInstall;deferredInstall=null;try{p.prompt()}catch(x){}return}
    installShown=true;installOpen=true;installForced=!!force;
    refreshAddHome();
    var el=document.getElementById("addhome");if(el&&el.scrollIntoView)el.scrollIntoView({block:"start",behavior:"smooth"});
  }
  function installCardHtml(){
    var ios=isIOS(),canGo=!ios&&!!deferredInstall;
    var txt=ios?tr("W Safari stuknij <b>Udostępnij</b>, potem <b>Do ekranu początkowego</b>.")
      :canGo?tr("Znajdziesz ją potem jednym stuknięciem.")
      :tr("W menu przeglądarki wybierz <b>Dodaj do ekranu głównego</b> lub <b>Zainstaluj aplikację</b>.");
    return '<div class="installcard" role="region" aria-label="'+tr("Dodaj do ekranu głównego")+'"><b>'+tr("Dodaj aplikację do ekranu głównego")+'</b><p>'+txt+'</p>'+
      '<div class="btn-row">'+(canGo?'<button class="btn sm" type="button" id="instGo">'+tr("Dodaj do ekranu")+'</button>':'')+'<button class="btn ghost sm" type="button" id="instNo">'+(installForced?tr("Zamknij"):tr("Nie teraz"))+'</button></div></div>';
  }
  /* stały przycisk na pierwszej stronie, a zachęta pokazuje się tuż pod nim (ukryte, gdy aplikacja jest już otwarta z ekranu głównego) */
  function addHomeHtml(){
    if(isStandalone())return '';
    var extra=installOpen?installCardHtml():(mode==="salon"&&curId?'<p class="hint"><button class="link" type="button" id="shareBtn">'+tr("Wyślij sobie link")+'</button></p>':'');
    return '<div class="addhome" id="addhome"><button class="link addlink" type="button" id="addHome">'+ic('<rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/>')+tr("Dodaj aplikację do ekranu głównego")+'</button>'+extra+'</div>';
  }
  document.addEventListener("visibilitychange",function(){
    if(!document.hidden&&callPending){callPending=false;setTimeout(showInstallCard,500)}
  });
  function setDirty(v){profDirty=!!v;var t=$("dirtyTag");if(t)t.hidden=!profDirty}
  /* automatyczny zapis profilu: 1,5 s po ostatniej zmianie w formularzu (bez komunikatów; błędne dane czekają na poprawienie) */
  var profRev=0,profTimer=null;
  function profChanged(){
    profRev++;if(!profDirty)setDirty(true);
    clearTimeout(profTimer);
    profTimer=setTimeout(function(){
      if(!(profDirty&&mode==="salon"&&curId&&sview==="profil"))return;
      if(profSaving){profChanged();return}
      saveProfile({auto:true,quiet:true});
    },1500);
  }
  /* zapis profilu: wywoływany przyciskiem, a także automatycznie przy opuszczaniu zakładki */
  function saveProfile(opts){
    if(profSaving)return profSaving;
    profSaving=doSaveProfile(opts).then(function(r){profSaving=null;return r},function(){profSaving=null;return false});
    return profSaving;
  }
  async function guardLeave(go){
    if(mode==="salon"&&curId&&sview==="profil"&&profDirty){
      toast(tr("Zapisuję profil…"));
      var ok=await saveProfile({auto:true});
      if(!ok&&!window.confirm(tr("Profil nie został zapisany. Wyjść bez zapisywania zmian?")))return;
      setDirty(false);
    }
    go();
  }
  async function doSaveProfile(opts){
    opts=opts||{};
    if(!needWrite())return false;
    if(!$("pn"))return true;
    var rev=profRev,s=salons[curId],n=$("pn").value.trim();
    if(!n){if(!opts.quiet)toast(tr("Nazwa salonu nie może być pusta.")+(opts.auto?tr(" Profil nie został zapisany."):""));return false}
    var cats=readCats("pc_");
    if(!cats.length){if(!opts.quiet)toast(tr("Wybierz co najmniej jeden rodzaj usług.")+(opts.auto?tr(" Profil nie został zapisany."):""));return false}
    var upd={name:n,nameKey:nameKey(n),category:cats.join(","),address:$("pa").value.trim(),phone:$("pt").value.trim(),desc:$("pd").value.trim(),mapUrl:$("pm").value.trim(),
      hours:WD.map(function(_,i){return {closed:$("hc"+i).checked,from:$("hf"+i).value||"09:00",to:$("ht"+i).value||"17:00"}})};
    if(upd.address!==(s.address||"").trim()&&upd.mapUrl===(s.mapUrl||"").trim()&&upd.address)upd.mapUrl=mapLink(upd.address);
    var btn=document.querySelector("#profForm button[type=submit]"),geoWarn="";
    if(btn)btn.disabled=true;
    try{
      if(!upd.address){upd.lat=null;upd.lng=null}
      else if(upd.address!==(s.address||"").trim()||legacyGeo(s)){
        if(opts.fast){upd.lat=null;upd.lng=null}
        else{
        var g=await geocode(upd.address);
        if(g){upd.lat=g.lat;upd.lng=g.lng;if(g.approx)geoWarn=tr(" Nie znaleziono dokładnego adresu, odległość liczymy do środka miejscowości.")}
        else{upd.lat=null;upd.lng=null;geoWarn=tr(" Nie znaleziono adresu, odległość nie będzie pokazywana. Wpisz ulicę, numer i miejscowość, np. Główna 5, Gidle.")}
        }
      }
      if(upd.nameKey!==s.nameKey&&!opts.fast){
        var f=await db.collection("salons").where("nameKey","==",upd.nameKey).limit(1).get();
        if(!f.empty&&f.docs[0].id!==curId){toast(tr("Salon o takiej nazwie już istnieje."));return false}
      }
      await db.doc("salons/"+curId).update(upd);
      salons[curId]=Object.assign({},s,upd);
      if(profRev===rev)setDirty(false);
      if(!opts.quiet)toast((opts.auto?tr("Profil zapisany automatycznie."):tr("Profil zapisany."))+geoWarn);
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
  /* po wyjściu z aplikacji (ukrycie karty, zablokowanie ekranu, zamknięcie) zapisujemy profil od razu, bez ustalania położenia */
  function autosaveOnExit(){
    if(profDirty&&mode==="salon"&&curId&&sview==="profil")saveProfile({auto:true,fast:true,quiet:true});
  }
  document.addEventListener("visibilitychange",function(){if(document.hidden)autosaveOnExit()});
  window.addEventListener("pagehide",autosaveOnExit);
  document.addEventListener("click",function(e){
    var t=e.target,b;
    var openMore=document.querySelectorAll("details.more[open]");for(var mi=0;mi<openMore.length;mi++)if(!openMore[mi].contains(t)||t.closest(".menu button"))openMore[mi].open=false;
    if((b=t.closest("[data-call]"))){trackCall(b.dataset.call);callPending=true}
    if((b=t.closest("[data-sms]"))){trackSms(b.dataset.sms);callPending=true}
    if((b=t.closest("[data-lang]"))){var nl=b.dataset.lang;if(nl!==LANG&&(nl==="pl"||nl==="en"))guardLeave(function(){setLang(nl)});return}
    if(t.closest("#addHome")){showInstallCard(true);return}
    if(t.closest("#instNo")){hideInstallCard();return}
    if(t.closest("#instGo")){var ip=deferredInstall;deferredInstall=null;if(ip){try{ip.prompt()}catch(x){}}installOpen=false;refreshAddHome();return}
    if((b=t.closest("[data-aok]"))){setApproved(b.dataset.aok,true);return}
    if((b=t.closest("[data-arej]"))){if(window.confirm(tr("Odrzucić ten salon? Jego profil i terminy zostaną usunięte. Konto logowania usuniesz w Supabase (Authentication → Users).")))rejectSalon(b.dataset.arej);return}
    if((b=t.closest("[data-ahide]"))){var hs=salons[b.dataset.ahide];if(hs){var nv=!hs.hideAllowed;if(window.confirm(nv?tr("Zezwolić temu salonowi na ukrycie się ze wspólnej listy? Zrób to tylko na wyraźną prośbę salonu."):tr("Cofnąć zgodę? Salon od razu wróci na wspólną listę.")))setHideAllowed(b.dataset.ahide,nv)}return}
    if((b=t.closest("[data-ahold]"))){if(window.confirm(tr("Wstrzymać ten salon? Zniknie z listy klientów.")))setApproved(b.dataset.ahold,false);return}
    if((b=t.closest("[data-aclr]"))){clearReports(b.dataset.aclr);return}
    if((b=t.closest("[data-report]"))){reportSalon(b.dataset.report);return}
    if((b=t.closest("[data-mode]"))){var nm=b.dataset.mode;guardLeave(function(){mode=nm;render()});return}
    if((b=t.closest("[data-cday]"))){dayF=b.dataset.cday;render();return}
    if((b=t.closest("[data-cview]"))){if(cview!==b.dataset.cview){cview=b.dataset.cview;render();window.scrollTo(0,Math.min(window.scrollY,($("app").offsetTop||0)))}return}
    if((b=t.closest("[data-ccat]"))){catF=b.dataset.ccat;render();return}
    if(t.closest("#catClear")){catF="all";catQ="";render();return}
    if((b=t.closest("[data-catopen]"))){var co=b.dataset.catopen;catOpen[co]=!catOpen[co];keepFocus(render);var bb=document.querySelector('[data-catopen="'+co+'"]');if(bb)bb.focus();return}
    if((b=t.closest("[data-catgo]"))){var cg=b.dataset.catgo;cview="find";dayF="all";render();var el=document.getElementById("sal-"+cg);if(el&&el.scrollIntoView)el.scrollIntoView({block:"start"});return}
    if((b=t.closest("[data-copy]"))){
      var num0=b.dataset.copy;
      try{navigator.clipboard.writeText(num0).then(function(){toast(tr("Numer skopiowany: ")+num0)},function(){toast(tr("Nie udało się skopiować. Numer salonu: ")+num0)})}
      catch(er){toast(tr("Nie udało się skopiować. Numer salonu: ")+num0)}
      return;
    }
    if(t.closest("#gps")){locate();render();return}
    if(t.closest("#reportBtn,#emptyReport")){
      contactOpen=!contactOpen;if(contactOpen){pitchOpen=false;reqState.sent=false;reqState.err=""}render();
      if(contactOpen){var cb=document.getElementById("contactbox");if(cb&&cb.scrollIntoView)cb.scrollIntoView({block:"center"})}
      return;
    }
    if(t.closest("#reqAgain")){reqState.sent=false;render();return}
    if(t.closest("#mySalonClear")){setMySlug("");try{history.replaceState(null,"",appUrl())}catch(e){}render();return}
    if(t.closest("#lnkCopy")){var su=salonLink(salons[curId]);if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(su).then(function(){toast(tr("Link skopiowany."))},function(){toast(su)});else toast(su);return}
    if(t.closest("#lnkShare")){var sh=salons[curId];navigator.share({title:sh.name,text:tr("Wolne terminy")+" – "+sh.name,url:salonLink(sh)}).catch(function(){});return}
    if(t.closest("#lnkQr")){downloadQr(salons[curId]);return}
    if(t.closest("#cnOn")){cnStart();return}
    if(t.closest("#cnSave")){cnEnable();return}
    if(t.closest("#cnCancel")){cnOpen=false;paintCn();return}
    if(t.closest("#cnOff")){cnDisable();return}
    if((b=t.closest("[data-cncat]"))){var ck=b.dataset.cncat;if(!ck)cnCats=[];else{var ix=cnCats.indexOf(ck);if(ix>=0)cnCats.splice(ix,1);else cnCats.push(ck)}paintCn();return}
    if(t.closest("#remOn")){enableRem();return}
    if(t.closest("#remOff")){disableRem();return}
    if(t.closest("#remTest")){testRem();return}
    if(t.closest("#pushOn")){enablePush();return}
    if(t.closest("#pushOff")){disablePush();return}
    if(t.closest("#pushTest")){testPush();return}
    if(t.closest("#aref")){adminRepT=0;loadReports();toast(tr("Odświeżam zgłoszenia…"));return}
    if((b=t.closest("[data-areqok]"))){deleteReq(b.dataset.areqok,true);return}
    if((b=t.closest("[data-areqno]"))){if(window.confirm(tr("Odrzucić to zgłoszenie? Zostanie usunięte z listy.")))deleteReq(b.dataset.areqno,false);return}
    if((b=t.closest("[data-akind]"))){addState.kind=b.dataset.akind;renderSalon();return}
    if((b=t.closest("[data-cal]"))){if(b.disabled)return;addState.day=offsetOf(b.dataset.cal);renderSalon();return}
    if((b=t.closest("[data-calnav]"))){addState.calM=Math.max(0,Math.min(CAL_MONTHS-1,(addState.calM||0)+parseInt(b.dataset.calnav,10)));renderSalon();return}
    if(t.closest("[data-closeday]")){toggleClosed(dateOf(addState.day));return}
    if(t.closest("#logoDel")){removeLogo();return}
    if((b=t.closest("[data-ph]"))){openLb(b.dataset.ph,parseInt(b.dataset.phi,10)||0);return}
    if(t.closest("[data-lbclose]")&&!t.closest("img")){closeLb();return}
    if((b=t.closest("[data-lbstep]"))){stepLb(parseInt(b.dataset.lbstep,10));return}
    if((b=t.closest("[data-phdel]"))){deletePhoto(b.dataset.phdel);return}
    if((b=t.closest("[data-aphdel]"))){var ap=b.dataset.aphdel.split("|");adminDelPhoto(ap[0],ap[1]);return}
    if(t.closest("#pitchBtn,#emptyPitch")){
      pitchOpen=!pitchOpen;if(pitchOpen)contactOpen=false;render();
      if(pitchOpen){var pb=document.getElementById("pitchbox");if(pb&&pb.scrollIntoView)pb.scrollIntoView({block:"center"})}
      return;
    }
    if(t.closest("#closePitch")){pitchOpen=false;render();return}
    if(t.closest("#shareBtn")){shareApp();return}
    if(t.id==="logout"){guardLeave(function(){var oldId=isAdmin?null:curId;remState="unknown";remFor=null;remSynced="";curId=null;editState=null;geoTried=false;isAdmin=false;adminChecked=null;adminReports={};adminReq=[];adminRepT=0;restoreId=null;loginMode="login";loginInfo="";if(window.FLM_AUTH)remUnlink(oldId).then(function(){window.FLM_AUTH.signOut()});render()});return}
    if(t.id==="switchMode"){loginMode=loginMode==="register"?"login":"register";renderLogin();return}
    if((b=t.closest("[data-snav]"))){var nv=b.dataset.snav;if(nv===sview)return;if(nv.indexOf("adm-")===0)adminRepT=0;guardLeave(function(){sview=nv;editState=null;render()});return}
    if((b=t.closest("[data-sedit]"))){
      var ex=slots[b.dataset.sedit];if(!ex)return;
      editState={id:ex.id,range:isRange(ex),to:endOf(ex),day:slotOff(ex),time:ex.time,svc:"cur",promo:ex.promoPct!=null?String(ex.promoPct):(ex.promo!=null?String(ex.promo).replace(".",","):"")};render();return;
    }
    if(t.closest("[data-secancel]")){editState=null;render();return}
    if((b=t.closest("[data-eday]"))&&editState){editState.day=parseInt(b.dataset.eday,10);document.querySelectorAll("#edaySeg button").forEach(function(x){x.setAttribute("aria-pressed",x===b?"true":"false")});return}
    if((b=t.closest("[data-sday]"))){addState.day=parseInt(b.dataset.sday,10);document.querySelectorAll("#daySeg button").forEach(function(x){x.setAttribute("aria-pressed",x===b?"true":"false")});addPrev(salons[curId]);return}
    if((b=t.closest("[data-sdel]"))){
      if(!needWrite())return;var sid=b.dataset.sdel,x=slots[sid];
      db.doc("slots/"+sid).delete().then(function(){delete slots[sid];toast(tr("Termin usunięty z oferty."));render()}).catch(function(er){toast(errMsg(er))});return;
    }
    if((b=t.closest("[data-stake]"))||(b=t.closest("[data-sfree]"))){
      if(!needWrite())return;var tk=!!b.dataset.stake,tid=b.dataset.stake||b.dataset.sfree;
      db.doc("slots/"+tid).update({taken:tk,booked:null}).then(function(){slots[tid]=Object.assign({},slots[tid],{taken:tk,booked:null});toast(tk?tr("Termin oznaczony jako zajęty i zniknął z oferty."):tr("Termin znów jest widoczny dla klientów."));render()}).catch(function(er){toast(errMsg(er))});return;
    }
    if((b=t.closest("[data-hcopy]"))){hrsCopy(0,parseInt(b.dataset.hcopy,10));setDirty(true);return}
    if(t.id==="mapGen"){var a=$("pa").value.trim();if(!a){toast(tr("Najpierw wpisz adres."));return}$("pm").value=mapLink(a);setDirty(true);toast(tr("Link do mapy utworzony."));return}
    if((b=t.closest("[data-svcdel]"))){
      var s=salons[curId];saveServices((s.services||[]).filter(function(x){return String(x.id)!==b.dataset.svcdel}),tr("Usługa usunięta z cennika. Opublikowane terminy zostają bez zmian."));return;
    }
  });
  document.addEventListener("change",function(e){
    var id=e.target.id;
    if(e.target.closest&&e.target.closest("#profForm"))profChanged();
    if(e.target.name==="vis"&&curId&&!isAdmin&&salons[curId]&&salons[curId].hideAllowed){setVisibility(e.target.value==="1");return}
    if(id==="phIn_salon"||id==="phIn_work"){var pf=Array.prototype.slice.call(e.target.files||[]);e.target.value="";uploadPhotos(id.slice(5),pf);return}
    if(id==="logoIn"){var lf=e.target.files&&e.target.files[0];e.target.value="";uploadLogo(lf);return}
    if(id&&id.indexOf("hc")===0&&/^hc\d$/.test(id)){var i=id.slice(2);$("hf"+i).disabled=e.target.checked;$("ht"+i).disabled=e.target.checked;hrsFollow(id)}
    else if(id&&/^h[ft]\d$/.test(id))hrsFollow(id);
  });
  document.addEventListener("input",function(e){
    var id=e.target.id;
    if(e.target.closest&&e.target.closest("#profForm"))profChanged();
    if(id&&/^h[ft]\d$/.test(id))hrsFollow(id);
    if(id==="spm"){var w0=$("spw");if(w0)w0.hidden=e.target.value==="ask";return}
    if(id==="catq"){catQ=e.target.value;var cl=$("catlist");if(cl)cl.innerHTML=catListHtml();return}
    if(id==="rn"){reqState.name=e.target.value;return}
    if(id==="ra"){reqState.addr=e.target.value;return}
    if(id==="rp"){reqState.phone=e.target.value;return}
    if(id==="rt"){reqState.note=e.target.value;return}
    if(id==="rw"){reqState.hp=e.target.value;return}
    if(editState&&id==="et"){
      editState.time=e.target.value;
      if(editState.range&&toMin(editState.to)<=toMin(editState.time)){editState.to=fromMin(Math.min(toMin(editState.time)+60,23*60+45));render()}
      return;
    }
    if(editState&&id==="et2"){editState.to=e.target.value;return}
    if(editState&&id==="es"){
      var xe=slots[editState.id],se=allSvc(salons[curId]);
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
      var sa=allSvc(salons[curId]),oa=sa.filter(function(x){return String(x.id)===String(addState.svc)})[0],na=sa.filter(function(x){return String(x.id)===String(e.target.value)})[0];
      if(modeOf(oa)!==modeOf(na))addState.promo="";
      addState.svc=e.target.value;renderSalon();return;
    }
    if(id==="ap"){addState.promo=e.target.value;addPrev(salons[curId])}
  });
  document.addEventListener("submit",function(e){
    var f=e.target;e.preventDefault();
    if(f.id==="loginForm"){doLogin();return}
    if(f.id==="addForm"){submitAdd();return}
    if(f.id==="reqForm"){submitRequest();return}
    if(f.id==="editForm"){submitEdit();return}
    if(f.id==="profForm"){saveProfile();return}
    if(f.id==="svcForm"){
      var s=salons[curId],n=$("sn").value.trim(),d=DEFAULT_SVC.dur,pm=(noPrice(s)||!$("spm"))?"ask":$("spm").value,pr=pm==="ask"?null:num($("sp").value),er=$("serr");
      function bad(m){er.textContent=m;er.hidden=false}
      if(!n)return bad(tr("Wpisz nazwę usługi."));
      if(pm!=="ask"&&(pr==null||pr<=0))return bad(tr("Podaj kwotę w złotych, np. 90, albo wybierz „Ustalana w salonie”."));
      er.hidden=true;
      saveServices((s.services||[]).concat([{id:Date.now().toString(36)+Math.random().toString(36).slice(2,5),name:n,dur:d,price:pr,pm:pm}]),tr("Usługa dodana.")).then(function(){var a=$("sn");if(a){a.value="";$("sp").value="";$("spm").value="exact";var w=$("spw");if(w)w.hidden=false}});
      return;
    }
  });

  /* statyczne teksty ze strony index.html (atrybuty data-i, data-ia) */
  function applyStatic(){
    var i,o,els;
    document.documentElement.lang=LANG;
    els=document.querySelectorAll("[data-i]");
    for(i=0;i<els.length;i++){o=ST[els[i].getAttribute("data-i")];if(o)els[i].innerHTML=o[LANG]}
    els=document.querySelectorAll("[data-ia]");
    for(i=0;i<els.length;i++){o=ST[els[i].getAttribute("data-ia")];if(o)els[i].setAttribute("aria-label",o[LANG])}
    els=document.querySelectorAll("[data-lang]");
    for(i=0;i<els.length;i++)els[i].setAttribute("aria-pressed",els[i].getAttribute("data-lang")===LANG?"true":"false");
    document.title=ST.title[LANG];
    var md=document.querySelector('meta[name="description"]');if(md)md.setAttribute("content",ST.desc[LANG]);
    if(window.FLM_PAINT_THEME)window.FLM_PAINT_THEME();
    paintHero();
  }
  function setLang(l){
    LANG=l;
    try{localStorage.setItem("flm_lang",l)}catch(e){}
    setNames();applyStatic();
    var tb=$("toast");if(tb)tb.classList.remove("on");
    render();
  }
  applyStatic();
  init();
})();

/* --- pokaż/ukryj hasło --- */
document.addEventListener("click",function(e){
  var b=e.target.closest&&e.target.closest("[data-pw]");if(!b)return;
  var i=document.getElementById(b.getAttribute("data-pw"));if(!i)return;
  var show=i.type==="password";i.type=show?"text":"password";
  b.textContent=show?window.FLM_T("Ukryj"):window.FLM_T("Pokaż");b.setAttribute("aria-pressed",show?"true":"false");
});
/* --- styl strony: zdjęcie salonu w nagłówku (w kształcie zależnym od stylu), podkreślenia, ozdobniki, fonty i zaokrąglenia ---
   Ozdobniki biorą kolory z motywu, więc działają z każdym kolorem i w trybie ciemnym. */
(function(){
  var root=document.documentElement;
  var G=function(x,y,s,inner){return '<g transform="translate('+x+' '+y+') scale('+s+')">'+inner+'</g>'};
  var BURST='<g stroke="var(--accent)" stroke-width="5" stroke-linecap="round"><path d="M0 0l16-10M4 14h20M0 28l16 10"/></g>';
  var SPARK=function(x,y,r,c){return '<path transform="translate('+x+' '+y+') scale('+r+')" d="M0-10C1-3 3-1 10 0 3 1 1 3 0 10-1 3-3 1-10 0-3-1-1-3 0-10Z" fill="'+(c||"var(--accent)")+'"/>'};
  var LEAF=function(x,y,r,s){return '<path transform="translate('+x+' '+y+') rotate('+r+') scale('+s+')" d="M0 0C10-14 30-16 40-10 30 0 14 6 0 0Z" fill="var(--accent)" opacity=".85"/>'};
  /* ZDJĘCIA NAGŁÓWKA (pliki foto-*.jpg obok index.html). Aby podmienić zdjęcie, wgraj nowy plik pod tą samą nazwą (duży: foto-NAZWA.jpg,
     miniatura do panelu: foto-NAZWA-m.jpg) albo dopisz nową pozycję poniżej.
     r = szerokość/wysokość zdjęcia; f = kadr dla każdego stylu: [fx, fy, przybliżenie] — fx/fy (0–1) to punkt, który ma być na środku.
     fit:"logo" = pokaż w całości w białym kole (bez przycinania). */
  var PHOTOS=[
    {k:"wnetrze",n:"Wnętrze salonu",r:1408/768,f:{salon:[.5,.55,1.05],elegant:[.2,.48,1.15],barber:[.8,.42,1.25],nature:[.42,.5,1.05]}},
    {k:"slub",n:"Fryzura ślubna",r:928/1152,f:{salon:[.5,.3,1],elegant:[.5,.36,1],barber:[.47,.3,1.1],nature:[.5,.3,1]}},
    {k:"broda",n:"Strzyżenie brody",r:1,f:{salon:[.5,.42,1],elegant:[.52,.42,1.15],barber:[.52,.44,1.1],nature:[.5,.42,1]}},
    {k:"barber-stol",n:"Stanowisko barbera",r:1,f:{salon:[.5,.56,1],elegant:[.52,.56,1.1],barber:[.5,.6,1.15],nature:[.5,.56,1]}},
    {k:"logo",n:"Logo",r:1,fit:"logo"}
  ];
  var AUTO={salon:"wnetrze",elegant:"slub",barber:"broda",nature:"wnetrze"};
  function photoKey(){var v;try{v=localStorage.getItem("flm_photo")}catch(e){}return PHOTOS.some(function(x){return x.k===v})?v:"auto"}
  function curPhoto(style){var k=photoKey();if(k==="auto")k=window.FLM_HERO==="barber"?"broda":(AUTO[style]||"wnetrze");for(var i=0;i<PHOTOS.length;i++)if(PHOTOS[i].k===k)return PHOTOS[i];return PHOTOS[0]}
  /* rysuje zdjęcie przycięte do kształtu d (prostokąt bx,by,bw,bh = obrys kształtu) */
  /* strony bez własnych zdjęć (ogólna, masaż, kosmetyka …): ilustracja z ikon branż */
  function illus(H,u,id,d,bx,by,bw,bh){
    var I=window.FLM_CATIC||{},cx=bx+bw/2,cy=by+bh/2,m=Math.min(bw,bh);
    var g=function(k,x,y,sc,o){return '<g transform="translate('+(x-12*sc).toFixed(1)+' '+(y-12*sc).toFixed(1)+') scale('+sc.toFixed(3)+')" fill="none" stroke="var(--accent)" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" opacity="'+(o||1)+'">'+(I[k]||"")+'</g>'};
    var o='<defs><clipPath id="'+id+'I'+u+'"><path d="'+d+'"/></clipPath></defs><g clip-path="url(#'+id+'I'+u+')"><rect x="'+bx+'" y="'+by+'" width="'+bw+'" height="'+bh+'" fill="var(--surface)"/><rect x="'+bx+'" y="'+by+'" width="'+bw+'" height="'+bh+'" fill="var(--accent-soft)" opacity=".7"/>';
    if(H&&H!=="ogolne"&&I[H])o+=g(H,cx,cy,m*.66/24);
    else{var ks=["fryzjer","masaz","paznokcie","kosmetyka","stomatolog","brwi"];ks.forEach(function(k,i){o+=g(k,cx+((i%3)-1)*bw*.26,cy+(Math.floor(i/3)-.5)*bh*.42,m*.27/24)})}
    return o+'</g><path d="'+d+'" fill="none" stroke="var(--accent)" stroke-opacity=".25" stroke-width="1.5"/>';
  }
  function photo(u,id,d,bx,by,bw,bh,style){
    var H=window.FLM_HERO;if(H&&H!=="fryzjer"&&H!=="barber")return illus(H,u,id,d,bx,by,bw,bh);
    var P=curPhoto(style),src="foto-"+P.k+(u.charAt(0)==="t"?"-m":"")+".jpg";
    if(P.fit==="logo"){var r=Math.min(bw,bh)/2-4,cx=bx+bw/2,cy=by+bh/2;
      return '<defs><clipPath id="'+id+'L'+u+'"><circle cx="'+cx+'" cy="'+cy+'" r="'+r+'"/></clipPath></defs><circle cx="'+cx+'" cy="'+cy+'" r="'+(r+3)+'" fill="#fff" stroke="var(--line)"/><image href="'+src+'" x="'+(cx-r*1.02)+'" y="'+(cy-r*1.02)+'" width="'+2.04*r+'" height="'+2.04*r+'" clip-path="url(#'+id+'L'+u+')"/>';}
    var f=(P.f&&P.f[style])||[.5,.5,1],R=P.r,h=Math.max(bh,bw/R)*f[2],w=h*R,x=bx+bw/2-f[0]*w,y=by+bh/2-f[1]*h;
    x=Math.min(bx,Math.max(bx+bw-w,x));y=Math.min(by,Math.max(by+bh-h,y));
    return '<defs><clipPath id="'+id+u+'"><path d="'+d+'"/></clipPath></defs><image href="'+src+'" x="'+x.toFixed(1)+'" y="'+y.toFixed(1)+'" width="'+w.toFixed(1)+'" height="'+h.toFixed(1)+'" preserveAspectRatio="none" clip-path="url(#'+id+u+')"/>';
  }
  var BLOB="M40 210C10 160 30 70 110 52c60-14 90 24 140 16 50-8 80 40 64 98-14 52-60 84-140 84-60 0-112-8-134-40Z";
  var ART={
    salon:function(u){return '<svg viewBox="0 0 330 250" preserveAspectRatio="xMidYMax meet">'+
      '<path d="'+BLOB+'" fill="var(--accent-soft)" transform="translate(12 -12)"/>'+
      photo(u,"stP",BLOB,10,52,320,198,"salon")+
      G(300,14,1,BURST)+'</svg>'},
    elegant:function(u){var A="M85 250V120a80 80 0 0 1 160 0v130Z";return '<svg viewBox="0 0 330 250" preserveAspectRatio="xMidYMax meet">'+
      '<path d="M100 250V130a80 80 0 0 1 160 0v120" fill="none" stroke="var(--accent)" stroke-width="1.5"/>'+
      photo(u,"stA",A,85,40,160,210,"elegant")+
      SPARK(272,58,1.4)+SPARK(56,96,.9,"var(--mark)")+SPARK(292,150,.7)+
      '<path d="M40 249h250" stroke="var(--accent)" stroke-width="1.2"/></svg>'},
    barber:function(u){var C="M72 140a98 98 0 1 0 196 0a98 98 0 1 0-196 0Z";return '<svg viewBox="0 0 330 250" preserveAspectRatio="xMidYMax meet"><defs>'+
      '<pattern id="stPole'+u+'" width="22" height="22" patternUnits="userSpaceOnUse" patternTransform="rotate(35)"><rect width="22" height="22" fill="var(--surface)"/><rect width="8" height="22" fill="var(--accent)"/><rect x="11" width="5" height="22" fill="var(--fg)"/></pattern></defs>'+
      photo(u,"stC",C,72,42,196,196,"barber")+
      '<circle cx="170" cy="140" r="98" fill="none" stroke="var(--fg)" stroke-width="3"/>'+
      '<g transform="translate(28 30)"><rect x="0" y="12" width="30" height="150" rx="6" fill="url(#stPole'+u+')" stroke="var(--fg)" stroke-width="3"/><rect x="-5" y="0" width="40" height="14" rx="5" fill="var(--fg)"/><rect x="-5" y="160" width="40" height="14" rx="5" fill="var(--fg)"/></g>'+
      '</svg>'},
    nature:function(u){var N="M70 230c-40-30-40-110 10-150 44-36 110-40 160-10 50 30 70 100 40 140-20 26-60 30-100 30-50 0-80 6-110-10Z";return '<svg viewBox="0 0 330 250" preserveAspectRatio="xMidYMax meet">'+
      '<path d="'+N+'" fill="var(--accent-soft)" transform="translate(10 8) rotate(-4 165 150)"/>'+
      photo(u,"stN",N,42,58,256,192,"nature")+
      '<path d="M290 40c-20 40-30 90-20 150" fill="none" stroke="var(--accent)" stroke-width="2.5" stroke-linecap="round"/>'+
      LEAF(282,70,200,.7)+LEAF(278,100,-20,.75)+LEAF(274,132,195,.8)+LEAF(273,162,-15,.7)+
      '<path d="M30 230c0-50 10-80 30-110" fill="none" stroke="var(--accent)" stroke-width="2" stroke-linecap="round"/>'+LEAF(56,140,-60,.55)+LEAF(44,176,210,.55)+
      '</svg>'}
  };
  var STY=[{k:"salon",n:"Salon"},{k:"elegant",n:"Elegancki"},{k:"barber",n:"Barber"},{k:"nature",n:"Natura"},{k:"plain",n:"Prosty"}];
  function get(){var v;try{v=localStorage.getItem("flm_style")}catch(e){}return STY.some(function(x){return x.k===v})?v:"salon"}
  function apply(){
    var k=get();root.setAttribute("data-style",k);
    var el=document.getElementById("heroArt");if(el)el.innerHTML=ART[k]?ART[k]("h"):"";
  }
  window.FLM_STYLE={refresh:apply,list:STY,get:get,set:function(k){try{localStorage.setItem("flm_style",k)}catch(e){}apply()},
    photos:PHOTOS,photo:photoKey,setPhoto:function(k){try{localStorage.setItem("flm_photo",k)}catch(e){}apply()},autoPhoto:function(){return AUTO[get()]||"wnetrze"},thumb:function(k){return ART[k]?ART[k]("t"):'<svg viewBox="0 0 330 250"><rect x="40" y="60" width="250" height="16" rx="8" fill="var(--line-strong)"/><rect x="40" y="96" width="180" height="12" rx="6" fill="var(--line)"/><rect x="40" y="124" width="200" height="12" rx="6" fill="var(--line)"/></svg>'}};
  apply();
})();
/* --- wygląd: tryb jasny / ciemny / systemowy + kolor dopasowany do salonu --- */
(function(){
  var root=document.documentElement,btn=document.getElementById("themeBtn"),panel=document.getElementById("lookPanel"),meta=document.getElementById("themeColor");
  var T=function(s){return window.FLM_T?window.FLM_T(s):s};
  var icon='<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 22a10 10 0 1 1 10-10c0 2.8-2.2 4-4 4h-2a2 2 0 0 0-1.5 3.3A1.6 1.6 0 0 1 12 22Z"/><circle cx="7.5" cy="10.5" r="1.3" fill="currentColor"/><circle cx="12" cy="7" r="1.3" fill="currentColor"/><circle cx="16.5" cy="10.5" r="1.3" fill="currentColor"/></svg>';
  /* k: wartość data-accent; c: kolor kółka (jasny/ciemny) */
  var ACC=[
    {k:"terakota",n:"Bordowy",c:["#951A2F","#F191A2"]},
    {k:"fiolet",n:"Fioletowy",c:["linear-gradient(135deg,#2B2A8C 58%,#F4B731 58%)","linear-gradient(135deg,#10113A 42%,#F4B731 42%)"]},
    {k:"purpura",n:"Purpurowy",c:["#8C2860","#ED93C3"]},
    {k:"pomarancz",n:"Pomarańczowy",c:["#973D0B","#F5AE7B"]},
    {k:"roz",n:"Różowy",c:["#A4144D","#F48FB1"]},
    {k:"zloty",n:"Złoty",c:["#7C590E","#EACD87"]},
    {k:"szalwia",n:"Szałwiowy",c:["#3B6541","#ABD7AF"]},
    {k:"morski",n:"Morski",c:["#1A686C","#ADE1E2"]},
    {k:"grafit",n:"Grafitowy",c:["#3B4048","#C3CAD4"]}
  ];
  var mq=window.matchMedia?matchMedia("(prefers-color-scheme: dark)"):null;
  function get(k,d){try{return localStorage.getItem(k)||d}catch(e){return d}}
  function put(k,v){try{localStorage.setItem(k,v)}catch(e){}}
  function mode(){var m=get("flm_theme","light");return m==="dark"||m==="auto"?m:"light"}
  function accent(){var a=get("flm_accent","terakota");return ACC.some(function(x){return x.k===a})?a:"terakota"}
  function apply(){
    var m=mode(),dark=m==="dark"||(m==="auto"&&mq&&mq.matches),a=accent();
    if(dark)root.setAttribute("data-theme","dark");else root.removeAttribute("data-theme");
    if(a==="terakota")root.removeAttribute("data-accent");else root.setAttribute("data-accent",a);
    if(meta){var bg=getComputedStyle(root).getPropertyValue("--bg").trim();if(bg)meta.setAttribute("content",bg)}
  }
  function paint(){
    var lab=T("Wygląd");
    if(btn){btn.innerHTML=icon+'<span class="tt">'+lab+'</span>';btn.title=T("Wygląd aplikacji")}
    if(!panel)return;
    var m=mode(),a=accent(),dark=root.getAttribute("data-theme")==="dark";
    var modes=[["light","Jasny"],["dark","Ciemny"],["auto","Systemowy"]];
    panel.innerHTML='<h4 id="lkM">'+T("Tryb")+'</h4><div class="seg" role="group" aria-labelledby="lkM">'+modes.map(function(x){return '<button type="button" data-lkm="'+x[0]+'" aria-pressed="'+(m===x[0])+'">'+T(x[1])+'</button>'}).join("")+'</div>'+
      '<h4 id="lkC">'+T("Kolor")+'</h4><div class="swg" role="radiogroup" aria-labelledby="lkC">'+ACC.map(function(x){var on=x.k===a;return '<button type="button" class="sw" role="radio" data-lka="'+x.k+'" aria-checked="'+on+'" tabindex="'+(on?0:-1)+'"><i style="background:'+x.c[dark?1:0]+'"></i>'+T(x.n)+'</button>'}).join("")+'</div>'+
      (window.FLM_STYLE?'<h4 id="lkS">'+T("Styl")+'</h4><div class="stg" role="radiogroup" aria-labelledby="lkS">'+window.FLM_STYLE.list.map(function(x){var on=x.k===window.FLM_STYLE.get();return '<button type="button" class="st" role="radio" data-lks="'+x.k+'" aria-checked="'+on+'"><span class="stt" data-style="'+x.k+'">'+window.FLM_STYLE.thumb(x.k)+'</span>'+T(x.n)+'</button>'}).join("")+'</div>'+
        '<h4 id="lkP">'+T("Zdjęcie w nagłówku")+'</h4><div class="phg" role="radiogroup" aria-labelledby="lkP">'+[{k:"auto",n:"Dopasuj do stylu"}].concat(window.FLM_STYLE.photos).map(function(x){var on=x.k===window.FLM_STYLE.photo(),im=x.k==="auto"?window.FLM_STYLE.autoPhoto():x.k;return '<button type="button" class="php'+(x.k==="auto"?' auto':'')+'" role="radio" data-lkp="'+x.k+'" aria-checked="'+on+'"><img src="foto-'+im+'-m.jpg" alt="" loading="lazy" onerror="this.style.visibility=\'hidden\'"><span>'+T(x.n)+'</span></button>'}).join("")+'</div>':'')+
      '<p class="hint" style="margin:12px 0 0">'+T("Wybór zapisuje się w tej przeglądarce.")+'</p>';
  }
  function open(o){
    if(!panel||!btn)return;
    panel.hidden=!o;btn.setAttribute("aria-expanded",o?"true":"false");
    if(o){paint();var f=panel.querySelector('[aria-pressed="true"]');if(f)f.focus()}
  }
  if(btn)btn.addEventListener("click",function(e){e.stopPropagation();open(panel.hidden)});
  if(panel){
    panel.addEventListener("click",function(e){
      e.stopPropagation();
      var b=e.target.closest("button");if(!b)return;
      var mm=b.getAttribute("data-lkm"),aa=b.getAttribute("data-lka"),ss=b.getAttribute("data-lks"),pp=b.getAttribute("data-lkp");
      if(pp&&window.FLM_STYLE){window.FLM_STYLE.setPhoto(pp);paint();var fp=panel.querySelector('[data-lkp="'+pp+'"]');if(fp)fp.focus();return}
      if(mm)put("flm_theme",mm);
      if(aa)put("flm_accent",aa);
      if(ss&&window.FLM_STYLE)window.FLM_STYLE.set(ss);
      if(!mm&&!aa&&!ss)return;
      apply();paint();
      var f=panel.querySelector(mm?'[data-lkm="'+mm+'"]':aa?'[data-lka="'+aa+'"]':'[data-lks="'+ss+'"]');if(f)f.focus();
    });
    panel.addEventListener("keydown",function(e){
      var b=e.target.closest&&e.target.closest(".sw");if(!b)return;
      var l=[].slice.call(panel.querySelectorAll(".sw")),i=l.indexOf(b),n=-1;
      if(e.key==="ArrowRight"||e.key==="ArrowDown")n=(i+1)%l.length;
      else if(e.key==="ArrowLeft"||e.key==="ArrowUp")n=(i-1+l.length)%l.length;
      if(n<0)return;e.preventDefault();l[n].click();
    });
  }
  document.addEventListener("click",function(){if(panel&&!panel.hidden)open(false)});
  document.addEventListener("keydown",function(e){if(e.key==="Escape"&&panel&&!panel.hidden){open(false);btn.focus()}});
  if(mq){var onSys=function(){if(mode()==="auto"){apply();if(panel&&!panel.hidden)paint()}};if(mq.addEventListener)mq.addEventListener("change",onSys);else if(mq.addListener)mq.addListener(onSys)}
  window.FLM_PAINT_THEME=function(){apply();paint()};
  apply();paint();
})();
