import { StyleSheet } from 'react-native'

import { font } from '@/constants/fonts'
import { spacing } from '@/constants/spacing'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: spacing.md,
    marginTop: spacing['2xl'],
  },
  input: {
    fontSize: font.size['3xl'],
    fontFamily: font.family.quintessential_regular,
  },
})
