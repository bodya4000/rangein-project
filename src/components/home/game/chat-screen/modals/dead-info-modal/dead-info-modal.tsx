import React from 'react'
import { useTranslation } from 'react-i18next'
import { View } from 'react-native'

import { GameModal, GradientText, Text } from '@/components/ui'
import { colors } from '@/constants'

import { styles } from './dead-info-modal.style'

interface Props {
  nameOfDeadCharacter: string
  onClose: () => void
}

export default function DeadInfoModal({ onClose, nameOfDeadCharacter }: Props) {
  const { t } = useTranslation()
  return (
    <GameModal onClose={onClose}>
      <GradientText tx='actions.warning' quintessential />
      <View style={styles.body}>
        <Text color={colors.grey} txStyle='IM16'>
          {t('game.chat.deadInfoPart1')} <Text>{nameOfDeadCharacter}</Text>
          {t('game.chat.deadInfoPart2')}
        </Text>
      </View>
    </GameModal>
  )
}
