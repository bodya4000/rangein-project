import { StyleSheet } from 'react-native'

import { colors } from '@/constants'
import { spacing } from '@/constants/spacing'
import { scaleFont } from '@/utils'

export const styles = StyleSheet.create({
  aiContainer: {
    backgroundColor: colors.black,
    opacity: 0.5,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  screen: {
    flex: 1,
    gap: spacing.md,
  },
  textContainer: {
    paddingTop: spacing['5xl'],
    gap: spacing.sm,
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    lineHeight: scaleFont(70),
    paddingTop: 50,
  },
  buttons_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: spacing.md,
  },
  icon: {
    padding: spacing.md,
  },
})
