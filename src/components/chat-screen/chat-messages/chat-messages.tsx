import { log } from 'console'

import { forwardRef, useEffect, useMemo } from 'react'
import { FlatList, View } from 'react-native'

import { GameMessage, GameRole } from '@/api'
import { useChatStore } from '@/store'

import { styles } from './chat-messages.style'
import { ReceivedMessage } from './received-message/received-message'
import { SentMessage } from './sent-message/sent-message'

interface Props {
  messagesData: GameMessage[]
}

const loadingMessage: GameMessage = {
  message: '',
  messageId: '-1',
  role: GameRole.DETECTIVE_ASSISTANT_AI,
}

const ChatMessages = forwardRef<FlatList<GameMessage>, Props>(({ messagesData }, ref) => {
  const typing = useChatStore(state => state.typing)
  const messageList = useMemo(
    () => (typing ? [loadingMessage, ...messagesData] : messagesData),
    [messagesData, typing],
  )

  useEffect(() => {
    if (ref && typeof ref !== 'function' && ref.current) {
      setTimeout(() => {
        ref.current?.scrollToOffset({ offset: 0, animated: true })
      }, 400)
    }
  }, [messagesData])
  return (
    <View style={styles.messagesContainer}>
      <FlatList
        ref={ref}
        inverted
        data={messageList}
        bounces={true}
        contentContainerStyle={styles.messageListContainer}
        keyExtractor={item => item.messageId.toString()}
        renderItem={({ item }) => {
          if (item.messageId == '-1') return <ReceivedMessage typing={true} />
          if (item.role === GameRole.DETECTIVE_ASSISTANT_AI)
            return <ReceivedMessage text={item.message} />
          else return <SentMessage text={item.message} />
        }}
      />
    </View>
  )
})

ChatMessages.displayName = 'ChatMessages'

export default ChatMessages
