import React, { ReactNode } from 'react'
import { ImageBackground, SafeAreaView, View, StyleSheet } from 'react-native'

import { spacing } from '@/constants/spacing'

import DefaultBackground from '@assets/images/screens/default.png'
import Background from '@assets/images/screens/screen_1.png'

interface Props {
  children: ReactNode
  isDefault?: boolean
}

export default function ScreenContainer({ isDefault = false, children }: Props) {
  return (
    <ImageBackground style={styles.bg} source={isDefault ? DefaultBackground : Background}>
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
