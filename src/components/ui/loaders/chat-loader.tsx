import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Text } from 'react-native'

import { colors } from '@/constants'

const DOTS = ['.', '..', '...']

export const ChatLoader = () => {
  const [dotIndex, setDotIndex] = useState(0)
  const { t } = useTranslation()

  useEffect(() => {
    const interval = setInterval(() => {
      setDotIndex(prev => (prev + 1) % DOTS.length)
    }, 500)

    return () => clearInterval(interval)
  }, [])

  return (
    <Text style={{ fontSize: 16, color: colors.gradientMetal4[0] }}>
      {t('game.chat.typing')} {DOTS[dotIndex]}
    </Text>
  )
}
