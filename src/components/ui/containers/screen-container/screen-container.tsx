import { useFocusEffect } from 'expo-router'
import React, { ReactNode, useEffect, useMemo, useRef, useState } from 'react'
import {
  Animated,
  View,
  StyleSheet,
  Image,
  ImageBackground,
  ViewStyle,
  StatusBar,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import SystemNavigationBar from 'react-native-system-navigation-bar'

import { colors, WINDOW_WIDTH } from '@/constants'

import DefaultBackground from '@assets/images/screens/default.png'
import Background1 from '@assets/images/screens/screen_1.png'
import Background2 from '@assets/images/screens/screen_2.png'

const BACKGROUND_IMAGES = [Background1, Background2, Background1]

interface Props {
  children: ReactNode
  background?: number
  animated?: boolean
  style?: ViewStyle
  type?: 'fullscreen' | 'noTab' | 'noStatus' | 'default'
  navBarColor?: string
  padding?: 'sm' | 'md' | 'lg'
}

const PADDING_MAP = {
  sm: 16,
  md: 24,
  lg: 36,
}

export default function ScreenContainer({
  animated = false,
  background,
  children,
  style,
  navBarColor = colors.dark,
  type = 'default',
  padding = 'sm',
}: Props) {
  let translateX = useRef(new Animated.Value(0)).current
  const [currBannerIdx, setCurrBannerIdx] = useState(0)

  const paddingTop = useMemo(() => {
    if (type === 'fullscreen' || type === 'noStatus') {
      return PADDING_MAP[padding] + (StatusBar.currentHeight ?? 0)
    }
    return PADDING_MAP[padding]
  }, [type, padding])

  useEffect(() => {
    if (!animated) return

    const interval = setInterval(
      () => {
        Animated.timing(translateX, {
          toValue: -(currBannerIdx + 1) * WINDOW_WIDTH,
          duration: 1000,
          useNativeDriver: true,
        }).start(() => {
          const isLast = currBannerIdx == BACKGROUND_IMAGES.length - 2
          if (isLast) {
            translateX.setValue(0)
            setCurrBannerIdx(0)
          } else {
            setCurrBannerIdx(currBannerIdx + 1)
          }
        })
      },
      0.05 * 60 * 1000,
    )

    return () => clearInterval(interval)
  }, [currBannerIdx, translateX, animated])

  useFocusEffect(
    React.useCallback(() => {
      switch (type) {
        case 'fullscreen': {
          SystemNavigationBar.fullScreen()
          StatusBar.setHidden(true)
          break
        }
        case 'noStatus': {
          SystemNavigationBar.navigationShow()
          StatusBar.setHidden(true)
          break
        }
        case 'noTab': {
          SystemNavigationBar.navigationHide()
          StatusBar.setHidden(false)
          break
        }
        default: {
          SystemNavigationBar.navigationShow()
          StatusBar.setHidden(false)
          break
        }
      }
    }, [type]),
  )

  useFocusEffect(
    React.useCallback(() => {
      SystemNavigationBar.setNavigationColor(navBarColor)
    }, [navBarColor]),
  )

  // default
  if (!animated && !background) {
    return (
      <ImageBackground style={styles.bg} source={DefaultBackground}>
        <SafeAreaView style={styles.safeArea}>
          <View
            style={[
              styles.content,
              style,
              {
                padding: PADDING_MAP[padding],
                paddingTop,
              },
            ]}
          >
            {children}
          </View>
        </SafeAreaView>
      </ImageBackground>
    )
  }

  if (background) {
    return (
      <View style={styles.bgContainer}>
        <Image source={background} style={styles.bg} resizeMode='cover' />
        <SafeAreaView style={styles.safeArea}>
          <View style={[styles.content, { padding: PADDING_MAP[padding], paddingTop }, style]}>
            {children}
          </View>
        </SafeAreaView>
      </View>
    )
  }

  return (
    <View style={styles.bgContainer}>
      <Animated.View style={[styles.animatedContainer, { transform: [{ translateX }] }]}>
        {BACKGROUND_IMAGES.map((_, index) => {
          return (
            <Image
              key={index}
              source={BACKGROUND_IMAGES[index]}
              style={styles.animatedBg}
              resizeMode='cover'
            />
          )
        })}
        {currBannerIdx == BACKGROUND_IMAGES.length - 1 && (
          <Image source={BACKGROUND_IMAGES[0]} style={styles.animatedBg} resizeMode='cover' />
        )}
      </Animated.View>

      <SafeAreaView style={styles.safeArea} edges={['bottom', 'left', 'right']}>
        <View style={[styles.content, { padding: PADDING_MAP[padding], paddingTop }, style]}>
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
  animatedContainer: {
    position: 'absolute',
    flex: 1,
    flexDirection: 'row',
    width: WINDOW_WIDTH * 3,
    height: '100%',
  },
  animatedBg: {
    width: WINDOW_WIDTH,
    height: '100%',
  },
  bg: {
    position: 'absolute',
    height: '100%',
    width: '100%',
  },
  safeArea: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  content: {
    flex: 1,
  },
})
