import { Canvas, Group, Rect, LinearGradient, Blur, vec, rect } from '@shopify/react-native-skia'
import React, { useState } from 'react'
import { View, StyleSheet, LayoutChangeEvent, ViewStyle, StyleProp } from 'react-native'

type Props = {
  style?: ViewStyle
  contentStyle?: StyleProp<ViewStyle>
  width?: number
  height?: number
  blur?: number
  colors?: string[]
  start?: [number, number]
  end?: [number, number]
  children?: React.ReactNode
}

export function BlurContainer({
  style,
  contentStyle,
  width,
  height,
  blur = 70,
  colors = ['#000000', 'rgba(0,0,0,0.83)'],
  start = [0, 0],
  end = [0, 1],
  children,
}: Props) {
  const [w, setW] = useState(width ?? 0)
  const [h, setH] = useState(height ?? 0)

  const onLayout = (e: LayoutChangeEvent) => {
    if (width && height) return
    const { width: lw, height: lh } = e.nativeEvent.layout
    if (!width && lw > 0 && lw !== w) setW(lw)
    if (!height && lh > 0 && lh !== h) setH(lh)
  }

  const ready = w > 0 && h > 0

  return (
    <View style={style} onLayout={width && height ? undefined : onLayout}>
      {ready && (
        <Canvas style={StyleSheet.absoluteFill}>
          <Group clip={rect(0, 0, w, h)}>
            <Rect x={-w / 2} y={-h} width={w * 2} height={h * 4}>
              <LinearGradient
                start={vec(start[0] * w, start[1] * h)}
                end={vec(end[0] * w, end[1] * h)}
                colors={colors}
              />
            </Rect>
            <Blur blur={blur} />
          </Group>
        </Canvas>
      )}
      <View style={contentStyle}>{children}</View>
    </View>
  )
}
