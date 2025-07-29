import { useFocusEffect } from 'expo-router'
import React, { useEffect, useRef, useState } from 'react'
import { Keyboard, Animated, ScrollView } from 'react-native'
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
        bottomOffset={20}
        extraKeyboardSpace={0}
        showsVerticalScrollIndicator={false}
      >
        <ChatMessages />
        <ChatBottom />
      </KeyboardAwareScrollView>
    </>
  )
}

export default ChatScreen
