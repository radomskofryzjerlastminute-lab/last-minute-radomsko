# Last Minute Radomsko – wolne terminy: uroda i zdrowie

Aplikacja internetowa (PWA) z wolnymi terminami salonów i gabinetów z Radomska i okolic.
Adres: **https://radomskolastminute.pl**

Salony wpisują wolne okienka w grafiku, a klienci widzą je od razu na telefonie. Klient może zadzwonić, napisać SMS albo zarezerwować termin w aplikacji. Za wizytę płaci w salonie. Aplikacja jest bezpłatna dla klientów i salonów.

## Co potrafi

**Dla klientów**
- lista wolnych terminów na 7 dni, od najbliższych, z filtrem dni i rodzaju usług;
- strony usług: Fryzjer (z barberem), Uroda (kosmetyka, paznokcie, brwi i rzęsy), Masaż, Stomatolog;
- „Zadzwoń” i „SMS” jednym dotknięciem;
- rezerwacja w aplikacji na pseudonim i hasło, bez telefonu i e-maila;
- wiadomości do salonu przy rezerwacji;
- powiadomienia o nowych terminach (wybrany salon albo rodzaje usług);
- kod QR salonu: po zeskanowaniu widać tylko ten salon;
- krótki film powitalny dla każdej branży, pokazywany raz;
- wygląd do wyboru: jasny lub ciemny, kolor, styl, zdjęcie albo film w nagłówku;
- wersja polska i angielska, działanie offline, instalacja na ekranie głównym.

**Dla salonów**
- konto na login i hasło, zatwierdzane przez administratora (zwykle w ciągu jednego dnia);
- profil: adres, telefon, godziny, dni wolne, cennik, logo, zdjęcia;
- dodawanie wolnych terminów i „wolnych godzin” (klient wybiera usługę z cennika);
- przyjmowanie rezerwacji, wiadomości z klientem i blokowanie klientów;
- własny link i kod QR do druku;
- statystyki kliknięć „Zadzwoń” i „SMS” oraz przypomnienia o dodawaniu terminów.

## Jak to jest zbudowane

- **Strona:** statyczne pliki HTML, CSS i JavaScript, hostowane na GitHub Pages (własna domena w pliku `CNAME`).
- **Dane i logowanie:** [Supabase](https://supabase.com) (baza PostgreSQL z zabezpieczeniem dostępu na poziomie wierszy, logowanie, zaplanowane zadania i funkcja wysyłająca powiadomienia).
- **Powiadomienia:** Web Push (standard przeglądarek).
- **Offline:** service worker (`sw.js`): najpierw sieć, a bez internetu kopia z pamięci.

Aplikacja nie używa reklamowych cookies ani zewnętrznej analityki.

## Najważniejsze pliki

| Plik | Do czego służy |
|---|---|
| `index.html` | szkielet strony, informacja o prywatności i zasady korzystania |
| `app.js` | cała logika aplikacji (klient, salon, rezerwacje, czat, wygląd, pomoc, tłumaczenia) |
| `style.css` | wygląd |
| `supabase-db.js` | połączenie z bazą Supabase |
| `config.js` | adres projektu Supabase, klucz publiczny i dane administratora |
| `sw.js` | praca offline; numer `CACHE` podbija się przy każdej zmianie plików |
| `manifest.webmanifest`, `ikona-*` | instalacja na telefonie i ikony |
| `foto-*.jpg` | zdjęcia w nagłówkach (`-m` = mniejsza wersja) |
| `film-*.mp4` | filmy: `film-intro-*` = powitalne (pion), `film-<branża>` i `film-naglowek` = nagłówki |
| `supabase.js`, `qrcode.js` | biblioteki zewnętrzne (licencje w plikach) |

Klucz w `config.js` jest kluczem **publicznym**. Bez zalogowania daje tylko to, na co pozwalają zasady bazy, więc może być w repozytorium. Klucze prywatne i hasła nigdy nie trafiają do tego repozytorium.

## Aktualizacja aplikacji

1. Wgraj zmienione pliki przez GitHub („Add file” → „Upload files”).
2. GitHub Pages opublikuje je w ciągu 1–2 minut.
3. Telefony pobiorą nową wersję same przy ponownym otwarciu aplikacji (czasem trzeba otworzyć ją dwa razy).

**Nie zmieniaj** pola `loginDomain` w `config.js` i **nie usuwaj** pliku `CNAME`.

## Autor

Projekt: Last Minute Radomsko, Radomsko.
Kontakt: zobacz „Informacja o prywatności i zasady korzystania” na dole aplikacji.
