import { useRouter } from 'expo-router'
import { forwardRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { StyleSheet, View } from 'react-native'

import { Send } from '@/components/icons'
import { GameModal, GradientText, Touchable } from '@/components/ui'
import { DefaultInput } from '@/components/ui/inputs'
import { GameModalRef } from '@/components/ui/modals/game-modal'
import { colors, globalStyles, spacing } from '@/constants'
import { useSendMessageFlow } from '@/hooks/home/game/chat/use-send-message-flow'
import { useChatStore } from '@/store'

export const ChatOptionModalScreen = () => {
  const { t } = useTranslation()
  const router = useRouter()

  const [textValue, setTextValue] = useState('')

  const setShowMyOptionModal = useChatStore(state => state.setShowMyOptionModal)
  const setUserOption = useChatStore(state => state.setUserOption)

  const { handleSendMessage } = useSendMessageFlow()

  const onSend = () => {
    setUserOption(textValue)
    handleSendMessage({ message: textValue })
  }

  const handleClose = () => {
    setShowMyOptionModal(false)
    router.back()
  }

  return (
    <GameModal onClose={handleClose}>
      <View style={styles.body}>
        <GradientText style={styles.title} tx='game.chat.enterYourAnswer' />
        <View style={styles.inputContainer}>
          <DefaultInput
            placeholder={t('game.chat.enterYourAnswer')}
            placeholderTextColor={colors.grey}
            value={textValue}
            onChangeText={setTextValue}
            style={globalStyles.spacer}
            containerStyle={globalStyles.spacer}
          />
          <Touchable onPress={onSend}>
            <Send />
          </Touchable>
        </View>
      </View>
    </GameModal>
  )
}

ChatOptionModalScreen.displayName = 'ChatModal'

const styles = StyleSheet.create({
  body: {
    paddingVertical: spacing.lg,
    gap: spacing.lg,
  },

  title: {
    textAlign: 'center',
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.xl,
    paddingHorizontal: spacing.lg,
    height: 40,
  },
})
