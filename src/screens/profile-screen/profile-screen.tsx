import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { View } from 'react-native'

import { ArrowRight, Minus, Plus } from '@/components/icons'
import { ProfileLogo, ProfileSex, ProfileUsername } from '@/components/profile'
import { GradientText, TouchableBlock } from '@/components/ui'
import Touchable from '@/components/ui/buttons/touchable/touchabe'
import { STORAGE_KEYS } from '@/constants'
import { colors } from '@/constants/colors'
import i18n, { useSelectedLanguage } from '@/i18n'
import { storage } from '@/store'

import { styles } from './profile-screen.style'

const ProfileScreen = () => {
  const { t } = useTranslation()
  const { language, setLanguage } = useSelectedLanguage()
  const [age, setAge] = useState(20)
  const increaseAge = () => {
    setAge(age + 1)
  }
  const decreaseAge = () => {
    if (age > 10) {
      setAge(age - 1)
    }
  }

  const onChangeLanguagePress = () => {
    const newLang = language == 'en' ? 'ru' : 'en'
    setLanguage(newLang)
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
        <GradientText color={colors.gradientMetal2}>
          {age} {t('profile.years')}
        </GradientText>
        <Touchable onPress={increaseAge}>
          <View style={styles.touchable_icon}>
            <Plus />
          </View>
        </Touchable>
      </TouchableBlock>

      <TouchableBlock style={styles.profileBlock} onPress={onChangeLanguagePress}>
        <GradientText tx='profile.changeLanguage' />
        <ArrowRight />
      </TouchableBlock>
    </View>
  )
}

export default ProfileScreen
