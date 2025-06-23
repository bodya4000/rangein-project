import { useEffect, useState } from 'react'
import { KeyboardAvoidingView, View } from 'react-native'

import { useGameSetup } from '@/api'
import { ChatBottom, ChatMessages } from '@/components/chat-screen'
import { getDeviceId, globalStyles, IS_IOS } from '@/constants'

const ChatScreen = () => {
  const { data: gameData } = useGameSetup({ userId: getDeviceId() })
  const [chatMessages, setChatMessages] = useState(gameData?.messageData.messages || [])

  useEffect(() => {
    if (gameData?.messageData.messages) {
      setChatMessages(gameData.messageData.messages)
    }
  }, [gameData?.messageData.messages])

  if (!gameData) return null
  return (
    <View style={globalStyles.spacer}>
      <KeyboardAvoidingView
        style={globalStyles.spacer}
        contentContainerStyle={globalStyles.spacer}
        behavior={IS_IOS ? 'padding' : 'height'}
        keyboardVerticalOffset={80}
      >
        <ChatMessages messagesData={chatMessages} />
        <ChatBottom gameId={gameData.gameId} setChatMessages={setChatMessages} />
      </KeyboardAvoidingView>
    </View>
  )
}

export default ChatScreen
