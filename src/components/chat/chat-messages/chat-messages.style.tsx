import { StyleSheet } from 'react-native'

import { spacing } from '@/constants/spacing'

export const styles = StyleSheet.create({
  spacer: {
    flex: 1,
  },
  messagesContainer: {
    paddingTop: spacing.lg,
    gap: spacing['sm'],
  },
})
