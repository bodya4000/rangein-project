import { useEffect, useMemo, useRef, useState } from 'react'
import { TextInput, View } from 'react-native'

import { GameMessage, GameRole, useGameSetup, useSendMessage } from '@/api'
import { Burger, Send } from '@/components/icons'
import { Touchable } from '@/components/ui'
import { ChatInput } from '@/components/ui/inputs'
import { getDeviceId } from '@/constants'
import { useChatStore } from '@/store'
import { isStringEmpty, newId } from '@/utils'

import { styles } from './chat-bottom.styles'
import ChatModal from './chat-modal/chat-modal'
import ChatOptions from './chat-options/chat-options'

const ChatBottom = () => {
  const deviceId = useMemo(getDeviceId, [])
  const { data: gameData } = useGameSetup({ userId: deviceId })

  const inputRef = useRef<TextInput>(null)
  const [userTextInput, setUserTextInput] = useState('')
  const [showOptions, setShowOptions] = useState(false)
  const [showMyOptionModal, setShowMyOptionModal] = useState(false)

  const setTyping = useChatStore(state => state.setTyping)
  const addMessage = useChatStore(state => state.addMessage)
  const setOptions = useChatStore(state => state.setOptions)

  const { mutate: sendMessage } = useSendMessage()

  useEffect(() => {
    if (gameData?.options) {
      setOptions(gameData.options)
    }
  }, [gameData?.options])

  if (!gameData) return null
  const { gameId } = gameData

  const handleSendMessage = (message: string) => {
    if (isStringEmpty(message)) return

    setTyping(true)
    const newMessage: GameMessage = {
      messageId: newId(),
      message,
      role: GameRole.DETECTIVE_USER,
    }
    addMessage(newMessage)
    inputRef.current?.blur()

    sendMessage(
      { gameId, message },
      {
        onSuccess: receivedMessage => {
          setTyping(false)
          addMessage(receivedMessage)
          setOptions(receivedMessage.options)
        },
      },
    )
  }

  const onMessageSend = () => {
    handleSendMessage(userTextInput)
    setUserTextInput('')
  }

  const onAnyOptionClick = (option: string) => {
    setShowOptions(false)
    handleSendMessage(option)
  }

  const onMyOptionClick = () => {
    setShowOptions(false)
    setShowMyOptionModal(true)
  }

  const onBurgerPress = () => {
    inputRef.current?.blur()
    setShowOptions(true)
  }

  return (
    <>
      {showOptions ? (
        <View style={styles.optionsContainer}>
          <ChatOptions
            onAnyOptionClick={onAnyOptionClick}
            onCrossPress={() => setShowOptions(false)}
            onMyOptionClick={onMyOptionClick}
          />
        </View>
      ) : (
        <View style={styles.bottom}>
          <Touchable onPress={onBurgerPress}>
            <Burger />
          </Touchable>

          <ChatInput ref={inputRef} value={userTextInput} onChangeText={setUserTextInput} />

          <Touchable onPress={onMessageSend} disabled={isStringEmpty(userTextInput)}>
            <Send />
          </Touchable>
        </View>
      )}

      {showMyOptionModal && <ChatModal onClose={() => setShowMyOptionModal(false)} />}
    </>
  )
}

export default ChatBottom
