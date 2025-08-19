import { Href, useRouter } from 'expo-router'
import { useCallback, useRef } from 'react'
import { StyleProp, ViewStyle } from 'react-native'

import { PrimaryButton } from '../ui'

interface Props {
  icon?: React.ReactNode
  href: Href
  sizeType?: 'big' | 'default'
  style?: StyleProp<ViewStyle>
  disabled?: boolean
}

const HomeButton = ({ icon, href, sizeType, style, disabled }: Props) => {
  const router = useRouter()
  const lastPressRef = useRef(0)

  const handlePress = useCallback(() => {
    const now = Date.now()
    if (now - lastPressRef.current > 1000) {
      lastPressRef.current = now
      router.push(href)
    }
  }, [router, href])

  return (
    <PrimaryButton
      disabled={disabled}
      style={style ?? {}}
      sizeType={sizeType}
      onPress={handlePress}
    >
      {icon}
    </PrimaryButton>
  )
}

export default HomeButton
