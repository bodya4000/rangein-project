import { useEffect, useMemo, useRef } from 'react'
import { FlatList, View } from 'react-native'

import { GameMessage, useGameSetup, useMessages } from '@/api'
import { colors, globalStyles } from '@/constants'
import { useAuthStore, useChatStore } from '@/store'
import { getDeviceId } from '@/utils'

import { styles } from './chat-messages.style'
import { ReceivedMessage } from './received-message/received-message'
import { SentMessage } from './sent-message/sent-message'

const TYPING_ID = '-1'
const loadingMessage: GameMessage = {
  message: '',
  messageId: TYPING_ID,
  sender: '',
}

const ChatMessages = () => {
  const typing = useChatStore(state => state.typing)
  const messages = useChatStore(state => state.messages)
  const newMessages = useChatStore(state => state.newMessages)
  const user = useAuthStore(state => state.user)
  const setMessages = useChatStore(state => state.setMessages)
  const setTyping = useChatStore(state => state.setTyping)
  const popNewMessages = useChatStore(state => state.popNewMessages)
  const { data: gameData } = useGameSetup({ userId: getDeviceId() })
  const { data: messageData } = useMessages({ gameId: gameData?.gameId ?? '' })
  const messageList = useMemo(
    () => (typing ? [loadingMessage, ...messages] : messages),
    [messages, typing],
  )

  useEffect(() => {
    if (newMessages.length === 0) return

    let idx = 0

    const handleMessage = () => {
      if (idx >= newMessages.length) return

      setTyping(true)

      setTimeout(() => {
        popNewMessages()
        setTyping(false)
        idx++
        handleMessage()
      }, 1000)
    }

    handleMessage()
  }, [newMessages])

  useEffect(() => {
    if (messageData) {
      setMessages(messageData?.content)
    }
  }, [messageData])

  /**
   * Auto bottom scroll
   */
  const flatlistRef = useRef<FlatList>(null)
  useEffect(() => {
    if (flatlistRef.current && messages.length > 0) {
      setTimeout(() => {
        flatlistRef.current?.scrollToOffset({ offset: 0, animated: true })
      }, 400)
    }
  }, [messages.length])

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
          if (item.messageId === TYPING_ID) {
            return <ReceivedMessage colors={colors.gradientMetal1} typing />
          }
          return item.sender == user?.username || item.sender === 'PLAYER' ? (
            <SentMessage text={item.message} />
          ) : (
            <ReceivedMessage colors={item.colors} sender={item.sender} text={item.message} />
          )
        }}
      />
    </View>
  )
}

export default ChatMessages
