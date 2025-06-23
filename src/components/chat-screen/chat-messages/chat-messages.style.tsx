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
    flexGrow: 1,
    paddingTop: HEADER_HEIGHT + spacing['2xl'],
    gap: spacing['2xl'],
    justifyContent: 'flex-end',
  },
})
