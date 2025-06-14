import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Text, View } from 'react-native'

import { ArrowRight, Minus, Plus } from '@/components/icons'
import { ProfileLogo, ProfileSex, ProfileUsername } from '@/components/profile-screen'
import { GradientText, ResultModal, Touchable, TouchableBlock } from '@/components/ui'
import { useSelectedLanguage } from '@/i18n'

import { styles } from './profile-screen.style'

const ProfileScreen = () => {
  const { t } = useTranslation()
  const { language, setLanguage } = useSelectedLanguage()
  const [age, setAge] = useState(20)
  const [modal, setModal] = useState(false)
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
        <GradientText>
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

      <TouchableBlock style={styles.profileBlock} onPress={() => setModal(!modal)}>
        <Text style={{ color: '#fff' }}>Modal</Text>
        <ArrowRight />
      </TouchableBlock>

      {modal && <ResultModal stars={3} onClose={() => setModal(false)} />}
    </View>
  )
}

export default ProfileScreen
