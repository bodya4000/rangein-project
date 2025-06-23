import { FlatList, View } from 'react-native'

import { logJson } from '@/utils'

import { styles } from './chat-messages.style'
import { ReceivedMessage } from './received-message/received-message'
import { SentMessage } from './sent-message/sent-message'

type Message = {
  messageId: string
  role: string
  message: string
}

interface Props {
  messagesData: Message[]
}

const ChatMessages = ({ messagesData }: Props) => {
  return (
    <View style={[styles.messagesContainer]}>
      <FlatList
        data={messagesData}
        bounces={true}
        contentContainerStyle={styles.messageListContainer}
        keyExtractor={item => item.messageId.toString()}
        renderItem={({ item }) => {
          if (item.role == 'DETECTIVE_ASSISTANT_AI') return <ReceivedMessage text={item.message} />
          return <SentMessage text={item.message} />
        }}
      />
    </View>
  )
}

export default ChatMessages
