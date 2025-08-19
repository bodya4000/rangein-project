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
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  avatar: {
    alignSelf: 'flex-end',
    height: 42,
    width: 42,
  },
  blur: {
    paddingTop: spacing.sm,
    paddingBottom: spacing.md,
    paddingHorizontal: spacing.md,
    gap: 4,
  },
  name: {},
  text: {
    textAlign: 'left',
  },
})
