import MaskedView from '@react-native-masked-view/masked-view'
import { LinearGradient } from 'expo-linear-gradient'
import React, { ReactNode, useState } from 'react'
import { LayoutChangeEvent, Text, TextStyle } from 'react-native'

import { colors } from '@/constants/colors'

interface Props {
  children: ReactNode
  style: TextStyle
}

export function GradientTitle({ children, style }: Props) {
  const [textHeight, setTextHeight] = useState(220)

  const handleLayout = (e: LayoutChangeEvent) => {
    const height = e.nativeEvent.layout.height
    if (height !== textHeight) setTextHeight(height)
  }
  return (
    <MaskedView
      style={{ height: textHeight }}
      maskElement={
        <Text onLayout={handleLayout} style={[style]}>
          {children}
        </Text>
      }
    >
      <LinearGradient
        colors={colors.gradientMetal2 as [string, string, ...string[]]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={[{ flex: 1 }]}
      />
    </MaskedView>
  )
}
