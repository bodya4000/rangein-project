import { forwardRef, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { StyleSheet, View } from 'react-native'

import { Send } from '@/components/icons'
import { GameModal, GradientText, Touchable } from '@/components/ui'
import { DefaultInput } from '@/components/ui/inputs'
import { GameModalRef } from '@/components/ui/modals/game-modal'
import { colors, globalStyles, IS_ANDROID, spacing, WINDOW_WIDTH } from '@/constants'
import { useSendMessageFlow } from '@/hooks/home/game/chat/use-send-message-flow'
import { useChatStore } from '@/store'

interface Props {
  onClose?: () => void
}

export const ChatModal = forwardRef<GameModalRef, Props>(({ onClose = () => {} }, ref) => {
  const { t } = useTranslation()

  const [textValue, setTextValue] = useState('')

  const setShowMyOptionModal = useChatStore(state => state.setShowMyOptionModal)
  const setUserOption = useChatStore(state => state.setUserOption)

  const { handleSendMessage } = useSendMessageFlow()

  const onSend = () => {
    setUserOption(textValue)
    handleSendMessage({ message: textValue })
  }

  const handleClose = () => {
    onClose()
    setShowMyOptionModal(false)
  }

  // useEffect(() => {
  //   if (IS_ANDROID) {
  //     // AvoidSoftInput.setAdjustNothing()
  //   }
  // }, [])

  return (
    <GameModal ref={ref} onClose={handleClose}>
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
})

ChatModal.displayName = 'ChatModal'

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: WINDOW_WIDTH - 40,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    height: '100%',
    width: '100%',
    borderRadius: spacing['xl'],
  },

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
