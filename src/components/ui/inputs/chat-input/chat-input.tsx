import React from 'react'
import { TextInput, TextInputProps, View, ViewStyle, StyleProp } from 'react-native'

import { styles } from './chat-input.style'

interface ChatInputProps extends TextInputProps {
  containerStyle?: StyleProp<ViewStyle>
}

const ChatInput: React.FC<ChatInputProps> = ({ containerStyle, style, ...props }) => {
  return (
    <View style={[styles.inputView, containerStyle]}>
      <TextInput style={[styles.input, style]} {...props} />
    </View>
  )
}

export default ChatInput
