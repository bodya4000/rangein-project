import { DefaultScreenContainer } from '@/components/ui'
import StoryScreen from '@/screens/home/game/story/story-screen'

import Background from '@assets/images/screens/screen_game.webp'

export default function Story() {
  return (
    <DefaultScreenContainer background={Background}>
      <StoryScreen />
    </DefaultScreenContainer>
  )
}
