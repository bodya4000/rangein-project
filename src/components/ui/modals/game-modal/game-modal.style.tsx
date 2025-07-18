import { StyleSheet } from 'react-native'

import { colors, spacing, WINDOW_WIDTH } from '@/constants'

const MODAL_WIDTH = WINDOW_WIDTH * 1

export const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    backgroundColor: colors.overlay,
    paddingHorizontal: spacing.xl,
  },

  container: {
    maxWidth: MODAL_WIDTH,
  },

  background: {
    ...StyleSheet.absoluteFillObject,
    height: '100%',
    width: '100%',
    borderRadius: spacing['2xl'],
  },

  view: {
    alignItems: 'center',
    gap: spacing.md,
    padding: spacing.lg,
  },
})
