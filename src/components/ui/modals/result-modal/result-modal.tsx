import React from 'react'
import { View, Text } from 'react-native'

import { BronzeStar, GoldStar } from '@/components/icons'
import { SilverStar } from '@/components/icons/silver-star'

import { styles } from './result-modal.style'
import { SecondaryButton } from '../../buttons/secondary-button/secondary-button'
import GameModal from '../game-modal/game-modal'

interface Props {
  stars?: 0 | 1 | 2 | 3
  onClose: () => void
}

interface StarProps {
  id: number
  stars?: 0 | 1 | 2 | 3
}

const Star = ({ stars = 0, id }: StarProps) => {
  if (stars === 3) return <GoldStar filled={true} />
  if (stars === 2) return <SilverStar filled={id != 2} />
  if (stars === 1) return <BronzeStar filled={id == 0} />
  return <SilverStar filled={false} />
}

export default function ResultModal({ onClose, stars = 0 }: Props) {
  const renderHeader = () => <Text style={styles.title}>{stars == 3 ? 'Winner' : 'Loser'}</Text>

  const renderBody = () => (
    <>
      <Text style={styles.text}>
        {stars == 3
          ? 'Congratulations! You solved the mystery!'
          : 'Terrible result, you are such a bad detective. I think you need one more game to improve it.'}
      </Text>

      <View style={styles.starsContainer}>
        <Star id={0} stars={stars} />
        <Star id={1} stars={stars} />
        <Star id={2} stars={stars} />
      </View>
    </>
  )

  const renderFooter = () => (
    <View style={styles.footer}>
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
