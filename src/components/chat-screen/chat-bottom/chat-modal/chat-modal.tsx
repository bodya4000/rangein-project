import { useState } from 'react'
import { View } from 'react-native'

import { Send } from '@/components/icons'
import { GameModal, GradientText, Touchable } from '@/components/ui'
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
      renderHeader={() => <GradientText>Enter your answer</GradientText>}
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
