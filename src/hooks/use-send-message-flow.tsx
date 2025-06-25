import { useRef, useState } from 'react'
import { TextInput } from 'react-native'
import uuid from 'react-native-uuid'

import { GameMessage, GameRole } from '@/api'
import { useSendMessage } from '@/api/hooks'
import { QUERIES, queryClient } from '@/constants'
import { useChatStore } from '@/store'

export const useSendMessageFlow = ({
  gameId,
  onNewMessage = () => {},
}: {
  gameId: string
  onNewMessage?: () => void
}) => {
  const inputRef = useRef<TextInput>(null)
  const [userTextInput, setUserTextInput] = useState('')
  const [showOptions, setShowOptions] = useState(false)
  const [showMyOptionModal, setShowMyOptionModal] = useState(false)
  const setTyping = useChatStore(state => state.setTyping)
  const addMessage = useChatStore(state => state.addMessage)

  const { mutate: sendMessage } = useSendMessage()

  const handleSendMessage = (message: string, onSuccess = () => {}) => {
    setTyping(true)
    onNewMessage()
    if (!message.trim()) return

    const tempId = uuid.v4()
    const newMessage: GameMessage = { messageId: tempId, message, role: GameRole.DETECTIVE_USER }
    addMessage(newMessage)

    inputRef.current?.blur()

    sendMessage(
      { gameId, message },
      {
        onSuccess: data => {
          setTyping(false)
          onNewMessage()
          const newMessage: GameMessage = {
            messageId: data.messageId,
            message: data.message,
            role: data.role,
          }
          addMessage(newMessage)
          onSuccess()
          queryClient.invalidateQueries({ queryKey: [QUERIES.GAME] })
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

  const onCrossPress = () => {
    setShowOptions(false)
  }

  return {
    inputRef,
    userTextInput,
    setUserTextInput,
    showOptions,
    showMyOptionModal,
    setShowMyOptionModal,
    onBurgerPress,
    onCrossPress,
    onAnyOptionClick,
    onMyOptionClick,
    onMessageSend,
  }
}
