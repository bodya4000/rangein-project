import React from 'react'
import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg'

import type { SvgProps } from 'react-native-svg'

export const ArrowLeft = (props: SvgProps) => {
  return (
    <Svg width='20' height='21' viewBox='0 0 20 21' fill='none' {...props}>
      <Path
        d='M9.85294 0.647059L2.35294 8.14706L-5.00652e-07 10.5L2.35294 12.8529L9.85294 20.3529C9.93416 20.4342 10.0658 20.4342 10.1471 20.3529L11.2993 19.2007C11.8772 18.6228 11.8663 17.6825 11.2751 17.1182L9.11765 15.0588C9.11765 15.0588 5.67706 11.7504 4.66345 10.5C5.67706 9.24962 9.11765 5.94118 9.11765 5.94118L11.2751 3.88179C11.8663 3.31748 11.8772 2.37721 11.2993 1.79931L10.1471 0.647059C10.0658 0.56584 9.93416 0.56584 9.85294 0.647059Z'
        fill='url(#paint0_linear_107_1686)'
      />
      <Defs>
        <LinearGradient
          id='paint0_linear_107_1686'
          x1='19.335'
          y1='26.1346'
          x2='2.6129'
          y2='12.5911'
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
