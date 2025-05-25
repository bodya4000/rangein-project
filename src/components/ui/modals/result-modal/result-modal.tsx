import { BlurView } from 'expo-blur'
import React from 'react'
import { View, Text, Image } from 'react-native'

import { BronzeStar, GoldStar } from '@/components/icons'
import { SilverStar } from '@/components/icons/silver-star'

import { GameModal } from '..'
import { styles } from './result-modal.style'
import { SecondaryButton } from '../../buttons/secondary-button/secondary-button'

interface Props {
  type?: 'gold' | 'silver' | 'bronze'
  onClose: () => void
}

const Star = ({ type }: { type?: 'gold' | 'silver' | 'bronze' }) => {
  if (type === 'gold') return <GoldStar />
  if (type === 'silver') return <SilverStar />
  return <BronzeStar />
}

export default function ResultModal({ onClose, type = 'silver' }: Props) {
  const renderHeader = () => (
    <Text style={styles.title}>{type === 'gold' ? 'Winner' : 'Loser'}</Text>
  )

  const renderBody = () => (
    <>
      <Text style={styles.text}>
        {type === 'gold'
          ? 'Congratulations! You solved the mystery!'
          : 'Terrible result, you are such a bad detective. I think you need one more game to improve it.'}
      </Text>

      <View style={styles.starsContainer}>
        <Star type={type} />
        <Star type={type} />
        <Star type={type} />
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
      onClose={onClose}
      renderHeader={renderHeader}
      renderBody={renderBody}
      renderFooter={renderFooter}
    />
  )
}
