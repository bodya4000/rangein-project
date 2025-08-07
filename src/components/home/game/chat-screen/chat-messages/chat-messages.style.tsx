import { StyleSheet } from 'react-native'

import { spacing } from '@/constants/spacing'

export const styles = StyleSheet.create({
  messagesContainer: {
    gap: spacing['sm'],
    flex: 1,
  },

  messageListContainer: {
    gap: spacing.lg,
  },

  skeletonContainer: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
  },

  skeletonImage: {
    borderRadius: 42,
    alignSelf: 'flex-end',
  },

  skeletonMessage: {
    borderRadius: 16,
  },
})
