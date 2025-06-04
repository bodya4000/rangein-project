import MaskedView from '@react-native-masked-view/masked-view'
import { LinearGradient } from 'expo-linear-gradient'
import React, { ReactNode, useCallback, useEffect, useMemo, useState, memo } from 'react'
import { useTranslation } from 'react-i18next'
import { LayoutChangeEvent, StyleSheet, Text, TextStyle, View, ViewStyle } from 'react-native'

import { colors } from '@/constants/colors'
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
  tx?: TxKeyPath
  txStyle?: GradientFontStyle
  color?: [string, string, ...string[]]
  style?: TextStyle
  containerStyle?: ViewStyle
  quintessential?: boolean
  width?: number
  numberOfLines?: number
}

export const GradientText = memo(function GradientText({
  children,
  tx,
  txStyle = 'IR10',
  color = [colors.gradientMetal2[0], colors.gradientMetal2[1], ...colors.gradientMetal2.slice(2)],
  style,
  containerStyle,
  width,
  quintessential = true,
  numberOfLines,
}: Props) {
  const { t, i18n } = useTranslation()
  const [dimensions, setDimensions] = useState({ height: 0, width: 0 })

  const content = useMemo(() => (tx ? t(tx) : children), [tx, t, children])
  const baseStyle = useMemo(
    () => createGradientTextStyle(txStyle, quintessential),
    [txStyle, quintessential],
  )

  const isReady = dimensions.width > 0 && dimensions.height > 0

  const handleLayout = useCallback(
    (e: LayoutChangeEvent) => {
      const { height, width } = e.nativeEvent.layout
      if (height > 0 && (height !== dimensions.height || width !== dimensions.width)) {
        setDimensions({ height, width })
      }
    },
    [dimensions],
  )

  useEffect(() => {
    setDimensions({ height: 0, width: 0 })
  }, [i18n.language, content])

  if (!isReady) {
    return (
      <Text
        numberOfLines={numberOfLines}
        onLayout={handleLayout}
        style={[styles.text, baseStyle, style, { color: colors.white }]}
      >
        {content}
      </Text>
    )
  }

  return (
    <View style={containerStyle}>
      <MaskedView
        style={[styles.container, { height: dimensions.height, width: width ?? dimensions.width }]}
        maskElement={
          <View
            onLayout={handleLayout}
            style={{
              height: dimensions.height,
              width: width ?? dimensions.width,
            }}
          >
            <Text numberOfLines={numberOfLines} style={[styles.text, baseStyle, style]}>
              {content}
            </Text>
          </View>
        }
      >
        <LinearGradient
          colors={color}
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
})

function createGradientTextStyle(font: GradientFontStyle, quintessential = true): TextStyle {
  const size = Number(font.replace('IR', ''))
  const scaled = scaleFont(size * 2)
  return {
    fontFamily: quintessential ? 'Quintessential-Regular' : 'Inter-Regular',
    fontSize: scaled,
    lineHeight: scaled * 1.2,
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {},
})
