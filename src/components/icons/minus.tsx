import React from 'react'
import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg'

import type { SvgProps } from 'react-native-svg'

export const Minus = (props: SvgProps) => {
  return (
    <Svg width='25' height='4' viewBox='0 0 25 4' fill='none' {...props}>
      <Path
        d='M23.0644 1.91943H2.09668'
        stroke='url(#paint0_linear_120_5228)'
        strokeWidth={3.14516}
        strokeLinecap='round'
      />
      <Defs>
        <LinearGradient
          id='paint0_linear_120_5228'
          x1='15.0228'
          y1='6.21539'
          x2='16.1143'
          y2='4.40669'
          gradientUnits='userSpaceOnUse'
        >
          <Stop stopColor='#E1E0E0' />
          <Stop offset='1' stopColor='#DBDBDA' />
        </LinearGradient>
      </Defs>
    </Svg>
  )
}
