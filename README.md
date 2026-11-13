# Fryzjer Last Minute Radomsko (wersja ze wspólną bazą Supabase)

Klient przegląda wolne terminy last minute (z odległością od siebie) i dzwoni do salonu. Salon loguje się, dodaje termin i oznacza go jako **Zajęty**, gdy ktoś zarezerwuje telefonicznie. Aplikacja nie zbiera danych klientów.

## Uruchomienie (jednorazowo, ok. 10 minut)

### 1. Utwórz tabele w Supabase
1. W projekcie Supabase otwórz **SQL Editor → New query**.
2. Wklej całą zawartość pliku `supabase-schema.sql` i kliknij **Run**. Powinno pojawić się "Success".

### 2. Wpisz klucz w config.js
1. W Supabase wejdź w **Project Settings → API Keys** (albo przycisk **Connect** u góry).
2. Skopiuj **Publishable key** (zaczyna się od `sb_publishable_`; w starszych projektach to klucz **anon**). Ten klucz jest przeznaczony do aplikacji.
3. Otwórz `config.js`: w polu `key` wklej ten klucz, a w polu `url` wpisz **Project URL** (przycisk **Connect** u góry albo Project Settings → General), np. `https://abcdefghijkl.supabase.co`.
4. **Nie wklejaj klucza "secret" ani "service_role".** Dają pełny dostęp do bazy.

### 3. Ustawienia logowania (Authentication)
- **Authentication → Providers → Email**: **Confirm email** musi być wyłączone. Salony logują się loginem (w tle aplikacja zamienia go na techniczny adres w domenie `loginDomain` z `config.js`), a aplikacja nie wysyła żadnych e-maili. Nie zmieniaj `loginDomain` po założeniu kont.
- **Authentication → URL Configuration**: w polu **Site URL** wpisz adres strony z GitHub Pages (po kroku 4).

### 4. Wgraj pliki na GitHub Pages
1. Na github.com utwórz publiczne repozytorium, np. `last-minute-radomsko`.
2. Wgraj **wszystkie pliki z tego folderu** (`index.html` musi być na samej górze repozytorium).
3. **Settings → Pages**: Branch `main`, folder `/ (root)`, **Save**. Po 1–2 minutach dostaniesz adres `https://TWOJ-LOGIN.github.io/last-minute-radomsko/`.
4. Na telefonie: iPhone (Safari) Udostępnij → *Do ekranu początkowego*; Android (Chrome) menu ⋮ → *Zainstaluj aplikację*.

## Test
1. Otwórz stronę → **Dla salonów → Załóż konto** (nazwa, login, hasło).
2. W profilu uzupełnij adres (ulica i numer), telefon, godziny i cennik. Położenie salonu aplikacja ustala sama z adresu. Dodaj termin w zakładce **Dodaj termin**.
3. Na drugim urządzeniu (lub w innej przeglądarce) otwórz stronę jako klient: termin jest widoczny od razu, razem z przyciskiem **Zadzwoń**.
4. W panelu salonu kliknij **Zajęty**: termin znika u klienta.

## Wolne godziny (zakres bez usługi i ceny)
- W zakładce „Dodaj termin” salon wybiera **Wolne godziny** (domyślnie) albo **Konkretna usługa**. Wolne godziny to zakres „od–do” (do 8 godzin) bez usługi i bez ceny; klient dzwoni i ustala szczegóły z salonem.
- Taki termin znika z oferty dopiero po godzinie „do”, a salon może go edytować, oznaczyć jako zajęty lub usunąć.
- Technicznie to termin z pustą usługą i trybem ceny „ustalana w salonie”, więc wymaga wcześniejszego uruchomienia `supabase-migracja-ceny.sql`.

