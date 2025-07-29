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
  onStartLimitTry?: () => void
  onEndLimitTry?: () => void
  containerWidth: number
  contentStyle?: ViewStyle
  index?: number
}

function PagedListInner<ItemT>(
  {
    data,
    renderItem,
    keyExtractor,
    onPageChange,
    onEndLimitTry = () => {},
    onStartLimitTry = () => {},
    containerWidth,
    contentStyle,
    index,
    ...rest
  }: PagedListProps<ItemT>,
  ref: React.Ref<FlatList<ItemT>>,
) {
  const onScrollEnd = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const offsetX = e.nativeEvent.contentOffset.x
    const newIndex = Math.round(offsetX / containerWidth)
    onPageChange?.(newIndex)

    if (data && index !== undefined) {
      if (newIndex === 0 && index === 0) {
        onStartLimitTry()
      }
      if (newIndex === data.length - 1 && index === data.length - 1) {
        onEndLimitTry()
      }
    }
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
  _: PagedListProps<T> & { ref?: React.Ref<FlatList<T>> },
) => React.ReactElement
