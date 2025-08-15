import { useFocusEffect } from 'expo-router'
import React from 'react'
import { AndroidSoftInputModes, KeyboardController } from 'react-native-keyboard-controller'
import Animated, {
  useAnimatedKeyboard,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { ChatBottom, ChatMessages } from '@/components/home/game/chat-screen'

const ChatScreen = () => {
  const insets = useSafeAreaInsets()
  const { height: keyboardHeight } = useAnimatedKeyboard()

  const targetHeight = useSharedValue(0)

  useDerivedValue(() => {
    if (Math.abs(targetHeight.value - keyboardHeight.value) > 10) {
      targetHeight.value = keyboardHeight.value > 0 ? Math.max(keyboardHeight.value, 0) + 10 : 0
    }
  }, [keyboardHeight])

  const animatedSpacerTranslateY = useAnimatedStyle(() => ({
    flex: 1,
    transform: [
      {
        translateY: withSpring(-Math.max(targetHeight.value - insets.bottom, 0), {
          damping: 15,
          stiffness: 200,
          mass: 0.8,
          overshootClamping: true,
        }),
      },
    ],
  }))

  useFocusEffect(() => {
    KeyboardController.setInputMode(AndroidSoftInputModes.SOFT_INPUT_ADJUST_NOTHING)
  })
  return (
    <>
      <Animated.View style={animatedSpacerTranslateY}>
        <ChatMessages />
        <ChatBottom />
      </Animated.View>
    </>
  )
}

export default ChatScreen
