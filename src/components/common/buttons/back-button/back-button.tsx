import { useRouter } from 'expo-router'
import React from 'react'
import {
  Pressable,
  View,
  Text,
  ImageBackground,
  ViewStyle,
  TextStyle,
  GestureResponderEvent,
  Image,
} from 'react-native'

import { icons } from '@/components/ui'

import { styles } from './back-button.style'
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

const width = 30
const height = 30

export function BackButton({ onPress, containerStyle }: Props) {
  const router = useRouter()

  const onButtonPress = (e: GestureResponderEvent) => {
    console.log('press')
    if (!onPress) router.canGoBack() ? router.back() : router.replace('/')
    else onPress(e)
  }

  return (
    <Touchable style={containerStyle} onPress={onButtonPress}>
      <View style={[styles.container, { width, height }]}>
        <Image resizeMode='cover' source={icons['back_button']} style={styles.button} />
      </View>
    </Touchable>
  )
}
