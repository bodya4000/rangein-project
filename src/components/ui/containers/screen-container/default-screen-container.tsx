import React, { PropsWithChildren } from 'react'
import { StyleProp, StyleSheet, ViewStyle, ImageBackground } from 'react-native'
import { Edges, SafeAreaView } from 'react-native-safe-area-context'

import { PADDING_MAP } from '@/constants'

import DefaultBackground from '@assets/images/screens/default.png'

import StatusBarContainer, { StatusBarContainerProps } from './_status-bar-container'

type Props = StatusBarContainerProps &
  PropsWithChildren<{
    bgc?: string
    style?: StyleProp<ViewStyle>
    edges?: Edges
    padding?: keyof typeof PADDING_MAP
  }>

export const DefaultScreenContainer = ({
  children,
  style,
  edges = ['left', 'right', 'bottom'],
  statusBarBackgroundColor,
  statusBarElementColor,
  padding = 'md',
}: Props) => {
  return (
    <>
      <StatusBarContainer
        statusBarBackgroundColor={statusBarBackgroundColor}
        statusBarElementColor={statusBarElementColor}
      />
      <ImageBackground source={DefaultBackground} style={styles.bg}>
        <SafeAreaView
          edges={edges}
          style={[styles.container, { padding: PADDING_MAP[padding] }, style]}
        >
          {children}
        </SafeAreaView>
      </ImageBackground>
    </>
  )
}

const styles = StyleSheet.create({
  bg: {
    position: 'absolute',
    height: '100%',
    width: '100%',
  },
  container: {
    flex: 1,
  },
})
