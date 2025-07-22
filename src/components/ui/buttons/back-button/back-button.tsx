import { useRouter } from 'expo-router'
import React from 'react'
import { View, ViewStyle, GestureResponderEvent, TextStyle } from 'react-native'

import { ArrowLeft } from '@/components/icons'

import { styles } from './back-button.style'
import { Touchable } from '../touchable/touchable'

interface Props {
  title?: string
  onPress?: (_: GestureResponderEvent) => void
  width?: number
  height?: number
  containerStyle?: ViewStyle
  txStyle?: TextStyle
}

const width = 30
const height = 60

export function BackButton({ onPress, containerStyle }: Props) {
  const router = useRouter()

  const onButtonPress = (e: GestureResponderEvent) => {
    if (!onPress) router.canGoBack() ? router.back() : router.replace('/')
    else onPress(e)
  }

  return (
    <Touchable
      style={[styles.container, { width, height }, containerStyle]}
      onPress={onButtonPress}
      touchable={true}
    >
      <ArrowLeft />
    </Touchable>
  )
}
