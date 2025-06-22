import { StyleSheet } from 'react-native'

import { spacing } from '@/constants/spacing'
import { WINDOW_WIDTH } from '@/constants'

export const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  container: {
    borderRadius: 20,
    overflow: 'hidden',
    // backgroundColor: 'red',
    maxWidth: WINDOW_WIDTH * 0.7,
  },
  blur: {
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
  },
  text: {
    textAlign: 'right',
  },
})
