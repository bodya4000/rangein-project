import i18n from 'i18next'
import { useCallback, useEffect, useState } from 'react'
import { initReactI18next } from 'react-i18next'

import { STORAGE_KEYS } from '@/constants'
import { storage } from '@/store'

import { Language, resources } from './resources'

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  compatibilityJSON: 'v4',

  interpolation: {
    escapeValue: false,
  },
})

storage.getItem('lang').then(storedLang => {
  if (storedLang) {
    i18n.changeLanguage(storedLang)
  }
})

i18n.on('languageChanged', (lng: Language) => {
  storage.setItem(STORAGE_KEYS.LANG, lng)
})

export const useSelectedLanguage = () => {
  const [language, setLanguageState] = useState<Language>('en')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadLanguage = async () => {
      const stored = await storage.getItem(STORAGE_KEYS.LANG)
      if (stored) {
        setLanguageState(stored as Language)
        i18n.changeLanguage(stored)
      }
      setLoading(false)
    }
    loadLanguage()
  }, [])

  const setLanguage = useCallback(async (lang: Language) => {
    i18n.changeLanguage(lang)
    storage.setItem(STORAGE_KEYS.LANG, lang)
    setLanguageState(lang)
  }, [])

  return { language, setLanguage, loading }
}
export default i18n
