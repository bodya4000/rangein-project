import { StyleSheet } from 'react-native'

import { HEADER_HEIGHT } from '@/constants'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    boxSizing: 'content-box',
    height: HEADER_HEIGHT,
  },
  back: {
    position: 'absolute',
    left: 0,
    textAlign: 'center',
    padding: 10,
  },
  title: {
    textAlign: 'center',
    minWidth: '75%',
  },
})
