(function(){
  /* ---------- język interfejsu (PL / EN) ---------- */
  var LANG="pl";
  try{var savedLang=localStorage.getItem("flm_lang");if(savedLang==="en"||savedLang==="pl")LANG=savedLang}catch(e){}
  var ST={
 "title": {
  "pl": "Last Minute Radomsko: uroda i zdrowie",
  "en": "Last Minute Radomsko: beauty & health"
 },
 "desc": {
  "pl": "Wolne terminy last minute: fryzjer, uroda i zdrowie w Radomsku i okolicach.",
  "en": "Last-minute free appointments for hair, beauty and health in Radomsko and the surrounding area."
 },
 "brand": {
  "pl": "Last Minute",
  "en": "Last Minute"
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
  "pl": "Zmień motyw ekranu",
  "en": "Change screen theme"
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
  "pl": "Wolne terminy w salonach w Radomsku i okolicy",
  "en": "Free slots at salons in Radomsko and nearby"
 },
 "small": {
  "pl": "Fryzjer, kosmetyczka, paznokcie, masaż, stomatolog. Dzwonisz do salonu, umawiasz się i płacisz na miejscu.",
  "en": "Hairdresser, beautician, nails, massage, dentist. Call the salon, book a time and pay on site."
 },
 "town": {
  "pl": "Radomsko i okolice",
  "en": "Radomsko and nearby"
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
 "Nie wczytała się biblioteka Supabase. Sprawdź połączenie z internetem albo czy sieć (np. firmowa) nie blokuje stron cdn.jsdelivr.net i unpkg.com.": "The Supabase library did not load. Check your internet connection, or whether your network (e.g. a company network) blocks cdn.jsdelivr.net and unpkg.com.",
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
 "Zgłoś salon nam": "Report a salon to us",
 "Last Minute Radomsko": "Last Minute Radomsko",
 "Zobacz aplikację z wolnymi terminami: fryzjer, uroda i zdrowie w Radomsku i okolicach. Może dodasz w niej swój salon?": "Check out this app with free appointments for hair, beauty and health in Radomsko and nearby. Maybe you would like to add your salon?",
 "Link skopiowany. Wklej go w wiadomości do salonu.": "Link copied. Paste it in a message to the salon.",
 "Link do aplikacji: ": "App link: ",
 "Brak terminów na {0}. Wybierz „Wszystkie”.": "No appointments for {0}. Choose “All”.",
 "dziś": "today",
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
 "Ciemny": "Dark"
};
  /* tr(): tekst po polsku jest kluczem; po angielsku bierzemy tłumaczenie z EN. {0}, {1} to miejsca na wartości. */
  function tr(k,a){var s=(LANG==="en"&&EN[k]!=null)?EN[k]:k;if(a)for(var i=0;i<a.length;i++)s=s.split("{"+i+"}").join(a[i]);return s}
  function lc(){return LANG==="en"?"en-GB":"pl-PL"}
  var DEFAULT_SVC_NAME="Usługi fryzjerskie"; /* wartość zapisana w bazie w starych terminach: NIE zmieniać */
  /* rodzaje usług salonu (kolumna salons.category, wiele wartości po przecinku) */
  var CATS=[{k:"fryzjer",pl:"Fryzjer",en:"Hairdresser"},{k:"barber",pl:"Barber",en:"Barber"},{k:"kosmetyka",pl:"Kosmetyka",en:"Beauty"},{k:"paznokcie",pl:"Paznokcie",en:"Nails"},{k:"brwi",pl:"Brwi i rzęsy",en:"Brows & lashes"},{k:"masaz",pl:"Masaż",en:"Massage"},{k:"stomatolog",pl:"Stomatolog",en:"Dentist"},{k:"inne",pl:"Inne",en:"Other"}];
  function catName(k){for(var i=0;i<CATS.length;i++)if(CATS[i].k===k)return LANG==="en"?CATS[i].en:CATS[i].pl;return k}
  function catsOf(s){var l=String((s&&s.category)||"fryzjer").split(",").filter(function(x){return x&&CATS.some(function(c){return c.k===x})});return l.length?l:["fryzjer"]}
  function noPrice(s){return !!s&&catsOf(s).indexOf("stomatolog")>=0}
  function readCats(p){var o=[];CATS.forEach(function(c){var e=document.getElementById(p+c.k);if(e&&e.checked)o.push(c.k)});return o}
  function catPick(p,sel){return '<div class="field"><span style="display:block;font-weight:500;font-size:14px;margin-bottom:4px" id="'+p+'lab">'+tr("Rodzaj usług")+'</span><div class="catpick" role="group" aria-labelledby="'+p+'lab">'+CATS.map(function(c){return '<label class="chk" for="'+p+c.k+'"><input type="checkbox" id="'+p+c.k+'"'+(sel.indexOf(c.k)>=0?' checked':'')+'> '+esc(catName(c.k))+'</label>'}).join("")+'</div><p class="hint">'+tr("Zaznacz wszystko, co oferuje salon.")+'</p></div>'}
  function catTags(s){return '<div class="cats">'+catsOf(s).map(function(c){return '<span class="tag">'+esc(catName(c))+'</span>'}).join("")+'</div>'}
  /* liczba wolnych terminów na każdy dzień (wszystkie zatwierdzone salony) */
  function dayCounts(){
    var c={all:0};
    allSlots().forEach(function(x){var s=salons[x.salonId];if(!s||s.approved===false||isTaken(x)||isPast(x)||closedOn(s,x.date))return;var o=slotOff(x);if(o>=0&&o<NDAYS){c[o]=(c[o]||0)+1;c.all++}});
    return c;
  }
  function dayBar(){
    var c=dayCounts(),l=[];
    for(var i=0;i<NDAYS;i++)if(c[i]||String(i)===dayF)l.push(i);
    if(!c.all&&dayF==="all")return "";
    return '<div class="seg days" role="group" aria-label="'+tr("Dzień")+'">'+[["all",tr("Wszystkie"),c.all]].concat(l.map(function(i){return [String(i),DAYS[i],c[i]||0]})).map(function(d){return '<button type="button" data-cday="'+d[0]+'" aria-pressed="'+(dayF===d[0])+'">'+esc(d[1])+'<span class="n">'+d[2]+'</span></button>'}).join("")+'</div>';
  }
  /* święta w Polsce (stałe i ruchome); tylko podpowiedź w kalendarzu salonu */
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
  function closedOn(s,ds){return !!s&&Array.isArray(s.closedDays)&&s.closedDays.indexOf(ds)>=0}
  function initials(n){var w=String(n||"").replace(/["„”]/g,"").trim().split(/\s+/).filter(Boolean);return ((w[0]||"?").charAt(0)+(w[1]?w[1].charAt(0):"")).toUpperCase()}
  function logoHtml(s,cls){
    cls="slogo"+(cls?" "+cls:"");
    if(s&&s.logoUrl)return '<img class="'+cls+'" src="'+esc(s.logoUrl)+'" alt="" loading="lazy" decoding="async">';
    return '<span class="'+cls+' ini" aria-hidden="true">'+esc(initials(s&&s.name))+'</span>';
  }
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
  var dayF="all", q="", restoreId=null, loginInfo="", editState=null;
  var addState={day:0,calM:0,time:"",to:"",kind:"range",svc:"",promo:""};
  function telHref(p){var d=String(p||"").replace(/\D/g,"");if(d.length===11&&d.indexOf("48")===0)d=d.slice(2);return "tel:"+(d.length===9?"+48":"")+d}

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
    if(dbMissing){var st=window.FLM_STATUS,why=st==="no-config"?tr("Nie znaleziono pliku config.js. Wgraj go do repozytorium na GitHub razem z pozostałymi plikami."):st==="placeholder"?tr("W pliku config.js nie ma jeszcze klucza projektu Supabase. Wklej adres projektu (Project URL) i klucz (Publishable key) i wgraj plik ponownie."):st==="no-lib"?tr("Nie wczytała się biblioteka Supabase. Sprawdź połączenie z internetem albo czy sieć (np. firmowa) nie blokuje stron cdn.jsdelivr.net i unpkg.com."):tr("Sprawdź połączenie z internetem i plik config.js.");h='<div class="note warn"><b>'+tr("Aplikacja nie jest połączona z bazą danych.")+'</b> '+esc(why)+'</div>'}
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
    renderBanner();
    if(dbMissing){$("app").innerHTML="";return}
    if(mode==="client")renderClient();else renderSalon();
  }
  function loadingHtml(){return '<p class="empty">'+tr("Wczytuję dane…")+'</p>'}

  /* ================= KLIENT ================= */
  function renderClient(){
    var app=$("app");
    if(locState==="idle")locate();
    if(!(ready.s&&ready.t)){app.innerHTML=loadingHtml();return}
    app.innerHTML=findHtml();
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
  var IC_SEND='<path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/>';
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
    var h='<div class="invite"><span class="ico" aria-hidden="true">'+ic(IC_STORE)+'</span><div class="txt"><b>'+tr("Nie ma Twojego salonu na liście?")+'</b><span>'+tr("Pokaż mu aplikację podczas wizyty.")+'</span></div>'+
      '<div class="btn-row"><button class="btn" type="button" id="pitchBtn" aria-expanded="'+pitchOpen+'">'+tr("Pokaż salonowi")+'</button><button class="btn ghost" type="button" id="shareBtn">'+ic(IC_SEND)+tr("Wyślij link")+'</button></div></div>'+
      '<p class="hint" style="text-align:center"><button class="link" type="button" id="reportBtn">'+tr("Zgłoś salon nam")+'</button></p>';
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
      var s=salons[k];if(s.approved===false)return;var v=visibleSlots(s); if(!v.length)return;
      var d=(user&&s.lat!=null&&s.lng!=null)?dist(s.lat,s.lng):null;
      res.push({s:s,v:v,d:d,first:slotOff(v[0])*1440+toMin(v[0].time)});
    });
    /* zawsze od najbliższych terminów; przy tym samym czasie bliżej wygrywa salon położony bliżej */
    res.sort(function(a,b){return (a.first-b.first)||(a.d!=null&&b.d!=null?a.d-b.d:0)});
    var noSalons=!Object.keys(salons).length,loc;
    if(locState==="ok")loc='<div class="loc"><div><b>'+tr("Odległość liczona od Twojej lokalizacji.")+'</b></div><button class="btn ghost" id="gps" type="button">'+tr("Odśwież lokalizację")+'</button></div>';
    else if(locState==="loading")loc='<p class="meta" style="margin:0">'+tr("Ustalam Twoją lokalizację…")+'</p>';
    else loc='<div class="loc"><div><b>'+tr("Nie znamy Twojej lokalizacji.")+'</b><p class="hint" style="margin:2px 0 0">'+tr("Zezwól na lokalizację, a pokażemy odległość do salonów.")+'</p></div><button class="btn" id="gps" type="button">'+tr("Użyj mojej lokalizacji")+'</button></div>';
    return addHomeHtml()+'<div class="panel">'+loc+
      '<div class="filters">'+dayBar()+
      '</div></div>'+
      '<div class="sortrow"><p class="count">'+(res.length?res.length+" "+(LANG==="en"?(res.length===1?"salon":"salons"):(res.length===1?"salon":res.length<5?"salony":"salonów"))+" "+tr("z wolnymi terminami, od najbliższych terminów"):"")+'</p></div>'+
      '<div class="list">'+(res.length?res.map(cardHtml).join(""):emptyHtml())+'</div>'+inviteHtml();
  }
  function cardHtml(r){
    var s=r.s,h=(s.hours||[])[todayIdx()],html="",last="";
    var hrs=closedOn(s,dateOf(0))?tr("dziś nieczynne"):(h&&!h.closed?tr("dziś {0}–{1}",[h.from,h.to]):tr("dziś zamknięte"));
    var shut=[];for(var ci=1;ci<NDAYS;ci++)if(closedOn(s,dateOf(ci)))shut.push(DAYS[ci]);
    r.v.forEach(function(x){
      var o=slotOff(x);
      if(x.date!==last){html+='<div class="daylab d'+o+'">'+dayHead(o)+'</div>';last=x.date}
      var off=offPct(x);
      html+='<div class="slot d'+o+'"><div class="tcol"><div class="t">'+esc(x.time)+'</div><span class="dchip d'+o+'">'+DAYS[o]+'</span></div><div class="sv">'+(isRange(x)?'<div>'+tr("Wolne godziny")+' <span class="meta">· '+tr("do")+' '+endOf(x)+'</span></div><div class="meta">'+(noPrice(s)?tr("Usługę ustalisz z salonem"):tr("Usługę i cenę ustalisz z salonem"))+'</div>':'<div>'+esc(svcName(x.service))+' <span class="meta">· '+x.dur+' min</span></div>'+(noPrice(s)?'':'<div class="price">'+priceHtml(x)+(off>0?'<span class="off">−'+off+'%</span>':'')+'</div>'))+'</div>'+
        '<div class="go"><a class="btn sm" data-call="'+esc(s.id)+'" href="'+esc(telHref(s.phone))+'">'+tr("Zadzwoń")+'</a></div></div>';
    });
    return '<article class="card"><div class="shead">'+logoHtml(s)+'<div class="sname"><h3>'+esc(s.name)+'</h3>'+catTags(s)+'</div>'+(r.d!=null?'<span class="dist">'+km(r.d)+'</span>':'')+'</div>'+
      '<div class="body"><div class="meta">'+esc(withCity(s.address))+' · '+esc(hrs)+'</div>'+(shut.length?'<div class="meta shut">'+tr("Nieczynne:")+' '+esc(shut.join(", "))+'</div>':'')+(s.desc?'<p class="desc">'+esc(s.desc)+'</p>':'')+'</div>'+html+
      '<div class="foot callrow"><span>'+tr("Zadzwoń i zarezerwuj telefonicznie:")+' <span class="phone">'+esc(s.phone)+'</span></span>'+
      '<span class="btn-row"><button class="btn ghost sm" type="button" data-copy="'+esc(s.phone)+'">'+tr("Kopiuj numer")+'</button>'+(s.mapUrl?'<a href="'+esc(s.mapUrl)+'" target="_blank" rel="noopener">'+tr("Mapa")+'</a>':'')+'</span></div>'+
      '<div class="foot" style="border-top:0;padding-top:0;font-size:13px"><button class="link" type="button" data-report="'+esc(s.id)+'">'+tr("Zgłoś nadużycie")+'</button></div></article>';
  }
  /* ================= SALON ================= */
  function renderSalon(){
    var app=$("app");
    if(!curId){renderLogin();return}
    if(!(ready.s&&ready.t)){app.innerHTML=loadingHtml();return}
    var s=salons[curId];
    if(!s){curId=null;renderLogin();return}
    app.innerHTML='<div class="who"><span>'+tr("Zalogowano:")+' <b>'+esc(s.name)+'</b></span><button class="btn ghost sm" id="logout" type="button">'+tr("Wyloguj")+'</button></div>'+addHomeHtml()+
      '<nav class="tabs" role="tablist" aria-label="'+tr("Panel salonu")+'">'+
      salonTabs().map(function(t){
        return '<button role="tab" data-snav="'+t[0]+'" aria-selected="'+(sview===t[0])+'">'+t[1]+'</button>';
      }).join("")+'</nav><div id="sbanner">'+approvalHtml(s)+'</div><section id="sview"></section>';
    var v=$("sview");
    if(!isAdmin&&sview.indexOf("adm-")===0)sview="add";
    if(isAdmin&&sview.indexOf("adm-")!==0)sview="adm-pend";
    if(isAdmin){renderAdmin(v);loadReports()}
    else if(sview==="add")renderAdd(v,s);else if(sview==="mine"){renderMine(v);loadStats()}else renderProfil(v,s);
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
      return [["adm-pend",tr("Do zatwierdzenia")+bd(L.pend.length)],["adm-req",tr("Od klientów")+bd(adminReq.length)],["adm-rep",tr("Nadużycia")+bd(L.rep.length)],["adm-ok",tr("Zatwierdzone")]];
    }
    return [["add",tr("Dodaj termin")],["mine",tr("Moje terminy")],["profil",tr("Profil")]];
  }
  function approvalHtml(s){
    if(isAdmin||s.approved!==false)return "";
    return '<div class="note warn"><b>'+tr("Salon czeka na zatwierdzenie.")+'</b> '+tr("Klienci jeszcze go nie widzą. Zadzwonimy na numer z profilu, żeby go potwierdzić.")+''+((s.phone||"").trim()?"":' <b>'+tr("Uzupełnij numer telefonu w profilu.")+'</b>')+'</div>';
  }
  var pendingAdm="",pushState="unknown";
  function b64ToBytes(b){var p="=".repeat((4-b.length%4)%4),r=(b+p).replace(/-/g,"+").replace(/_/g,"/"),raw=atob(r),o=new Uint8Array(raw.length);for(var i=0;i<raw.length;i++)o[i]=raw.charCodeAt(i);return o}
  async function refreshPush(){
    var st;
    if(!("serviceWorker" in navigator)||!("PushManager" in window)||!("Notification" in window))st="unsupported";
    else if(Notification.permission==="denied")st="denied";
    else{try{var reg=await navigator.serviceWorker.getRegistration();var sub=reg&&await reg.pushManager.getSubscription();st=sub?"on":"off"}catch(e){st="off"}}
    if(st!==pushState){pushState=st;if(isAdmin&&sview.indexOf("adm-")===0&&mode==="salon")render()}
  }
  async function enablePush(){
    var key=(window.FLM_CONFIG&&window.FLM_CONFIG.vapidPublic)||"";
    if(!key){toast(tr("Powiadomienia nie są skonfigurowane."));return}
    try{
      var perm=await Notification.requestPermission();
      if(perm!=="granted"){toast(tr("Brak zgody na powiadomienia."));refreshPush();return}
      var reg=await navigator.serviceWorker.ready;
      var sub=await reg.pushManager.getSubscription();
      if(!sub)sub=await reg.pushManager.subscribe({userVisibleOnly:true,applicationServerKey:b64ToBytes(key)});
      var j=sub.toJSON();
      await window.FLM_ADMIN.savePush({endpoint:j.endpoint,p256dh:j.keys.p256dh,auth:j.keys.auth});
      toast(tr("Powiadomienia włączone na tym telefonie."));
    }catch(e){toast(tr("Nie udało się włączyć powiadomień."))}
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
    try{var reg=await navigator.serviceWorker.getRegistration();await reg.showNotification("Last Minute",{body:tr("Tak będą wyglądać powiadomienia."),icon:"icon-192.png",data:{url:"./"}})}
    catch(e){toast(tr("Nie udało się pokazać powiadomienia."))}
  }
  function pushCardHtml(){
    var msg,btn="";
    if(pushState==="unknown")return "";
    if(pushState==="unsupported")msg=tr("Ta przeglądarka nie obsługuje powiadomień.");
    else if(pushState==="denied")msg=tr("Powiadomienia są zablokowane w ustawieniach przeglądarki.");
    else if(pushState==="on"){msg=tr("Powiadomienia na tym telefonie są włączone.");btn='<button class="btn ghost sm" type="button" id="pushTest">'+tr("Pokaż próbne")+'</button><button class="btn ghost sm" type="button" id="pushOff">'+tr("Wyłącz")+'</button>'}
    else{msg=tr("Włącz powiadomienia o nowych salonach i zgłoszeniach.");btn='<button class="btn sm" type="button" id="pushOn">'+tr("Włącz powiadomienia")+'</button>'}
    return '<div class="note" style="display:flex;flex-wrap:wrap;gap:8px 12px;align-items:center;justify-content:space-between"><span>'+msg+'</span><span class="btn-row">'+btn+'</span></div>';
  }
  async function checkAdmin(){
    if(!curId||adminChecked===curId||!window.FLM_ADMIN)return;
    adminChecked=curId;
    try{
      if(await window.FLM_ADMIN.isAdmin()){
        isAdmin=true;
        if(mode==="salon"){
          sview=(["adm-pend","adm-req","adm-rep","adm-ok"].indexOf(pendingAdm)>=0)?pendingAdm:"adm-pend";
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
      if(sview.indexOf("adm-")===0&&mode==="salon"&&isAdmin)render();
    }catch(e){}
  }
  async function deleteReq(id,accepted){
    try{await window.FLM_ADMIN.deleteRequest(id);adminReq=adminReq.filter(function(x){return x.id!==id});toast(accepted?tr("Zgłoszenie oznaczone jako zatwierdzone."):tr("Zgłoszenie odrzucone."));render()}catch(e){toast(errMsg(e))}
  }
  function slotCount(id){return allSlots().filter(function(x){return x.salonId===id}).length}
  function renderAdmin(v){
    var L=adminLists(),nrep=L.nrep;
    function phone(x){var p=(x.phone||"").trim();return p?'<a class="phone" href="'+esc(telHref(p))+'">'+esc(p)+'</a>':'<b style="color:var(--danger)">'+tr("brak numeru telefonu")+'</b>'}
    function dt(t){return t?new Date(t).toLocaleDateString(lc()):"—"}
    var titles={"adm-pend":[tr("Czekają na zatwierdzenie"),tr("Zatwierdzaj po telefonie kontrolnym.")],
      "adm-req":[tr("Zgłoszenia od klientów"),tr("Salony zgłoszone przez klientów.")],
      "adm-rep":[tr("Zgłoszenia nadużyć"),tr("Salony zgłoszone jako nieprawdziwe.")],
      "adm-ok":[tr("Zatwierdzone salony"),tr("Salony widoczne dla klientów.")]};
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
        return '<div class="card pad" style="margin-bottom:10px"><h3>'+esc(x.name)+' <span class="pill booked">'+tr("Zgłoszenia:")+' '+nrep(x)+'</span></h3><div class="meta">'+esc(x.address?withCity(x.address):tr("brak adresu"))+' · '+(x.approved===false?tr("niezatwierdzony"):tr("zatwierdzony"))+'</div>'+
          '<p style="margin:8px 0">'+tr("Telefon:")+' '+phone(x)+'</p>'+
          '<div class="btn-row">'+((x.phone||"").trim()?'<a class="btn ghost sm" href="'+esc(telHref(x.phone))+'">'+tr("Zadzwoń")+'</a>':'')+'<button class="btn danger sm" type="button" data-ahold="'+esc(x.id)+'">'+tr("Wstrzymaj")+'</button><button class="btn ghost sm" type="button" data-aclr="'+esc(x.id)+'">'+tr("Wyczyść zgłoszenia")+'</button></div></div>';
      }).join(""):'<p class="empty">'+tr("Brak zgłoszeń nadużyć.")+'</p>';
    }else if(sview==="adm-ok"){
      h+=L.ok.length?L.ok.map(function(x){
        var n=nrep(x);
        return '<div class="card pad" style="margin-bottom:10px"><h3>'+esc(x.name)+'</h3><div class="meta">'+esc(x.address?withCity(x.address):tr("brak adresu"))+' · '+tr("terminów:")+' '+slotCount(x.id)+'</div>'+
          '<p style="margin:8px 0">'+tr("Telefon:")+' '+phone(x)+(n?' · <span class="pill booked">'+tr("Zgłoszenia:")+' '+n+'</span>':'')+'</p>'+
          '<div class="btn-row"><button class="btn danger sm" type="button" data-ahold="'+esc(x.id)+'">'+tr("Wstrzymaj")+'</button></div></div>';
      }).join(""):'<p class="empty">'+tr("Brak zatwierdzonych salonów.")+'</p>';
    }else{
      h+=L.pend.length?L.pend.map(function(x){
        var hasP=!!(x.phone||"").trim();
        return '<div class="card pad" style="margin-bottom:10px"><h3>'+esc(x.name)+'</h3><div class="meta">'+esc(x.address?withCity(x.address):tr("brak adresu"))+' · '+tr("założono")+' '+dt(x.createdAt)+' · '+tr("terminów:")+' '+slotCount(x.id)+'</div>'+
          '<p style="margin:8px 0">'+tr("Telefon:")+' '+phone(x)+'</p>'+
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
        curId=u.id;sview="add";
        pruneOld(u.id);
      }
      addState={day:0,calM:0,time:"",to:"",kind:"range",svc:"",promo:""};render();maybeGeo();checkAdmin();openInstallCard();
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
  /* kalendarz w formularzu "Dodaj termin": wybór dnia + dni zamknięte (święta, urlop) */
  function calHtml(s){
    var now=new Date(),cm=addState.calM||0,base=new Date(now.getFullYear(),now.getMonth()+cm,1),y=base.getFullYear(),m=base.getMonth();
    var lead=(base.getDay()+6)%7,len=new Date(y,m+1,0).getDate(),mine={};
    ownSlots().forEach(function(x){if(!isTaken(x)&&!isPast(x))mine[x.date]=(mine[x.date]||0)+1});
    var title=base.toLocaleDateString(lc(),{month:"long",year:"numeric"});title=title.charAt(0).toUpperCase()+title.slice(1);
    var h='<div class="cal"><div class="calhead"><button type="button" class="calnav" data-calnav="-1" aria-label="'+tr("Poprzedni miesiąc")+'"'+(cm<=0?' disabled':'')+'>‹</button><b>'+esc(title)+'</b><button type="button" class="calnav" data-calnav="1" aria-label="'+tr("Następny miesiąc")+'"'+(cm>=CAL_MONTHS-1?' disabled':'')+'>›</button></div><div class="calgrid">';
    for(var w=0;w<7;w++){var wd=new Date(2024,0,1+w).toLocaleDateString(lc(),{weekday:"short"}).replace(".","");h+='<span class="cwd'+(w>=5?' we':'')+'">'+esc(wd.charAt(0).toUpperCase()+wd.slice(1,3))+'</span>'}
    for(var b=0;b<lead;b++)h+='<span class="cd blank"></span>';
    for(var d=1;d<=len;d++){
      var ds=ymd(new Date(y,m,d)),off=offsetOf(ds),hol=holidayName(ds),cl=closedOn(s,ds),cls="cd";
      if(off<0)cls+=" past";if(off===0)cls+=" today";if(off===addState.day)cls+=" sel";if(off>=0&&off<NDAYS)cls+=" win";if(cl)cls+=" closed";else if(hol)cls+=" hol";if(((lead+d-1)%7)>=5)cls+=" we";
      h+='<button type="button" class="'+cls+'" data-cal="'+ds+'"'+(off<0?' disabled':'')+(hol?' title="'+esc(hol)+'"':'')+' aria-pressed="'+(off===addState.day)+'"><span class="dn">'+d+'</span>'+
        (cl?'<span class="dt">'+tr("zamkn.")+'</span>':hol?'<span class="dt">'+tr("święto")+'</span>':mine[ds]?'<span class="dc">'+mine[ds]+'</span>':'')+'</button>';
    }
    return h+'</div><p class="hint">'+tr("Liczba na dniu to Twoje wolne terminy. Dni zamknięte klienci widzą jako nieczynne.")+'</p></div>';
  }
  function renderAdd(v,s){
    var hasSvc=true;
    if(!(addState.day>=0))addState.day=0;
    var selDate=dateOf(addState.day),closed=closedOn(s,selDate),hol=holidayName(selDate),inWin=addState.day<NDAYS;
    var dayInfo='<div class="selday"><b>'+esc(dayDate(addState.day))+'</b>'+(hol?' <span class="tag holtag">'+esc(hol)+'</span>':'')+'</div>';
    var closeBtn='<button class="btn ghost sm" type="button" data-closeday="1">'+(closed?tr("Otwórz ten dzień"):tr("Zamknięte (święto, urlop)"))+'</button>';
    if(closed||!inWin){
      v.innerHTML='<h2>'+tr("Dodaj termin last minute")+'</h2><p class="sub">'+tr("Wybierz dzień w kalendarzu")+'</p><div class="card pad addcard">'+calHtml(s)+dayInfo+
        '<p class="note'+(closed?' warn':'')+'">'+(closed?tr("Salon jest tego dnia zamknięty. Klienci nie zobaczą terminów z tego dnia."):tr("Terminy last minute dodajesz na najbliższe 7 dni. Ten dzień możesz już teraz oznaczyć jako zamknięty."))+'</p><div class="btn-row">'+closeBtn+'</div></div>';
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
    var list=ownSlots().filter(function(x){var o=slotOff(x);return o>=0&&o<NDAYS}).sort(sortSlots),html='<h2>'+tr("Moje terminy")+'</h2><div class="note" id="statsBox" hidden></div><p class="sub">'+tr("Gdy ktoś zarezerwuje termin telefonicznie, kliknij „Zajęty”.")+'</p>';
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
    v.innerHTML='<h2>'+tr("Profil salonu")+'</h2><p class="sub">'+tr("To widzą klienci.")+'</p><div class="list">'+logoBoxHtml(s)+
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
      '<div class="btn-row" style="margin-top:16px"><button class="btn" type="submit">'+tr("Zapisz profil")+'</button><span class="tag" id="dirtyTag" hidden>'+tr("Niezapisane zmiany")+'</span></div></form>'+
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
    var cur=(Array.isArray(s.closedDays)?s.closedDays:[]).filter(function(d){return offsetOf(d)>=0}),closing=cur.indexOf(ds)<0,list,own=[];
    if(closing){
      own=ownSlots().filter(function(x){return x.date===ds&&!isTaken(x)});
      if(own.length&&!window.confirm(tr("Tego dnia masz wolne terminy ({0}). Zostaną usunięte z oferty. Zamknąć dzień?",[own.length])))return;
      list=cur.concat([ds]).sort();
    }else list=cur.filter(function(d){return d!==ds});
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
    el.innerHTML=def+l.map(function(x){return '<div class="srow" style="grid-template-columns:minmax(0,1fr) auto auto"><div class="sv">'+esc(x.name)+'</div><div class="meta price">'+(noPrice(s)?'':'<b>'+priceLabel(x)+'</b>')+'</div><button class="btn danger sm" data-svcdel="'+esc(x.id)+'" type="button">'+tr("Usuń")+'</button></div>'}).join("");
  }
  /* --- anonimowe statystyki: odsłony i kliknięcia "Zadzwoń" (zliczane raz na wejście do aplikacji, nic nie zapisujemy na urządzeniu) --- */
  var viewTracked=false,callTracked={},statsCache=null;
  function trackView(){if(viewTracked)return;viewTracked=true;try{if(window.FLM_STATS)window.FLM_STATS.view()}catch(e){}}
  function trackCall(id){if(!id||callTracked[id])return;callTracked[id]=true;try{if(window.FLM_STATS)window.FLM_STATS.call(id)}catch(e){}}
  function statsHtml(rows){
    var t=dateOf(0),w=dateOf(-6),a=0,b=0,c=0;
    rows.forEach(function(r){var n=r.count||0;c+=n;if(r.day>=w)b+=n;if(r.day===t)a+=n});
    return '<b>'+tr("Kliknięcia „Zadzwoń” przy Twoim salonie:")+'</b> '+tr("dziś")+' '+a+' · '+tr("ostatnie 7 dni")+' '+b+' · '+tr("ostatnie 30 dni")+' '+c;
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
    var hint=installOpen?installCardHtml()
      :(mode==="salon"?'<p class="hint">'+tr("Dodaj aplikację do ekranu głównego, żeby łatwo ją znaleźć.")+' <button class="link" type="button" id="shareBtn">'+tr("Wyślij sobie link")+'</button></p>'
        :'<p class="hint">'+tr("Dodaj aplikację do ekranu głównego, żeby wracać tu jednym stuknięciem.")+'</p>');
    return '<div class="addhome" id="addhome"><button class="btn ghost" type="button" id="addHome">'+ic('<rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/>')+tr("Dodaj do ekranu głównego")+'</button>'+hint+'</div>';
  }
  document.addEventListener("visibilitychange",function(){
    if(!document.hidden&&callPending){callPending=false;setTimeout(showInstallCard,500)}
  });
  function setDirty(v){profDirty=!!v;var t=$("dirtyTag");if(t)t.hidden=!profDirty}
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
    var s=salons[curId],n=$("pn").value.trim();
    if(!n){toast(tr("Nazwa salonu nie może być pusta.")+(opts.auto?tr(" Profil nie został zapisany."):""));return false}
    var cats=readCats("pc_");
    if(!cats.length){toast(tr("Wybierz co najmniej jeden rodzaj usług.")+(opts.auto?tr(" Profil nie został zapisany."):""));return false}
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
      if(upd.nameKey!==s.nameKey){
        var f=await db.collection("salons").where("nameKey","==",upd.nameKey).limit(1).get();
        if(!f.empty&&f.docs[0].id!==curId){toast(tr("Salon o takiej nazwie już istnieje."));return false}
      }
      await db.doc("salons/"+curId).update(upd);
      salons[curId]=Object.assign({},s,upd);
      setDirty(false);
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
    if((b=t.closest("[data-call]"))){trackCall(b.dataset.call);callPending=true}
    if((b=t.closest("[data-lang]"))){var nl=b.dataset.lang;if(nl!==LANG&&(nl==="pl"||nl==="en"))guardLeave(function(){setLang(nl)});return}
    if(t.closest("#addHome")){showInstallCard(true);return}
    if(t.closest("#instNo")){hideInstallCard();return}
    if(t.closest("#instGo")){var ip=deferredInstall;deferredInstall=null;if(ip){try{ip.prompt()}catch(x){}}installOpen=false;refreshAddHome();return}
    if((b=t.closest("[data-aok]"))){setApproved(b.dataset.aok,true);return}
    if((b=t.closest("[data-arej]"))){if(window.confirm(tr("Odrzucić ten salon? Jego profil i terminy zostaną usunięte. Konto logowania usuniesz w Supabase (Authentication → Users).")))rejectSalon(b.dataset.arej);return}
    if((b=t.closest("[data-ahold]"))){if(window.confirm(tr("Wstrzymać ten salon? Zniknie z listy klientów.")))setApproved(b.dataset.ahold,false);return}
    if((b=t.closest("[data-aclr]"))){clearReports(b.dataset.aclr);return}
    if((b=t.closest("[data-report]"))){reportSalon(b.dataset.report);return}
    if((b=t.closest("[data-mode]"))){var nm=b.dataset.mode;guardLeave(function(){mode=nm;render()});return}
    if((b=t.closest("[data-cday]"))){dayF=b.dataset.cday;render();return}
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
    if(t.closest("#pitchBtn,#emptyPitch")){
      pitchOpen=!pitchOpen;if(pitchOpen)contactOpen=false;render();
      if(pitchOpen){var pb=document.getElementById("pitchbox");if(pb&&pb.scrollIntoView)pb.scrollIntoView({block:"center"})}
      return;
    }
    if(t.closest("#closePitch")){pitchOpen=false;render();return}
    if(t.closest("#shareBtn")){shareApp();return}
    if(t.id==="logout"){guardLeave(function(){curId=null;editState=null;geoTried=false;isAdmin=false;adminChecked=null;adminReports={};adminReq=[];adminRepT=0;restoreId=null;loginMode="login";loginInfo="";if(window.FLM_AUTH)window.FLM_AUTH.signOut();render()});return}
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
    if(id==="logoIn"){var lf=e.target.files&&e.target.files[0];e.target.value="";uploadLogo(lf);return}
    if(id&&id.indexOf("hc")===0&&/^hc\d$/.test(id)){var i=id.slice(2);$("hf"+i).disabled=e.target.checked;$("ht"+i).disabled=e.target.checked;hrsFollow(id)}
    else if(id&&/^h[ft]\d$/.test(id))hrsFollow(id);
  });
  document.addEventListener("input",function(e){
    var id=e.target.id;
    if(e.target.closest&&e.target.closest("#profForm")&&!profDirty)setDirty(true);
    if(id&&/^h[ft]\d$/.test(id))hrsFollow(id);
    if(id==="spm"){var w0=$("spw");if(w0)w0.hidden=e.target.value==="ask";return}
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
/* --- motyw jasny / ciemny --- */
(function(){
  var root=document.documentElement,btn=document.getElementById("themeBtn"),meta=document.getElementById("themeColor");
  var sun='<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>';
  var moon='<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"/></svg>';
  function paint(){
    var dark=root.getAttribute("data-theme")==="dark";
    if(btn)btn.innerHTML=dark?sun+" "+window.FLM_T("Jasny"):moon+" "+window.FLM_T("Ciemny");
    if(meta)meta.setAttribute("content",dark?"#16130F":"#F6F2EC");
  }
  if(btn)btn.addEventListener("click",function(){
    var dark=root.getAttribute("data-theme")==="dark";
    if(dark)root.removeAttribute("data-theme");else root.setAttribute("data-theme","dark");
    try{localStorage.setItem("flm_theme",dark?"light":"dark")}catch(e){}
    paint();
  });
  window.FLM_PAINT_THEME=paint;
  paint();
})();
