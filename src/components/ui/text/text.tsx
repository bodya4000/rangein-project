import React from 'react'
import { useTranslation } from 'react-i18next'
import { StyleSheet, Text as NNText } from 'react-native'

import { colors } from '@/constants/colors'
import { TxKeyPath } from '@/i18n/react-i18next'
import { scaleFont } from '@/utils'

import type { TextProps } from 'react-native'

// prettier-ignore
export type RegularFontStyle = 	
	| 'IR10' | 'IR12' | 'IR13' | 'IR14' | 'IR16' 
	| 'IR18' | 'IR20' | 'IR24' | 'IR40' | 'IR80'

// prettier-ignore
export type SemiBoldFontStyle = 	
	| 'ISB10' | 'ISB12' | 'ISB13' | 'ISB14' 
	| 'ISB16' | 'ISB18' | 'ISB20'

// prettier-ignore
export type MediumFontStyle = 	
	| 'IM10' | 'IM12' | 'IM13' | 'IM14' 
	| 'IM16' | 'IM18' | 'IM20'

// prettier-ignore
export type LightFontStyle = 		
	| 'IL10' | 'IL12' | 'IL14'

// prettier-ignore
export type BoldFontStyle = 		
	| 'IB10' | 'IB12' | 'IB14' | 'IB16' | 'IB18' | 'IB20'

export interface AppTextProps extends TextProps {
  tx?: TxKeyPath
  // prettier-ignore
  txStyle?: 
		RegularFontStyle | SemiBoldFontStyle | MediumFontStyle | LightFontStyle | BoldFontStyle
  color?: string
  quintessential?: boolean
  options?: any
}

export const Text = ({
  style,
  tx,
  children,
  txStyle = 'IM18',
  color = colors.white,
  quintessential = false,
  ...props
}: AppTextProps) => {
  const { t } = useTranslation()

  return (
    <NNText
      style={[
        styles[txStyle],
        { color: color, fontFamily: quintessential ? 'Quintessential-Regular' : 'Inter-Regular' },
        style,
      ]}
      {...props}
    >
      {tx ? t(tx) : children}
    </NNText>
  )
}

const styles = StyleSheet.create({
  // REGULAR
  IR10: { fontFamily: 'Inter-Regular', fontWeight: '400', fontSize: scaleFont(10) },
  IR12: { fontFamily: 'Inter-Regular', fontWeight: '400', fontSize: scaleFont(12) },
  IR13: { fontFamily: 'Inter-Regular', fontWeight: '400', fontSize: scaleFont(13) },
  IR14: { fontFamily: 'Inter-Regular', fontWeight: '400', fontSize: scaleFont(14) },
  IR16: { fontFamily: 'Inter-Regular', fontWeight: '400', fontSize: scaleFont(16) },
  IR18: { fontFamily: 'Inter-Regular', fontWeight: '400', fontSize: scaleFont(18) },
  IR20: { fontFamily: 'Inter-Regular', fontWeight: '400', fontSize: scaleFont(20) },
  IR24: { fontFamily: 'Inter-Regular', fontWeight: '400', fontSize: scaleFont(24) },
  IR40: { fontFamily: 'Inter-Regular', fontWeight: '400', fontSize: scaleFont(40) },
  IR80: { fontFamily: 'Inter-Regular', fontWeight: '400', fontSize: scaleFont(80) },

  // SEMIBOLD
  ISB10: { fontFamily: 'Inter-SemiBold', fontWeight: '600', fontSize: scaleFont(10) },
  ISB12: { fontFamily: 'Inter-SemiBold', fontWeight: '600', fontSize: scaleFont(12) },
  ISB13: { fontFamily: 'Inter-SemiBold', fontWeight: '600', fontSize: scaleFont(13) },
  ISB14: { fontFamily: 'Inter-SemiBold', fontWeight: '600', fontSize: scaleFont(14) },
  ISB16: { fontFamily: 'Inter-SemiBold', fontWeight: '600', fontSize: scaleFont(16) },
  ISB18: { fontFamily: 'Inter-SemiBold', fontWeight: '600', fontSize: scaleFont(18) },
  ISB20: { fontFamily: 'Inter-SemiBold', fontWeight: '600', fontSize: scaleFont(20) },

  // MEDIUM
  IM10: { fontFamily: 'Inter-Medium', fontWeight: '500', fontSize: scaleFont(10) },
  IM12: { fontFamily: 'Inter-Medium', fontWeight: '500', fontSize: scaleFont(12) },
  IM13: { fontFamily: 'Inter-Medium', fontWeight: '500', fontSize: scaleFont(13) },
  IM14: { fontFamily: 'Inter-Medium', fontWeight: '500', fontSize: scaleFont(14) },
  IM16: { fontFamily: 'Inter-Medium', fontWeight: '500', fontSize: scaleFont(16) },
  IM18: { fontFamily: 'Inter-Medium', fontWeight: '500', fontSize: scaleFont(18) },
  IM20: { fontFamily: 'Inter-Medium', fontWeight: '500', fontSize: scaleFont(20) },

  // LIGHT
  IL10: { fontFamily: 'Inter-Light', fontWeight: '300', fontSize: scaleFont(10) },
  IL12: { fontFamily: 'Inter-Light', fontWeight: '300', fontSize: scaleFont(12) },
  IL14: { fontFamily: 'Inter-Light', fontWeight: '300', fontSize: scaleFont(14) },

  // BOLD
  IB10: { fontFamily: 'Inter-Bold', fontWeight: '700', fontSize: scaleFont(10) },
  IB12: { fontFamily: 'Inter-Bold', fontWeight: '700', fontSize: scaleFont(12) },
  IB14: { fontFamily: 'Inter-Bold', fontWeight: '700', fontSize: scaleFont(14) },
  IB16: { fontFamily: 'Inter-Bold', fontWeight: '700', fontSize: scaleFont(16) },
  IB18: { fontFamily: 'Inter-Bold', fontWeight: '700', fontSize: scaleFont(18) },
  IB20: { fontFamily: 'Inter-Bold', fontWeight: '700', fontSize: scaleFont(20) },
})
