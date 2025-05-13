import ButtonSvg from '@assets/svgs/button.svg'
import React from 'react'
import { Pressable, View, ViewStyle, StyleSheet } from 'react-native'
import { SvgProps } from 'react-native-svg'

import { buttonIcons } from '@/components/ui'
import { IconType } from '@/types'

interface Props {
  icon: IconType
  style: ViewStyle
  svgProps: SvgProps
}

export function GameButton({ icon = 'play', svgProps }: Props) {
  const SvgIcon = buttonIcons[icon]

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
        <ButtonSvg width={'100%'} height={'100%'} />
        <View style={styles.overlay}>
          <SvgIcon {...svgProps} width={svgProps?.width ?? 45} height={svgProps?.height ?? 45} />
        </View>
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
})
