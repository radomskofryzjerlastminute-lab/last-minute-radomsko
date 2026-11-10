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
  /* Kontakt do administratora (pokazuje się w informacji o prywatności), np. "kontakt@twojadomena.pl" lub numer telefonu. */
  contact: ""
};
