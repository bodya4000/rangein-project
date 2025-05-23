import { ReactNode } from 'react'
import { GestureResponderEvent, Pressable, PressableProps } from 'react-native'
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated'

interface Props extends Partial<PressableProps> {
  children: ReactNode
  onPress?: (e: GestureResponderEvent) => void
}

const Touchable = ({ children, onPress, ...props }: Props) => {
  const scale = useSharedValue(1)
  const rotate = useSharedValue(0)

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ perspective: 800 }, { scale: scale.value }, { rotateY: `${rotate.value}deg` }],
    }
  })

  const handlePressIn = () => {
    scale.value = withTiming(0.85, { duration: 70 })
    rotate.value = withTiming(-7, { duration: 70 })
  }

  const handlePressOut = () => {
    scale.value = withTiming(1, { duration: 100 })
    rotate.value = withTiming(0, { duration: 100 })
  }

  return (
    <Pressable {...props} onPressIn={handlePressIn} onPressOut={handlePressOut} onPress={onPress}>
      <Animated.View style={animatedStyles}>{children}</Animated.View>
    </Pressable>
  )
}

export default Touchable
