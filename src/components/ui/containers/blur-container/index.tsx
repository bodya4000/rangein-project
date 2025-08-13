// BlurContainer.tsx
import { Canvas, Group, Rect, LinearGradient, Blur, vec, rect } from '@shopify/react-native-skia'
import React, { useState } from 'react'
import { View, StyleSheet, LayoutChangeEvent, ViewStyle, StyleProp } from 'react-native'

type Props = {
  style?: ViewStyle
  contentStyle?: StyleProp<ViewStyle>
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
  height,
  blur = 70,
  colors = ['#000000', 'rgba(0,0,0,0.83)'],
  start = [0, 0],
  end = [0, 1],
  children,
}: Props) {
  const [w, setW] = useState(0)
  const [h, setH] = useState(height ?? 0)

  const onLayout = (e: LayoutChangeEvent) => {
    const { width, height: lh } = e.nativeEvent.layout
    if (width !== w) setW(width)
    if (!height && lh !== h) setH(lh)
  }

  const HH = height ?? h

  return (
    <View style={style} onLayout={onLayout}>
      {w > 0 && HH > 0 && (
        <Canvas style={StyleSheet.absoluteFill}>
          <Group clip={rect(0, 0, w, HH)}>
            <Rect x={-w / 2} y={-HH} width={w * 2} height={HH * 4}>
              <LinearGradient
                start={vec(start[0] * w, start[1] * HH)}
                end={vec(end[0] * w, end[1] * HH)}
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
