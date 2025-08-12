import React from 'react'
import { KeyboardAvoidingView } from 'react-native-keyboard-controller'

import { ChatBottom, ChatMessages } from '@/components/home/game/chat-screen'

const ChatScreen = () => {
  return (
    <>
      <ChatMessages />
      <KeyboardAvoidingView>
        <ChatBottom />
      </KeyboardAvoidingView>
    </>
  )
}

export default ChatScreen
