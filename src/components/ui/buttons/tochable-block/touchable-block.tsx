import React, { ReactNode } from 'react'
import { View, ImageBackground, ViewStyle, GestureResponderEvent, Image } from 'react-native'

import { styles } from './touchable-block.style'
import Touchable from '../touchable/touchabe'

interface Props {
  children?: ReactNode
  onPress?: (_: GestureResponderEvent) => void
  containerStyle?: ViewStyle
  style?: ViewStyle | ViewStyle[]
}

export function TouchableBlock({ children, onPress, containerStyle, style }: Props) {
  return (
    <Touchable style={[styles.container, containerStyle]} onPress={onPress}>
      <View style={[styles.container, containerStyle]}>
        <Image
          resizeMode='stretch'
          source={require('@assets/images/buttons/block.png')}
          style={[styles.button]}
        />
        <View style={[styles.content, style]}>{children}</View>
      </View>
    </Touchable>
  )
}
