import { BlurView } from 'expo-blur'
import React from 'react'
import { View } from 'react-native'

import { Text } from '@/components/ui'
import { globalStyles } from '@/constants/global-styles'

import { styles } from './sent-message.style'

const BLUR_INTENSITY = 80
const BLUR_TINT = 'systemChromeMaterialDark'

interface Props {
  text: string
}

export const SentMessage = ({ text }: Props) => {
  return (
    <View style={styles.row}>
      <View style={globalStyles.spacer} />
      <View style={styles.container}>
        <BlurView style={styles.blur} intensity={BLUR_INTENSITY} tint={BLUR_TINT}>
          <Text style={styles.text} txStyle='IR18'>
            {text}
          </Text>
        </BlurView>
      </View>
    </View>
  )
}
