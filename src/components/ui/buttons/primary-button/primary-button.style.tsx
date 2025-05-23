import { StyleSheet } from 'react-native'

import { spacing } from '@/constants/spacing'

export const styles = StyleSheet.create({
  container: {
    position: 'relative',
    alignItems: 'center',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon_left: {
    paddingLeft: spacing.sm, // needed for play image
  },
})
