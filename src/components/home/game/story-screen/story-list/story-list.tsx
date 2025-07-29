import React from 'react'
import { FlatList, View } from 'react-native'

import { GradientText, PagedList } from '@/components/ui'
import { colors, spacing, WINDOW_WIDTH } from '@/constants'

import { styles } from './story-list.style'

const CONTAINER_WIDTH = WINDOW_WIDTH - spacing.md * 2

interface Props {
  parts: string[]
  index: number
  onScrollEndCb: (_: number) => void
  onStartLimitTry?: () => void
  onEndLimitTry?: () => void
}

interface RenderItemProps {
  item: string
  index: number
}

const StoryList = React.forwardRef<any, Props>(
  ({ onEndLimitTry, onStartLimitTry, index, parts, onScrollEndCb }, ref) => {
    if (!parts) return null
    return (
      <PagedList
        onEndLimitTry={onEndLimitTry}
        onStartLimitTry={onStartLimitTry}
        ref={ref}
        index={index}
        data={parts}
        containerWidth={CONTAINER_WIDTH}
        onPageChange={onScrollEndCb}
        keyExtractor={(_: string, i: number) => i.toString()}
        renderItem={({ item }: RenderItemProps) => (
          <View style={[{ maxWidth: CONTAINER_WIDTH }]}>
            <GradientText
              numberOfLines={20}
              txStyle='IR12'
              ellipsizeMode='clip'
              quintessential={false}
              width={CONTAINER_WIDTH}
              style={styles.text}
              color={[...colors.gradientMetal2] as [string, string, ...string[]]}
            >
              {item}
            </GradientText>
          </View>
        )}
      />
    )
  },
)

StoryList.displayName = 'StoryList'

export default StoryList
