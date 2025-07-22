import React from 'react'
import { View } from 'react-native'

import { GameResult } from '@/api'
import { BronzeStar, GoldStar } from '@/components/icons'
import { SilverStar } from '@/components/icons/silver-star'
import { colors } from '@/constants'

import { styles } from './result-modal.style'
import { SecondaryButton } from '../../buttons/secondary-button/secondary-button'
import { GradientText } from '../../text/gradient-text'
import GameModal from '../game-modal/game-modal'

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

const DEFAULT_RESULT_TEXT =
  'Terrible result, you are such a bad detective. I think you need one more game to improve it'

const Star = ({ stars, id, size = 100 }: StarProps) => {
  const filled = stars === 3 || (stars === 2 && id !== 2) || (stars === 1 && id === 0)

  if (stars === 3) return <GoldStar width={size} height={size} filled />
  if (stars === 2) return <SilverStar width={size} height={size} filled={filled} />
  if (stars === 1) return <BronzeStar width={size} height={size} filled={filled} />
  return <SilverStar width={size} height={size} filled={false} />
}

export default function ResultModal({ onClose, summary, stars = 0 }: Props) {
  const type: 'gold' | 'silver' | 'bronze' | 'metal' =
    stars === 3 ? 'gold' : stars === 2 ? 'silver' : stars === 1 ? 'bronze' : 'metal'

  const renderHeader = () => (
    <GradientText color={[...colors.gradientGold]} style={styles.title}>
      {stars === 3 ? 'Winner' : 'Loser'}
    </GradientText>
  )

  const renderBody = () => (
    <>
      <GradientText quintessential={false} style={styles.text}>
        {summary || DEFAULT_RESULT_TEXT}
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

  const renderFooter = () => <SecondaryButton type={type} title='Continue' onPress={onClose} />

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
