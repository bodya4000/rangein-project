import React, { useRef, useState, useEffect } from 'react'
import {
  TextInput,
  StyleSheet,
  TouchableOpacity,
  TextInputProps,
  Text as RnText,
} from 'react-native'

import { colors } from '@/constants/colors'

import { styles } from './gradient-input.style'
import { createGradienttxStyle, GradientFontStyle, GradientText, Text } from '../../text'

interface Props extends TextInputProps {
  value: string
  setValue: (_: string) => void
  placeholder?: string
  txStyle?: GradientFontStyle
  typeable?: boolean
}

export const GradientInput = ({
  value,
  setValue,
  txStyle = 'IR10',
  placeholder,
  typeable = true,
}: Props) => {
  const inputRef = useRef<TextInput>(null)
  const measureRef = useRef<RnText>(null)

  const handlePress = () => {
    inputRef.current?.focus()
  }

  const baseStyle = createGradienttxStyle(txStyle)
  const textWidthRef = useRef(0)

  // update input width
  useEffect(() => {
    if (measureRef.current) {
      measureRef.current.measure((_, __, width, ___) => {
        // setTextWidth(width)
        textWidthRef.current = width
      })
    }
  }, [value])

  return (
    <TouchableOpacity onPress={handlePress} activeOpacity={1} style={styles.container}>
      {value && (
        <GradientText
          width={textWidthRef.current}
          txStyle={txStyle}
          tx={value}
          containerStyle={{ width: textWidthRef.current }}
        />
      )}
      {placeholder && !value && (
        <Text txStyle={txStyle} style={[baseStyle, styles.placeholder]}>
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
        style={[styles.input, baseStyle, { display: typeable ? 'flex' : 'none' }]}
        value={value}
        onChangeText={setValue}
        cursorColor={colors.white}
        selectionColor={colors.white}
      />
    </TouchableOpacity>
  )
}
