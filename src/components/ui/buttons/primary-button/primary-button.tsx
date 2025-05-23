import React, { ReactNode } from 'react'
import { View, ViewStyle, ImageBackground, ButtonProps } from 'react-native'

import { styles } from './primary-button.style'
import Touchable from '../touchable/touchabe'

type ButtonSizeType = 'big' | 'default'

const SIZE_MAP = {
  big: 120,
  default: 100,
} as const

interface Props extends Partial<ButtonProps> {
  children?: ReactNode
  style?: ViewStyle
  sizeType?: ButtonSizeType
}

export function PrimaryButton({ children, style, sizeType = 'default', ...props }: Props) {
  const buttonSize = SIZE_MAP[sizeType]

  return (
    <Touchable {...props}>
      <View style={[styles.container, style, { width: buttonSize, height: buttonSize }]}>
        <ImageBackground
          source={require('@assets/images/buttons/primary.png')}
          resizeMode='cover'
          style={[styles.button, { width: buttonSize, height: buttonSize }]}
        >
          {children}
        </ImageBackground>
      </View>
    </Touchable>
  )
}
