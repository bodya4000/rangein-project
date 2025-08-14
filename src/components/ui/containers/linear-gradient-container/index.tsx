import { Canvas, RoundedRect, LinearGradient, vec } from '@shopify/react-native-skia'
import React, { ReactNode, useState } from 'react'
import { View, LayoutChangeEvent, StyleSheet, ViewStyle, StyleProp } from 'react-native'

type Props = {
  style?: StyleProp<ViewStyle>
  colors: string[]
  start?: [number, number]
  end?: [number, number]
  children?: ReactNode
  borderRadius?: number
  width?: number
  height?: number
}

export function LinearGradientContainer({
  style,
  colors,
  start = [0, 0],
  end = [1, 1],
  children,
  borderRadius,
  width,
  height,
}: Props) {
  const [w, setW] = useState(width ?? 0)
  const [h, setH] = useState(height ?? 0)

  const onLayout = (e: LayoutChangeEvent) => {
    if (width != null && height != null) return // пропси задані, нічого не міряємо
    const { width: layoutW, height: layoutH } = e.nativeEvent.layout
    if (w !== layoutW || h !== layoutH) {
      setW(layoutW)
      setH(layoutH)
    }
  }

  const r = borderRadius ?? (StyleSheet.flatten(style)?.borderRadius as number) ?? 0

  const ready = w > 0 && h > 0

  return (
    <View style={style} onLayout={width != null && height != null ? undefined : onLayout}>
      {ready && (
        <Canvas style={StyleSheet.absoluteFill} pointerEvents='none'>
          <RoundedRect x={0} y={0} width={w} height={h} r={r}>
            <LinearGradient
              start={vec(start[0] * w, start[1] * h)}
              end={vec(end[0] * w, end[1] * h)}
              colors={colors}
            />
          </RoundedRect>
        </Canvas>
      )}
      {children}
    </View>
  )
}
