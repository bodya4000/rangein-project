import { LinearGradient } from 'expo-linear-gradient'
import React, { useState } from 'react'
import { LayoutChangeEvent, View } from 'react-native'

import { colors } from '@/constants/colors'
import { TxKeyPath } from '@/i18n/react-i18next'
import { Sex } from '@/types'

import { styles } from './sex-container.style'
import { TouchableBlock } from '../../buttons'
import { GradientText } from '../../text'

interface Dimensions {
  width: number | 'auto'
  height: number | 'auto'
}

interface Props {
  sex: Sex | null
  setSex: (_: Sex) => void
}

export const SexContainer = ({ sex, setSex }: Props) => {
  const [dimensions, setDimensions] = useState<Dimensions>({ width: 'auto', height: 'auto' })

  const handleLayout = (event: LayoutChangeEvent) => {
    const { width, height } = event.nativeEvent.layout
    if (width !== dimensions.width || height !== dimensions.height) {
      setDimensions({ width, height })
    }
  }

  const toggleSex = (sex: Sex) => {
    setSex(sex)
  }

  const computedButtonStyle =
    typeof dimensions.width === 'number' ? { width: dimensions.width / 1.7 } : {}
  const sideGap = typeof dimensions.width === 'number' ? dimensions.width / 1.7 / 6 : 50

  const renderGradientButton = (text: TxKeyPath) => (
    <LinearGradient
      colors={colors.light_dark as [string, string, ...string[]]}
      start={{ x: 1, y: 1 }}
      end={{ x: 0, y: 0 }}
      style={[styles.sexButton, computedButtonStyle]}
    >
      <GradientText
        tx={text}
        txStyle='IR18'
        color={colors.gradientMetal2 as [string, string, ...string[]]}
      ></GradientText>
    </LinearGradient>
  )

  const renderTouchableButton = (text: TxKeyPath, sex: Sex, styleOverrides?: object) => (
    <View style={styleOverrides}>
      <TouchableBlock
        onPress={() => toggleSex(sex)}
        style={[styles.sexButton, computedButtonStyle]}
      >
        <GradientText
          tx={text}
          txStyle='IR18'
          color={colors.gradientMetal2 as [string, string, ...string[]]}
        ></GradientText>
      </TouchableBlock>
    </View>
  )

  return (
    <View style={styles.sexContainer} onLayout={handleLayout}>
      {sex === Sex.MALE
        ? renderGradientButton('profile.male')
        : renderTouchableButton('profile.male', Sex.MALE, { left: sideGap, zIndex: 1000 })}
      {sex === Sex.FEMALE
        ? renderGradientButton('profile.female')
        : renderTouchableButton('profile.female', Sex.FEMALE, { right: sideGap, zIndex: 1000 })}
    </View>
  )
}
