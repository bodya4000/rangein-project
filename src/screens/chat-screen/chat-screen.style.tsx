import { StyleSheet } from 'react-native'

import { colors } from '@/constants/colors'
import { spacing } from '@/constants/spacing'

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  spacer: {
    flex: 1,
  },

  messagesContainer: {
    paddingTop: spacing.lg,
    gap: spacing['sm'],
  },

  bottom: {
    paddingHorizontal: spacing.md,
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
  },

  inputView: {
    flex: 1,
    backgroundColor: colors.dark,
    paddingVertical: spacing.lg,
    paddingHorizontal: spacing.lg,
    borderColor: colors.grey,
    borderWidth: 1,
    borderRadius: 40,
  },

  input: {
    color: colors.white,
  },

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
