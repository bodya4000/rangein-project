import ScreenContainer from '@/components/ui/containers/screen-container/screen-container'
import { Header } from '@/components/ui/headers'
import ProfileScreen from '@/screens/profile-screen/profile-screen'

export default function Home() {
  return (
    <ScreenContainer isDefault>
      <Header txTitle='profile.header' />
      <ProfileScreen />
    </ScreenContainer>
  )
}
