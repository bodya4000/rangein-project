import { router, useRouter } from 'expo-router'
import LottieView from 'lottie-react-native'
import React, { useRef, useState } from 'react'
import { Alert, FlatList, View } from 'react-native'

import { useGameSetup } from '@/api/hooks/game/use-game-setup'
import { ArrowLeft, ArrowRight } from '@/components/icons'
import { StoryList, StoryPagination } from '@/components/story-screen'
import { BlurModal, GradientText, PrimaryLoader, SecondaryButton, Touchable } from '@/components/ui'
import { getDeviceId, globalStyles, QUERIES, queryClient } from '@/constants'
import { logJson } from '@/utils'

import { styles } from './story-screen.style'

const BUTTON_DELAY = 500

const StoryScreen = () => {
  const router = useRouter()
  const flatlistRef = useRef<FlatList>(null)
  const [currentPaginationItem, setCurrentPaginationItem] = useState(0)
  const [isArrowDisabled, setIsArrowDisabled] = useState(false)

  const { data: gameInfo, isLoading, isSuccess } = useGameSetup({ userId: getDeviceId() })
  if (isSuccess) {
    queryClient.invalidateQueries({ queryKey: [QUERIES.USER] })
  }

  if (!isLoading && !isSuccess) {
    Alert.alert('Error', 'Failed to connect to network!', [
      { text: 'OK', onPress: () => router.back() },
    ])
    return null
  }

  const onArrowClick = (direction: 'prev' | 'next') => {
    if (!gameInfo) return
    setIsArrowDisabled(true)
    setTimeout(() => setIsArrowDisabled(false), BUTTON_DELAY)
    let newIndex = currentPaginationItem
    if (direction === 'next' && currentPaginationItem == gameInfo.story.parts.length - 1) {
      router.replace('/chat')
    } else if (direction === 'next' && currentPaginationItem < gameInfo.story.parts.length - 1) {
      newIndex++
    } else if (direction === 'prev' && currentPaginationItem > 0) {
      newIndex--
    }
    flatlistRef.current?.scrollToIndex({
      index: newIndex,
      animated: true,
    })
    setCurrentPaginationItem(newIndex)
  }

  return (
    <View style={styles.screen}>
      {gameInfo ? (
        <>
          <View style={styles.textContainer}>
            <GradientText style={styles.title} txStyle='IR24'>
              {gameInfo.story.title}
            </GradientText>
          </View>

          <View style={globalStyles.spacer} />

          <StoryList
            parts={gameInfo.story.parts}
            ref={flatlistRef}
            onScrollEndCb={setCurrentPaginationItem}
          />

          <View style={styles.buttons_container}>
            <Touchable
              style={styles.icon}
              onPress={() => onArrowClick('prev')}
              disabled={isArrowDisabled}
            >
              <ArrowLeft width={36} height={36} />
            </Touchable>
            <SecondaryButton
              title='Continue'
              onPress={() => onArrowClick('next')}
              disabled={isArrowDisabled}
            />
            <Touchable
              style={styles.icon}
              onPress={() => onArrowClick('next')}
              disabled={isArrowDisabled}
            >
              <ArrowRight width={36} height={36} />
            </Touchable>
          </View>

          <StoryPagination parts={gameInfo.story.parts.length} currentIdx={currentPaginationItem} />
        </>
      ) : (
        <BlurModal>
          <View style={styles.aiContainer}>
            <PrimaryLoader />
            <GradientText txStyle='IR16'>Generating game ...</GradientText>
          </View>
        </BlurModal>
      )}
    </View>
  )
}

export default StoryScreen
