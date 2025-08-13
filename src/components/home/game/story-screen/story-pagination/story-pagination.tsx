import { View } from 'react-native'

import { LinearGradientContainer } from '@/components/ui'
import { colors } from '@/constants'

import { styles } from './story-pagination.style'

interface Props {
  currentIdx: number
  parts: number
}

const StoryPagination = ({ currentIdx, parts }: Props) => {
  return (
    <View style={styles.paginationContainer}>
      {Array.from({ length: parts }).map((_, index) => {
        const gradientColors = currentIdx === index ? colors.gradientMetal4 : colors.gradientMetal1
        return (
          <LinearGradientContainer
            key={index}
            colors={gradientColors as [string, string, ...string[]]}
            start={[0, 1]}
            end={[1, 0]}
            style={styles.paginationItem}
          />
        )
      })}
    </View>
  )
}

export default StoryPagination
