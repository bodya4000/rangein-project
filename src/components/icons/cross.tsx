import React from 'react'
import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg'

import type { SvgProps } from 'react-native-svg'

export const Cross = (props: SvgProps) => {
  return (
    <Svg width='19' height='19' viewBox='0 0 19 19' fill='none' {...props}>
      <Path
        d='M2.19995 17.0425L16.8426 2.3999M2.19995 2.4L16.8426 17.0426'
        stroke='url(#paint0_linear_120_5218)'
        strokeWidth={3.10617}
        strokeLinecap='round'
      />
      <Defs>
        <LinearGradient
          id='paint0_linear_120_5218'
          x1='14.1334'
          y1='28.0024'
          x2='16.4605'
          y2='5.84384'
          gradientUnits='userSpaceOnUse'
        >
          <Stop stopColor='#A8A8A6' />
          <Stop offset='0.451645' stopColor='#696969' />
          <Stop offset='0.665' stopColor='#F9F8F6' />
          <Stop offset='0.825' stopColor='#D4D4D4' />
          <Stop offset='1' stopColor='#7F7F7F' />
        </LinearGradient>
      </Defs>
    </Svg>
  )
}
