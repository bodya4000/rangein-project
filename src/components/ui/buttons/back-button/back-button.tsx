import { useRouter } from 'expo-router'
import React from 'react'
import { View, ViewStyle, GestureResponderEvent, TextStyle } from 'react-native'

import { ArrowLeft } from '@/components/icons'

import { styles } from './back-button.style'
import Touchable from '../touchable/touchabe'

interface Props {
  title?: string
  onPress?: (_: GestureResponderEvent) => void
  width?: number
  height?: number
  containerStyle?: ViewStyle
  txStyle?: TextStyle
}

const width = 30
const height = 30

export function BackButton({ onPress, containerStyle }: Props) {
  const router = useRouter()

  const onButtonPress = (e: GestureResponderEvent) => {
    if (!onPress) router.canGoBack() ? router.back() : router.replace('/')
    else onPress(e)
  }

  return (
    <Touchable style={containerStyle} onPress={onButtonPress}>
      <View style={[styles.container, { width, height }]}>
        <ArrowLeft />
      </View>
    </Touchable>
  )
}
