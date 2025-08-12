import React, { useEffect, useMemo, useRef, useState } from 'react'
import { Animated, Image, View, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { PADDING_MAP, spacing, WINDOW_HEIGHT, WINDOW_WIDTH } from '@/constants'

import Background1 from '@assets/images/screens/screen_1.png'
import Background2 from '@assets/images/screens/screen_2.png'

import StatusBarContainer, { StatusBarContainerProps } from './_status-bar-container'

const BACKGROUND_IMAGES = [Background1, Background2, Background1]

interface Props extends StatusBarContainerProps {
  children: React.ReactNode
  padding?: 'sm' | 'md' | 'lg'
  animated?: boolean
}

export const AnimatedScreenContainer = ({
  children,
  padding = 'md',
  animated = true,
  statusBarBackgroundColor,
  statusBarElementColor,
}: Props) => {
  const translateX = useRef(new Animated.Value(0)).current
  const [currBannerIdx, setCurrBannerIdx] = useState(0)
  const paddingValue = useMemo(() => PADDING_MAP[padding], [padding])

  const isMountedRef = useRef(true)
  const isAnimatingRef = useRef(false)

  const animate = () => {
    if (isAnimatingRef.current || !isMountedRef.current) return

    isAnimatingRef.current = true
    Animated.timing(translateX, {
      toValue: -(currBannerIdx + 1) * WINDOW_WIDTH,
      duration: 1000,
      useNativeDriver: true,
    }).start(() => {
      if (!isMountedRef.current) return

      const isLast = currBannerIdx === BACKGROUND_IMAGES.length - 2
      if (isLast) {
        translateX.setValue(0)
        setCurrBannerIdx(0)
      } else {
        setCurrBannerIdx(prev => prev + 1)
      }
      isAnimatingRef.current = false
    })
  }

  useEffect(() => {
    if (!animated) return

    isMountedRef.current = true
    const interval = setInterval(() => {
      animate()
    }, 3000)

    return () => {
      isMountedRef.current = false
      clearInterval(interval)
    }
  }, [currBannerIdx, animated])

  useEffect(() => {
    if (animated) {
      animate()
    }
  }, [animated])

  return (
    <SafeAreaView style={styles.bgContainer}>
      <StatusBarContainer
        statusBarBackgroundColor={statusBarBackgroundColor}
        statusBarElementColor={statusBarElementColor}
      />

      <Animated.View style={[styles.animatedContainer, { transform: [{ translateX }] }]}>
        {BACKGROUND_IMAGES.map((_, index) => (
          <Image
            key={index}
            source={BACKGROUND_IMAGES[index]}
            style={styles.animatedBg}
            resizeMode='cover'
          />
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
  animatedBg: { width: WINDOW_WIDTH, height: '110%' },
  safeArea: { flex: 1 },
  content: { flex: 1 },
})
