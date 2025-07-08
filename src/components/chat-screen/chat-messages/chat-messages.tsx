import { useEffect, useMemo, useRef } from 'react'
import { FlatList, View } from 'react-native'

import { GameMessage, useGameSetup, useMessages } from '@/api'
import { getDeviceId, globalStyles, QUERIES, queryClient } from '@/constants'
import { useAuthStore, useChatStore } from '@/store'
import { logJson } from '@/utils'

import { styles } from './chat-messages.style'
import { ReceivedMessage } from './received-message/received-message'
import { SentMessage } from './sent-message/sent-message'

const loadingMessage: GameMessage = {
  message: '',
  messageId: '-1',
  sender: '',
}

const ChatMessages = () => {
  const typing = useChatStore(state => state.typing)
  const messages = useChatStore(state => state.messages)
  const user = useAuthStore(state => state.user)
  const setMessages = useChatStore(state => state.setMessages)
  const { data: gameData } = useGameSetup({ userId: getDeviceId() })
  const { data: messageData } = useMessages({ gameId: gameData?.gameId ?? '' })
  const messageList = useMemo(
    () => (typing ? [loadingMessage, ...messages] : messages),
    [messages, typing],
  )
  useEffect(() => {
    if (gameData?.gameId) {
      queryClient.invalidateQueries({ queryKey: [QUERIES.MESSAGES, gameData.gameId] })
    }
  }, [gameData?.gameId])

  useEffect(() => {
    if (messageData) {
      setMessages(messageData?.content)
    }
  }, [messageData])

  useEffect(() => {
    if (gameData?.gameId) {
      queryClient.invalidateQueries({ queryKey: [QUERIES.MESSAGES, gameData.gameId] })
    }
  }, [gameData?.gameId])

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
          return item.sender == user?.username ? (
            <SentMessage text={item.message} />
          ) : (
            <ReceivedMessage sender={item.sender} text={item.message} />
          )
        }}
      />
    </View>
  )
}

export default ChatMessages
