import React, { forwardRef, memo } from 'react'
import { useTranslation } from 'react-i18next'
import { View } from 'react-native'

import { GameModal, GradientText, Text } from '@/components/ui'
import { GameModalRef } from '@/components/ui/modals/game-modal'
import { colors } from '@/constants'
import { useChatStore } from '@/store'

import { styles } from './dead-info-modal.style'

interface Props {
  nameOfDeadCharacter: string
  onClose?: () => void
}

const DeadInfoModalBase = forwardRef<GameModalRef, Props>(
  ({ onClose = () => {}, nameOfDeadCharacter }, ref) => {
    const { t } = useTranslation()
    const setJustBeenDead = useChatStore(state => state.setJustBeenDead)
    const handleClose = () => {
      onClose()
      setJustBeenDead(null)
    }

    return (
      <GameModal ref={ref} onClose={handleClose}>
        <GradientText tx='actions.warning' quintessential style={styles.title} />
        <View style={styles.body}>
          <Text color={colors.grey} txStyle='IM16'>
            {t('game.chat.deadInfoPart1')}
            <Text>{nameOfDeadCharacter}</Text>
            {t('game.chat.deadInfoPart2')}
          </Text>
        </View>
      </GameModal>
    )
  },
)

DeadInfoModalBase.displayName = 'DeadInfoModal'

export const DeadInfoModal = memo(DeadInfoModalBase)

export default DeadInfoModal
