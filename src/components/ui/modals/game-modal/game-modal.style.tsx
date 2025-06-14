import { StyleSheet } from 'react-native'

import { colors, spacing } from '@/constants'
import { WINDOW_WIDTH } from '@/utils'

const MODAL_WIDTH = WINDOW_WIDTH * 1

export const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    paddingRight: spacing.lg,
    backgroundColor: colors.overlay,
  },

  container: {
    maxWidth: MODAL_WIDTH,
  },

  background: {
    ...StyleSheet.absoluteFillObject,
    height: '100%',
    width: MODAL_WIDTH,
    borderRadius: spacing['2xl'],
  },

  view: {
    alignItems: 'center',
    gap: spacing.md,
    padding: spacing.lg,
  },
})
