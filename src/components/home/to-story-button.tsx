import { StyleSheet } from 'react-native'

import { spacing } from '@/constants'

import { Play } from '../icons'
import HomeButton from './home-button'

const ToStoryButton = () => {
  return (
    <HomeButton
      icon={<Play />}
      href={'/home/game/story'}
      sizeType='big'
      style={styles.button_top}
    />
  )
}

export default ToStoryButton

export const styles = StyleSheet.create({
  button_top: {
    marginTop: -spacing['5xl'],
  },
})
