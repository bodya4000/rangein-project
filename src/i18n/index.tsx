import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { I18nManager } from 'react-native'

import { STORAGE_KEYS } from '@/constants'
import { Language, resources } from '@/i18n/resources'
import { storage } from '@/store'

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  compatibilityJSON: 'v4',

  interpolation: {
    escapeValue: false,
  },
})

i18n.on('languageChanged', (lng: Language) => {
  return storage.setItem(STORAGE_KEYS.LANG, lng)
})

export const isRTL: boolean = i18n.dir() === 'rtl'

I18nManager.allowRTL(isRTL)
I18nManager.forceRTL(isRTL)

export default i18n
