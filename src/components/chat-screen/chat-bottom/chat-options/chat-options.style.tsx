import { StyleSheet } from 'react-native'

import { spacing } from '@/constants/spacing'

export const styles = StyleSheet.create({
  optionsContainer: {
    position: 'relative',
    gap: spacing.sm,
  },
  option: {
    height: 65,
    justifyContent: 'center',
    alignItems: 'center',
  },

  cross: {
    position: 'absolute',
    top: -30,
    right: spacing.sm,
  },
})
