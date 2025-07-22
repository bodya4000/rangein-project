import { useRouter } from 'expo-router'
import { useEffect, useMemo, useRef, useState } from 'react'
import { TextInput, View } from 'react-native'

import { GameResult, SendMessageResponse, useGameSetup, useSendMessage } from '@/api'
import { Burger, Send } from '@/components/icons'
import { ResultModal, Touchable } from '@/components/ui'
import { DefaultInput } from '@/components/ui/inputs'
import { globalStyles, QUERIES, queryClient } from '@/constants'
import { useAuthStore, useChatStore } from '@/store'
import { getDeviceId, isStringEmpty, newUserMessage } from '@/utils'

import { styles } from './chat-bottom.styles'
import ChatModal from './chat-modal/chat-modal'
import ChatOptions from './chat-options/chat-options'

const ChatBottom = () => {
  const router = useRouter()
  const deviceId = useMemo(getDeviceId, [])
  const { data: gameData } = useGameSetup({ userId: deviceId })

  const inputRef = useRef<TextInput>(null)
  const [userTextInput, setUserTextInput] = useState('')
  const [showOptions, setShowOptions] = useState(false)
  const [showMyOptionModal, setShowMyOptionModal] = useState(false)
  const [gameResult, setGameResult] = useState<{ message: string; score: GameResult } | null>(null)

  const user = useAuthStore(state => state.user)
  const typing = useChatStore(state => state.typing)
  const setTyping = useChatStore(state => state.setTyping)
  const addMessage = useChatStore(state => state.addMessage)
  const setNewMessages = useChatStore(state => state.setNewMessages)
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
    const newMessage = newUserMessage(message, user?.username)
    addMessage(newMessage)
    inputRef.current?.blur()
    sendMessage(
      { gameId, message },
      {
        onSuccess: (response: SendMessageResponse) => {
          // logJson(response)
          // for (let msg of response.messages) {
          //   addMessage({ message: msg.message, messageId: msg.messageId, sender: msg.sender })
          // }
          setNewMessages(response.messages)
          setTyping(false)
          setOptions(response.options)
          if (response.finished) {
            setGameResult({
              message: response.summary,
              score: response.score ?? 0,
            })
          }
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

  const onFinishGame = () => {
    queryClient.invalidateQueries({ queryKey: [QUERIES.GAME] })
    queryClient.invalidateQueries({ queryKey: [QUERIES.MESSAGES] })
    queryClient.invalidateQueries({ queryKey: [QUERIES.USER] })
    router.replace('/')
  }

  if (!typing)
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

            <DefaultInput
              containerStyle={globalStyles.spacer}
              placeholder='Type your message...'
              ref={inputRef}
              value={userTextInput}
              onChangeText={setUserTextInput}
            />

            <Touchable onPress={onMessageSend} disabled={isStringEmpty(userTextInput)}>
              <Send />
            </Touchable>
          </View>
        )}
        {gameResult && <ResultModal stars={gameResult.score} onClose={onFinishGame} />}
        {showMyOptionModal && <ChatModal onClose={() => setShowMyOptionModal(false)} />}
      </>
    )
}

export default ChatBottom
