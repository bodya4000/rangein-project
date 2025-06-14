import React from 'react'
import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg'

import type { SvgProps } from 'react-native-svg'

export const Profile = (props: SvgProps) => {
  return (
    <Svg width='36' height='40' viewBox='0 0 36 40' fill='none' {...props}>
      <Path
        d='M36 29.0909V33.9394C36 37.2866 33.2682 40 29.8983 40H6.10169C2.73182 40 0 37.2866 0 33.9394V29.0909C0 22.7062 4.96991 17.4744 11.2768 17.0041C9.22713 15.2265 7.9322 12.612 7.9322 9.69697C7.9322 4.34148 12.3031 0 17.6949 0C23.0867 0 27.4576 4.34148 27.4576 9.69697C27.4576 12.5959 26.177 15.1976 24.1469 16.9746C30.7247 17.1588 36 22.5129 36 29.0909Z'
        fill='url(#paint0_linear_93_1420)'
      />
      <Defs>
        <LinearGradient
          id='paint0_linear_93_1420'
          x1='26.7'
          y1='37'
          x2='0.0303002'
          y2='8.43979'
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
