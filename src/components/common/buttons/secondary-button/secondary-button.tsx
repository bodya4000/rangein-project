import React from 'react'
import {
  Pressable,
  View,
  Text,
  ImageBackground,
  ViewStyle,
  TextStyle,
  GestureResponderEvent,
} from 'react-native'

import { icons } from '@/components/ui'

import { styles } from './secondary-button.style'
import Touchable from '../touchable/touchabe'

interface Props {
  title?: string
  onPress?: (_: GestureResponderEvent) => void
  width?: number
  height?: number
  background?: keyof typeof icons
  containerStyle?: ViewStyle
  textStyle?: TextStyle
}

export function SecondaryButton({
  title,
  onPress,
  width = 210,
  height = 80,
  background = 'secondary_button',
  containerStyle,
  textStyle,
}: Props) {
  return (
    <Touchable onPress={onPress}>
      <View style={[styles.container, { width, height }, containerStyle]}>
        <ImageBackground resizeMode='stretch' source={icons[background]} style={styles.button}>
          <Text style={[styles.title, textStyle]}>{title}</Text>
        </ImageBackground>
      </View>
    </Touchable>
  )
}
