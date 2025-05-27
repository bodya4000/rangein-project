// import React, { ReactNode, useEffect, useState } from 'react'
// import { ImageBackground, SafeAreaView, View, StyleSheet } from 'react-native'

// import { spacing } from '@/constants/spacing'

// import DefaultBackground from '@assets/images/screens/default.png'
// import Background1 from '@assets/images/screens/screen_1.png'
// import Background2 from '@assets/images/screens/screen_2.png'

// const BACKGROUND_IMAGES = [Background1, Background2]

// interface Props {
//   children: ReactNode
//   isDefault?: boolean
// }

// export default function ScreenContainer({ isDefault = false, children }: Props) {
//   const [currentIndex, setCurrentIndex] = useState(0)

//   useEffect(() => {
//     if (isDefault) return

//     const interval = setInterval(
//       () => {
//         setCurrentIndex(prev => (prev + 1) % BACKGROUND_IMAGES.length)
//       },
//       2 * 60 * 1000,
//     )

//     return () => clearInterval(interval)
//   }, [isDefault])

//   const backgroundSource = isDefault ? DefaultBackground : BACKGROUND_IMAGES[currentIndex]

//   return (
//     <ImageBackground style={styles.bg} source={backgroundSource}>
//       <SafeAreaView style={styles.safeArea}>
//         <View style={styles.content}>{children}</View>
//       </SafeAreaView>
//     </ImageBackground>
//   )
// }

// const styles = StyleSheet.create({
//   bg: {
//     flex: 1,
//   },
//   safeArea: {
//     flex: 1,
//     backgroundColor: 'rgba(0,0,0,0.2)',
//   },
//   content: {
//     flex: 1,
//     padding: spacing.lg,
//   },
// })

import React, { ReactNode, useEffect, useRef, useState } from 'react'
import {
  Animated,
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Dimensions,
  ImageBackground,
} from 'react-native'

import { spacing } from '@/constants/spacing'

import DefaultBackground from '@assets/images/screens/default.png'
import Background1 from '@assets/images/screens/screen_1.png'
import Background2 from '@assets/images/screens/screen_2.png'

const { width } = Dimensions.get('window')
const BACKGROUND_IMAGES = [Background1, Background2, Background1]

interface Props {
  children: ReactNode
  animated?: boolean
}

export default function ScreenContainer({ animated = false, children }: Props) {
  let translateX = useRef(new Animated.Value(0)).current
  const [currBannerIdx, setCurrBannerIdx] = useState(0)

  useEffect(() => {
    if (!animated) return

    const interval = setInterval(
      () => {
        Animated.timing(translateX, {
          toValue: -(currBannerIdx + 1) * width,
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

  if (!animated) {
    return (
      <ImageBackground style={styles.bg} source={DefaultBackground}>
        <SafeAreaView style={styles.safeArea}>
          <View style={styles.content}>{children}</View>
        </SafeAreaView>
      </ImageBackground>
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
              style={styles.bg}
              resizeMode='cover'
            />
          )
        })}
        {currBannerIdx == BACKGROUND_IMAGES.length - 1 && (
          <Image source={BACKGROUND_IMAGES[0]} style={styles.bg} resizeMode='cover' />
        )}
      </Animated.View>

      <SafeAreaView style={styles.safeArea}>
        <View style={styles.content}>{children}</View>
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
    width: width * 3,
    height: '100%',
  },
  bg: {
    width,
    height: '100%',
  },
  safeArea: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  content: {
    flex: 1,
    padding: spacing.lg,
  },
})
