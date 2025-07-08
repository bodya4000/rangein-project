import { ArrowRight } from '@/components/icons'
import { useSelectedLanguage } from '@/i18n'

import { styles } from './lang-container.style'
import { TouchableBlock } from '../../buttons'
import { GradientText } from '../../text'

export const LangContainer = () => {
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
