import { Audio } from 'expo-av'
import { ReactNode, useEffect, useRef } from 'react'
import { GestureResponderEvent, Pressable, PressableProps, StyleSheet, View } from 'react-native'
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated'

interface Props extends Partial<PressableProps> {
  children: ReactNode
  onPress?: (_: GestureResponderEvent) => void
  touchable?: boolean
  soundable?: boolean
  disabled?: boolean
}

const audioSource = require('@assets/sound/press.mp3')

export const Touchable = ({
  children,
  onPress,
  touchable = true,
  soundable = true,
  disabled = false,
  ...props
}: Props) => {
  const scale = useSharedValue(1)
  const rotate = useSharedValue(0)

  const soundRef = useRef<Audio.Sound | null>(null)

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        { perspective: 80000 },
        { scale: scale.value },
        { rotateY: `${rotate.value}deg` },
      ],
    }
  })

  // useEffect(() => {
  //   let mounted = true

  //   if (soundable) {
  //     requestAnimationFrame(() => {
  //       Audio.Sound.createAsync(audioSource).then(({ sound: s }) => {
  //         if (mounted) soundRef.current = s
  //       })
  //     })
  //   }

  //   return () => {
  //     mounted = false
  //     if (soundRef.current) {
  //       requestAnimationFrame(() => {
  //         soundRef.current?.unloadAsync().catch(() => {})
  //       })
  //     }
  //   }
  // }, [soundable])

  const handlePressIn = async () => {
    // if (soundable && soundRef.current) {
    //   soundRef.current.replayAsync()
    // }
    scale.value = withTiming(0.85, { duration: 150 })
    rotate.value = withTiming(-3, { duration: 150 })
  }

  const handlePressOut = () => {
    scale.value = withTiming(1, { duration: 150 })
    rotate.value = withTiming(0, { duration: 150 })
  }

  if (touchable)
    return (
      <Pressable
        {...props}
        style={disabled ? styles.disabled : {}}
        disabled={disabled}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        onPress={onPress}
      >
        <Animated.View style={animatedStyles}>{children}</Animated.View>
      </Pressable>
    )

  return <View style={disabled ? styles.disabled : {}}>{children}</View>
}

const styles = StyleSheet.create({
  disabled: {
    opacity: 0.5,
    pointerEvents: 'none',
  },
})
