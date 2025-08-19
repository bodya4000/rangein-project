import React, { forwardRef, memo } from 'react'
import { View } from 'react-native'

import { GameModal, GradientText, Text } from '@/components/ui'
import { GameModalRef } from '@/components/ui/modals/game-modal'
import { colors } from '@/constants'
import { useChatStore } from '@/store'

import { styles } from './429-modal.style'

interface Props {
  onClose?: () => void
}

const Modal429Base = forwardRef<GameModalRef, Props>(({ onClose = () => {} }, ref) => {
  const setShow429Modal = useChatStore(state => state.setShow429Modal)
  const handleClose = () => {
    onClose()
    setShow429Modal(false)
  }

  return (
    <GameModal ref={ref} onClose={handleClose}>
      <GradientText tx='actions.warning' quintessential style={styles.title} />
      <View style={styles.body}>
        <Text color={colors.grey} txStyle='IM16' tx='game.chat.serviceIsNotAvailable' />
      </View>
    </GameModal>
  )
})

Modal429Base.displayName = 'Modal429Base'

export const Modal429 = memo(Modal429Base)

export default Modal429
