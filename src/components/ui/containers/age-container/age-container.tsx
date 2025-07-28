import { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { View } from 'react-native'

import { Minus, Plus } from '@/components/icons'
import { GradientText, Touchable, TouchableBlock } from '@/components/ui'

import { styles } from './age-container.style'

const LONG_PRESS_INTERVAL_MS = 80

interface Props {
  age: number
  setAge: (_: number) => void
}

export const AgeContainer = ({ age, setAge }: Props) => {
  const { t } = useTranslation()
  const increaseAge = () => {
    setAge(age + 1)
  }
  const decreaseAge = () => {
    if (age > 10) {
      setAge(age - 1)
    }
  }

  const intervalRef = useRef<number | null>(null)

  const ageRef = useRef(age)
  useEffect(() => {
    ageRef.current = age
  }, [age])

  const handleLongPress = (type: 'plus' | 'minus') => {
    if (intervalRef.current) return
    const stepVal = type === 'plus' ? 1 : -1

    intervalRef.current = setInterval(() => {
      const next = ageRef.current + stepVal
      if (next >= 1 && next <= 100) {
        setAge(next)
        ageRef.current = next
      }
    }, LONG_PRESS_INTERVAL_MS)
  }

  const handlePressOut = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
  }
  return (
    <TouchableBlock touchable={false} style={styles.profileBlock}>
      <Touchable
        onPress={decreaseAge}
        onLongPress={() => handleLongPress('minus')}
        onPressOut={handlePressOut}
      >
        <View style={styles.touchable_icon}>
          <Minus />
        </View>
      </Touchable>
      <GradientText style={{ minWidth: 100, textAlign: 'center' }}>
        {age} {t('profile.years')}
      </GradientText>
      <Touchable
        onPress={increaseAge}
        onLongPress={() => handleLongPress('plus')}
        onPressOut={handlePressOut}
      >
        <View style={styles.touchable_icon}>
          <Plus />
        </View>
      </Touchable>
    </TouchableBlock>
  )
}
