import { LinearGradient } from 'expo-linear-gradient'
import React, { useEffect, useRef } from 'react'
import { useState } from 'react'
import { Animated, View, StyleSheet, DimensionValue, StyleProp, ViewStyle } from 'react-native'

import { colors, WINDOW_WIDTH } from '@/constants'

const AnimatedGradient = Animated.createAnimatedComponent(LinearGradient)

type SkeletonProps = {
  width?: DimensionValue
  height?: DimensionValue
  style?: StyleProp<ViewStyle>
}

export const Skeleton = ({ width = '100%', height = 20, style }: SkeletonProps) => {
  const [containerWidth, setContainerWidth] = useState<number | null>(null)
  const shimmerWidth = containerWidth ? containerWidth / 2 : 100 // fallback

  const translateX = useRef(new Animated.Value(-shimmerWidth)).current

  useEffect(() => {
    if (containerWidth) {
      translateX.setValue(-shimmerWidth) // reset start point
      Animated.loop(
        Animated.timing(translateX, {
          toValue: containerWidth,
          duration: 1200,
          useNativeDriver: true,
        }),
      ).start()
    }
  }, [containerWidth])

  return (
    <View
      style={[styles.container, { width, height }, style]}
      onLayout={e => setContainerWidth(e.nativeEvent.layout.width)}
    >
      {containerWidth && (
        <AnimatedGradient
          colors={['transparent', 'rgba(255,255,255,0.4)', 'transparent']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={[
            styles.shimmer,
            {
              transform: [{ translateX }],
              height,
              width: shimmerWidth,
            },
          ]}
        />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.gradientMetal1[2],
    borderRadius: 4,
    height: 20,
    marginVertical: 8,
    position: 'relative',
    overflow: 'hidden',
  },
  shimmer: {
    height: '100%',
    position: 'absolute',
  },
})
