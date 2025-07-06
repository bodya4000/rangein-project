import React from 'react'
import {
  FlatList,
  FlatListProps,
  NativeScrollEvent,
  NativeSyntheticEvent,
  ViewStyle,
} from 'react-native'

interface PagedListProps<ItemT> extends Partial<FlatListProps<ItemT>> {
  onPageChange?: (_: number) => void
  containerWidth: number
  contentStyle?: ViewStyle
}

function PagedListInner<ItemT>(
  {
    data,
    renderItem,
    keyExtractor,
    onPageChange,
    containerWidth,
    contentStyle,
    ...rest
  }: PagedListProps<ItemT>,
  ref: React.Ref<FlatList<ItemT>>,
) {
  const onScrollEnd = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const offsetX = e.nativeEvent.contentOffset.x
    const newIndex = Math.round(offsetX / containerWidth)
    onPageChange?.(newIndex)
  }

  if (!data) return null

  return (
    <FlatList
      ref={ref}
      horizontal
      data={data}
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      snapToAlignment='center'
      decelerationRate='fast'
      keyExtractor={keyExtractor}
      onMomentumScrollEnd={onScrollEnd}
      renderItem={renderItem}
      contentContainerStyle={contentStyle}
      {...rest}
    />
  )
}

export const PagedList = React.forwardRef(PagedListInner) as <T>(
  props: PagedListProps<T> & { ref?: React.Ref<FlatList<T>> },
) => React.ReactElement
