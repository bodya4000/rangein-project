import React from 'react'
import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg'

import type { SvgProps } from 'react-native-svg'

export const Play = (props: SvgProps) => {
  return (
    <Svg width='47' height='54' viewBox='0 0 47 54' fill='none' {...props}>
      <Path
        d='M46.7638 26.8548L0.960195 53.2996L0.960197 0.410103L46.7638 26.8548Z'
        fill='url(#paint0_linear_93_1398)'
      />
      <Defs>
        <LinearGradient
          id='paint0_linear_93_1398'
          x1='-9.72731'
          y1='41.6138'
          x2='38.112'
          y2='1.40839'
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
