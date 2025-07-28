import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { ArrowRight } from '@/components/icons'
import { useSelectedLanguage } from '@/i18n'
import { Language } from '@/i18n/resources'

import { styles } from './lang-container.style'
import { TouchableBlock } from '../../buttons'
import { GradientText } from '../../text'

export const LangContainer = () => {
  const { language, setLanguage } = useSelectedLanguage()
  const [langIndex, setLangIndex] = useState(0)
  const langList = ['en', 'ru', 'zh']
  useEffect(() => {
    if (language === 'en') {
      setLangIndex(0)
    } else if (language === 'ru') {
      setLangIndex(1)
    } else if (language === 'zh') {
      setLangIndex(2)
    }
  }, [language])

  const onChangeLanguagePress = () => {
    const nextIndex = langIndex === 2 ? 0 : langIndex + 1
    setLangIndex(nextIndex)
    const newLang = langList[nextIndex]
    setLanguage(newLang as Language)
  }

  return (
    <TouchableBlock style={styles.profileBlock} onPress={onChangeLanguagePress}>
      <GradientText tx='profile.changeLanguage' />
      <ArrowRight />
    </TouchableBlock>
  )
}
