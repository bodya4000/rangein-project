import { useEffect, useMemo, useRef } from 'react'
import { FlatList, View } from 'react-native'

import { GameMessage, GameRole, useGameSetup } from '@/api'
import { getDeviceId, globalStyles } from '@/constants'
import { useChatStore } from '@/store'

import { styles } from './chat-messages.style'
import { ReceivedMessage } from './received-message/received-message'
import { SentMessage } from './sent-message/sent-message'

const loadingMessage: GameMessage = {
  message: '',
  messageId: '-1',
  role: GameRole.DETECTIVE_ASSISTANT_AI,
}

const ChatMessages = () => {
  const typing = useChatStore(state => state.typing)
  const messages = useChatStore(state => state.messages)
  const setMessages = useChatStore(state => state.setMessages)
  const { data: gameData } = useGameSetup({ userId: getDeviceId() })
  const messageList = useMemo(
    () => (typing ? [loadingMessage, ...messages] : messages),
    [messages, typing],
  )
  useEffect(() => {
    if (gameData) {
      setMessages(gameData.messageData.messages)
    }
  }, [gameData])

  /**
   * Auto bottom scroll
   */
  const flatlistRef = useRef<FlatList>(null)
  useEffect(() => {
    if (flatlistRef.current) {
      setTimeout(() => {
        flatlistRef.current?.scrollToOffset({ offset: 0, animated: true })
      }, 400)
    }
  }, [messages])

  return (
    <View style={styles.messagesContainer}>
      <View style={globalStyles.spacer} />
      <FlatList
        ref={flatlistRef}
        inverted
        data={messageList}
        bounces
        contentContainerStyle={styles.messageListContainer}
        keyExtractor={item => item.messageId.toString()}
        renderItem={({ item }) => {
          if (item.messageId === '-1') {
            return <ReceivedMessage typing />
          }
          return item.role === GameRole.DETECTIVE_ASSISTANT_AI ? (
            <ReceivedMessage text={item.message} />
          ) : (
            <SentMessage text={item.message} />
          )
        }}
      />
    </View>
  )
}

export default ChatMessages
