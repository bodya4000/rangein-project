import React from 'react'
import { StatusBar, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { TxKeyPath } from '@/i18n/react-i18next'

import { styles } from './header.style'
import { BackButton } from '../../buttons/back-button/back-button'
import { GradientText } from '../../text/gradient-text'

interface Props {
  txTitle: TxKeyPath
  back?: boolean
}

export default function Header({ txTitle, back = true }: Props) {
  const { top } = useSafeAreaInsets()
  return (
    <View style={[styles.container, { paddingTop: top || StatusBar.currentHeight }]}>
      <View style={[styles.back, { paddingTop: top || StatusBar.currentHeight }]}>
        {back && <BackButton />}
      </View>
      <GradientText txStyle='IR24' tx={txTitle} style={styles.title} />
    </View>
  )
}