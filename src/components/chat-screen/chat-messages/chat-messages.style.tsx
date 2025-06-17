import { StyleSheet } from 'react-native'

import { spacing } from '@/constants/spacing'

export const styles = StyleSheet.create({
  messagesContainer: {
    paddingTop: spacing.lg,
    gap: spacing['sm'],
    justifyContent: 'flex-end',
    flex: 1,
  },

  messageListContainer: {
    paddingTop: spacing.lg,
    gap: spacing['2xl'],
    flex: 1,
    justifyContent: 'flex-end',
  },
})
