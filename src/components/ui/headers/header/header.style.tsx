import { StyleSheet } from 'react-native'

import { font } from '@/constants/fonts'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  back: {
    position: 'absolute',
    left: 0,
    textAlign: 'center',
  },
  title: {
    textAlign: 'center',
  },
})
