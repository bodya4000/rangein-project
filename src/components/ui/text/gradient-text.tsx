import MaskedView from '@react-native-masked-view/masked-view'
import { LinearGradient } from 'expo-linear-gradient'
import React, { ReactNode, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { LayoutChangeEvent, StyleSheet, Text, TextStyle, View, ViewStyle } from 'react-native'

import { colors } from '@/constants/colors'
import i18n from '@/i18n'
import { TxKeyPath } from '@/i18n/react-i18next'
import { scaleFont } from '@/utils'

export type GradientFontStyle =
  | 'IR10'
  | 'IR12'
  | 'IR14'
  | 'IR16'
  | 'IR20'
  | 'IR24'
  | 'IR40'
  | 'IR80'

interface Props {
  children?: ReactNode
  tx?: TxKeyPath // by now
  txStyle?: GradientFontStyle
  color?: string[]
  style?: TextStyle
  containerStyle?: ViewStyle

  width?: number
}

export function GradientText({
  children,
  tx = 'nothing',
  txStyle = 'IR10',
  color = colors.gradientMetal2,
  style,
  containerStyle,
  width,
}: Props) {
  const { t, i18n } = useTranslation() // for future
  const [dimensions, setDimensions] = useState({ height: 0, width: 0 })
  const [ready, setReady] = useState(false)

  const content = tx ? t(tx) : children

  const handleLayout = (e: LayoutChangeEvent) => {
    const { height, width } = e.nativeEvent.layout
    if (height !== dimensions.height || width !== dimensions.width) {
      setDimensions({ height, width })
      setReady(true)
    }
  }

  const baseStyle = createGradienttxStyle(txStyle)

  useEffect(() => {
    setReady(false) // to rerender on lang change
  }, [i18n.language, tx, children])

  if (!ready) {
    return (
      <Text onLayout={handleLayout} style={[baseStyle, style]}>
        {content} {children}
      </Text>
    )
  }

  return (
    <View>
      <MaskedView
        style={[
          { height: dimensions.height, width: width ?? dimensions.width },
          styles.container,
          containerStyle,
        ]}
        maskElement={
          <View
            onLayout={handleLayout}
            style={{
              height: dimensions.height,
              width: width ?? dimensions.width,
            }}
          >
            <Text onLayout={handleLayout} style={[baseStyle, style]}>
              {content} {children}
            </Text>
          </View>
        }
      >
        <LinearGradient
          colors={color as [string, string, ...string[]]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={{
            height: dimensions.height,
            width: width ?? dimensions.width,
          }}
        />
      </MaskedView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export function createGradienttxStyle(font: GradientFontStyle): TextStyle {
  const size = Number(font.replace('IR', ''))
  return {
    fontFamily: 'Quintessential-Regular',
    fontSize: scaleFont(size * 2),
  }
}
