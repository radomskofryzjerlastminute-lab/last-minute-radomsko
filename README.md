# Fryzjer Last Minute Radomsko (wersja ze wspólną bazą Supabase)

Klient przegląda wolne terminy last minute (z odległością od siebie) i dzwoni do salonu. Salon loguje się, dodaje termin i oznacza go jako **Zajęty**, gdy ktoś zarezerwuje telefonicznie. Aplikacja nie zbiera danych klientów.

## Uruchomienie (jednorazowo, ok. 10 minut)

### 1. Utwórz tabele w Supabase
1. W projekcie Supabase otwórz **SQL Editor → New query**.
2. Wklej całą zawartość pliku `supabase-schema.sql` i kliknij **Run**. Powinno pojawić się "Success".

### 2. Wpisz klucz w config.js
1. W Supabase wejdź w **Project Settings → API Keys** (albo przycisk **Connect** u góry).
2. Skopiuj **Publishable key** (zaczyna się od `sb_publishable_`; w starszych projektach to klucz **anon**). Ten klucz jest przeznaczony do aplikacji.
3. Otwórz `config.js` i zamiast `WKLEJ_TUTAJ_PUBLISHABLE_KEY` wklej ten klucz. Adres projektu jest już wpisany.
4. **Nie wklejaj klucza "secret" ani "service_role".** Dają pełny dostęp do bazy.

### 3. Ustawienia logowania (Authentication)
- **Authentication → Providers → Email**: na czas testów wyłącz **Confirm email**, wtedy salon loguje się od razu po założeniu konta. Gdy zostawisz włączone, salon dostanie e-mail z linkiem do potwierdzenia.
- **Authentication → URL Configuration**: w polu **Site URL** wpisz adres strony z GitHub Pages (po kroku 4).

### 4. Wgraj pliki na GitHub Pages
1. Na github.com utwórz publiczne repozytorium, np. `last-minute-radomsko`.
2. Wgraj **wszystkie pliki z tego folderu** (`index.html` musi być na samej górze repozytorium).
3. **Settings → Pages**: Branch `main`, folder `/ (root)`, **Save**. Po 1–2 minutach dostaniesz adres `https://TWOJ-LOGIN.github.io/last-minute-radomsko/`.
4. Na telefonie: iPhone (Safari) Udostępnij → *Do ekranu początkowego*; Android (Chrome) menu ⋮ → *Zainstaluj aplikację*.

## Test
1. Otwórz stronę → **Dla salonów → Załóż konto** (nazwa, e-mail, hasło).
2. W profilu uzupełnij adres, telefon, godziny i cennik. Dodaj termin w zakładce **Dodaj termin**.
3. Na drugim urządzeniu (lub w innej przeglądarce) otwórz stronę jako klient: termin jest widoczny od razu, razem z przyciskiem **Zadzwoń**.
4. W panelu salonu kliknij **Zajęty**: termin znika u klienta.

## Bezpieczeństwo
- Klienci mają tylko odczyt. Zapisywać może wyłącznie zalogowany salon i tylko swoje dane (reguły RLS w `supabase-schema.sql`).
- Hasła są obsługiwane przez Supabase Auth, aplikacja ich nie przechowuje.
- Numer telefonu salonu jest publiczny, bo klienci mają pod niego dzwonić.

## Co jeszcze brakuje do pełnego uruchomienia
- Odzyskiwanie zapomnianego hasła (w Supabase można je na razie wysłać ręcznie: Authentication → Users).
- Własna domena i polityka prywatności (dane e-mail salonów to dane osobowe).
- Powiadomienia i dopracowanie pod pierwsze salony po pilotażu.

## Pliki
`index.html`, `style.css`, `app.js` (aplikacja), `config.js` (adres i klucz), `supabase-db.js` (połączenie z bazą i logowanie), `supabase-schema.sql` (tabele i zabezpieczenia), `manifest.webmanifest`, `sw.js`, ikony (instalacja na telefonie).
