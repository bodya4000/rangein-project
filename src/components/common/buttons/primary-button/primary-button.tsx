import React from 'react'
import { Pressable, View, ViewStyle, StyleSheet, ImageBackground } from 'react-native'
import { SvgProps } from 'react-native-svg'

import { icons } from '@/components/ui'
import { IconType } from '@/types'

interface Props {
  icon?: IconType
  style?: ViewStyle
  svgProps?: SvgProps
}

export function PrimaryButton({}: Props) {
  return (
    <Pressable>
      <View style={[styles.container]}>
        <ImageBackground style={styles.button} resizeMode='stretch' source={icons.primary_button}>
          {/* <Text style={[styles.title, textStyle]}>{title}</Text> */}
        </ImageBackground>
      </View>
    </Pressable>
  )
}
export const styles = StyleSheet.create({
  container: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    width: 210,
    height: 210,
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
  button: {
    width: '100%',
    height: '100%',
  },
})
