import React from 'react'
import { useTranslation } from 'react-i18next'
import { StyleSheet, Text as NNText } from 'react-native'

import { colors } from '@/constants/colors'
import { TxKeyPath } from '@/i18n/react-i18next'
import { scaleFont } from '@/utils'

import type { TextProps } from 'react-native'

interface Props extends TextProps {
  tx?: TxKeyPath // by now
  txStyle?:
    | 'IR10'
    | 'IR12'
    | 'IR14'
    | 'IR16'
    | 'IR18'
    | 'IR20'
    | 'IR24'
    | 'IR40'
    | 'IR80'
    | 'ISB20'
    | 'ISB14'
    | 'ISB12'
    | 'ISB13'
    | 'ISB16'
    | 'ISB18'
    | 'IM10'
    | 'IM12'
    | 'IM14'
    | 'IM16'
    | 'IL10'
    | 'IL12'
    | 'IL14'
    | 'IB16'
    | 'IB14'
    | 'IB20'
  color?: string
  options?: any
}

export const Text = ({
  style,
  tx,
  children,
  txStyle = 'IM14',
  color = colors.white,
  ...props
}: Props) => {
  const { t } = useTranslation()

  return (
    <NNText style={[styles[txStyle], { color: color }, style]} {...props}>
      {tx ? t(tx) : children}
    </NNText>
  )
}

const styles = StyleSheet.create({
  IR14: {
    fontFamily: 'Inter-Regular',
    fontWeight: 400,
    fontSize: scaleFont(14),
  },
  IR12: {
    fontFamily: 'Inter-Regular',
    fontWeight: 400,
    fontSize: scaleFont(12),
  },
  IR10: {
    fontFamily: 'Inter-Regular',
    fontWeight: 400,
    fontSize: scaleFont(10),
  },
  IR16: {
    fontFamily: 'Inter-Regular',
    fontWeight: 400,
    fontSize: scaleFont(16),
  },
  IR18: {
    fontFamily: 'Inter-Regular',
    fontWeight: 400,
    fontSize: scaleFont(18),
  },
  IR20: {
    fontFamily: 'Inter-Regular',
    fontWeight: 400,
    fontSize: scaleFont(20),
  },
  IR24: {
    fontFamily: 'Inter-Regular',
    fontWeight: 400,
    fontSize: scaleFont(24),
  },
  IR40: {
    fontFamily: 'Inter-Regular',
    fontWeight: 400,
    fontSize: scaleFont(80),
  },
  IR80: {
    fontFamily: 'Inter-Regular',
    fontWeight: 400,
    fontSize: scaleFont(80),
  },
  ISB12: {
    fontFamily: 'Inter-SemiBold',
    fontSize: scaleFont(12),
    fontWeight: 600,
  },
  ISB13: {
    fontFamily: 'Inter-SemiBold',
    fontSize: scaleFont(13),
    fontWeight: 600,
  },
  ISB14: {
    fontFamily: 'Inter-SemiBold',
    fontSize: scaleFont(14),
    fontWeight: 600,
  },
  ISB16: {
    fontFamily: 'Inter-SemiBold',
    fontSize: scaleFont(16),
    fontWeight: 600,
  },
  ISB18: {
    fontFamily: 'Inter-SemiBold',
    fontSize: scaleFont(18),
    fontWeight: 600,
  },
  ISB20: {
    fontFamily: 'Inter-SemiBold',
    fontSize: scaleFont(20),
    fontWeight: 600,
  },
  IM10: {
    fontFamily: 'Inter-Medium',
    fontWeight: 500,
    fontSize: scaleFont(10),
  },
  IM12: {
    fontFamily: 'Inter-Medium',
    fontWeight: 500,
    fontSize: scaleFont(12),
  },
  IM14: {
    fontFamily: 'Inter-Medium',
    fontWeight: 500,
    fontSize: scaleFont(14),
  },
  IM16: {
    fontFamily: 'Inter-Medium',
    fontWeight: 500,
    fontSize: scaleFont(16),
  },
  IL10: {
    fontFamily: 'Inter-Light',
    fontWeight: 300,
    fontSize: scaleFont(10),
  },
  IL12: {
    fontFamily: 'Inter-Light',
    fontWeight: 300,
    fontSize: scaleFont(12),
  },
  IL14: {
    fontFamily: 'Inter-Light',
    fontWeight: 300,
    fontSize: scaleFont(14),
  },
  IB16: {
    fontFamily: 'Inter-Bold',
    fontSize: scaleFont(16),
    fontWeight: 700,
  },
  IB14: {
    fontFamily: 'Inter-Bold',
    fontSize: scaleFont(14),
    fontWeight: 700,
  },
  IB20: {
    fontFamily: 'Inter-Bold',
    fontSize: scaleFont(20),
    fontWeight: 700,
  },
})
