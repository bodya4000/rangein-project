import { StyleSheet } from 'react-native'

import { IS_IOS } from '@/constants'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: IS_IOS ? 0 : 30,
  },
})
