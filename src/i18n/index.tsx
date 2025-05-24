import i18n from 'i18next'
import { useCallback } from 'react'
import { initReactI18next } from 'react-i18next'

import { STORAGE_KEYS } from '@/constants'
import { storage } from '@/store'

import { Language, resources } from './resources'

i18n.use(initReactI18next).init({
  resources,
  lng: storage.getItem(STORAGE_KEYS.LANG) ?? 'en',
  fallbackLng: 'en',
  compatibilityJSON: 'v4',

  interpolation: {
    escapeValue: false,
  },
})

i18n.on('languageChanged', (lng: Language) => {
  storage.setItem(STORAGE_KEYS.LANG, lng)
})

export const useSelectedLanguage = () => {
  const currentLanguage = storage.getItem(STORAGE_KEYS.LANG) ?? 'en'

  const setLanguage = useCallback(async (lang: Language) => {
    const storedLang = storage.getItem(STORAGE_KEYS.LANG)
    if (storedLang !== lang) {
      await i18n.changeLanguage(lang)
    }
  }, [])

  return { language: currentLanguage as Language, setLanguage }
}

export default i18n
