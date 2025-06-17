import { router } from 'expo-router'
import { useRef, useState } from 'react'
import { FlatList, View } from 'react-native'

import { useGameInfo } from '@/api/hooks'
import { StoryList, StoryPagination } from '@/components/game-screen'
import { ArrowLeft, ArrowRight } from '@/components/icons'
import { GradientText, SecondaryButton, Touchable } from '@/components/ui'
import { globalStyles } from '@/constants'
import { logJson } from '@/utils'

import { styles } from './game-screen.style'

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

const BUTTON_DELAY = 500

const GameScreen = () => {
  const flatlistRef = useRef<FlatList>(null)
  const [currentPaginationItem, setCurrentPaginationItem] = useState(0)
  const [flatlistIndex, setFlatlistIndex] = useState(0)
  const [isArrowDisabled, setIsArrowDisabled] = useState(false)

  const { data } = useGameInfo()
  if (!data) return null

  const onArrowClick = (direction: 'prev' | 'next') => {
    setIsArrowDisabled(true)
    setTimeout(() => setIsArrowDisabled(false), BUTTON_DELAY)
    let newIndex = flatlistIndex
    if (direction === 'next' && flatlistIndex == data.story.parts.length - 1) {
      router.replace('/chat')
    } else if (direction === 'next' && flatlistIndex < data.story.parts.length - 1) {
      newIndex++
    } else if (direction === 'prev' && flatlistIndex > 0) {
      newIndex--
    }
    flatlistRef.current?.scrollToIndex({
      index: newIndex,
      animated: true,
    })
    updatePagination(newIndex)
    setFlatlistIndex(newIndex)
  }

  const updatePagination = (newIndex: number) => {
    switch (newIndex) {
      case 0:
        setCurrentPaginationItem(0)
        break
      case 1:
        setCurrentPaginationItem(1)
        break
      case data.story.parts.length - 2:
        setCurrentPaginationItem(4)
        break
      case data.story.parts.length - 1:
        setCurrentPaginationItem(5)
        break
      default:
        const moreCloseToRight = newIndex > data.story.parts.length / 2
        setCurrentPaginationItem(moreCloseToRight ? 3 : 2)
        break
    }
  }

  return (
    <View style={styles.screen}>
      <View style={styles.textContainer}>
        <GradientText style={styles.title} txStyle='IR24'>
          {data.story.title}
        </GradientText>
      </View>

      <View style={globalStyles.spacer} />

      <StoryList ref={flatlistRef} onScrollEndCb={updatePagination} />

      <View style={styles.buttons_container}>
        <Touchable
          style={styles.icon}
          onPress={() => onArrowClick('prev')}
          disabled={isArrowDisabled}
        >
          <ArrowLeft width={36} height={36} />
        </Touchable>
        <SecondaryButton title='Continue' onPress={() => onArrowClick('next')} />
        <Touchable
          style={styles.icon}
          onPress={() => onArrowClick('next')}
          disabled={isArrowDisabled}
        >
          <ArrowRight width={36} height={36} />
        </Touchable>
      </View>

      <StoryPagination parts={data.story.parts.length} currentIdx={currentPaginationItem} />
    </View>
  )
}

export default GameScreen
