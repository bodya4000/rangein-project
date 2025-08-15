import { StyleSheet, View } from 'react-native'

import { Skeleton } from '@/components/ui'

export const SkeletonMessage = () => {
  return (
    <>
      <View style={styles.skeletonContainer}>
        <Skeleton width={42} height={42} style={styles.skeletonImage} />
        <Skeleton width={270} height={120} style={styles.skeletonMessage} />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  skeletonContainer: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
  },

  skeletonImage: {
    borderRadius: 42,
    alignSelf: 'flex-end',
  },

  skeletonMessage: {
    borderRadius: 16,
  },
})
