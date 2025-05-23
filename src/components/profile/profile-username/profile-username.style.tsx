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
  input: {},
})
