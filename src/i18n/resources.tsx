import en from '@/i18n/translations/en.json'
import ru from '@/i18n/translations/ru.json'
import zh from '@/i18n/translations/zh.json'

export const resources = {
  en: {
    translation: en,
  },
  ru: {
    translation: ru,
  },
  zh: {
    translation: zh,
  },
}

export type Language = keyof typeof resources
