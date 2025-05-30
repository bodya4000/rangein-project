import { useState } from 'react'
import { View } from 'react-native'

import { Send } from '@/components/icons'
import { GameModal, Text } from '@/components/ui'
import Touchable from '@/components/ui/buttons/touchable/touchable'
import { ChatInput } from '@/components/ui/inputs'

import { styles } from './chat-modal.style'

interface Props {
  onClose?: () => void
}

const ChatModal = ({ onClose }: Props) => {
  const [text, setText] = useState('')
  return (
    <GameModal
      onClose={onClose}
      renderHeader={() => <Text>Enter your answer</Text>}
      renderBody={() => (
        <View style={styles.view}>
          <ChatInput value={text} onChangeText={setText} />
          <Touchable>
            <Send width={42} height={42} />
          </Touchable>
        </View>
      )}
    />
  )
}

export default ChatModal
