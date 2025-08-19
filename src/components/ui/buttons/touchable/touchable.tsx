import React from 'react'
import {
  GestureResponderEvent,
  Pressable,
  PressableProps,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native'
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated'

interface Props extends PressableProps {
  children: React.ReactNode
  onPress?: () => void
  touchable?: boolean
  disabled?: boolean
  style?: ViewStyle
}

export const Touchable = ({
  children,
  touchable = true,
  disabled = false,
  style,
  ...pressableProps
}: Props) => {
  const scale = useSharedValue(1)

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }))

  const handlePressIn = () => {
    scale.value = withTiming(0.95, { duration: 120 })
  }

  const handlePressOut = (e: GestureResponderEvent) => {
    scale.value = withTiming(1, { duration: 120 })
    pressableProps.onPressOut?.(e)
  }

  if (touchable)
    return (
      <Pressable
        {...pressableProps}
        style={[disabled ? styles.disabled : {}, style]}
        disabled={disabled}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
      >
        <Animated.View style={animatedStyle}>{children}</Animated.View>
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
