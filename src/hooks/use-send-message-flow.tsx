import { useRef, useState } from 'react'
import { TextInput } from 'react-native'
import uuid from 'react-native-uuid'

import { useSendMessage } from '@/api/hooks'
import { QUERIES, queryClient } from '@/constants'

export const useSendMessageFlow = ({
  gameId,
  onNewMessage,
  setChatMessages,
}: {
  gameId: string
  onNewMessage: () => void
  setChatMessages: React.Dispatch<React.SetStateAction<any[]>>
}) => {
  const inputRef = useRef<TextInput>(null)
  const [userTextInput, setUserTextInput] = useState('')
  const [showOptions, setShowOptions] = useState(false)
  const [showMyOptionModal, setShowMyOptionModal] = useState(false)

  const { mutate: sendMessage } = useSendMessage()

  const handleSendMessage = (message: string, onSuccess = () => {}) => {
    onNewMessage()
    if (!message.trim()) return

    const tempId = uuid.v4()
    const newMessage = { messageId: tempId, message }

    setChatMessages(prev => [...prev, newMessage])

    inputRef.current?.blur()

    sendMessage(
      { gameId, message },
      {
        onSuccess: data => {
          onNewMessage()
          const newMessage = { messageId: data.messageId, message: data.message, role: data.role }
          setChatMessages(prev => [...prev, newMessage])
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
