import { t } from 'i18next'
import { z } from 'zod'

import { Sex } from '@/types'

export const registerFormSchema = z.object({
  username: z.string().min(1, t('auth.register.usernameRequired')),
  sex: z.nativeEnum(Sex, {
    error: t('auth.register.sexRequired'),
  }),
  age: z
    .number({
      error: t('auth.register.ageMustBeNumber'),
    })
    .int(t('auth.register.ageMustBeInteger'))
    .max(100, t('auth.register.ageTooHigh'))
    .min(1, t('auth.register.ageTooLow')),
})
