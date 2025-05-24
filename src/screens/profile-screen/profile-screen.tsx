import { useState } from 'react'
import { View } from 'react-native'

import { ArrowRight, Minus, Plus } from '@/components/icons'
import { ProfileLogo, ProfileSex, ProfileUsername } from '@/components/profile'
import { GradientText, TouchableBlock } from '@/components/ui'
import Touchable from '@/components/ui/buttons/touchable/touchabe'
import { colors } from '@/constants/colors'

import { styles } from './profile-screen.style'

const ProfileScreen = () => {
  const [age, setAge] = useState(20)
  const increaseAge = () => {
    setAge(age + 1)
  }
  const decreaseAge = () => {
    if (age > 10) {
      setAge(age - 1)
    }
  }
  return (
    <View style={styles.screenContainer}>
      <ProfileLogo />
      <ProfileUsername />
      <ProfileSex />

      <TouchableBlock touchable={false} style={styles.profileBlock}>
        <Touchable onPress={decreaseAge}>
          <View style={styles.touchable_icon}>
            <Minus />
          </View>
        </Touchable>
        <GradientText color={colors.gradientMetal2}>{age} years</GradientText>
        <Touchable onPress={increaseAge}>
          <View style={styles.touchable_icon}>
            <Plus />
          </View>
        </Touchable>
      </TouchableBlock>

      <TouchableBlock style={styles.profileBlock}>
        <GradientText>Change Language</GradientText>
        <ArrowRight />
      </TouchableBlock>
    </View>
  )
}

export default ProfileScreen
