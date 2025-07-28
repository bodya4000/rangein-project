import React from 'react'
import { useTranslation } from 'react-i18next'
import { View } from 'react-native'

import { GameModal, GradientText, SecondaryButton, Text } from '@/components/ui'
import { colors } from '@/constants'

import { styles } from './dead-info-modal.style'

interface Props {
  nameOfDeadCharacter: string
  onClose: () => void
}

export default function DeadInfoModal({ onClose, nameOfDeadCharacter }: Props) {
  const { t } = useTranslation()
  const renderHeader = () => (
    <>
      <GradientText tx='actions.warning' quintessential />
    </>
  )

  const renderBody = () => (
    <View style={styles.body}>
      {/* <Text tx='game.chat.deadInfoPart1' /> */}

      <Text color={colors.grey} txStyle='IM16'>
        {t('game.chat.deadInfoPart1')} <Text>{nameOfDeadCharacter}</Text>
        {t('game.chat.deadInfoPart2')}
      </Text>
      {/* <Text tx='game.chat.deadInfoPart2' /> */}
    </View>
  )

  const renderFooter = () => <SecondaryButton title='Got it!' onPress={onClose} />

  return (
    <GameModal
      onClose={onClose}
      renderHeader={renderHeader}
      renderBody={renderBody}
      renderFooter={renderFooter}
    />
  )
}
