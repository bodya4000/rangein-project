import React from 'react'
import { Image, View } from 'react-native'

import { ChatLoader, Text } from '@/components/ui'
import { colors, imageColors } from '@/constants/colors'
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
  colors: borderColors = imageColors.bluePurple,
}: Props) => {
  return (
    <View style={styles.row}>
      <Image style={styles.avatar} source={Avatar} />
      <View style={[styles.container, { borderColor: borderColors[0] }]}>
        <View style={styles.blur}>
          <Text txStyle='IR12' style={[styles.name, { color: borderColors[0] }]}>
            {sender}
          </Text>
          {typing ? (
            <ChatLoader />
          ) : (
            <Text txStyle='IR16' style={styles.text} color={colors.gradientMetal4[3]}>
              {text}
            </Text>
          )}
        </View>
        <View style={globalStyles.spacer} />
      </View>
    </View>
  )
}
