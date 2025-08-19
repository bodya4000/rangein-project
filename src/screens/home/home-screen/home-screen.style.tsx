import { StyleSheet } from 'react-native'

import { spacing } from '@/constants/spacing'
import { scaleFont } from '@/utils'

export const styles = StyleSheet.create({
  title: {
    lineHeight: scaleFont(70),
    paddingTop: spacing['2xl'],
    alignItems: 'center',
    textAlign: 'center',
    flex: 1,
  },

  buttons_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: spacing.md,
  },
})
