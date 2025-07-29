import React, { useEffect, useMemo, useRef, useState } from 'react'
import { Animated, Image, View, SafeAreaView, StyleSheet } from 'react-native'

import { WINDOW_WIDTH } from '@/constants'

import Background1 from '@assets/images/screens/screen_1.png'
import Background2 from '@assets/images/screens/screen_2.png'

const BACKGROUND_IMAGES = [Background1, Background2, Background1]

interface Props {
  children: React.ReactNode
  padding: 'sm' | 'md' | 'lg'
}

const PADDING_MAP = {
  sm: 16,
  md: 24,
  lg: 36,
}

export const AnimatedScreenContainer = ({ children, padding }: Props) => {
  let translateX = useRef(new Animated.Value(0)).current
  const [currBannerIdx, setCurrBannerIdx] = useState(0)

  const paddingValue = useMemo(() => PADDING_MAP[padding], [padding])

  useEffect(() => {
    let isMounted = true
    let isAnimating = false

    const interval = setInterval(() => {
      if (isAnimating || !isMounted) return

      isAnimating = true
      Animated.timing(translateX, {
        toValue: -(currBannerIdx + 1) * WINDOW_WIDTH,
        duration: 1000,
        useNativeDriver: true,
      }).start(() => {
        if (!isMounted) return
        const isLast = currBannerIdx === BACKGROUND_IMAGES.length - 2
        if (isLast) {
          translateX.setValue(0)
          setCurrBannerIdx(0)
        } else {
          setCurrBannerIdx(prev => prev + 1)
        }
        isAnimating = false
      })
    }, 3000)

    return () => {
      isMounted = false
      clearInterval(interval)
    }
  }, [currBannerIdx, translateX])

  return (
    <View style={styles.bgContainer}>
      <Animated.View style={[styles.animatedContainer, { transform: [{ translateX }] }]}>
        {BACKGROUND_IMAGES.map((_, index) => (
          <Image
            key={index}
            source={BACKGROUND_IMAGES[index]}
            style={styles.animatedBg}
            resizeMode='cover'
          />
        ))}
        {currBannerIdx === BACKGROUND_IMAGES.length - 1 && (
          <Image source={BACKGROUND_IMAGES[0]} style={styles.animatedBg} resizeMode='cover' />
        )}
      </Animated.View>
      <SafeAreaView style={styles.safeArea}>
        <View style={[styles.content, { padding: paddingValue }]}>{children}</View>
      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
  bgContainer: { ...StyleSheet.absoluteFillObject, overflow: 'hidden' },
  animatedContainer: {
    position: 'absolute',
    flexDirection: 'row',
    width: WINDOW_WIDTH * 3,
    height: '100%',
  },
  animatedBg: { width: WINDOW_WIDTH, height: '100%' },
  safeArea: { flex: 1, backgroundColor: 'rgba(0,0,0,0.2)' },
  content: { flex: 1 },
})
