import React from 'react'
import { Pressable, View, ViewStyle, Image, ImageBackground } from 'react-native'

import { icons } from '@/components/ui'

import { styles } from './primary-button.style'

type ButtonSizeType = 'big' | 'default'

const SIZE_MAP = {
  big: 120,
  default: 100,
} as const

interface Props {
  icon?: 'play' | 'continue' | 'profile'
  style?: ViewStyle
  sizeType?: ButtonSizeType
}

export function PrimaryButton({ icon, style, sizeType = 'default' }: Props) {
  const buttonSize = SIZE_MAP[sizeType]
  const iconSize = buttonSize / 2

  const iconMap = {
    play: icons.play,
    continue: icons.continue,
    profile: icons.profile,
  } as const

  const iconSource = icon ? iconMap[icon] : undefined

  return (
    <Pressable>
      <View style={[styles.container, style, { width: buttonSize, height: buttonSize }]}>
        <ImageBackground
          source={icons.primary_button}
          resizeMode='cover'
          style={[styles.button, { width: buttonSize, height: buttonSize }]}
        >
          {iconSource && (
            <Image
              source={iconSource}
              style={[
                icon === 'play' ? styles.icon_left : null,
                { width: iconSize, height: iconSize },
              ]}
              resizeMode='contain'
            />
          )}
        </ImageBackground>
      </View>
    </Pressable>
  )
}
