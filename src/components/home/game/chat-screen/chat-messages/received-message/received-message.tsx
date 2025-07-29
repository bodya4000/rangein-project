import { BlurView } from 'expo-blur'
import React from 'react'
import { Image, View } from 'react-native'

import { ChatLoader, Text } from '@/components/ui'
import { imageColors } from '@/constants/colors'
import { globalStyles } from '@/constants/global-styles'

import Avatar from '@assets/images/icons/avatar.png'

import { styles } from './received-message.style'

const BLUR_INTENSITY = 70

interface Props {
  text?: string
  sender?: string
  typing?: boolean
  colors: string[]
}

export const ReceivedMessage = ({
  text,
  sender,
  typing,
  colors = imageColors.bluePurple,
}: Props) => {
  return (
    <View style={styles.row}>
      <Image style={styles.avatar} source={Avatar} />
      <View style={[styles.container, { borderColor: colors[0] }]}>
        <BlurView style={styles.blur} intensity={BLUR_INTENSITY} tint={'dark'}>
          <Text style={[styles.name, { color: colors[0] }]}>{sender}</Text>
          {typing ? (
            <ChatLoader />
          ) : (
            <Text style={styles.text} txStyle='IR18'>
              {text}
            </Text>
          )}
        </BlurView>
        <View style={globalStyles.spacer} />
      </View>
    </View>
  )
}
