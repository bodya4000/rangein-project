import MaskedView from '@react-native-masked-view/masked-view'
import { LinearGradient } from 'expo-linear-gradient'
import React, { useCallback, useEffect, useMemo, useState, memo } from 'react'
import { useTranslation } from 'react-i18next'
import { LayoutChangeEvent, StyleSheet, View, ViewStyle } from 'react-native'

import { colors } from '@/constants/colors'

import { AppTextProps, RegularFontStyle, Text } from './text'

type Props = Omit<AppTextProps, 'color'> & {
  color?: [string, string, ...string[]]
  txStyle?: RegularFontStyle
  containerStyle?: ViewStyle
  width?: number | 'auto'
}

export const GradientText = memo(function GradientText({
  children,
  tx,
  txStyle = 'IR18',
  color = [colors.gradientMetal2[0], colors.gradientMetal2[1], ...colors.gradientMetal2.slice(2)],
  style,
  containerStyle,
  width,
  quintessential = true,
  ...textProps
}: Props) {
  const { t, i18n } = useTranslation()
  const [dimensions, setDimensions] = useState({ height: 0, width: 0 })

  const content = useMemo(() => (tx ? t(tx) : children), [tx, t, children])

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
        {...textProps}
        onLayout={handleLayout}
        style={[styles.text, style, { color: colors.white }]}
        quintessential={quintessential}
        txStyle={txStyle}
      >
        {content}
      </Text>
    )
  }

  return (
    <View style={containerStyle}>
      <MaskedView
        style={[styles.container, { width: width ?? dimensions.width }]}
        maskElement={
          <View
            onLayout={handleLayout}
            style={{
              width: width ?? dimensions.width,
            }}
          >
            <Text {...textProps} quintessential={quintessential} txStyle={txStyle} style={[style]}>
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
            height: dimensions.height + 1,
            width: width ?? dimensions.width,
          }}
        />
      </MaskedView>
    </View>
  )
})

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {},
})
