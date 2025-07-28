import { useRouter } from 'expo-router'
import React, { useEffect, useRef, useState } from 'react'
import { ActivityIndicator, Alert, FlatList, View } from 'react-native'

import { useGameSetup } from '@/api/hooks/game/use-game-setup'
import { StoryList, StoryPagination } from '@/components/home/game/story-screen'
import { ArrowLeft, ArrowRight } from '@/components/icons'
import { BlurModal, GradientText, SecondaryButton, Touchable } from '@/components/ui'
import { globalStyles, QUERIES, queryClient } from '@/constants'
import { getDeviceId } from '@/utils'

import { styles } from './story-screen.style'

const BUTTON_DELAY = 500

const StoryScreen = () => {
  const router = useRouter()
  const flatlistRef = useRef<FlatList>(null)
  const [currentPaginationItem, setCurrentPaginationItem] = useState(0)
  const [isArrowDisabled, setIsArrowDisabled] = useState(false)

  const { data: gameInfo, isError, error, isSuccess } = useGameSetup({ userId: getDeviceId() })
  useEffect(() => {
    if (isSuccess) {
      queryClient.invalidateQueries({ queryKey: [QUERIES.USER] })
    }
  }, [isSuccess])

  useEffect(() => {
    if (isError && error) {
      console.warn('Full error object:', error)
      Alert.alert('Error', 'Failed to connect to network!', [
        { text: 'OK', onPress: () => router.back() },
      ])
    }
  }, [isError, error])

  const onArrowClick = (direction: 'prev' | 'next') => {
    if (!gameInfo) return
    setIsArrowDisabled(true)
    setTimeout(() => setIsArrowDisabled(false), BUTTON_DELAY)
    let newIndex = currentPaginationItem
    if (direction === 'next' && currentPaginationItem == gameInfo.parts.length - 1) {
      router.replace('/home/game/chat')
    } else if (direction === 'next' && currentPaginationItem < gameInfo.parts.length - 1) {
      newIndex++
    } else if (direction === 'prev' && currentPaginationItem > 0) {
      newIndex--
    } else if (direction === 'prev') {
      router.back()
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
              {gameInfo.title}
            </GradientText>
          </View>

          <View style={globalStyles.spacer} />

          <StoryList
            parts={gameInfo.parts}
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
              txTitle='actions.continue'
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

          <StoryPagination parts={gameInfo.parts.length} currentIdx={currentPaginationItem} />
        </>
      ) : (
        <BlurModal>
          <View style={styles.aiContainer}>
            <ActivityIndicator />
            <GradientText txStyle='IR16' tx='game.story.generatingGame' />
          </View>
        </BlurModal>
      )}
    </View>
  )
}

export default StoryScreen
