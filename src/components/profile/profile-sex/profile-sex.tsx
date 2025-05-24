import { LinearGradient } from 'expo-linear-gradient'
import React, { useState } from 'react'
import { LayoutChangeEvent, View } from 'react-native'

import { GradientText, TouchableBlock } from '@/components/ui'
import { colors } from '@/constants/colors'

import { styles } from './profile-sex.style'

interface Dimensions {
  width: number | 'auto'
  height: number | 'auto'
}

export const ProfileSex = () => {
  const [isMale, setIsMale] = useState(false)
  const [dimensions, setDimensions] = useState<Dimensions>({ width: 'auto', height: 'auto' })

  const handleLayout = (event: LayoutChangeEvent) => {
    const { width, height } = event.nativeEvent.layout
    if (width !== dimensions.width || height !== dimensions.height) {
      setDimensions({ width, height })
    }
  }

  const toggleSex = () => {
    setIsMale(prev => !prev)
  }

  const computedButtonStyle =
    typeof dimensions.width === 'number' ? { width: dimensions.width / 1.6 } : {}

  const renderGradientButton = (text: string) => (
    <LinearGradient
      colors={colors.light_dark as [string, string, ...string[]]}
      start={{ x: 1, y: 1 }}
      end={{ x: 0, y: 0 }}
      style={[styles.sexButton, computedButtonStyle]}
    >
      <GradientText textStyle='IR16' color={colors.gradientMetal2}>
        {text}
      </GradientText>
    </LinearGradient>
  )

  const renderTouchableButton = (text: string, styleOverrides: object) => (
    <View style={styleOverrides}>
      <TouchableBlock onPress={toggleSex} style={[styles.sexButton, computedButtonStyle]}>
        <GradientText textStyle='IR16' color={colors.gradientMetal2}>
          {text}
        </GradientText>
      </TouchableBlock>
    </View>
  )

  return (
    <View style={styles.sexContainer} onLayout={handleLayout}>
      {isMale
        ? renderGradientButton('Male')
        : renderTouchableButton('Male', { left: 50, zIndex: 1000 })}
      {!isMale
        ? renderGradientButton('Female')
        : renderTouchableButton('Female', { right: 50, zIndex: 1000 })}
    </View>
  )
}
