import React from 'react'
import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg'

import type { SvgProps } from 'react-native-svg'

interface Props extends SvgProps {
  filled?: boolean
}

export const SilverStar = (props: Props) => {
  return (
    <Svg width='113' height='113' viewBox='0 0 113 113' fill='none' {...props}>
      <Path
        d='M70.0801 34.4531C70.49 35.3269 71.2928 35.9467 72.2334 36.126L72.4229 36.1562L105.023 40.2354L81.0479 62.7002C80.3437 63.36 80.0021 64.3149 80.1221 65.2646L80.1523 65.4551L86.3457 97.7207L57.5732 81.8594L57.4014 81.7725C56.5929 81.3921 55.6561 81.392 54.8477 81.7725L54.6768 81.8594L25.9023 97.7207L32.0967 65.4551C32.2786 64.5074 31.9931 63.5338 31.3379 62.8359L31.2012 62.7002L7.22461 40.2354L39.8262 36.1562C40.7836 36.0364 41.6208 35.4637 42.082 34.625L42.1699 34.4531L56.125 4.70801L70.0801 34.4531Z'
        fill={props.filled ? 'url(#paint0_linear_107_1211)' : 'none'}
        stroke='url(#paint1_linear_107_1211)'
        strokeWidth='4'
      />
      <Defs>
        <LinearGradient
          id='paint0_linear_107_1211'
          x1='2.80624'
          y1='2.33853'
          x2='106.169'
          y2='116.926'
          gradientUnits='userSpaceOnUse'
        >
          <Stop stopColor='#3A3A3A' />
          <Stop offset='0.18' stopColor='#A4A4A4' />
          <Stop offset='0.315' stopColor='#606060' />
          <Stop offset='0.491919' stopColor='#CECECE' />
          <Stop offset='0.615' stopColor='#8F8F8F' />
          <Stop offset='0.785' stopColor='#464646' />
          <Stop offset='0.955' stopColor='#696969' />
        </LinearGradient>
        <LinearGradient
          id='paint1_linear_107_1211'
          x1='2.80624'
          y1='2.33853'
          x2='106.169'
          y2='116.926'
          gradientUnits='userSpaceOnUse'
        >
          <Stop stopColor='#3A3A3A' />
          <Stop offset='0.18' stopColor='#A4A4A4' />
          <Stop offset='0.315' stopColor='#606060' />
          <Stop offset='0.491919' stopColor='#CECECE' />
          <Stop offset='0.615' stopColor='#8F8F8F' />
          <Stop offset='0.785' stopColor='#464646' />
          <Stop offset='0.955' stopColor='#696969' />
        </LinearGradient>
      </Defs>
    </Svg>
  )
}
