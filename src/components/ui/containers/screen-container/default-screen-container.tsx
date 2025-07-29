import React from 'react'
import { ImageBackground, SafeAreaView, View, StyleSheet } from 'react-native'

import DefaultBackground from '@assets/images/screens/default.png'

interface Props {
  children: React.ReactNode
  padding?: 'sm' | 'md' | 'lg'
}

const PADDING_MAP = {
  sm: 16,
  md: 24,
  lg: 36,
}

export const DefaultScreenContainer = ({ children, padding = 'md' }: Props) => {
  return (
    <ImageBackground source={DefaultBackground} style={styles.bg} resizeMode='cover'>
      <SafeAreaView style={styles.safeArea}>
        <View style={[styles.content, { padding: PADDING_MAP[padding] }]}>{children}</View>
      </SafeAreaView>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  bg: { position: 'absolute', height: '100%', width: '100%' },
  safeArea: { flex: 1, backgroundColor: 'rgba(0,0,0,0.2)' },
  content: { flex: 1 },
})
