import React from 'react'
import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg'

import type { SvgProps } from 'react-native-svg'

export const ArrowRight = (props: SvgProps) => {
  return (
    <Svg width='20' height='21' viewBox='0 0 20 21' fill='none' {...props}>
      <Path
        d='M10.1471 0.372889L17.6471 7.87289L20 10.2258L17.6471 12.5788L10.1471 20.0788C10.0658 20.16 9.93416 20.16 9.85294 20.0788L8.70069 18.9265C8.12279 18.3486 8.13372 17.4083 8.7249 16.844L10.8824 14.7847C10.8824 14.7847 14.3229 11.4762 15.3366 10.2258C14.3229 8.97545 10.8824 5.66701 10.8824 5.66701L8.7249 3.60762C8.13372 3.04331 8.12279 2.10304 8.70069 1.52514L9.85294 0.372889C9.93416 0.291671 10.0658 0.291671 10.1471 0.372889Z'
        fill='url(#paint0_linear_107_2902)'
      />
      <Defs>
        <LinearGradient
          id='paint0_linear_107_2902'
          x1='0.664969'
          y1='25.8604'
          x2='17.3871'
          y2='12.3169'
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
