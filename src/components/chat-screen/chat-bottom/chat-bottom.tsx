import { useRef, useState } from 'react'
import { TextInput, View } from 'react-native'

import { Burger, Send } from '@/components/icons'
import { Touchable } from '@/components/ui'
import { ChatInput } from '@/components/ui/inputs'

import { styles } from './chat-bottom.styles'
import ChatModal from './chat-modal/chat-modal'
import ChatOptions from './chat-options/chat-options'

const ChatBottom = () => {
  const inputRef = useRef<TextInput>(null)
  const [userTextInput, setUserTextInput] = useState('')
  const [showOptions, setShowOptions] = useState(false)
  const [showMyOptionModal, setShowMyOptionModal] = useState(false)

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

          <Touchable>
            <Send />
          </Touchable>
        </View>
      )}

      {showMyOptionModal && <ChatModal onClose={() => setShowMyOptionModal(false)} />}
    </>
  )
}

export default ChatBottom
