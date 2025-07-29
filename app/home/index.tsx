import { AnimatedScreenContainer } from '@/components/ui/containers/screen-container'
import HomeScreen from '@/screens/home/home-screen/home-screen'

export default function Home() {
  return (
    // <AnimatedScreenContainer padding='md' type='fullscreen' animated>
    <AnimatedScreenContainer padding='md'>
      <HomeScreen />
    </AnimatedScreenContainer>
  )
}
