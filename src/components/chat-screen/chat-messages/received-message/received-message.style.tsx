import { StyleSheet } from 'react-native'

import { spacing } from '@/constants/spacing'
import { WINDOW_WIDTH } from '@/constants'

export const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    gap: spacing.sm,
  },
  container: {
    borderRadius: 20,
    overflow: 'hidden',
    maxWidth: WINDOW_WIDTH * 0.65,
    borderColor: '#24319E',
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
  name: {
    color: '#24319E',
  },
  text: {
    textAlign: 'left',
  },
})
