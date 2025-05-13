/* eslint-disable no-unused-vars */
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import i18n from '@/i18n'
import { Language } from '@/i18n/resources'

import { zustandStorage as storage } from './storage'

interface ILangState {
  lang: Language
  setLang: (lang: Language) => void
}

export const useLang = create<ILangState>()(
  persist(
    (set, _) => ({
      lang: i18n.language as Language,
      setLang: lang => set({ lang }),
    }),
    {
      name: 'lang-storage',
      storage,
      partialize: state => ({ lang: state.lang }),
    },
  ),
)
