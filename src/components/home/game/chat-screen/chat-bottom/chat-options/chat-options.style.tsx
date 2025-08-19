import { StyleSheet } from 'react-native'

import { WINDOW_WIDTH } from '@/constants'
import { spacing } from '@/constants/spacing'

export const styles = StyleSheet.create({
  optionsWrapper: {
    position: 'absolute',
    width: WINDOW_WIDTH - 20,
    bottom: 0,
    left: WINDOW_WIDTH / 2,
    transform: [{ translateX: -WINDOW_WIDTH / 2 }],
    gap: spacing.sm,
    zIndex: 1000,
  },
  optionsContainer: {
    position: 'relative',
    gap: spacing.sm,
  },
  option: {
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
  },

  myOption: {
    height: 70,
  },

  cross: {
    position: 'absolute',
    top: -30,
    right: spacing.sm,
  },
})
