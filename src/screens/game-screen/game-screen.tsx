import { router } from 'expo-router'
import { useRef, useState } from 'react'
import { FlatList, View } from 'react-native'

import { useGameInfo } from '@/api/hooks'
import { StoryList, StoryPagination } from '@/components/game-screen'
import { ArrowLeft, ArrowRight } from '@/components/icons'
import { GradientText, SecondaryButton, Touchable } from '@/components/ui'
import { getDeviceId, globalStyles } from '@/constants'

import { styles } from './game-screen.style'

const BUTTON_DELAY = 500

const GameScreen = () => {
  const flatlistRef = useRef<FlatList>(null)
  const [currentPaginationItem, setCurrentPaginationItem] = useState(0)
  const [flatlistIndex, setFlatlistIndex] = useState(0)
  const [isArrowDisabled, setIsArrowDisabled] = useState(false)

  const { data } = useGameInfo({ userId: getDeviceId() })
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
