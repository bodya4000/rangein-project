import { DefaultScreenContainer } from '@/components/ui'
import { Header } from '@/components/ui/headers'
import ProfileScreen from '@/screens/profile-screen/profile-screen'

export default function Home() {
  return (
    <DefaultScreenContainer padding='md'>
      <Header txTitle='profile.header' />
      <ProfileScreen />
    </DefaultScreenContainer>
  )
}
