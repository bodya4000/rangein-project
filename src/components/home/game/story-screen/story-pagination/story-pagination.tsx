import { Canvas, RoundedRect, LinearGradient, vec } from '@shopify/react-native-skia'
import React, { useState } from 'react'
import { View, LayoutChangeEvent } from 'react-native'

import { colors } from '@/constants'

import { styles } from './story-pagination.style'

interface Props {
  currentIdx: number
  parts: number
}

const GradientItem = ({ gradientColors }: { gradientColors: string[] }) => {
  const [w, setW] = useState(0)
  const [h, setH] = useState(0)

  const onLayout = (e: LayoutChangeEvent) => {
    const { width, height } = e.nativeEvent.layout
    if (width !== w || height !== h) {
      setW(width)
      setH(height)
    }
  }

  const r = (styles.paginationItem as any)?.borderRadius ?? 0

  return (
    <Canvas style={styles.paginationItem} onLayout={onLayout}>
      {w > 0 && h > 0 && (
        <RoundedRect x={0} y={0} width={w} height={h} r={r}>
          <LinearGradient start={vec(0, h)} end={vec(w, 0)} colors={gradientColors} />
        </RoundedRect>
      )}
    </Canvas>
  )
}

const StoryPagination = ({ currentIdx, parts }: Props) => {
  return (
    <View style={styles.paginationContainer}>
      {Array.from({ length: parts }).map((_, index) => {
        const gradientColors = currentIdx === index ? colors.gradientMetal4 : colors.gradientMetal1
        return <GradientItem key={index} gradientColors={gradientColors} />
      })}
    </View>
  )
}

export default StoryPagination
