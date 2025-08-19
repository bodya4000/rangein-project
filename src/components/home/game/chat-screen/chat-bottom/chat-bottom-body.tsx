import { useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { TextInput, View } from 'react-native'

import { Burger, Send } from '@/components/icons'
import { Touchable } from '@/components/ui/buttons'
import { DefaultInput } from '@/components/ui/inputs'
import { colors, globalStyles } from '@/constants'
import { useSendMessageFlow } from '@/hooks/home/game/chat/use-send-message-flow'
import { useChatStore } from '@/store'
import { isStringEmpty } from '@/utils'

import { styles } from './chat-bottom.styles'

const ChatBottomBody = () => {
  const { t } = useTranslation()

  const inputRef = useRef<TextInput>(null)

  const [userTextInput, setUserTextInput] = useState('')

  const typing = useChatStore(state => state.typing)
  const showOptions = useChatStore(state => state.showOptions)
  const setShowOptions = useChatStore(state => state.setShowOptions)

  const { handleSendMessage } = useSendMessageFlow()

  if (typing) return
  const onMessageSend = () => {
    setUserTextInput('')
    inputRef.current?.blur()
    setTimeout(() => {
      handleSendMessage({ message: userTextInput })
    }, 100)
  }

  const onBurgerPress = () => {
    inputRef.current?.blur()
    setShowOptions(!showOptions)
  }

  return (
    <>
      <View style={styles.bottom}>
        <Touchable onPress={onBurgerPress}>
          <Burger />
        </Touchable>

        <DefaultInput
          containerStyle={globalStyles.spacer}
          placeholder={t('game.chat.typeYourMessage')}
          placeholderTextColor={colors.grey}
          ref={inputRef}
          value={userTextInput}
          onChangeText={setUserTextInput}
        />

        <Touchable onPress={onMessageSend} disabled={isStringEmpty(userTextInput)}>
          <Send />
        </Touchable>
      </View>
    </>
  )
}

export default ChatBottomBody
