import { StyleSheet } from 'react-native'

import { font } from '@/constants/fonts'
import { spacing } from '@/constants/spacing'

export const styles = StyleSheet.create({
  title: {
    color: '#fff',
    fontSize: font.size['10xl'],
    fontFamily: font.family.quintessential_regular,
    textAlign: 'center',
  },

  spacer: {
    flex: 1,
  },

  buttons_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: spacing.md,
  },

  button_top: {
    marginTop: -spacing['5xl'],
  },
})
