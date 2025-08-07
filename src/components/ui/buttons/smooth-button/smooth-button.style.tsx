import { StyleSheet } from 'react-native'

import { colors } from '@/constants'

export const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: colors.white,

    justifyContent: 'center',
    alignItems: 'center',
  },
})
