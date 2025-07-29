import { useFocusEffect } from 'expo-router'
import React, { useEffect, useRef } from 'react'
import { Keyboard, ScrollView, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-controller'

import { ChatBottom, ChatMessages } from '@/components/home/game/chat-screen'

const ChatScreen = () => {
  const scrollRef = useRef<ScrollView | null>(null)

  const scrollToEnd = () => {
    const timer = setTimeout(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollToEnd({ animated: true })
      }
      clearTimeout(timer)
    }, 200)
  }

  useFocusEffect(
    React.useCallback(() => {
      scrollToEnd()
    }, []),
  )

  useEffect(() => {
    const keyboardDidShow = Keyboard.addListener('keyboardDidShow', () => {
      // scrollToEnd()
    })

    return () => {
      keyboardDidShow.remove()
    }
  }, [])

  return (
    <>
      <KeyboardAwareScrollView
        ref={scrollRef}
        extraKeyboardSpace={0}
        showsVerticalScrollIndicator={false}
        // contentContainerStyle={{ flex: 1 }}
      >
        <View style={{ height: 200 }} />
        <ChatMessages />
        <ChatBottom />
      </KeyboardAwareScrollView>
    </>
  )
}

export default ChatScreen
