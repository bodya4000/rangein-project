import React, { memo } from 'react'
import { View } from 'react-native'

import { BlurContainer, Text } from '@/components/ui'
import { colors } from '@/constants'
import { globalStyles } from '@/constants/global-styles'

import { styles } from './sent-message.style'

interface Props {
  text: string
}

const SentMessageBase = ({ text }: Props) => {
  return (
    <View style={styles.row}>
      <View style={globalStyles.spacer} />
      <View style={styles.container}>
        <View style={styles.blur}>
          <Text style={styles.text} txStyle='IR18'>
            {text}
          </Text>
        </View>
      </View>
    </View>
  )
}

export const SentMessage = React.memo(SentMessageBase)
SentMessage.displayName = 'SentMessage'
