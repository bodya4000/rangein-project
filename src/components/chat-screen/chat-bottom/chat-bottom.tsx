import { Dispatch, useRef, useState } from 'react'
import { TextInput, View } from 'react-native'

import { useSendMessage } from '@/api/hooks'
import { Burger, Send } from '@/components/icons'
import { Touchable } from '@/components/ui'
import { ChatInput } from '@/components/ui/inputs'

import { styles } from './chat-bottom.styles'
import ChatModal from './chat-modal/chat-modal'
import ChatOptions from './chat-options/chat-options'

interface Props {
  gameId: string
  setChatMessages: Dispatch<any>
}

const ChatBottom = ({ gameId, setChatMessages }: Props) => {
  const sentMessagesCount = useRef<number>(0)
  const inputRef = useRef<TextInput>(null)
  const [userTextInput, setUserTextInput] = useState('')
  const [showOptions, setShowOptions] = useState(false)
  const [showMyOptionModal, setShowMyOptionModal] = useState(false)
  const { mutate: sendMessage } = useSendMessage()

  const onBurgerPress = () => {
    if (inputRef.current) {
      inputRef.current.blur()
    }
    setShowOptions(true)
  }

  const onCrossPress = () => {
    setShowOptions(false)
  }

  const onAnyOptionClick = () => {
    setShowMyOptionModal(true)
  }

  const onMyOptionClick = () => {
    setShowOptions(false)
    setShowMyOptionModal(true)
  }

  const onMessageSend = () => {
    setChatMessages(prevData => [
      ...prevData,
      { messageId: sentMessagesCount.current++, message: userTextInput },
    ])

    sendMessage(
      { gameId, message: userTextInput },
      {
        onSuccess: data =>
          setChatMessages(prevData => [
            ...prevData,
            { messageId: data.messageId, message: data.message, role: data.role },
          ]),
      },
    )
  }
  return (
    <>
      {showOptions ? (
        <View style={styles.optionsContainer}>
          <ChatOptions
            onAnyOptionClick={onAnyOptionClick}
            onCrossPress={onCrossPress}
            onMyOptionClick={onMyOptionClick}
          />
        </View>
      ) : (
        <View style={styles.bottom}>
          <Touchable onPress={onBurgerPress}>
            <Burger />
          </Touchable>

          <ChatInput ref={inputRef} value={userTextInput} onChangeText={setUserTextInput} />

          <Touchable onPress={onMessageSend}>
            <Send />
          </Touchable>
        </View>
      )}

      {showMyOptionModal && <ChatModal onClose={() => setShowMyOptionModal(false)} />}
    </>
  )
}

export default ChatBottom
