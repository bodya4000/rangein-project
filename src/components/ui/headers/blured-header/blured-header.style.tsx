import { StyleSheet } from 'react-native'

import { WINDOW_WIDTH } from '@/constants'

export const styles = StyleSheet.create({
  container: {
    height: 66,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    width: WINDOW_WIDTH,
    zIndex: 999999999,
    borderBottomEndRadius: 15,
    borderBottomStartRadius: 15,
  },
  header: {
    position: 'relative',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  back: {
    position: 'absolute',
    left: 0,
    padding: 16,
    textAlign: 'center',
  },
  title: {
    textAlign: 'center',
  },
})
