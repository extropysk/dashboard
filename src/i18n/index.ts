import { en } from "@/i18n/en"
import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import LanguageDetector from "i18next-browser-languagedetector"

const resources = {
  en,
}

// eslint-disable-next-line @typescript-eslint/no-floating-promises
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    supportedLngs: ["en"],
    fallbackLng: "en",
    defaultNS: "general",
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n
