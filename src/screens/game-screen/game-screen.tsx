import { LinearGradient } from 'expo-linear-gradient'
import { useRef, useState } from 'react'
import { Dimensions, FlatList, View } from 'react-native'

import { ArrowLeft, ArrowRight } from '@/components/icons'
import { GradientText } from '@/components/ui'
import Touchable from '@/components/ui/buttons/touchable/touchabe'
import { colors } from '@/constants/colors'
import { spacing } from '@/constants/spacing'

import { styles } from './game-screen.style'
import { SecondaryButton } from '../../components/ui/buttons'

const { width: SCREEN_WIDTH } = Dimensions.get('window')
const CONTAINER_WIDTH = SCREEN_WIDTH - spacing.lg * 2 - spacing.md * 2

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

const GameScreen = () => {
  const flatlistRef = useRef<FlatList>(null)
  const [currentPaginationItem, setCurrentPaginationItem] = useState(0)
  const [flatlistIndex, setFlatlistIndex] = useState(0)

  const onArrowClick = (direction: 'prev' | 'next') => {
    let newIndex = flatlistIndex
    if (direction === 'next' && flatlistIndex < TEMP_MESSAGES.length - 1) {
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
      case TEMP_MESSAGES.length - 2:
        setCurrentPaginationItem(4)
        break
      case TEMP_MESSAGES.length - 1:
        setCurrentPaginationItem(5)
        break
      default:
        const moreCloseToRight = newIndex > TEMP_MESSAGES.length / 2
        setCurrentPaginationItem(moreCloseToRight ? 3 : 2)
        break
    }
  }

  return (
    <View style={styles.screen}>
      <View style={styles.spacer} />

      <View style={styles.textContainer}>
        <GradientText txStyle='IR20'>Shore of Whispers</GradientText>

        <FlatList
          ref={flatlistRef}
          horizontal
          data={TEMP_MESSAGES}
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          keyExtractor={(_, index) => index.toString()}
          snapToAlignment='center'
          decelerationRate='fast'
          onMomentumScrollEnd={e => {
            const offsetX = e.nativeEvent.contentOffset.x
            const newIndex = Math.round(offsetX / CONTAINER_WIDTH)
            updatePagination(newIndex)
          }}
          renderItem={({ item }) => (
            <View style={[{ maxWidth: CONTAINER_WIDTH }]}>
              <GradientText
                numberOfLines={10}
                txStyle='IR10'
                quintessential={false}
                width={CONTAINER_WIDTH}
                style={styles.text}
              >
                {item}
              </GradientText>
            </View>
          )}
        />
      </View>

      <View style={styles.buttons_container}>
        <Touchable style={styles.icon} onPress={() => onArrowClick('prev')}>
          <ArrowLeft width={36} height={36} />
        </Touchable>
        <SecondaryButton title='Continue' onPress={() => onArrowClick('next')} />
        <Touchable style={styles.icon} onPress={() => onArrowClick('next')}>
          <ArrowRight width={36} height={36} />
        </Touchable>
      </View>

      <View style={styles.paginationContainer}>
        {Array.from({ length: 6 }).map((_, index) => {
          const gradientColors =
            currentPaginationItem === index ? colors.gradientMetal4 : colors.gradientMetal1
          return (
            <LinearGradient
              key={index}
              colors={gradientColors as [string, string, ...string[]]}
              start={{ x: 0, y: 1 }}
              end={{ x: 1, y: 0 }}
              style={styles.paginationItem}
            />
          )
        })}
      </View>
    </View>
  )
}

export default GameScreen
