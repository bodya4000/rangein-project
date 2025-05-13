import React from 'react'
import { Pressable, View, ViewStyle, ImageBackground, Image } from 'react-native'
import { SvgProps } from 'react-native-svg'

import { icons } from '@/components/ui'
import { spacing } from '@/constants/spacing'

import { styles } from './primary-button.style'

interface Props {
  icon?: 'play' | 'continue' | 'profile'
  style?: ViewStyle
  svgProps?: SvgProps
}

export function PrimaryButton({ icon }: Props) {
  return (
    <Pressable>
      <View style={[styles.container]}>
        <ImageBackground style={styles.button} resizeMode='stretch' source={icons.primary_button}>
          {icon == 'play' && <Image style={{ paddingLeft: spacing.sm }} source={icons.play} />}
          {icon == 'continue' && <Image source={icons.continue} />}
          {icon == 'profile' && <Image source={icons.profile} />}
        </ImageBackground>
      </View>
    </Pressable>
  )
}
