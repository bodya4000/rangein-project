import { StyleSheet } from 'react-native'

import { colors } from '@/constants/colors'

export const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  input: {
    width: '100%',
    color: 'transparent',
    position: 'absolute',
  },
  placeholder: {
    color: colors.white,
    opacity: 0.5,
  },
  measureText: {
    opacity: 0,
    height: 0,
  },
})
