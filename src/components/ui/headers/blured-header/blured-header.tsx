import { BlurView } from 'expo-blur'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { StatusBar, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { IS_IOS, spacing } from '@/constants'
import { TxKeyPath } from '@/i18n/react-i18next'

import { styles } from './blured-header.style'
import { BackButton } from '../../buttons/back-button/back-button'
import { GradientText } from '../../text/gradient-text'

interface Props {
  txTitle?: TxKeyPath
  title?: string
}

const BLUR_INTENSITY = IS_IOS ? 75 : 1000
const BLUR_TINT = IS_IOS ? 'systemChromeMaterial' : 'dark'

export default function BluredHeader({ txTitle, title }: Props) {
  const { t } = useTranslation()
  const insets = useSafeAreaInsets()

  const titleText = txTitle ? t(txTitle) : title
  if (!titleText) return null
  return (
    <BlurView
      intensity={BLUR_INTENSITY}
      tint={BLUR_TINT}
      style={[
        styles.container,
        {
          paddingTop: (StatusBar.currentHeight || insets.top) * 1.4,
          paddingBottom: spacing.lg,
        },
      ]}
    >
      <View style={[styles.header]}>
        <View style={styles.back}>
          <BackButton containerStyle={styles.back} />
        </View>
        <GradientText txStyle={titleText.length > 4 ? 'IR14' : 'IR16'} style={styles.title}>
          {titleText}
        </GradientText>
      </View>
    </BlurView>
  )
}
