import { memo, useCallback, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Keyboard, StyleSheet, View } from 'react-native'

import { Send } from '@/components/icons'
import { GameModal, GradientText, Touchable } from '@/components/ui'
import { DefaultInput } from '@/components/ui/inputs'
import { GameModalRef } from '@/components/ui/modals/game-modal'
import { colors, globalStyles, spacing, WINDOW_WIDTH } from '@/constants'
import { SendMessageFlowFuncProps } from '@/hooks/home/game/chat/use-send-message-flow'
import { useChatStore } from '@/store'

interface Props {
  handleSendMessage?: (_: SendMessageFlowFuncProps) => void
  onClose?: () => void
}

const ChatModalComponent = ({ handleSendMessage, onClose }: Props) => {
  const { t } = useTranslation()
  const ref = useRef<GameModalRef>(null)

  const [textValue, setTextValue] = useState('')
  const setUserOption = useChatStore(state => state.setUserOption)
  const setShowMyOptionModal = useChatStore(state => state.setShowMyOptionModal)

  const onSend = useCallback(() => {
    Keyboard.dismiss()
    setUserOption(textValue)
    handleSendMessage?.({ message: textValue })
    handleClose()
  }, [textValue, setUserOption, handleSendMessage])

  const handleClose = useCallback(() => {
    onClose?.()
    setShowMyOptionModal(false)
  }, [])

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
}

export const ChatModal = ChatModalComponent

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
