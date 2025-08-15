import React, { memo, useMemo } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'

import { SkeletonMessage } from '../messages/skeleton-message/skeleton-message'

export const SkeletonList = memo(() => {
  const data = useMemo(() => Array.from({ length: 6 }, (_, i) => i), [])

  const renderItem = () => <SkeletonMessage />

  return (
    <FlatList
      scrollEnabled={false}
      bounces={false}
      data={data}
      keyExtractor={item => item.toString()}
      renderItem={renderItem}
      ListHeaderComponent={<View style={styles.header} />}
      getItemLayout={(_, index) => ({
        length: 150,
        offset: 150 * index,
        index,
      })}
      initialScrollIndex={data.length - 1}
    />
  )
})

SkeletonList.displayName = 'SkeletonList'

const styles = StyleSheet.create({
  header: {
    height: 120,
  },
})
