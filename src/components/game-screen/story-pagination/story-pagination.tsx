import { LinearGradient } from 'expo-linear-gradient'
import { View } from 'react-native'

import { colors } from '@/constants'

import { styles } from './story-pagination.style'

interface Props {
  currentIdx: number
}

const StoryPagination = ({ currentIdx }: Props) => {
  return (
    <View style={styles.paginationContainer}>
      {Array.from({ length: 6 }).map((_, index) => {
        const gradientColors = currentIdx === index ? colors.gradientMetal4 : colors.gradientMetal1
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
  )
}

export default StoryPagination
