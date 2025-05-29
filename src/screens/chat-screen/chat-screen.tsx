import { KeyboardAvoidingView, View } from 'react-native'

import ChatBottom from '@/components/chat/chat-bottom/chat-bottom'
import ChatMessages from '@/components/chat/chat-messages/chat-messages'
import { IS_IOS } from '@/utils'

import { styles } from './chat-screen.style'

const ChatScreen = () => {
  return (
    <View style={styles.spacer}>
      <KeyboardAvoidingView
        style={styles.spacer}
        contentContainerStyle={styles.spacer}
        behavior={IS_IOS ? 'padding' : 'height'}
        keyboardVerticalOffset={80}
      >
        <ChatMessages />
        <ChatBottom />
      </KeyboardAvoidingView>
    </View>
  )
}

export default ChatScreen
