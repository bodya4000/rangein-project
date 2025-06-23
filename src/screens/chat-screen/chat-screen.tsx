import { useState } from 'react'
import { KeyboardAvoidingView, View } from 'react-native'

import { useGameInfo } from '@/api/hooks'
import { ChatBottom, ChatMessages } from '@/components/chat-screen'
import { getDeviceId, globalStyles, IS_IOS } from '@/constants'

const ChatScreen = () => {
  const { data: gameData } = useGameInfo({ userId: getDeviceId() })
  const [chatMessages, setChatMessages] = useState(gameData.messages.content)
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
