import { useEffect, useRef, useState } from 'react'
import { View, TextInput } from 'react-native'

import { Send } from '@/components/icons'
import { GameModal, GradientText, Touchable } from '@/components/ui'
import { DefaultInput } from '@/components/ui/inputs'
import { globalStyles, spacing } from '@/constants'
import { useChatStore } from '@/store'
import { isStringEmpty } from '@/utils'

import { styles } from './chat-modal.style'

interface Props {
  handleSendMessage: (_: string, __?: { onSuccess?: () => void; onError?: () => void }) => void
  onClose: () => void
}

const ChatModal = ({ handleSendMessage, onClose }: Props) => {
  const textRef = useRef<TextInput | null>(null)
  const [text, setText] = useState('')

  const setUserOption = useChatStore(state => state.setUserOption)

  const onMyOptionSend = () => {
    const msg = text
    handleSendMessage(msg, {
      onSuccess: () => {
        setUserOption(msg)
        onClose()
      },
      onError: onClose,
    })
  }

  useEffect(() => {
    textRef.current?.focus()
  }, [])
  return (
    <GameModal
      onClose={onClose}
      style={{ paddingHorizontal: spacing.lg }}
      renderHeader={() => <GradientText>Enter your answer</GradientText>}
      renderBody={() => (
        <View style={styles.view}>
          <DefaultInput
            ref={textRef}
            containerStyle={globalStyles.spacer}
            placeholder='Type your answer...'
            value={text}
            onChangeText={setText}
          />
          <Touchable onPress={onMyOptionSend} disabled={isStringEmpty(text)}>
            <Send width={42} height={42} />
          </Touchable>
        </View>
      )}
    />
  )
}

export default ChatModal
