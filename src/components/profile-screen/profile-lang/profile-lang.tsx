import { ArrowRight } from '@/components/icons'
import { GradientText, TouchableBlock } from '@/components/ui'
import { useSelectedLanguage } from '@/i18n'

import { styles } from './profile-lang.style'

export const ProfileLang = () => {
  const { language, setLanguage } = useSelectedLanguage()

  const onChangeLanguagePress = () => {
    const newLang = language == 'en' ? 'ru' : 'en'
    setLanguage(newLang)
  }
  return (
    <TouchableBlock style={styles.profileBlock} onPress={onChangeLanguagePress}>
      <GradientText tx='profile.changeLanguage' />
      <ArrowRight />
    </TouchableBlock>
  )
}
