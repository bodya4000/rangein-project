import { StyleSheet } from 'react-native'

import { WINDOW_WIDTH } from '@/constants'

const HEADER_HEIGHT = 100

export const styles = StyleSheet.create({
  wrapper: {
    height: HEADER_HEIGHT,
    width: WINDOW_WIDTH,
    position: 'absolute',
    zIndex: 999,
  },
  content: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 16,
    flexDirection: 'row',
  },

  left: {
    flex: 1,
    top: 10,
  },

  center: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },

  backButton: {
    position: 'absolute',
    left: 16,
  },
})
