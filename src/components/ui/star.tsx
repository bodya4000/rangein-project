import React from 'react'
import { Image, ImageProps, View } from 'react-native'
import { ViewProps } from 'react-native-svg/lib/typescript/fabric/utils'

import { icons } from './icons'

interface Props extends ImageProps {
  type?: 'bronze' | 'silver' | 'gold'
  filled?: boolean
}

export default function Star({ type = 'silver', filled = false, ...props }: Props) {
  let source

  if (type === 'gold') {
    source = icons.gold_filled
  } else if (type === 'silver') {
    source = filled ? icons.silver_filled : icons.silver
  } else if (type === 'bronze') {
    source = filled ? icons.bronze_filled : icons.bronze
  }

  if (!source) return null

  return <Image {...props} source={source} />
}
