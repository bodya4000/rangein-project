import React, { useRef, useState, useEffect } from 'react'
import {
  TextInput,
  StyleSheet,
  TouchableOpacity,
  TextInputProps,
  Text as RnText,
} from 'react-native'

import { colors } from '@/constants/colors'

import { createGradientTextStyle, GradientFontStyle, GradientText, Text } from '../text'

interface Props extends TextInputProps {
  value: string
  setValue: (_: string) => void
  placeholder?: string
  textStyle?: GradientFontStyle
}

export const GradientInput = ({ value, setValue, textStyle = 'IR10', placeholder }: Props) => {
  const [textWidth, setTextWidth] = useState(0)
  const inputRef = useRef<TextInput>(null)
  const measureRef = useRef<RnText>(null)

  const handlePress = () => {
    inputRef.current?.focus()
  }

  const baseStyle = createGradientTextStyle(textStyle)

  // update input width
  useEffect(() => {
    if (measureRef.current) {
      measureRef.current.measure((_, __, width, ___) => {
        setTextWidth(width)
      })
    }
  }, [value])

  return (
    <TouchableOpacity onPress={handlePress} activeOpacity={1} style={styles.container}>
      {value && (
        <GradientText
          width={textWidth}
          textStyle={textStyle}
          text={value}
          containerStyle={{ width: textWidth }}
        />
      )}
      {placeholder && !value && (
        <Text textStyle={textStyle} style={[baseStyle, styles.placeholder]}>
          {placeholder}
        </Text>
      )}

      {/* This is non-visible text just to each time input changes recalculate gradient text width */}
      <RnText ref={measureRef} style={[baseStyle, styles.measureText]}>
        {value}
      </RnText>

      {/* Non-visible input */}
      <TextInput
        ref={inputRef}
        style={[styles.input, baseStyle]}
        value={value}
        onChangeText={setValue}
        cursorColor={colors.white}
        selectionColor={colors.white}
      />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  input: {
    width: '100%',
    color: 'transparent',
    position: 'absolute',
  },
  placeholder: {
    color: colors.white,
    opacity: 0.5,
  },
  measureText: {
    opacity: 0,
    height: 0,
  },
})
