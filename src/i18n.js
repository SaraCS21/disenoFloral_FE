import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpBackend from "i18next-http-backend";

i18n
  .use(HttpBackend) // Carga traducciones desde archivos
  .use(LanguageDetector) // Detecta el idioma automáticamente
  .use(initReactI18next) // Integra i18next con React
  .init({
    lng: "es", // Idioma predeterminado
    fallbackLng: "es", // Idioma predeterminado
    debug: true, // Activa logs para desarrollo
    interpolation: {
      escapeValue: false, // React ya escapa valores por defecto
    },
    backend: {
      loadPath: "/local/{{lng}}/translation.json", // Ruta de los archivos de traducción
    },
  });

export default i18n;
