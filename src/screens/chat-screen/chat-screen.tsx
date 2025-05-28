import { useState } from 'react'
import { FlatList, KeyboardAvoidingView, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { ReceivedMessage } from '@/components/chat/received-message/received-message'
import { SentMessage } from '@/components/chat/sent-message/sent-message'
import { Burger, Send } from '@/components/icons'
import Touchable from '@/components/ui/buttons/touchable/touchabe'
import { ChatInput } from '@/components/ui/inputs'
import { IS_IOS } from '@/utils'

import { styles } from './chat-screen.style'
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

const ChatScreen = () => {
  const [userTextInput, setUserTextInput] = useState('')
  return (
    <SafeAreaView style={styles.screen}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={IS_IOS ? 'padding' : 'height'}
        keyboardVerticalOffset={150}
      >
        <View style={styles.messagesContainer}>
          <FlatList
            data={messagesData}
            contentContainerStyle={styles.messagesContainer}
            scrollEnabled
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => {
              if (item.who == 'me') return <SentMessage text={item.message} />
              return <ReceivedMessage text={item.message} />
            }}
          />
        </View>

        <View style={styles.bottom}>
          <Touchable>
            <Burger />
          </Touchable>

          <ChatInput value={userTextInput} onChangeText={setUserTextInput} />

          <Touchable>
            <Send />
          </Touchable>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default ChatScreen
