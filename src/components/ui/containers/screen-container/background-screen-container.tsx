import React from 'react'
import { ImageBackground, StyleSheet } from 'react-native'
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context'

import { PADDING_MAP } from '@/constants'

import DefaultBackground from '@assets/images/screens/default.png'

import StatusBarContainer, { StatusBarContainerProps } from './_status-bar-container'

interface Props extends StatusBarContainerProps {
  children: React.ReactNode
  background?: number
  padding?: 'sm' | 'md' | 'lg'
}

export const ImageBackgroundScreenContainer = ({
  children,
  background = DefaultBackground,
  padding = 'sm',
  statusBarBackgroundColor,
  statusBarElementColor,
}: Props) => {
  const insets = useSafeAreaInsets()
  return (
    <>
      <StatusBarContainer
        statusBarBackgroundColor={statusBarBackgroundColor}
        statusBarElementColor={statusBarElementColor}
      />

      <ImageBackground source={background} style={styles.bg} resizeMode='cover'>
        <SafeAreaView
          style={[
            styles.content,
            { padding: PADDING_MAP[padding], paddingBottom: insets.bottom + PADDING_MAP[padding] },
          ]}
        >
          {children}
        </SafeAreaView>
      </ImageBackground>
    </>
  )
}

const styles = StyleSheet.create({
  bg: { height: '100%', width: '100%' },
  safeArea: { flex: 1, width: '100%' },
  content: { flex: 1, width: '100%' },
})
