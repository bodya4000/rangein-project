import { Audio } from 'expo-av'
import { ReactNode } from 'react'
import { GestureResponderEvent, Pressable, PressableProps } from 'react-native'
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated'

interface Props extends Partial<PressableProps> {
  children: ReactNode
  onPress?: (_: GestureResponderEvent) => void
  touchable?: boolean
  soundable?: boolean
}

const audioSource = require('@assets/sound/press.mp3')

const Touchable = ({ children, onPress, touchable = true, soundable = true, ...props }: Props) => {
  const scale = useSharedValue(1)
  const rotate = useSharedValue(0)

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ perspective: 800 }, { scale: scale.value }, { rotateY: `${rotate.value}deg` }],
    }
  })

  const handlePressIn = async () => {
    if (soundable) {
      const { sound } = await Audio.Sound.createAsync(audioSource)
      await sound.playAsync()
    }
    scale.value = withTiming(0.85, { duration: 70 })
    rotate.value = withTiming(-7, { duration: 70 })
  }

  const handlePressOut = () => {
    scale.value = withTiming(1, { duration: 100 })
    rotate.value = withTiming(0, { duration: 100 })
  }

  if (touchable)
    return (
      <Pressable {...props} onPressIn={handlePressIn} onPressOut={handlePressOut} onPress={onPress}>
        <Animated.View style={animatedStyles}>{children}</Animated.View>
      </Pressable>
    )

  return <>{children}</>
}

export default Touchable
