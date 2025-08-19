import { useRouter } from 'expo-router'
import React, { memo, useMemo, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { View } from 'react-native'

import { GameResult } from '@/api'
import { BronzeStar, GoldStar } from '@/components/icons'
import { SilverStar } from '@/components/icons/silver-star'
import { GameModal, GradientText, SecondaryButton } from '@/components/ui'
import { GameModalRef } from '@/components/ui/modals/game-modal'
import { colors, QUERIES, queryClient } from '@/constants'
import { useChatStore } from '@/store'

import { styles } from './result-modal.style'

interface Props {
  stars?: 0 | 1 | 2 | 3
  summary?: string
}

interface StarProps {
  id: number
  stars: GameResult
  size?: number
}

const Star = function Star({ stars, id, size = 100 }: StarProps) {
  const filled = stars === 3 || (stars === 2 && id !== 2) || (stars === 1 && id === 0)

  if (stars === 3) return <GoldStar width={size} height={size} filled />
  if (stars === 2) return <SilverStar width={size} height={size} filled={filled} />
  if (stars === 1) return <BronzeStar width={size} height={size} filled={filled} />
  return <SilverStar width={size} height={size} filled={false} />
}

const ResultModalInner = ({ summary, stars = 0 }: Props) => {
  const { t } = useTranslation()
  const router = useRouter()
  const ref = useRef<GameModalRef>(null)

  const reset = useChatStore(state => state.reset)

  const handleClose = async () => {
    ref.current?.handleClose()
    reset()
    await queryClient.invalidateQueries({ queryKey: [QUERIES.GAME] })
    await queryClient.invalidateQueries({ queryKey: [QUERIES.MESSAGES] })
    await queryClient.invalidateQueries({ queryKey: [QUERIES.USER] })
    router.replace('/')
  }

  const type: 'gold' | 'silver' | 'bronze' | 'metal' =
    stars === 3 ? 'gold' : stars === 2 ? 'silver' : stars === 1 ? 'bronze' : 'metal'

  const gradient = useMemo(() => {
    const map = {
      3: colors.gradientGold,
      2: colors.gradientMetal1,
      1: colors.gradientBronze,
      0: colors.gradientMetal2,
    } as const
    return map[stars]
  }, [stars])

  return (
    <GameModal ref={ref} type={type}>
      <GradientText color={[gradient[0], gradient[1], ...gradient.slice(2)]} style={styles.title}>
        {stars === 3 ? t('game.chat.winner') : t('game.chat.loser')}
      </GradientText>

      <GradientText quintessential={false} style={styles.text}>
        {summary ? summary : stars > 1 ? t('game.chat.winSummary') : t('game.chat.loseSummary')}
      </GradientText>

      <View style={styles.starsContainer}>
        {[0, 1, 2].map(id => (
          <View key={id} style={id !== 1 ? styles.star_bottom : undefined}>
            <Star id={id} stars={stars} />
          </View>
        ))}
      </View>

      <SecondaryButton
        containerStyle={styles.continue}
        type={type}
        txTitle='actions.continue'
        onPress={handleClose}
      />
    </GameModal>
  )
}

const ResultModal = memo(ResultModalInner)

ResultModal.displayName = 'ResultModal'

export default ResultModal
