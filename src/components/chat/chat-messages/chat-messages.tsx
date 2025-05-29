import { FlatList, View } from 'react-native'

import { globalStyles } from '@/constants/global-styles'
import { spacing } from '@/constants/spacing'

import { styles } from './chat-messages.style'
import { ReceivedMessage } from './received-message/received-message'
import { SentMessage } from './sent-message/sent-message'

const messagesData = [
  { id: 1, who: 'me', message: 'Hey Sam! I’m goog, it’s been a busy month.' },
  { id: 2, who: 'sam', message: 'Hey Sam! I’m goog, it’s been a busy month.' },
  { id: 3, who: 'me', message: 'Hey Sam! I’m goog, it’s been a busy month.' },
  { id: 4, who: 'me', message: 'Hey Sam! I’m goog, it’s been a busy month.' },
  { id: 5, who: 'sam', message: 'Hey Sam! I’m goog, it’s been a busy month.' },
  { id: 6, who: 'sam', message: 'Hey Sam! I’m goog, it’s been a busy month.' },
  { id: 7, who: 'me', message: 'Hey Sam! I’m goog, it’s been a busy month.' },
  { id: 8, who: 'sam', message: 'Hey Sam! I’m goog, it’s been a busy month.' },
  { id: 9, who: 'sam', message: 'Hey Sam! I’m goog, it’s been a busy month.' },
  { id: 10, who: 'me', message: 'Hey Sam! I’m goog, it’s been a busy month.' },
  { id: 11, who: 'me', message: 'Hey Sam! I’m goog, it’s been a busy month.' },
  { id: 12, who: 'sam', message: 'Hey Sam! I’m goog, it’s been a busy month.' },
  { id: 13, who: 'me', message: 'Hey Sam! I’m goog, it’s been a busy month.' },
  { id: 14, who: 'sam', message: 'Hey Sam! I’m goog, it’s been a busy month.' },
  { id: 15, who: 'me', message: 'Hey Sam! I’m goog, it’s been a busy month.' },
  { id: 16, who: 'me', message: 'Hey Sam! I’m goog, it’s been a busy month.' },
]

const ChatMessages = () => {
  return (
    <View style={[styles.messagesContainer, globalStyles.spacer]}>
      <FlatList
        data={messagesData}
        contentContainerStyle={{ paddingTop: spacing.lg, gap: spacing['2xl'] }}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => {
          if (item.who == 'me') return <SentMessage text={item.message} />
          return <ReceivedMessage text={item.message} />
        }}
      />
    </View>
  )
}

export default ChatMessages
