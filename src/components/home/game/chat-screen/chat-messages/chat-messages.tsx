import { useEffect } from 'react'
import { StyleSheet, View } from 'react-native'

import { GameMessage, useGetGame, useMessages } from '@/api'
import { colors, spacing } from '@/constants'
import { useAuthStore, useChatStore } from '@/store'
import { getDeviceId } from '@/utils'

import MessagesList from './lists/message-list'
import { SkeletonList } from './lists/skeleton-list'
import { ReceivedMessage } from './messages/received-message/received-message'

const TYPING_ID = '-1'
const loadingMessage: GameMessage = {
  message: '',
  messageId: TYPING_ID,
  sender: '',
  colors: colors.gradientMetal4,
}

const ChatMessages = () => {
  const typing = useChatStore(state => state.typing)
  const messages = useChatStore(state => state.messages)
  const newMessages = useChatStore(state => state.newMessages)
  const user = useAuthStore(state => state.user)
  const setMessages = useChatStore(state => state.setMessages)
  const setTyping = useChatStore(state => state.setTyping)
  const popNewMessages = useChatStore(state => state.popNewMessages)
  const { data: gameData, isPending: gameDataLoading } = useGetGame({ userId: getDeviceId() })
  const { data: messageData, isPending: messageDataLoading } = useMessages({
    gameId: gameData?.gameId ?? '',
  })

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

  if (gameDataLoading || messageDataLoading) return <SkeletonList />

  return (
    <>
      <View style={styles.messagesContainer}>
        <View style={styles.content}></View>
        <MessagesList messages={messages} user={user} />
        {typing && <ReceivedMessage colors={loadingMessage.colors} typing />}
      </View>
    </>
  )
}

export const styles = StyleSheet.create({
  content: { flex: 1000 },
  messagesContainer: {
    gap: spacing['sm'],
    flex: 1,
  },
})

export default ChatMessages