## Statystyki (odsłony i kliknięcia „Zadzwoń”)
- Jednorazowo uruchom `supabase-statystyki.sql` w Supabase (SQL Editor). Bez tego liczniki po prostu nie działają, a reszta aplikacji działa normalnie.
- Zapisywane są tylko sumy dzienne: wejścia do aplikacji (raz na otwarcie) oraz kliknięcia „Zadzwoń” przy salonie (raz na salon na otwarcie). Nic nie jest zapisywane na urządzeniu użytkownika.
- Salon widzi liczbę kliknięć przy swoim salonie na górze zakładki „Moje terminy”.
- Podgląd dla administratora: w Supabase, SQL Editor:
  - odsłony: `select day, count from views_daily order by day desc limit 30;`
  - kliknięcia wg salonu: `select s.name, sum(c.count) filter (where c.day >= current_date - 6) as "7 dni", sum(c.count) as "30 dni" from calls_daily c join salons s on s.id = c.salon_id where c.day >= current_date - 29 group by s.name order by 3 desc;`
- Liczby są orientacyjne: odświeżenie strony liczy się jako nowe wejście, a każdy, kto zna publiczny klucz, mógłby sztucznie zawyżać liczniki.

## Ceny usług (trzy opcje)
- Przy dodawaniu usługi w profilu salon wybiera: **Dokładna cena**, **Od … zł** albo **Ustalana w salonie** (bez kwoty).
- Przy usłudze bez ceny salon może podać **zniżkę procentową** (np. −30%) zamiast ceny promocyjnej.
- Wymaga jednorazowego uruchomienia `supabase-migracja-ceny.sql` w Supabase (SQL Editor) PRZED wgraniem nowej wersji aplikacji. Nowa instalacja używa już `supabase-schema.sql` z tymi kolumnami.

## Zachęta do dodania salonu
- Na dole widoku klienta jest sekcja „Nie ma Twojego fryzjera na liście?”. „Pokaż salonowi” otwiera ekran dla właściciela salonu (krótki opis, 3 kroki i kod QR z `kod-qr.svg`), „Wyślij link” udostępnia adres aplikacji. Jeśli adres strony się zmieni, wygeneruj kod QR od nowa i podmień `kod-qr.svg`.
- „Zgłoś salon nam” rozwija okno kontaktu; dane z pola `contact` w `config.js` pokazują się dopiero po zaznaczeniu „Nie jestem robotem” i kliknięciu „Odkryj dane”.
- To prosta ochrona przed zbieraniem kontaktu przez proste skrypty, nie pełna weryfikacja. Nie używamy Google reCAPTCHA, żeby nie przekazywać danych odwiedzających do Google.

## Lokalizacja i odległość
- Klient widzi odległość od swojej lokalizacji (przeglądarka pyta o zgodę, położenie nie jest nigdzie zapisywane).
- Adres wpisuj w formie „ulica numer, miejscowość”, np. „Główna 5, Gomunice” (bez miejscowości przyjmujemy Radomsko). Obsługiwane są salony do ok. 40 km od Radomska. Położenie salonu jest ustalane z jego adresu przy zapisie profilu (usługa Nominatim, dane © współtwórcy OpenStreetMap). Gdy adresu nie da się znaleźć, odległość tego salonu nie jest pokazywana.
- Terminy na liście klienta są zawsze ułożone od najbliższych.

## Bezpieczeństwo
- Klienci mają tylko odczyt. Zapisywać może wyłącznie zalogowany salon i tylko swoje dane (reguły RLS w `supabase-schema.sql`).
- Hasła są obsługiwane przez Supabase Auth, aplikacja ich nie przechowuje.
- Numer telefonu salonu jest publiczny, bo klienci mają pod niego dzwonić.

## Co jeszcze brakuje do pełnego uruchomienia
- Odzyskiwanie zapomnianego hasła (wymaga własnego serwera pocztowego SMTP w Supabase; do tego czasu można usunąć konto w Authentication → Users, a salon założy je od nowa).
- Własna domena. W `config.js` uzupełnij pole `contact` (kontakt do administratora w informacji o prywatności) i poproś kogoś kompetentnego o przejrzenie tekstu informacji o prywatności.
- Powiadomienia i dopracowanie pod pierwsze salony po pilotażu.

## Pliki
`index.html`, `style.css`, `app.js` (aplikacja), `config.js` (adres i klucz), `supabase-db.js` (połączenie z bazą i logowanie), `supabase-schema.sql` (tabele i zabezpieczenia), `manifest.webmanifest`, `sw.js`, ikony (instalacja na telefonie).
