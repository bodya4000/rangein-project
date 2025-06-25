import { Dispatch } from 'react'
import { View } from 'react-native'

import { Burger, Send } from '@/components/icons'
import { Touchable } from '@/components/ui'
import { ChatInput } from '@/components/ui/inputs'
import { useSendMessageFlow } from '@/hooks'

import { styles } from './chat-bottom.styles'
import ChatModal from './chat-modal/chat-modal'
import ChatOptions from './chat-options/chat-options'

interface Props {
  options: string[]
  gameId: string
}

const ChatBottom = ({ options, gameId }: Props) => {
  const {
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
  } = useSendMessageFlow({ gameId })
  return (
    <>
      {showOptions ? (
        <View style={styles.optionsContainer}>
          <ChatOptions
            options={options}
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
