import { LinearGradient } from 'expo-linear-gradient'
import { useState } from 'react'
import { LayoutChangeEvent, View } from 'react-native'

import { ArrowRight, Minus, Plus } from '@/components/icons'
import ProfileLogo from '@/components/profile/profile-logo/profile-logo'
import ProfileUsername from '@/components/profile/profile-username/profile-username'
import { GradientText, TouchableBlock } from '@/components/ui'
import { colors } from '@/constants/colors'

import { styles } from './profile-screen.style'

interface Dimensions {
  width: number | 'auto'
  height: number | 'auto'
}

const ProfileScreen = () => {
  const [dimensions, setDimensions] = useState<Dimensions>({ width: 'auto', height: 'auto' })
  const onSexContainerLayout = (e: LayoutChangeEvent) => {
    const { height, width } = e.nativeEvent.layout
    if (height !== dimensions.height || width !== dimensions.width) {
      setDimensions({ height, width })
    }
  }

  const sexButtonStyle =
    typeof dimensions.width === 'number' ? { width: dimensions.width / 1.6 } : {}
  return (
    <View style={styles.screenContainer}>
      <ProfileLogo />
      <ProfileUsername />

      <View style={styles.sexContainer} onLayout={onSexContainerLayout}>
        <View style={{ left: 50, zIndex: 1000 }}>
          <TouchableBlock style={[styles.sexButton, sexButtonStyle]}>
            <GradientText textStyle='IR16' color={colors.gradientMetal2}>
              Male
            </GradientText>
          </TouchableBlock>
        </View>

        <LinearGradient
          colors={colors.light_dark as [string, string, ...string[]]}
          start={{ x: 1, y: 1 }}
          end={{ x: 0, y: 0 }}
          style={[styles.sexButton, sexButtonStyle]}
        >
          <GradientText textStyle='IR16' color={colors.gradientMetal2}>
            Female
          </GradientText>
        </LinearGradient>
      </View>

      <TouchableBlock style={styles.profileBlock}>
        <Minus />
        <GradientText color={colors.gradientMetal2} style={{ alignItems: 'center' }}>
          20 years
        </GradientText>
        <Plus />
      </TouchableBlock>
      <TouchableBlock style={styles.profileBlock}>
        <GradientText>Change Language</GradientText>
        <ArrowRight />
      </TouchableBlock>
    </View>
  )
}

export default ProfileScreen
