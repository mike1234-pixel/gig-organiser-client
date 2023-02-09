import i18n from "i18next";
import english from "./translations/english"
import french from "./translations/french"
import german from "./translations/german";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: english
  },
  fr: {
    translation: french
  },
  de: {
    translation: german
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en",
    interpolation: {
      escapeValue: false, // react already safe from xss
    },
  });

export default i18n;
