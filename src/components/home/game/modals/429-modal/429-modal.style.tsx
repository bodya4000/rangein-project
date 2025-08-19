import { StyleSheet } from 'react-native'

import { spacing } from '@/constants'

export const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
  },
  body: {
    paddingTop: spacing.md,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingHorizontal: spacing.lg,
    marginVertical: spacing.lg,
  },
})
