import React from 'react'
import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg'

import type { SvgProps } from 'react-native-svg'

export const Burger = (props: SvgProps) => {
  return (
    <Svg width='32' height='29' viewBox='0 0 32 29' fill='none' {...props}>
      <Path
        d='M4.80005 4.90002H27.2M4.80005 14.5H27.2M4.80005 24.1H27.2'
        stroke='url(#paint0_linear_119_4704)'
        strokeWidth='3'
        strokeLinecap='round'
      />
      <Defs>
        <LinearGradient
          id='paint0_linear_119_4704'
          x1='31'
          y1='26'
          x2='3.53492'
          y2='2.81289'
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
