import { log } from 'console'

import { useState } from 'react'
import { KeyboardAvoidingView, View } from 'react-native'

import { useGameInfo, useGameMessages } from '@/api/hooks'
import { ChatBottom, ChatMessages } from '@/components/chat-screen'
import { globalStyles } from '@/constants'
import { IS_IOS, logJson } from '@/utils'

const ChatScreen = () => {
  const { data: gameData } = useGameInfo()
  const { data: messagesData } = useGameMessages(gameData.gameId)
  const [chatMessages, setChatMessages] = useState(messagesData.messages.content)

  logJson(messagesData.messages.content)

  if (!gameData || !messagesData) return null
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
