import React from 'react'
import { useTranslation } from 'react-i18next'
import { Text } from 'react-native'

import { colors } from '@/constants'

export const ChatLoader = () => {
  const { t } = useTranslation()

  return (
    <Text style={{ fontSize: 16, color: colors.gradientMetal4[0] }}>
      {t('game.chat.typing')} ...
    </Text>
  )
}
