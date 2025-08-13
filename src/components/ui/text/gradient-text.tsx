// GradientText.skia.tsx
import {
  Canvas,
  Text as SkText,
  Rect,
  LinearGradient,
  Mask,
  vec,
  useFont,
} from '@shopify/react-native-skia'
import React, { memo, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { View, StyleSheet, ViewStyle } from 'react-native'

import { colors } from '@/constants/colors'
import { scaleFont } from '@/utils'

import { AppTextProps, RegularFontStyle } from './text'

type Props = Omit<AppTextProps, 'color'> & {
  color?: [string, string, ...string[]]
  txStyle?: RegularFontStyle
  containerStyle?: ViewStyle
  width?: number | 'auto'
  quintessential?: boolean
}

const FONT_MAP: Record<RegularFontStyle, { file: any; size: number }> = {
  IR10: { file: require('@assets/fonts/Quintessential-Regular.ttf'), size: scaleFont(10) },
  IR12: { file: require('@assets/fonts/Quintessential-Regular.ttf'), size: scaleFont(12) },
  IR13: { file: require('@assets/fonts/Quintessential-Regular.ttf'), size: scaleFont(13) },
  IR14: { file: require('@assets/fonts/Quintessential-Regular.ttf'), size: scaleFont(14) },
  IR16: { file: require('@assets/fonts/Quintessential-Regular.ttf'), size: scaleFont(16) },
  IR18: { file: require('@assets/fonts/Quintessential-Regular.ttf'), size: scaleFont(18) },
  IR20: { file: require('@assets/fonts/Quintessential-Regular.ttf'), size: scaleFont(20) },
  IR24: { file: require('@assets/fonts/Quintessential-Regular.ttf'), size: scaleFont(24) },
  IR40: { file: require('@assets/fonts/Quintessential-Regular.ttf'), size: scaleFont(55) },
  IR80: { file: require('@assets/fonts/Quintessential-Regular.ttf'), size: scaleFont(80) },
}

export const GradientText = memo(function GradientText({
  children,
  tx,
  txStyle = 'IR18',
  color = [colors.gradientMetal2[0], colors.gradientMetal2[1], ...colors.gradientMetal2.slice(2)],
  containerStyle,
  width = 'auto',
}: Props) {
  const { t } = useTranslation()
  const content = useMemo(() => {
    if (tx) return t(tx)
    return Array.isArray(children) ? children.map(String).join(' ') : String(children ?? '')
  }, [tx, t, children])

  const { file, size } = FONT_MAP[txStyle] ?? FONT_MAP.IR18
  const font = useFont(file, size)
  if (!font) return <View style={[styles.fallback, containerStyle]} />

  const w = Math.ceil(font.getTextWidth(content))
  const metrics = font.getMetrics?.()
  const ascent = metrics?.ascent ?? -size * 0.8
  const descent = metrics?.descent ?? size * 0.2
  const baseline = Math.ceil(-ascent)
  const canvasW = width === 'auto' ? w : (width as number)
  const canvasH = Math.ceil(baseline + descent)

  return (
    <View style={containerStyle}>
      <Canvas style={{ width: canvasW, height: canvasH }}>
        <Mask mask={<SkText x={0} y={baseline} text={content} font={font} />}>
          <Rect x={0} y={0} width={canvasW} height={canvasH}>
            <LinearGradient start={vec(0, 0)} end={vec(canvasW, 0)} colors={color} />
          </Rect>
        </Mask>
      </Canvas>
    </View>
  )
})

const styles = StyleSheet.create({
  fallback: { width: 1, height: 1 },
})
