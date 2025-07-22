import ScreenContainer from '@/components/ui/containers/screen-container/screen-container'
import HomeScreen from '@/screens/home/home-screen/home-screen'

export default function Home() {
  return (
    <ScreenContainer padding='md' type='fullscreen' animated>
      <HomeScreen />
    </ScreenContainer>
  )
}
