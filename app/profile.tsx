import ScreenContainer from '@/components/common/containers/screen-container/screen-container'
import ProfileScreen from '@/screens/profile-screen/profile-screen'

export default function Home() {
  return (
    <ScreenContainer isDefault>
      <ProfileScreen />
    </ScreenContainer>
  )
}
