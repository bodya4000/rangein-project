import { StyleSheet } from 'react-native'

import { spacing } from '@/constants/spacing'
import { scaleFont } from '@/utils'

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    gap: spacing.md,
    paddingHorizontal: spacing.lg,
  },
  textContainer: {
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
