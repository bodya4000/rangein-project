import { StyleSheet } from 'react-native'

import { spacing } from '@/constants/spacing'

export const styles = StyleSheet.create({
  messagesContainer: {
    gap: spacing['sm'],
    justifyContent: 'flex-end',
  },

  messageListContainer: {
    paddingTop: 50,
    gap: spacing['2xl'],
    justifyContent: 'flex-end',
  },
})
