import ButtonPng from '@assets/images/buttons/primary.png'
import React from 'react'
import { Pressable, View, ViewStyle, StyleSheet, Image } from 'react-native'
import { SvgProps } from 'react-native-svg'

import { IconType } from '@/types'

interface Props {
  icon?: IconType
  style?: ViewStyle
  svgProps?: SvgProps
}

export function GameButton({}: Props) {
  return (
    <Pressable>
      <View
        style={[
          styles.container,
          {
            width: 210,
            height: 210,
          },
        ]}
      >
        <Image source={ButtonPng} style={styles.image} />
        <View style={styles.overlay}></View>
      </View>
    </Pressable>
  )
}
export const styles = StyleSheet.create({
  container: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
})
