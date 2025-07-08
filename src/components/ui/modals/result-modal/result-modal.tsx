import React from 'react'
import { View, Text } from 'react-native'

import { GameResult } from '@/api'
import { BronzeStar, GoldStar } from '@/components/icons'
import { SilverStar } from '@/components/icons/silver-star'

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
  stars?: GameResult
}

const Star = ({ stars = 0, id }: StarProps) => {
  if (stars === 3) return <GoldStar filled={true} />
  if (stars === 2) return <SilverStar filled={id != 2} />
  if (stars === 1) return <BronzeStar filled={id == 0} />
  return <SilverStar filled={false} />
}

const DEFAULT_RESULT_TEXT =
  'Terrible result, you are such a bad detective. I think you need one more game to improve it'

export default function ResultModal({ onClose, summary, stars = 0 }: Props) {
  const renderHeader = () => (
    <GradientText style={styles.title}>{stars == 3 ? 'Winner' : 'Loser'}</GradientText>
  )

  const renderBody = () => (
    <>
      <GradientText quintessential={false} style={styles.text}>
        {summary || DEFAULT_RESULT_TEXT}
      </GradientText>

      <View style={styles.starsContainer}>
        <Star id={0} stars={stars} />
        <Star id={1} stars={stars} />
        <Star id={2} stars={stars} />
      </View>
    </>
  )

  const renderFooter = () => (
    <View>
      <SecondaryButton title='Continue' onPress={onClose} />
    </View>
  )

  return (
    <GameModal
      type={stars === 3 ? 'gold' : stars === 2 ? 'silver' : stars === 1 ? 'bronze' : 'metal'}
      onClose={onClose}
      renderHeader={renderHeader}
      renderBody={renderBody}
      renderFooter={renderFooter}
    />
  )
}
