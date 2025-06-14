import React from 'react'
import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg'

import type { SvgProps } from 'react-native-svg'

export const RectButton = (props: SvgProps) => {
  return (
    <Svg width='180' height='71' viewBox='0 0 180 71' fill='none' {...props}>
      <Path
        d='M173.026 10.5226L175.04 59.8305C111.765 62.2031 73.5141 63.9289 7.32329 61.4841C4.05653 41.5823 4.30907 32.4046 7.67177 12.5033C70.8683 10.4532 106.897 8.43756 173.026 10.5226Z'
        fill='url(#paint0_linear_107_1308)'
      />
      <Path
        d='M58.5826 7.66302C59.0761 7.60172 59.2149 7.52729 58.9836 7.43973C59.3999 7.40033 59.7546 7.39157 60.063 7.41346C60.3098 7.43097 60.5257 7.49226 60.6953 7.60172C62.5459 8.75754 64.6586 9.87394 67.0181 10.9553C67.126 11.0035 67.1106 11.0473 66.941 11.0779L66.9256 11.0823C66.7559 11.1173 66.6171 11.1129 66.4783 11.0648C63.5329 10.0359 59.9551 8.9458 58.5826 7.66302Z'
        fill='url(#paint1_linear_107_1308)'
      />
      <Path
        d='M174.542 9.40922C173.988 8.76646 172.735 10.1964 172.174 13.4823C171.799 15.6825 171.859 18.913 172.185 22.1748C172.999 30.3078 173.75 50.9448 173.825 55.926C173.901 60.9071 169.279 57.5575 168.661 60.5394C168.044 63.5213 172.32 64.7469 172.441 64.5552C172.561 64.3634 179.291 65.9725 180 52.0964C179.999 26.9521 175.134 10.0967 174.542 9.40922Z'
        fill='url(#paint2_linear_107_1308)'
      />
      <Path
        d='M4.669 10.578C5.28056 9.86839 9.63879 9.94616 10.556 13.4668C11.0259 15.2707 10.3515 18.1972 8.30736 21.9303C7.4931 30.0633 6.58968 52.4113 7.56658 56.8943C7.49139 61.8754 12.1129 58.5258 12.7306 61.5077C13.3482 64.4896 6.57053 65.5481 6.44914 65.3564C6.32883 65.1646 2.10063 66.9408 1.39197 53.0647C1.39304 27.9204 4.0771 11.2654 4.669 10.578Z'
        fill='url(#paint3_linear_107_1308)'
      />
      <Defs>
        <LinearGradient
          id='paint0_linear_107_1308'
          x1='175.04'
          y1='36.1567'
          x2='5.00638'
          y2='36.1567'
          gradientUnits='userSpaceOnUse'
        >
          <Stop stopColor='#1A1A1A' />
          <Stop offset='1' stopColor='#111111' />
        </LinearGradient>
        <LinearGradient
          id='paint1_linear_107_1308'
          x1='67.0865'
          y1='9.25351'
          x2='58.5826'
          y2='9.25351'
          gradientUnits='userSpaceOnUse'
        >
          <Stop stopColor='#212121' />
          <Stop offset='1' stopColor='#181818' />
        </LinearGradient>
        <LinearGradient
          id='paint2_linear_107_1308'
          x1='179.763'
          y1='10.6418'
          x2='159.362'
          y2='14.4342'
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
          id='paint3_linear_107_1308'
          x1='1.62902'
          y1='11.6025'
          x2='21.9905'
          y2='15.3916'
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
