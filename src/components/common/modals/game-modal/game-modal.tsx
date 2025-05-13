import ModalPng from '@assets/images/modals/loser.png'
import { BlurView } from 'expo-blur'
import React from 'react'
import { View, Text, Image } from 'react-native'

import { Star } from '@/components/ui'

import { styles } from './game-modal.style'
import { AppButton } from '../../buttons/app-button/app-button'

const BLUR_INTENSITY = 50
const BLUR_TINT = 'dark'

export default function GameModal() {
  return (
    <BlurView intensity={BLUR_INTENSITY} tint={BLUR_TINT} style={styles.overlay}>
      <View style={styles.container}>
        <Image source={ModalPng} style={styles.background} resizeMode='stretch' />

        <View style={styles.view}>
          <Text style={styles.title}>Loser</Text>

          <Text style={styles.text}>
            Terrible result, you are such a bad detective. I think you need one more game to improve
            it
          </Text>

          <View style={styles.starsContainer}>
            <Star style={[styles.star, styles.star_bottom]} />
            <Star style={[styles.star]} />
            <Star style={[styles.star, styles.star_bottom]} />
          </View>

          <View style={styles.footer}>
            <AppButton title='Continue' />
          </View>
        </View>
      </View>
    </BlurView>
  )
}
