/* Połączenie z bazą Supabase.
 * url: adres projektu (Project URL), np. https://abcdefghijkl.supabase.co
 * key: klucz publiczny "Publishable key" (dawniej "anon key"). Jest przeznaczony do wstawienia w aplikacji.
 * NIGDY nie wklejaj tu klucza "secret" ani "service_role". */
window.FLM_CONFIG = {
  url: "https://mqocnmjzvysidskgoxrn.supabase.co",
  key: "sb_publishable_evKfPLuliY64gf7bnxFNXw_PtV1FUQr",
  /* Salony logują się loginem. W tle aplikacja zamienia go na techniczny adres login@loginDomain.
   * Ta domena NIE służy do wysyłania poczty i NIE WOLNO jej zmieniać po założeniu kont (konta przestałyby działać). */
  loginDomain: "radomskofryzjerlastminute-lab.github.io",
  /* Administrator danych (pokazuje się w informacji o prywatności; puste = sekcja ukryta).
   * adminName: imię i nazwisko lub nazwa firmy; adminContact: e-mail lub telefon do spraw danych osobowych. */
  adminName: "",
  adminContact: "",
  /* Klucz publiczny powiadomień (VAPID). Jest publiczny z założenia. Klucza PRYWATNEGO nigdy tu nie wklejaj. */
  vapidPublic: "BNEQXcaaX2ybGht_Ewu8vrIELKvEEvpQLGLcpEUwy_kzFkiTY1xN_ph1ias2WPuarqlN_pFDkzIT9CA1mmRrthI"
};
