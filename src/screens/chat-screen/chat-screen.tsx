import { KeyboardAvoidingView, View } from 'react-native'

import ChatBottom from '@/components/chat/chat-bottom/chat-bottom'
import ChatMessages from '@/components/chat/chat-messages/chat-messages'
import { globalStyles } from '@/constants/global-styles'
import { IS_IOS } from '@/utils'

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
