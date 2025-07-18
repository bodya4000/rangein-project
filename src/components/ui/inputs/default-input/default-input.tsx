import React, { forwardRef } from 'react'
import { TextInput, TextInputProps, View, ViewStyle, StyleProp } from 'react-native'

import { colors } from '@/constants/colors'

import { styles } from './default-input.style'

interface Props extends TextInputProps {
  containerStyle?: StyleProp<ViewStyle>
}

// eslint-disable-next-line react/display-name
const DefaultInput = forwardRef<TextInput, Props>(({ containerStyle, style, ...props }, ref) => {
  return (
    <View style={[styles.inputView, containerStyle]}>
      <TextInput
        selectionColor={colors.white}
        cursorColor={colors.white}
        ref={ref}
        style={[styles.input, style]}
        {...props}
      />
    </View>
  )
})

export default DefaultInput
