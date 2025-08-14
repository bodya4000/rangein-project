import { useCallback } from 'react'
import { Alert } from 'react-native'

import { SendMessageResponse, useSendMessage } from '@/api'
import { useAuthStore, useChatStore } from '@/store'
import { isStringEmpty, newUserMessage } from '@/utils'

export interface SendMessageFlowFuncProps {
  message: string
  onSuccess?: () => void
  onError?: () => void
}

export const useSendMessageFlow = () => {
  const user = useAuthStore(state => state.user)
  const gameId = useChatStore(state => state.gameId)
  const onSendMessage = useChatStore(state => state.onSendMessage)
  const onSuccessfullyMessageSent = useChatStore(state => state.onSuccessfullyMessageSent)
  const setTyping = useChatStore(state => state.setTyping)

  const { mutate: sendMessage } = useSendMessage()

  const validate = (message: string) => {
    if (isStringEmpty(message)) return false
    if (!gameId) return
    if (!user?.username) return false
    return true
  }

  const handleSendMessage = useCallback(
    ({ message, onSuccess, onError }: SendMessageFlowFuncProps) => {
      if (!validate(message)) return
      console.log('sending message ', message)

      const newMessage = newUserMessage(message, user?.username)
      onSendMessage(newMessage)
      console.log('saved in mobile store message ', message)
      sendMessage(
        { gameId, message },
        {
          onSuccess: (response: SendMessageResponse) => {
            console.log('successfully saved on api ', response)
            onSuccess?.()
            onSuccessfullyMessageSent(response)
          },
          onError: () => {
            onError?.()
            Alert.alert('Error!')
            setTyping(false)
          },
        },
      )
    },
    [
      validate,
      user?.username,
      onSendMessage,
      sendMessage,
      gameId,
      onSuccessfullyMessageSent,
      setTyping,
    ],
  )

  return { handleSendMessage }
}
