import React from 'react'
import { Image, View, SafeAreaView, StyleSheet } from 'react-native'
import Animated, { useAnimatedStyle } from 'react-native-reanimated'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { PADDING_MAP, WINDOW_WIDTH } from '@/constants'
import { useScreenSlider } from '@/hooks/ui'

import Background1 from '@assets/images/screens/screen_1.webp'
import Background2 from '@assets/images/screens/screen_2.webp'

import StatusBarContainer from './_status-bar-container'

const BACKGROUND_IMAGES = [Background1, Background2, Background1]

interface Props {
  animated?: boolean
  children: React.ReactNode
  padding?: 'sm' | 'md' | 'lg'
}

export const AnimatedScreenContainer = ({ children, padding = 'md', animated = true }: Props) => {
  const { bottom } = useSafeAreaInsets()

  const translateX = useScreenSlider({
    images: BACKGROUND_IMAGES,
    animated: animated,
  })

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }))

  return (
    <View style={styles.bgContainer}>
      <StatusBarContainer />
      <Animated.View
        style={[
          styles.animatedContainer,
          { width: WINDOW_WIDTH * BACKGROUND_IMAGES.length },
          animatedStyles,
        ]}
      >
        {BACKGROUND_IMAGES.map((src, index) => (
          <Image key={index} source={src} style={styles.animatedBg} resizeMode='cover' />
        ))}
      </Animated.View>

      <SafeAreaView style={styles.safeArea}>
        <View
          style={[
            styles.content,
            { padding: PADDING_MAP[padding], paddingBottom: PADDING_MAP[padding] + bottom },
          ]}
        >
          {children}
        </View>
      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
  bgContainer: {
    ...StyleSheet.absoluteFillObject,
    overflow: 'hidden',
  },
  animatedContainer: { ...StyleSheet.absoluteFillObject, flexDirection: 'row' },
  animatedBg: { width: WINDOW_WIDTH, height: '100%' },
  safeArea: { flex: 1, backgroundColor: 'rgba(0,0,0,0.2)' },
  content: { flex: 1 },
})
