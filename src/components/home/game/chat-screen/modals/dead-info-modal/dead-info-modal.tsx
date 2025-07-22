import React from 'react'
import { View } from 'react-native'

import { GameModal, GradientText, SecondaryButton, Text } from '@/components/ui'

import { styles } from './dead-info-modal.style'

interface Props {
  nameOfDeadCharacter: string
  onClose: () => void
}

export default function DeadInfoModal({ onClose, nameOfDeadCharacter }: Props) {
  const renderHeader = () => (
    <>
      <GradientText quintessential>Warning!</GradientText>
    </>
  )

  const renderBody = () => (
    <View style={styles.body}>
      <Text>Unfortunately {nameOfDeadCharacter} was badly wounded and was found dead</Text>
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
