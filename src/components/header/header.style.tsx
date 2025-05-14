import { StyleSheet } from 'react-native'

import { font } from '@/constants/fonts'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center', // або 'flex-start'
    position: 'relative',
  },
  back: {
    position: 'absolute',
    left: 0,
    textAlign: 'center',
  },
  title: {
    fontSize: font.size['5xl'],
    fontFamily: font.family.quintessential_regular,
  },
})
