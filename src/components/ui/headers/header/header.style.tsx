import { StatusBar, StyleSheet } from 'react-native'

import { HEADER_HEIGHT } from '@/constants'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    minHeight: HEADER_HEIGHT,
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
