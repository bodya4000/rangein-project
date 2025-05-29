import { Dimensions, StyleSheet } from 'react-native'

import { spacing } from '@/constants/spacing'

const SCREEN_WIDTH = Dimensions.get('window').width

export const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    gap: spacing.sm,
  },
  spacer: {
    flex: 1,
  },
  container: {
    borderRadius: 20,
    overflow: 'hidden',
    maxWidth: SCREEN_WIDTH * 0.65,
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
