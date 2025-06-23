import React from 'react'
import {
  View,
  Text,
  ImageBackground,
  ViewStyle,
  GestureResponderEvent,
  TextStyle,
} from 'react-native'

import { styles } from './secondary-button.style'
import { Touchable } from '../touchable/touchable'

interface Props {
  title?: string
  onPress?: (_: GestureResponderEvent) => void
  width?: number
  height?: number
  containerStyle?: ViewStyle
  txStyle?: TextStyle
  disabled?: boolean
}

export function SecondaryButton({
  title,
  onPress,
  width = 210,
  height = 80,
  containerStyle,
  txStyle,
  disabled,
}: Props) {
  return (
    <Touchable onPress={onPress} disabled={disabled}>
      <View style={[styles.container, { width, height }, containerStyle]}>
        <ImageBackground
          resizeMode='stretch'
          source={require('@assets/images/buttons/secondary.png')}
          style={styles.button}
        >
          <Text style={[styles.title, txStyle]}>{title}</Text>
        </ImageBackground>
      </View>
    </Touchable>
  )
}
