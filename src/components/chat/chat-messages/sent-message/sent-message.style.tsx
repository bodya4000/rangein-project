import { Dimensions, StyleSheet } from 'react-native'

import { spacing } from '@/constants/spacing'

const SCREEN_WIDTH = Dimensions.get('window').width

export const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  container: {
    borderRadius: 20,
    overflow: 'hidden',
    // backgroundColor: 'red',
    maxWidth: SCREEN_WIDTH * 0.7,
  },
  blur: {
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
  },
  text: {
    textAlign: 'right',
  },
})
