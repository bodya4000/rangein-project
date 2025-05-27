import ScreenContainer from '@/components/ui/containers/screen-container/screen-container'
import GameScreen from '@/screens/game-screen/game-screen'

import Background from '@assets/images/screens/screen_game.png'

export default function Home() {
  return (
    <ScreenContainer background={Background}>
      <GameScreen />
    </ScreenContainer>
  )
}
