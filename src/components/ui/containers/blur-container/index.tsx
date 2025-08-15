import { BlurView } from 'expo-blur'
import { LinearGradient } from 'expo-linear-gradient'
import { View, StyleSheet } from 'react-native'

type Props = {
  style?: any
  contentStyle?: any
  intensity?: number // 0..100
  colors?: string[]
  start?: [number, number]
  end?: [number, number]
  children?: React.ReactNode
  borderRadius?: number
}

export function BlurContainer({
  style,
  contentStyle,
  intensity = 70,
  colors = ['#000000', 'rgba(0,0,0,0.83)'],
  start = [0, 0],
  end = [0, 1],
  borderRadius = 0,
  children,
}: Props) {
  return (
    <View style={[style, { borderRadius, overflow: 'hidden' }]}>
      <BlurView intensity={intensity} style={StyleSheet.absoluteFill} />
      <LinearGradient
        colors={colors}
        start={{ x: start[0], y: start[1] }}
        end={{ x: end[0], y: end[1] }}
        style={StyleSheet.absoluteFill}
        pointerEvents='none'
      />
      <View style={contentStyle}>{children}</View>
    </View>
  )
}
