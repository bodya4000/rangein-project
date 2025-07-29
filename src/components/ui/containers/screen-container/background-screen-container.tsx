import React from 'react'
import { ImageBackground, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import DefaultBackground from '@assets/images/screens/default.png'

interface Props {
  children: React.ReactNode
  background?: number
  padding?: 'sm' | 'md' | 'lg'
}

const PADDING_MAP = {
  sm: 16,
  md: 24,
  lg: 36,
}

export const ImageBackgroundScreenContainer = ({
  children,
  background = DefaultBackground,
  padding = 'md',
}: Props) => {
  return (
    <ImageBackground source={background} style={styles.bg} resizeMode='cover'>
      <SafeAreaView edges={['bottom']} style={[styles.content, { padding: PADDING_MAP[padding] }]}>
        {children}
      </SafeAreaView>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  bg: { position: 'absolute', height: '100%', width: '100%' },
  safeArea: { flex: 1, backgroundColor: 'rgba(0,0,0,0.2)' },
  content: { flex: 1 },
})
