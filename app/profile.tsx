import ScreenContainer from '@/components/common/containers/screen-container/screen-container'
import Header from '@/components/header/header'
import ProfileScreen from '@/screens/profile-screen/profile-screen'

export default function Home() {
  return (
    <ScreenContainer isDefault>
      <Header />
      <ProfileScreen />
    </ScreenContainer>
  )
}
