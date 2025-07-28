import React, { ReactNode, useRef } from 'react'
import {
  GestureResponderEvent,
  Pressable,
  PressableProps,
  StyleSheet,
  View,
  ViewStyle,
  Animated as RNAnimated,
} from 'react-native'

interface Props extends Partial<PressableProps> {
  children: ReactNode
  onPress?: (_: GestureResponderEvent) => void
  touchable?: boolean
  disabled?: boolean
  style?: ViewStyle
}

export const Touchable = ({
  children,
  onPress,
  touchable = true,
  disabled = false,
  style,
  ...props
}: Props) => {
  const animValue = useRef(new RNAnimated.Value(0)).current

  const handlePressIn = () => {
    RNAnimated.timing(animValue, {
      toValue: 1,
      duration: 120,
      useNativeDriver: true,
    }).start()
  }

  const handlePressOut = (e: GestureResponderEvent) => {
    RNAnimated.timing(animValue, {
      toValue: 0,
      duration: 120,
      useNativeDriver: true,
    }).start(() => {
      onPress?.(e)
      props.onPressOut?.(e)
    })
  }

  const scale = animValue.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0.95],
  })

  const rotateY = animValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '-3deg'],
  })

  const animatedStyle = {
    transform: [{ perspective: 800 }, { scale }, { rotateY }],
  }

  if (touchable)
    return (
      <Pressable
        {...props}
        style={[disabled ? styles.disabled : {}, style]}
        disabled={disabled}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
      >
        <RNAnimated.View style={animatedStyle}>{children}</RNAnimated.View>
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
