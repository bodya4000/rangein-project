import i18n from 'i18next'
import { useCallback, useEffect, useState } from 'react'
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
  const [language, setLanguageState] = useState<Language>(() => {
    return (storage.getItem(STORAGE_KEYS.LANG) as Language) || 'en'
  })

  const setLanguage = useCallback(async (lang: Language) => {
    const storedLang = storage.getItem(STORAGE_KEYS.LANG)

    if (storedLang !== lang) {
      await i18n.changeLanguage(lang)
      storage.setItem(STORAGE_KEYS.LANG, lang)
      setLanguageState(lang)
    }
  }, [])

  useEffect(() => {
    const stored = storage.getItem(STORAGE_KEYS.LANG)
    if (stored && stored !== language) {
      setLanguageState(stored as Language)
    }
  }, [])

  return { language, setLanguage }
}

export default i18n
