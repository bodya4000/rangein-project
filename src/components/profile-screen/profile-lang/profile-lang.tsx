import { ArrowRight } from '@/components/icons'
import { GradientText, TouchableBlock } from '@/components/ui'
import { STORAGE_KEYS } from '@/constants'
import { useSelectedLanguage } from '@/i18n'
import { storage } from '@/store'

import { styles } from './profile-lang.style'

export const ProfileLang = () => {
  const { language, setLanguage } = useSelectedLanguage()

  const onChangeLanguagePress = () => {
    const newLang = language == 'en' ? 'ru' : 'en'
    console.log(newLang)

    setLanguage(newLang)
  }
  return (
    <TouchableBlock style={styles.profileBlock} onPress={onChangeLanguagePress}>
      <GradientText tx='profile.changeLanguage' />
      <ArrowRight />
    </TouchableBlock>
  )
}
