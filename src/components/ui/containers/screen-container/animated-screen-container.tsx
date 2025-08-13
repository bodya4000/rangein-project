import { useFocusEffect } from 'expo-router'
import React from 'react'
import { View, StyleSheet, Image } from 'react-native'
import Animated, {
  cancelAnimation,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'
import { SafeAreaView } from 'react-native-safe-area-context'

import { PADDING_MAP, spacing, WINDOW_HEIGHT, WINDOW_WIDTH } from '@/constants'

import Background1 from '@assets/images/screens/screen_1.webp'
import Background2 from '@assets/images/screens/screen_2.webp'

import StatusBarContainer, { StatusBarContainerProps } from './_status-bar-container'

const BACKGROUND_IMAGES = [Background1, Background2, Background1]

interface Props extends StatusBarContainerProps {
  children: React.ReactNode
  padding?: 'sm' | 'md' | 'lg'
  animated?: boolean
}

const SLIDE_INTERVAL = 3000
const ANIMATION_DURATION = 1000

export const AnimatedScreenContainer = ({
  children,
  padding = 'md',
  animated = true,
  statusBarBackgroundColor,
  statusBarElementColor,
}: Props) => {
  const intervalRef = React.useRef<number | null>(null)
  const translateX = useSharedValue(0)
  const currBannerIdx = useSharedValue(0)
  const paddingValue = PADDING_MAP[padding]

  const animate = () => {
    const lastIndex = BACKGROUND_IMAGES.length - 2
    const nextIdx = currBannerIdx.value === lastIndex ? 0 : currBannerIdx.value + 1
    const translateXValue = -nextIdx * WINDOW_WIDTH

    translateX.value = withTiming(translateXValue, { duration: ANIMATION_DURATION }, () => {
      currBannerIdx.value = nextIdx
    })
  }

  useFocusEffect(
    React.useCallback(() => {
      if (intervalRef.current) clearInterval(intervalRef.current)
      if (!animated) return
      animate()
      intervalRef.current = setInterval(animate, SLIDE_INTERVAL)
      return () => {
        cancelAnimation(translateX)
        if (intervalRef.current) clearInterval(intervalRef.current)
      }
    }, [animated]),
  )

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }))

  return (
    <SafeAreaView style={styles.bgContainer}>
      <StatusBarContainer
        statusBarBackgroundColor={statusBarBackgroundColor}
        statusBarElementColor={statusBarElementColor}
      />
      <Animated.View style={[styles.animatedContainer, animatedStyles]}>
        {BACKGROUND_IMAGES.map((src, index) => (
          <Image key={index} source={src} style={styles.animatedBg} resizeMode={'cover'} />
        ))}
      </Animated.View>
      <View style={styles.safeArea}>
        <View style={[styles.content, { padding: paddingValue, paddingBottom: spacing.sm }]}>
          {children}
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  bgContainer: { flex: 1 },
  animatedContainer: {
    position: 'absolute',
    flexDirection: 'row',
    width: WINDOW_WIDTH * 3,
    height: WINDOW_HEIGHT,
  },
  animatedBg: { width: WINDOW_WIDTH, height: WINDOW_HEIGHT * 1.1 },
  safeArea: { flex: 1 },
  content: { flex: 1 },
})
