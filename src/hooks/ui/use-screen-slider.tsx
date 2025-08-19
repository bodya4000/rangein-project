import { useEffect } from 'react'
import {
  useSharedValue,
  withDelay,
  withRepeat,
  withSequence,
  withTiming,
} from 'react-native-reanimated'

import { WINDOW_WIDTH } from '@/constants'

import type { ImageSourcePropType } from 'react-native'

interface ScreenSliderOptions {
  images: ImageSourcePropType[]
  animated?: boolean
  interval?: number // ms
  duration?: number // ms
  loop?: number // -1 = infinite
  reverse?: boolean
  initialTranslateX?: number
}

export const useScreenSlider = ({
  images,
  animated = true,
  interval = 3500,
  duration = 1000,
  loop = -1,
  reverse = false,
  initialTranslateX = 0,
}: ScreenSliderOptions) => {
  const translateX = useSharedValue(initialTranslateX)

  useEffect(() => {
    if (!animated || images.length === 0) return

    const animateSteps = images.map((_, idx) =>
      withDelay(
        interval,
        withTiming(-idx * WINDOW_WIDTH, {
          duration,
        }),
      ),
    )

    const resetStep = withTiming(initialTranslateX, { duration: 0 })

    translateX.value = withRepeat(withSequence(...animateSteps, resetStep), loop, reverse)
  }, [animated, images, interval, duration, loop, reverse, initialTranslateX])

  return translateX
}
