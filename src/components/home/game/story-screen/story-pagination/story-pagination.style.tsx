import { StyleSheet } from 'react-native'

import { spacing } from '@/constants/spacing'

export const styles = StyleSheet.create({
  paginationContainer: {
    marginTop: spacing.sm,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.md,
  },
  paginationItem: {
    width: 12,
    height: 12,
    borderRadius: 7.5,
  },
})
