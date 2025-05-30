import { StyleSheet } from 'react-native'

import { spacing } from '@/constants/spacing'

export const styles = StyleSheet.create({
  sexContainer: {
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    maxHeight: 70,
    overflow: 'hidden',
    borderRadius: 10,
  },
  sexButton: {
    position: 'relative',
    zIndex: 100,
    padding: spacing.lg,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
})
