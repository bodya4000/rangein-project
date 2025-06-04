import React, { ReactNode } from 'react'
import { View, ViewStyle, GestureResponderEvent, Image } from 'react-native'

import { styles } from './touchable-block.style'
import { Touchable } from '../touchable/touchable'

interface Props {
  children?: ReactNode
  onPress?: (_: GestureResponderEvent) => void
  containerStyle?: ViewStyle
  style?: ViewStyle | ViewStyle[]
  touchable?: boolean
}

export function TouchableBlock({
  children,
  onPress,
  touchable = true,
  containerStyle,
  style,
}: Props) {
  return (
    <Touchable touchable={touchable} style={[styles.container, containerStyle]} onPress={onPress}>
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
