import React from 'react'
import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg'

import type { SvgProps } from 'react-native-svg'

export const Check = (props: SvgProps) => {
  return (
    <Svg width='24' height='25' viewBox='0 0 24 25' fill='none' {...props}>
      <Path
        d='M2 11.1666L9.33333 18.4999L22 5.83325'
        stroke='url(#paint0_linear_119_5164)'
        strokeWidth='3'
        strokeLinecap='round'
      />
      <Defs>
        <LinearGradient
          id='paint0_linear_119_5164'
          x1='23.3778'
          y1='19.6651'
          x2='10.4535'
          y2='5.28177'
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
