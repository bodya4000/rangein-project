import React from 'react'
import { View, ImageBackground, ViewStyle, GestureResponderEvent, TextStyle } from 'react-native'

import { colors } from '@/constants'
import { TxKeyPath } from '@/i18n/react-i18next'

import { styles } from './secondary-button.style'
import { GradientText, Text } from '../../text'
import { Touchable } from '../touchable/touchable'

interface Props {
  title?: string
  txTitle?: TxKeyPath
  onPress?: (_: GestureResponderEvent) => void
  width?: number
  height?: number
  containerStyle?: ViewStyle
  txStyle?: TextStyle
  disabled?: boolean
  type?: 'metal' | 'gold' | 'silver' | 'bronze'
}
const buttonImages = {
  gold: require('@assets/images/buttons/secondary-gold.png'),
  silver: require('@assets/images/buttons/secondary-silver.png'),
  bronze: require('@assets/images/buttons/secondary-bronze.png'),
  metal: require('@assets/images/buttons/secondary-metal.png'),
}

const buttonColors: { [key in NonNullable<Props['type']>]: [string, string, ...string[]] } = {
  gold: colors.gradientGold as [string, string, ...string[]],
  silver: colors.gradientMetal1 as [string, string, ...string[]],
  bronze: colors.gradientBronze as [string, string, ...string[]],
  metal: colors.gradientMetal1 as [string, string, ...string[]],
}

export function SecondaryButton({
  title,
  txTitle,
  onPress,
  width = 210,
  height = 80,
  containerStyle,
  txStyle = {},
  disabled,
  type = 'metal',
}: Props) {
  return (
    <Touchable onPress={onPress} disabled={disabled}>
      <View style={[styles.container, { width, height }, containerStyle]}>
        <ImageBackground resizeMode='stretch' source={buttonImages[type]} style={styles.button}>
          <GradientText color={buttonColors[type]} style={[styles.title, txStyle]}>
            {txTitle || title}
          </GradientText>
        </ImageBackground>
      </View>
    </Touchable>
  )
}
