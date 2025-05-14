import React, { ReactNode } from 'react'
import { ImageBackground, SafeAreaView, View, StyleSheet } from 'react-native'

import { spacing } from '@/constants/spacing'

import Background from '@assets/images/screens/screen_1.png'

interface Props {
  children: ReactNode
}

export default function ScreenContainer({ children }: Props) {
  return (
    <ImageBackground style={styles.bg} source={Background}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.content}>{children}</View>
      </SafeAreaView>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  bg: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  content: {
    flex: 1,
    padding: spacing.lg,
  },
})
