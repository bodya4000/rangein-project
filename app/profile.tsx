import Header from '@/components/header/header'
import ScreenContainer from '@/components/ui/containers/screen-container/screen-container'
import ProfileScreen from '@/screens/profile-screen/profile-screen'

export default function Home() {
  return (
    <ScreenContainer isDefault>
      <Header />
      <ProfileScreen />
    </ScreenContainer>
  )
}
