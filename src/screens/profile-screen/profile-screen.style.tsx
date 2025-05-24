import { StyleSheet } from 'react-native'

import { spacing } from '@/constants/spacing'

export const styles = StyleSheet.create({
  screenContainer: {
    gap: spacing.lg,
  },
  sexContainer: {
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    maxHeight: 70,
    overflow: 'hidden',

    borderBottomRightRadius: 5,
  },
  sexButton: {
    position: 'relative',
    zIndex: 100,
    padding: spacing.lg,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  profileBlock: {
    position: 'relative',
    zIndex: 100,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: spacing.lg,
  },
  sexPickedButton: {
    position: 'relative',
    zIndex: 0,
    flex: 1.2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: spacing.lg,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
  },
})
