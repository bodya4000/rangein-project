import { KeyboardAvoidingView, View } from 'react-native'

import { ChatBottom, ChatMessages } from '@/components/chat-screen'
import { globalStyles, IS_IOS } from '@/constants'

const ChatScreen = () => {
  return (
    <View style={globalStyles.spacer}>
      <KeyboardAvoidingView
        style={globalStyles.spacer}
        contentContainerStyle={globalStyles.spacer}
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
