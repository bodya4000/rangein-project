import MaskedView from '@react-native-masked-view/masked-view'
import { LinearGradient } from 'expo-linear-gradient'
import React, { ReactNode, useState } from 'react'
import { LayoutChangeEvent, Text, TextStyle, ViewStyle } from 'react-native'

import { colors } from '@/constants/colors'

interface Props {
  children?: ReactNode
  style?: TextStyle
  containerStyle?: ViewStyle
}

export function GradientTitle({ children, style, containerStyle }: Props) {
  const [dimensions, setDimensions] = useState({ height: 0, width: 0 })
  const [ready, setReady] = useState(false)

  const handleLayout = (e: LayoutChangeEvent) => {
    const { height, width } = e.nativeEvent.layout
    if (height !== dimensions.height || width !== dimensions.width) {
      setDimensions({ height, width })
      setReady(true)
    }
  }

  if (!ready) {
    return (
      <Text onLayout={handleLayout} style={[style, { color: 'transparent', alignSelf: 'center' }]}>
        {children}
      </Text>
    )
  }

  return (
    <MaskedView
      style={[
        {
          height: dimensions.height,
          width: dimensions.width,
          alignSelf: 'center',
        },
        containerStyle,
      ]}
      maskElement={<Text style={[style, { color: 'black' }]}>{children}</Text>}
    >
      <LinearGradient
        colors={colors.gradientMetal2 as [string, string, ...string[]]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={{
          height: dimensions.height,
          width: dimensions.width,
        }}
      />
    </MaskedView>
  )
}
