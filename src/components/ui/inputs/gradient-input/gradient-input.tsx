import MaskedView from '@react-native-masked-view/masked-view'
import { LinearGradient } from 'expo-linear-gradient'
import React, { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import {
  LayoutChangeEvent,
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
  ViewStyle,
} from 'react-native'

import { colors } from '@/constants/colors'
import { scaleFont } from '@/utils'

import { Text } from '../../text'

export type GradientFontStyle =
  | 'IR10'
  | 'IR12'
  | 'IR14'
  | 'IR16'
  | 'IR20'
  | 'IR24'
  | 'IR40'
  | 'IR80'

interface GradientInputProps extends TextInputProps {
  txStyle?: GradientFontStyle
  color?: string[]
  containerStyle?: ViewStyle
  quintessential?: boolean
  typeable?: boolean
}

export const GradientInput: React.FC<GradientInputProps> = ({
  value,
  onChangeText,
  placeholder,
  txStyle = 'IR10',
  color = colors.gradientMetal2,
  style,
  containerStyle,
  quintessential = true,
  typeable = true,
  ...props
}) => {
  const { i18n } = useTranslation()
  const [dimensions, setDimensions] = useState({ height: 0, width: 0 })
  const [ready, setReady] = useState(false)
  const inputRef = useRef<TextInput>(null)
  inputRef.current?.focus()

  const baseStyle = createGradienttxStyle(txStyle, quintessential)

  const handleLayout = (e: LayoutChangeEvent) => {
    const { height, width } = e.nativeEvent.layout
    if (height !== dimensions.height || width !== dimensions.width) {
      setDimensions({ height, width })
      setReady(true)
    }
  }

  useEffect(() => {
    setReady(false)
  }, [i18n.language, value, placeholder])

  if (!ready) {
    return (
      <TextInput
        ref={inputRef}
        value={value}
        placeholder={placeholder}
        style={[baseStyle, style]}
        onLayout={handleLayout}
        {...props}
      />
    )
  }

  return (
    <View style={[styles.wrapper, containerStyle, { width: dimensions.width }]}>
      <MaskedView
        style={[{ height: dimensions.height, width: dimensions.width }, styles.container]}
        maskElement={
          <View
            style={{
              height: dimensions.height,
              width: dimensions.width,
            }}
          >
            <Text
              style={[baseStyle, style, { height: dimensions.height, width: dimensions.width }]}
            >
              {value}
            </Text>
          </View>
        }
      >
        <LinearGradient
          colors={color as [string, string, ...string[]]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={{
            height: dimensions.height,
            width: dimensions.width,
          }}
        />
      </MaskedView>

      <TextInput
        onLayout={() => inputRef.current?.focus()}
        ref={inputRef}
        value={value}
        placeholder={placeholder}
        onChangeText={onChangeText}
        editable={typeable}
        style={[
          baseStyle,
          style,
          {
            position: 'absolute',
            height: dimensions.height,
            width: dimensions.width,
            color: 'transparent',
          },
        ]}
        cursorColor={colors.white}
        selectionColor={colors.white}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export function createGradienttxStyle(font: GradientFontStyle, quintessential = true): any {
  const size = Number(font.replace('IR', ''))
  return {
    fontFamily: quintessential ? 'Quintessential-Regular' : 'Inter-Regular',
    fontSize: scaleFont(size * 2),
  }
}
