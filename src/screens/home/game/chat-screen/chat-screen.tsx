import { KeyboardAvoidingView } from 'react-native'

import { ChatBottom, ChatMessages } from '@/components/home/game/chat-screen'
import { IS_IOS } from '@/constants'

import { styles } from './chat-screen.style'

const ChatScreen = () => {
  return (
    <KeyboardAvoidingView
      behavior='padding'
      keyboardVerticalOffset={IS_IOS ? 70 : 0}
      style={styles.container}
      contentContainerStyle={styles.container}
    >
      <ChatMessages />
      <ChatBottom />
    </KeyboardAvoidingView>
  )
}

export default ChatScreen
