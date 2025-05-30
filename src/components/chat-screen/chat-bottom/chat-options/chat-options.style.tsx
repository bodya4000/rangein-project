import { StyleSheet } from 'react-native'

import { spacing } from '@/constants/spacing'

export const styles = StyleSheet.create({
  option: {
    height: 65,
    justifyContent: 'center',
    alignItems: 'center',
  },

  cross: {
    alignSelf: 'flex-end',
    position: 'absolute',
    top: -30,
    right: -spacing.sm,
  },
})
