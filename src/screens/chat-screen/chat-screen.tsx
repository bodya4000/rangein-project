import { useEffect, useRef, useState } from 'react'
import { FlatList, KeyboardAvoidingView, View } from 'react-native'

import { useGameSetup } from '@/api'
import { ChatBottom, ChatMessages } from '@/components/chat-screen'
import { getDeviceId, globalStyles, IS_IOS } from '@/constants'
import { useChatStore } from '@/store'

const ChatScreen = () => {
  const flatlistRef = useRef<FlatList>(null)
  const { data: gameData } = useGameSetup({ userId: getDeviceId() })
  const messages = useChatStore(state => state.messages)
  const setMessages = useChatStore(state => state.setMessages)

  useEffect(() => {
    if (gameData?.messageData.messages) {
      setMessages(gameData.messageData.messages)
    }
  }, [gameData])

  if (!gameData) return null
  return (
    <View style={globalStyles.spacer}>
      <KeyboardAvoidingView
        style={globalStyles.spacer}
        contentContainerStyle={globalStyles.spacer}
        behavior={IS_IOS ? 'padding' : 'height'}
        keyboardVerticalOffset={80}
      >
        <ChatMessages ref={flatlistRef} messagesData={messages} />
        <ChatBottom options={gameData.options} gameId={gameData.gameId} />
      </KeyboardAvoidingView>
    </View>
  )
}

export default ChatScreen
