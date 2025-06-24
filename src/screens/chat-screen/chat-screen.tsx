import { useEffect, useRef, useState } from 'react'
import { FlatList, KeyboardAvoidingView, View } from 'react-native'

import { useGameSetup } from '@/api'
import { ChatBottom, ChatMessages } from '@/components/chat-screen'
import { getDeviceId, globalStyles, IS_IOS } from '@/constants'
import { logJson } from '@/utils'

const ChatScreen = () => {
  const flatlistRef = useRef<FlatList>(null)
  const { data: gameData } = useGameSetup({ userId: getDeviceId() })
  const [chatMessages, setChatMessages] = useState(gameData?.messageData.messages || [])

  useEffect(() => {
    if (gameData?.messageData.messages) {
      setChatMessages(gameData.messageData.messages)
    }
  }, [gameData])

  const onNewMessage = () => {
    setTimeout(() => {
      flatlistRef.current?.scrollToEnd({ animated: true })
    }, 400) // time to give a flat list time to rerender list
  }
  if (!gameData) return null
  return (
    <View style={globalStyles.spacer}>
      <KeyboardAvoidingView
        style={globalStyles.spacer}
        contentContainerStyle={globalStyles.spacer}
        behavior={IS_IOS ? 'padding' : 'height'}
        keyboardVerticalOffset={80}
      >
        <ChatMessages ref={flatlistRef} messagesData={chatMessages} />
        <ChatBottom
          options={gameData.options}
          onNewMessage={onNewMessage}
          gameId={gameData.gameId}
          setChatMessages={setChatMessages}
        />
      </KeyboardAvoidingView>
    </View>
  )
}

export default ChatScreen
