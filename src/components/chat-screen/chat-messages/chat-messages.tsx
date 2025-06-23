import { forwardRef } from 'react'
import { FlatList, View } from 'react-native'

import { GameMessage, GameRole } from '@/api'

import { styles } from './chat-messages.style'
import { ReceivedMessage } from './received-message/received-message'
import { SentMessage } from './sent-message/sent-message'

interface Props {
  messagesData: GameMessage[]
}

const ChatMessages = forwardRef<FlatList<GameMessage>, Props>(({ messagesData }, ref) => {
  return (
    <View style={styles.messagesContainer}>
      <FlatList
        ref={ref}
        data={messagesData}
        bounces={true}
        contentContainerStyle={styles.messageListContainer}
        keyExtractor={item => item.messageId.toString()}
        renderItem={({ item }) =>
          item.role === GameRole.DETECTIVE_ASSISTANT_AI ? (
            <ReceivedMessage text={item.message} />
          ) : (
            <SentMessage text={item.message} />
          )
        }
      />
    </View>
  )
})

ChatMessages.displayName = 'ChatMessages'

export default ChatMessages
