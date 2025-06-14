import { BlurView } from 'expo-blur'
import React from 'react'
import { StatusBar, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { TxKeyPath } from '@/i18n/react-i18next'

import { styles } from './blured-header.style'
import { BackButton } from '../../buttons/back-button/back-button'
import { GradientText } from '../../text/gradient-text'

interface Props {
  txTitle: TxKeyPath
}

const BLUR_INTENSITY = 75
const BLUR_TINT = 'dark'

export default function BluredHeader({ txTitle }: Props) {
  const insets = useSafeAreaInsets()
  const headerHeight = (StatusBar.currentHeight ?? insets.top) + 80
  return (
    <BlurView
      intensity={BLUR_INTENSITY}
      tint={BLUR_TINT}
      style={[styles.container, { height: headerHeight }]}
    >
      <View style={[styles.header, { marginTop: insets.top }]}>
        <BackButton containerStyle={styles.back} />
        <GradientText txStyle='IR16' tx={txTitle} style={styles.title} />
      </View>
    </BlurView>
  )
}
