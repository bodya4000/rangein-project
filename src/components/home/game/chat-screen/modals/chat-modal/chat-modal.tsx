import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { View, TextInput } from 'react-native'

import { Send } from '@/components/icons'
import { GameModal, GradientText, Touchable } from '@/components/ui'
import { DefaultInput } from '@/components/ui/inputs'
import { globalStyles, spacing } from '@/constants'
import { useChatStore } from '@/store'
import { isStringEmpty } from '@/utils'

import { styles } from './chat-modal.style'

interface Props {
  handleSendMessage: (_: string, __?: { onSuccess?: () => void; onError?: () => void }) => void
  onClose: () => void
}

const ChatModal = ({ handleSendMessage, onClose }: Props) => {
  const { t } = useTranslation()
  const textRef = useRef<TextInput | null>(null)
  const [text, setText] = useState('')

  const setUserOption = useChatStore(state => state.setUserOption)

  const onMyOptionSend = () => {
    const msg = text
    handleSendMessage(msg, {
      onSuccess: () => {
        setUserOption(msg)
        onClose()
      },
      onError: onClose,
    })
  }

  useEffect(() => {
    textRef.current?.focus()
  }, [])
  return (
    <>
      <GameModal
        gap={null}
        onClose={onClose}
        style={{ paddingHorizontal: spacing.lg }}
        renderHeader={() => <GradientText tx='game.chat.enterYourAnswer' />}
        renderBody={() => (
          <View style={styles.view}>
            <DefaultInput
              ref={textRef}
              containerStyle={globalStyles.spacer}
              placeholder={t('game.chat.typeYourAnswer')}
              value={text}
              onChangeText={setText}
            />
            <Touchable onPress={onMyOptionSend} disabled={isStringEmpty(text)}>
              <Send />
            </Touchable>
          </View>
        )}
      />
    </>
  )
}

export default ChatModal
