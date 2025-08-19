import { useFocusEffect } from 'expo-router'
import React from 'react'
import {
  AndroidSoftInputModes,
  KeyboardController,
  useKeyboardHandler,
} from 'react-native-keyboard-controller'
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { ChatBottom, ChatMessages } from '@/components/home/game/chat-screen'

const ChatScreen = () => {
  const insets = useSafeAreaInsets()
  const isFocusedReanimated = useSharedValue(true)

  const translateY = useSharedValue(0)

  useKeyboardHandler(
    {
      onStart: e => {
        'worklet'
        if (isFocusedReanimated) {
          const target = Math.max(e.height - insets.bottom, 0)
          translateY.value = withTiming(target, { duration: 300 })
        }
      },
    },
    [insets.bottom],
  )

  const animatedSpacerTranslateY = useAnimatedStyle(() => ({
    flex: 1,
    transform: [
      {
        translateY: isFocusedReanimated.value ? -translateY.value : 0,
      },
    ],
  }))

  useFocusEffect(() => {
    KeyboardController.setInputMode(AndroidSoftInputModes.SOFT_INPUT_ADJUST_NOTHING)
    translateY.value = 0
    isFocusedReanimated.value = true
    return () => {
      isFocusedReanimated.value = false
    }
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
