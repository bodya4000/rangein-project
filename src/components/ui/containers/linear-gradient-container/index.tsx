import { LinearGradient } from 'expo-linear-gradient'
import { View, StyleSheet } from 'react-native'

type Props = {
  style?: any
  colors: string[]
  start?: [number, number] // 0..1
  end?: [number, number] // 0..1
  borderRadius?: number
  children?: React.ReactNode
  width?: number
  height?: number
}

export function LinearGradientContainer({
  style,
  colors,
  start = [0, 0],
  end = [1, 1],
  children,
}: Props) {
  return (
    <View style={[style, { overflow: 'hidden' }]}>
      <LinearGradient
        colors={colors}
        start={{ x: start[0], y: start[1] }}
        end={{ x: end[0], y: end[1] }}
        style={StyleSheet.absoluteFill}
        pointerEvents='none'
      />
      {children}
    </View>
  )
}
