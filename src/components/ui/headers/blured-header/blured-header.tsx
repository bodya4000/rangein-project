// BluredHeader.tsx
import React from 'react'
import { useTranslation } from 'react-i18next'
import { StatusBar, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { globalStyles, HEADER_HEIGHT } from '@/constants'
import { TxKeyPath } from '@/i18n/react-i18next'

import { styles } from './blured-header.style'
import { BackButton } from '../../buttons'
import { BlurContainer } from '../../containers/blur-container'
import { GradientText } from '../../text'

export const BluredHeader = ({ txTitle, title }: { txTitle?: TxKeyPath; title?: string }) => {
  const { t } = useTranslation()

  return (
    <BlurContainer
      height={HEADER_HEIGHT}
      style={styles.wrapper}
      contentStyle={[styles.content, {}]}
      blur={70}
      colors={['#000000', 'rgba(0,0,0,0.83)']}
      start={[0, 0]}
      end={[0, 1]}
    >
      <View style={styles.left}>
        <BackButton />
      </View>

      <View style={styles.center}>
        <GradientText txStyle='IR24' quintessential>
          {txTitle ? t(txTitle) : title}
        </GradientText>
      </View>

      <View style={globalStyles.spacer} />
    </BlurContainer>
  )
}
