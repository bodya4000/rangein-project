import { StyleSheet } from 'react-native'

import { HEADER_HEIGHT } from '@/constants'
import { spacing } from '@/constants/spacing'

export const styles = StyleSheet.create({
  messagesContainer: {
    gap: spacing['sm'],
    justifyContent: 'flex-end',
    flex: 1,
  },

  messageListContainer: {
    paddingTop: HEADER_HEIGHT + spacing['2xl'], // actually it's top padding, as flatlist is inverted
    gap: spacing.lg,
    justifyContent: 'flex-end',
  },

  skeletonContainer: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
  },

  skeletonImage: {
    borderRadius: 42,
  },

  skeletonMessage: {
    borderRadius: 16,
  },
})
