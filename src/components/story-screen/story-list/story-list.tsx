import React from 'react'
import { FlatList, NativeScrollEvent, NativeSyntheticEvent, View } from 'react-native'

import { GradientText } from '@/components/ui'
import { colors, spacing, WINDOW_WIDTH } from '@/constants'

import { styles } from './story-list.style'

const CONTAINER_WIDTH = WINDOW_WIDTH - spacing.lg * 2 - spacing.md * 2

export const TEMP_MESSAGES = [
  "A god's broken sword poisons the land with mutating magic god's broken sword poisons the land with mutating magic god's broken sword poisons the land with mutating magic",
  'The shattered crown of the ancient king corrupts the hearts of those who dare to wear it, turning hope into darkness and dreams into dust',
  'The last whisper of the fallen queen haunts the forest, echoing through the twisted trees and feeding the shadows that crave the living',
  'A burning sun scorches the earth as ancient runes awaken, binding the souls of warriors to an eternal dance of blood and sorrow',
  'The forbidden melody of the cursed harp weaves a spell that bends the mind and tears the spirit from the flesh, a lament to the lost',
  "A dragon's breath of silver fire devours the sky, while the moon weeps crimson tears that stain the rivers of fate in endless night",
  'A shadowed gate sealed with blood and bone invites the lost to wander beyond, where echoes of madness whisper through endless halls',
  'The ancient script upon the forgotten altar binds the living and the dead, forging a chain of souls that sings in silence and dread',
]

interface Props {
  parts: string[]
  onScrollEndCb: (_: number) => void
}

const StoryList = React.forwardRef<FlatList, Props>(({ parts, onScrollEndCb }, flatlistRef) => {
  const onScrollEnd = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const offsetX = e.nativeEvent.contentOffset.x
    const newIndex = Math.round(offsetX / CONTAINER_WIDTH)
    onScrollEndCb(newIndex)
  }

  if (!parts) return null

  return (
    <FlatList
      ref={flatlistRef}
      horizontal
      data={parts}
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      keyExtractor={(_, index) => index.toString()}
      snapToAlignment='center'
      decelerationRate='fast'
      onMomentumScrollEnd={onScrollEnd}
      renderItem={({ item }) => (
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
})

StoryList.displayName = 'StoryList'

export default StoryList
