import React from 'react'
import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg'

import type { SvgProps } from 'react-native-svg'

export const Plus = (props: SvgProps) => {
  return (
    <Svg width='25' height='25' viewBox='0 0 25 25' fill='none' {...props}>
      <Path
        d='M12.4194 2.43555V23.4033M22.9033 12.9194L1.93555 12.9194'
        stroke='url(#paint0_linear_120_5227)'
        strokeWidth={3.14516}
        strokeLinecap='round'
      />
      <Defs>
        <LinearGradient
          id='paint0_linear_120_5227'
          x1='19.0238'
          y1='39.0972'
          x2='22.3562'
          y2='7.36711'
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
