import { StyleSheet } from 'react-native'

import { WINDOW_WIDTH } from '@/constants'
import { spacing } from '@/constants/spacing'

export const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  container: {
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: 'rgba(126, 126, 126, 0.4)',
    maxWidth: WINDOW_WIDTH * 0.7,
  },
  blur: {
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
  },
  text: {
    textAlign: 'left',
  },
})
