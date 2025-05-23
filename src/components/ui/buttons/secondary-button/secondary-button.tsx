import React from 'react'
import {
  View,
  Text,
  ImageBackground,
  ViewStyle,
  TextStyle,
  GestureResponderEvent,
} from 'react-native'

import { styles } from './secondary-button.style'
import Touchable from '../touchable/touchabe'

interface Props {
  title?: string
  onPress?: (_: GestureResponderEvent) => void
  width?: number
  height?: number
  containerStyle?: ViewStyle
  textStyle?: TextStyle
}

export function SecondaryButton({
  title,
  onPress,
  width = 210,
  height = 80,
  containerStyle,
  textStyle,
}: Props) {
  return (
    <Touchable onPress={onPress}>
      <View style={[styles.container, { width, height }, containerStyle]}>
        <ImageBackground
          resizeMode='stretch'
          source={require('@assets/images/buttons/secondary.png')}
          style={styles.button}
        >
          <Text style={[styles.title, textStyle]}>{title}</Text>
        </ImageBackground>
      </View>
    </Touchable>
  )
}
