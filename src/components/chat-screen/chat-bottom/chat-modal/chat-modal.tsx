import { useEffect, useRef, useState } from 'react'
import { View, TextInput } from 'react-native'

import { GameMessage, SendMessageResponse, useGameSetup, useSendMessage } from '@/api'
import { Send } from '@/components/icons'
import { GameModal, GradientText, Touchable } from '@/components/ui'
import { ChatInput } from '@/components/ui/inputs'
import { getDeviceId } from '@/constants'
import { useChatStore } from '@/store'
import { isStringEmpty, newUserMessage } from '@/utils'

import { styles } from './chat-modal.style'

interface Props {
  onClose: () => void
}

const ChatModal = ({ onClose }: Props) => {
  const textRef = useRef<TextInput | null>(null)
  const [text, setText] = useState('')
  const [openModal, setOpenModal] = useState(true)
  const { data: gameData } = useGameSetup({ userId: getDeviceId() })
  const { mutate: sendMessage } = useSendMessage()

  const setUserOption = useChatStore(state => state.setUserOption)
  const setTyping = useChatStore(state => state.setTyping)
  const addMessage = useChatStore(state => state.addMessage)

  const onSuccessMessageSend = (resp: SendMessageResponse) => {
    setTyping(false)
    for (const msg of resp.messages) {
      addMessage({ message: msg.message, messageId: msg.messageId, sender: msg.sender })
    }
    setUserOption(text)
    setText('')
    onClose()
  }

  const onMyOptionSend = () => {
    if (gameData?.gameId) {
      setTyping(true)
      const newMessage = newUserMessage(text)
      addMessage(newMessage)
      sendMessage(
        { gameId: gameData.gameId, message: text },
        {
          onSuccess: onSuccessMessageSend,
          onError: err => {
            onClose()
          },
        },
      )
      setOpenModal(false)
    }
  }

  useEffect(() => {
    if (textRef.current) {
      textRef.current.focus()
    }
  }, [textRef])
  return (
    <View>
      {openModal && (
        <GameModal
          onClose={onClose}
          renderHeader={() => <GradientText>Enter your answer</GradientText>}
          renderBody={() => (
            <View style={styles.view}>
              <ChatInput ref={textRef} value={text} onChangeText={setText} />
              <Touchable onPress={onMyOptionSend} disabled={isStringEmpty(text)}>
                <Send width={42} height={42} />
              </Touchable>
            </View>
          )}
        />
      )}
    </View>
  )
}

export default ChatModal
