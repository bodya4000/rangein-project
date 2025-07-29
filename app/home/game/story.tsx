import { ImageBackgroundScreenContainer } from '@/components/ui'
import StoryScreen from '@/screens/home/game/story-screen/story-screen'

import Background from '@assets/images/screens/screen_game.png'

export default function Story() {
  return (
    <ImageBackgroundScreenContainer background={Background}>
      <StoryScreen />
    </ImageBackgroundScreenContainer>
  )
}
