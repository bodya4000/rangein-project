import { WINDOW_WIDTH } from '@/constants'
import { StyleSheet } from 'react-native'


export const styles = StyleSheet.create({
  container: {
    height: 80,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    width: WINDOW_WIDTH,
    zIndex: 999999999,
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
