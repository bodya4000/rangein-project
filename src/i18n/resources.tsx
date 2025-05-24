import en from '@/i18n/translations/en.json'
import ru from '@/i18n/translations/ru.json'

export const resources = {
  en: {
    translation: en,
  },
  ru: {
    translation: ru,
  },
}

export type Language = keyof typeof resources
