import ScreenContainer from '@/components/ui/containers/screen-container/screen-container'
import StoryScreen from '@/screens/story-screen/story-screen'

import Background from '@assets/images/screens/screen_game.png'

export default function Home() {
  return (
    <ScreenContainer background={Background}>
      <StoryScreen />
    </ScreenContainer>
  )
}
