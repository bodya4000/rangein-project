import { BlurView } from 'expo-blur'
import React from 'react'
import { Image, View } from 'react-native'

import { Text } from '@/components/ui'
import { globalStyles } from '@/constants/global-styles'

import Avatar from '@assets/images/icons/avatar.png'

import { styles } from './received-message.style'

const BLUR_INTENSITY = 70
const BLUR_TINT = 'dark'

interface Props {
  text: string
}

export const ReceivedMessage = ({ text }: Props) => {
  return (
    <View style={styles.row}>
      <Image style={styles.avatar} source={Avatar} />
      <View style={styles.container}>
        <BlurView style={styles.blur} intensity={BLUR_INTENSITY} tint={'dark'}>
          <Text style={styles.name}>Sam</Text>
          <Text style={styles.text} txStyle='IR20'>
            {text}
          </Text>
        </BlurView>
        <View style={globalStyles.spacer} />
      </View>
    </View>
  )
}
