import { useFocusEffect } from 'expo-router'
import React from 'react'
import { useKeyboardHandler } from 'react-native-keyboard-controller'
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { ChatBottom, ChatMessages } from '@/components/home/game/chat-screen'

const ChatScreen = () => {
  const insets = useSafeAreaInsets()
  const isFocusedSV = useSharedValue(false)
  const translateY = useSharedValue(0)

  useFocusEffect(() => {
    isFocusedSV.value = true
    return () => {
      isFocusedSV.value = false
    }
  })

  const animatedSpacerTranslateY = useAnimatedStyle(() => ({
    flex: 1,
    transform: [{ translateY: -translateY.value }],
  }))

  useKeyboardHandler({
    onMove: e => {
      'worklet'
      if (!isFocusedSV.value) return

      const target = e.height > 0 ? Math.max(e.height - insets.bottom, 0) : 0

      if (Math.abs(target - translateY.value) < 2) return

      translateY.value = withSpring(target, {
        damping: 50,
        stiffness: 500,
      })
    },
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
