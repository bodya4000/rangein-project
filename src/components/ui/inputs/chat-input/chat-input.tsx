import React, { RefObject } from 'react'
import { TextInput, TextInputProps, View, ViewStyle, StyleProp } from 'react-native'

import { colors } from '@/constants/colors'

import { styles } from './chat-input.style'

interface ChatInputProps extends TextInputProps {
  containerStyle?: StyleProp<ViewStyle>
  ref?: RefObject<TextInput | null>
}

const ChatInput: React.FC<ChatInputProps> = ({ ref, containerStyle, style, ...props }) => {
  return (
    <View style={[styles.inputView, containerStyle]}>
      <TextInput selectionColor={colors.white} ref={ref} style={[styles.input, style]} {...props} />
    </View>
  )
}

export default ChatInput
