import { KeyboardAvoidingView, View } from 'react-native'

import { ChatBottom, ChatMessages } from '@/components/chat-screen'

import { styles } from './chat-screen.style'

const ChatScreen = () => {
  return (
    <KeyboardAvoidingView behavior='height' style={styles.container}>
      <ChatMessages />
      <ChatBottom />
    </KeyboardAvoidingView>
  )
}

export default ChatScreen
