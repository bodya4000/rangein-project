import React from 'react'
import { View } from 'react-native'

import { TxKeyPath } from '@/i18n/react-i18next'

import { styles } from './header.style'
import { BackButton } from '../../buttons/back-button/back-button'
import { GradientText } from '../../text/gradient-text'

interface Props {
  txTitle: TxKeyPath
}

export default function Header({ txTitle }: Props) {
  return (
    <View style={styles.container}>
      <BackButton containerStyle={styles.back} />
      <GradientText txStyle='IR16' tx={txTitle} style={styles.title} />
    </View>
  )
}
