import { DefaultScreenContainer, Header } from '@/components/ui'
import ProfileScreen from '@/screens/profile-screen/profile-screen'

export default function Screen() {
  return (
    <>
      <DefaultScreenContainer padding='md'>
        <Header txTitle='profile.header' />
        <ProfileScreen />
      </DefaultScreenContainer>
    </>
  )
}
