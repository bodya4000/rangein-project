import LottieView from 'lottie-react-native'
import React from 'react'

interface Props {
  size?: 'sm' | 'md' | 'lg'
}

const SIZE_MAP = {
  sm: 100,
  md: 200,
  lg: 250,
}

import loaderAnim from '@assets/animations/loader.json'

export const PrimaryLoader = ({ size = 'md' }: Props) => {
  const dimension = SIZE_MAP[size] ?? SIZE_MAP.md

  return (
    <LottieView source={loaderAnim} autoPlay loop style={{ width: dimension, height: dimension }} />
  )
}
