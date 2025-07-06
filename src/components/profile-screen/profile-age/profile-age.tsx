import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { View } from 'react-native'

import { Minus, Plus } from '@/components/icons'
import { GradientText, Touchable, TouchableBlock } from '@/components/ui'

import { styles } from './profile-screen.style'

export const ProfileAge = () => {
  const { t } = useTranslation()
  const [age, setAge] = useState(0)
  const increaseAge = () => {
    setAge(age + 1)
  }
  const decreaseAge = () => {
    if (age > 10) {
      setAge(age - 1)
    }
  }
  return (
    <TouchableBlock touchable={false} style={styles.profileBlock}>
      <Touchable onPress={decreaseAge}>
        <View style={styles.touchable_icon}>
          <Minus />
        </View>
      </Touchable>
      <GradientText>
        {age} {t('profile.years')}
      </GradientText>
      <Touchable onPress={increaseAge}>
        <View style={styles.touchable_icon}>
          <Plus />
        </View>
      </Touchable>
    </TouchableBlock>
  )
}
