import { StyleSheet } from 'react-native'

import { spacing } from '@/constants/spacing'

export const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    gap: spacing.lg,
  },
  profileBlock: {
    position: 'relative',
    zIndex: 100,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: spacing.lg,
  },

  touchable_icon: {
    padding: spacing.md,
  },
})
