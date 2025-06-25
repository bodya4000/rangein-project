import { useState } from 'react'
import { View } from 'react-native'

import { useGameSetup } from '@/api'
import { Send } from '@/components/icons'
import { GameModal, GradientText, Touchable } from '@/components/ui'
import { ChatInput } from '@/components/ui/inputs'
import { getDeviceId } from '@/constants'
import { useSendMessageFlow } from '@/hooks'
import { useChatStore } from '@/store'

import { styles } from './chat-modal.style'

interface Props {
  onClose?: () => void
}

const ChatModal = ({ onClose }: Props) => {
  const [text, setText] = useState('')
  const { data: gameData } = useGameSetup({ userId: getDeviceId() })
  const {} = useSendMessageFlow({ gameId: gameData?.gameId ?? '' })
  const setUserOption = useChatStore(state => state.setUserOption)

  const onMyOptionSend = () => {
    if (text) {
    }
  }
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
