import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'

import translationEN from '@/locales/en/translation.json'
import translationES from '@/locales/es/translation.json'

const resources = {
  en: {
    translation: translationEN
  },
  es: {
    translation: translationES
  }
}

i18next.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en'
})

export default i18next
