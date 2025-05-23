import React from 'react'
import Svg, { Rect, Defs, LinearGradient, Stop, G } from 'react-native-svg'

import type { SvgProps } from 'react-native-svg'

export const Continue = (props: SvgProps) => {
  return (
    <Svg width='37' height='42' viewBox='0 0 37 42' fill='none' {...props}>
      <G filter='url(#filter0_d_93_1442)'>
        <Rect
          x='4'
          width='10.3846'
          height='33.2308'
          rx='1.07257'
          fill='url(#paint0_linear_93_1442)'
        />
        <Rect
          x='21.6538'
          width='10.3846'
          height='33.2308'
          rx='1.07257'
          fill='url(#paint1_linear_93_1442)'
        />
      </G>
      <Defs>
        <LinearGradient
          id='paint0_linear_93_1442'
          x1='11.7019'
          y1='30.7385'
          x2='-2.80766'
          y2='25.3433'
          gradientUnits='userSpaceOnUse'
        >
          <Stop stopColor='#A8A8A6' />
          <Stop offset='0.451645' stopColor='#696969' />
          <Stop offset='0.665' stopColor='#F9F8F6' />
          <Stop offset='0.825' stopColor='#D4D4D4' />
          <Stop offset='1' stopColor='#7F7F7F' />
        </LinearGradient>
        <LinearGradient
          id='paint1_linear_93_1442'
          x1='29.3557'
          y1='30.7385'
          x2='14.8461'
          y2='25.3433'
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
