import { StyleSheet } from 'react-native'

import { font } from '@/constants'
import { colors } from '@/constants/colors'
import { spacing } from '@/constants/spacing'

export const styles = StyleSheet.create({
  inputView: {
    backgroundColor: colors.dark,
    paddingHorizontal: spacing.lg,
    borderColor: colors.grey,
    borderWidth: 1,
    borderRadius: 40,
  },

  input: {
    height: 40,
    paddingVertical: 0,
    paddingHorizontal: 0,
    color: colors.white,
    fontSize: font.size['sm'],
  },
})
