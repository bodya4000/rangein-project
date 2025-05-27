import React from 'react'
import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg'

import type { SvgProps } from 'react-native-svg'

interface Props extends SvgProps {
  filled?: boolean
}

export const BronzeStar = (props: Props) => {
  return (
    <Svg width='113' height='113' viewBox='0 0 113 113' fill='none' {...props}>
      <Path
        d='M70.0798 34.4531C70.4898 35.3269 71.2926 35.9467 72.2332 36.126L72.4226 36.1562L105.023 40.2354L81.0476 62.7002C80.3434 63.36 80.0019 64.3149 80.1218 65.2646L80.1521 65.4551L86.3455 97.7207L57.573 81.8594L57.4011 81.7725C56.5927 81.3921 55.6558 81.392 54.8474 81.7725L54.6765 81.8594L25.9021 97.7207L32.0964 65.4551C32.2784 64.5074 31.9929 63.5338 31.3376 62.8359L31.2009 62.7002L7.22437 40.2354L39.8259 36.1562C40.7834 36.0364 41.6205 35.4637 42.0818 34.625L42.1697 34.4531L56.1248 4.70801L70.0798 34.4531Z'
        fill={props.filled ? 'url(#paint0_linear_107_1027)' : 'none'}
        stroke='url(#paint1_linear_107_1027)'
        strokeWidth='4'
      />
      <Defs>
        <LinearGradient
          id='paint0_linear_107_1027'
          x1='2.80599'
          y1='2.33853'
          x2='106.169'
          y2='116.926'
          gradientUnits='userSpaceOnUse'
        >
          <Stop stopColor='#BC6554' />
          <Stop offset='0.2' stopColor='#62362D' />
          <Stop offset='0.395' stopColor='#A1503D' />
          <Stop offset='0.491919' stopColor='#CA7561' />
          <Stop offset='0.67' stopColor='#E2AA9D' />
          <Stop offset='0.83' stopColor='#62362D' />
          <Stop offset='0.955' stopColor='#AA5946' />
        </LinearGradient>
        <LinearGradient
          id='paint1_linear_107_1027'
          x1='2.80599'
          y1='2.33853'
          x2='106.169'
          y2='116.926'
          gradientUnits='userSpaceOnUse'
        >
          <Stop stopColor='#BC6554' />
          <Stop offset='0.2' stopColor='#62362D' />
          <Stop offset='0.395' stopColor='#A1503D' />
          <Stop offset='0.491919' stopColor='#CA7561' />
          <Stop offset='0.67' stopColor='#E2AA9D' />
          <Stop offset='0.83' stopColor='#62362D' />
          <Stop offset='0.955' stopColor='#AA5946' />
        </LinearGradient>
      </Defs>
    </Svg>
  )
}
