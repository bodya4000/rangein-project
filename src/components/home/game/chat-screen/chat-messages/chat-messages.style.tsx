import { StyleSheet } from 'react-native'

import { HEADER_HEIGHT } from '@/constants'
import { spacing } from '@/constants/spacing'

export const styles = StyleSheet.create({
  messagesContainer: {
    flex: 1,
    gap: spacing['sm'],
    justifyContent: 'flex-end',
  },

  messageListContainer: {
    paddingBottom: HEADER_HEIGHT + spacing['2xl'], // actually it's top padding, as flatlist is inverted
    gap: spacing.lg,
    justifyContent: 'flex-end',
  },
})
