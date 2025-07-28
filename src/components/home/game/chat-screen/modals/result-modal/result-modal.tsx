import React from 'react'
import { useTranslation } from 'react-i18next'
import { View } from 'react-native'

import { GameResult } from '@/api'
import { BronzeStar, GoldStar } from '@/components/icons'
import { SilverStar } from '@/components/icons/silver-star'
import { GameModal, GradientText, SecondaryButton } from '@/components/ui'
import { colors } from '@/constants'

import { styles } from './result-modal.style'

interface Props {
  stars?: 0 | 1 | 2 | 3
  summary?: string
  onClose: () => void
}

interface StarProps {
  id: number
  stars: GameResult
  size?: number
}

const colorMap = {
  3: colors.gradientGold,
  2: colors.gradientMetal1,
  1: colors.gradientBronze,
  0: colors.gradientMetal2,
}

const Star = ({ stars, id, size = 100 }: StarProps) => {
  const filled = stars === 3 || (stars === 2 && id !== 2) || (stars === 1 && id === 0)

  if (stars === 3) return <GoldStar width={size} height={size} filled />
  if (stars === 2) return <SilverStar width={size} height={size} filled={filled} />
  if (stars === 1) return <BronzeStar width={size} height={size} filled={filled} />
  return <SilverStar width={size} height={size} filled={false} />
}

export default function ResultModal({ onClose, summary, stars = 0 }: Props) {
  const { t } = useTranslation()
  const type: 'gold' | 'silver' | 'bronze' | 'metal' =
    stars === 3 ? 'gold' : stars === 2 ? 'silver' : stars === 1 ? 'bronze' : 'metal'

  const renderHeader = () => (
    <GradientText
      color={[colorMap[stars][0], colorMap[stars][1], ...colorMap[stars].slice(2)]}
      style={styles.title}
    >
      {stars === 3 ? t('game.chat.winner') : t('game.chat.loser')}
    </GradientText>
  )

  const renderBody = () => (
    <>
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
    </>
  )

  const renderFooter = () => (
    <SecondaryButton type={type} txTitle='actions.continue' onPress={onClose} />
  )

  return (
    <GameModal
      type={type}
      onClose={onClose}
      renderHeader={renderHeader}
      renderBody={renderBody}
      renderFooter={renderFooter}
    />
  )
}
