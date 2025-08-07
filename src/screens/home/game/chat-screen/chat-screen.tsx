import { useFocusEffect } from 'expo-router'
import React, { useRef } from 'react'
import { ScrollView, View } from 'react-native'

import { ChatBottom, ChatMessages } from '@/components/home/game/chat-screen'
import { WINDOW_HEIGHT } from '@/constants'

const ChatScreen = () => {
  const scrollRef = useRef<ScrollView | null>(null)

  // useFocusEffect(
  //   React.useCallback(() => {
  //     if (scrollRef.current) {
  //       scrollRef.current.scrollToEnd({ animated: false })
  //     }
  //   }, []),
  // )
  return (
    <View style={{ flex: 1 }}>
      {/* <KeyboardAwareScrollView
        ref={scrollRef}
        extraKeyboardSpace={0}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ minHeight: WINDOW_HEIGHT }}
      > */}
      <ChatMessages />
      <ChatBottom />
      {/* </KeyboardAwareScrollView> */}
    </View>
  )
}

export default ChatScreen
