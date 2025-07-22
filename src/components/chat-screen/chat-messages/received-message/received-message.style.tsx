import { StyleSheet } from 'react-native'

import { WINDOW_WIDTH } from '@/constants'
import { spacing } from '@/constants/spacing'

export const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    gap: spacing.sm,
  },
  container: {
    borderRadius: 20,
    overflow: 'hidden',
    maxWidth: WINDOW_WIDTH * 0.65,
    borderWidth: 1,
  },
  avatar: {
    alignSelf: 'flex-end',
    height: 48,
    width: 48,
  },
  blur: {
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    gap: spacing.sm,
  },
  name: {},
  text: {
    textAlign: 'left',
  },
})
