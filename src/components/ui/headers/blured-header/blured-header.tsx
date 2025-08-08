import { Canvas, Blur, Rect, LinearGradient, vec, Group, rect } from '@shopify/react-native-skia'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { StyleSheet, TouchableOpacity, View } from 'react-native'

import { globalStyles, WINDOW_WIDTH } from '@/constants'
import { TxKeyPath } from '@/i18n/react-i18next'

import { styles } from './blured-header.style'
import { BackButton } from '../../buttons'
import { GradientText } from '../../text'

const HEADER_HEIGHT = 100

interface Props {
  txTitle?: TxKeyPath
  title?: string
}

export const BluredHeader = ({ txTitle, title }: Props) => {
  const { t } = useTranslation()
  return (
    <View style={styles.wrapper}>
      <Canvas style={StyleSheet.absoluteFill}>
        <Group clip={rect(0, 0, WINDOW_WIDTH, HEADER_HEIGHT)}>
          <Rect
            x={-WINDOW_WIDTH / 2}
            y={-HEADER_HEIGHT}
            width={WINDOW_WIDTH * 2}
            height={HEADER_HEIGHT * 4}
          >
            <LinearGradient
              start={vec(0, 0)}
              end={vec(0, 0)}
              colors={['#000', 'rgba(0, 0, 0, 0.83)']}
            />
          </Rect>
          <Blur blur={70} />
        </Group>
      </Canvas>

      <View style={styles.content}>
        <View style={styles.left}>
          <TouchableOpacity style={styles.backButton}>
            <BackButton />
          </TouchableOpacity>
        </View>

        <View style={styles.center}>
          <GradientText txStyle='IR24' quintessential>
            {txTitle ? t(txTitle) : title}
          </GradientText>
        </View>

        <View style={globalStyles.spacer} />
      </View>
    </View>
  )
}
