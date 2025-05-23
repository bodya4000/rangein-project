import React from 'react'
import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg'

import type { SvgProps } from 'react-native-svg'

export const GoldStar = (props: SvgProps) => {
  return (
    <Svg width='113' height='113' viewBox='0 0 113 113' fill='none' {...props}>
      <Path
        d='M70.0801 34.4531C70.49 35.3269 71.2928 35.9467 72.2334 36.126L72.4229 36.1562L105.023 40.2354L81.0479 62.7002C80.3437 63.36 80.0021 64.3149 80.1221 65.2646L80.1523 65.4551L86.3457 97.7207L57.5732 81.8594L57.4014 81.7725C56.5929 81.3921 55.6561 81.392 54.8477 81.7725L54.6768 81.8594L25.9023 97.7207L32.0967 65.4551C32.2786 64.5074 31.9931 63.5338 31.3379 62.8359L31.2012 62.7002L7.22461 40.2354L39.8262 36.1562C40.7836 36.0364 41.6208 35.4637 42.082 34.625L42.1699 34.4531L56.125 4.70801L70.0801 34.4531Z'
        fill='url(#paint0_linear_93_10460)'
        stroke='url(#paint1_linear_93_10460)'
        strokeWidth='4'
      />
      <Defs>
        <LinearGradient
          id='paint0_linear_93_10460'
          x1='14.9666'
          y1='19.6436'
          x2='94.0088'
          y2='99.6213'
          gradientUnits='userSpaceOnUse'
        >
          <Stop stopColor='#8C421D' />
          <Stop offset='0.325272' stopColor='#FBE67B' />
          <Stop offset='0.535488' stopColor='#FCFBE7' />
          <Stop offset='0.769917' stopColor='#F7D14E' />
          <Stop offset='1' stopColor='#D4A041' />
        </LinearGradient>
        <LinearGradient
          id='paint1_linear_93_10460'
          x1='14.9666'
          y1='19.6436'
          x2='94.0088'
          y2='99.6213'
          gradientUnits='userSpaceOnUse'
        >
          <Stop stopColor='#8C421D' />
          <Stop offset='0.325272' stopColor='#FBE67B' />
          <Stop offset='0.535488' stopColor='#FCFBE7' />
          <Stop offset='0.769917' stopColor='#F7D14E' />
          <Stop offset='1' stopColor='#D4A041' />
        </LinearGradient>
      </Defs>
    </Svg>
  )
}
