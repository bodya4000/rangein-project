import { useFonts } from 'expo-font'
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

import { styles } from './app-button.style'

interface Props {
  title?: string
  onPress?: (_: GestureResponderEvent) => void
  width?: number
  height?: number
  background?: keyof typeof icons
  containerStyle?: ViewStyle
  textStyle?: TextStyle
}

export function AppButton({
  title,
  onPress,
  width = 210,
  height = 80,
  background = 'secondary_button',
  containerStyle,
  textStyle,
}: Props) {
  return (
    <Pressable onPress={onPress}>
      <View style={[styles.container, { width, height }, containerStyle]}>
        <ImageBackground resizeMode='stretch' source={icons[background]} style={styles.button}>
          <Text style={[styles.title, textStyle]}>{title}</Text>
        </ImageBackground>
      </View>
    </Pressable>
  )
}
