import { useRouter } from 'expo-router'
import { View } from 'react-native'

import { useGetUser } from '@/api/hooks'
import { Continue, Play, Profile } from '@/components/icons'
import { GradientText, PrimaryButton } from '@/components/ui'
import { globalStyles } from '@/constants'
import { getDeviceId } from '@/utils'

import { styles } from './home-screen.style'

const HomeScreen = () => {
  const router = useRouter()

  const deviceId = getDeviceId()
  const { data: userInfo } = useGetUser({ deviceId })
  return (
    <>
      <GradientText txStyle='IR40' tx={'home.title'} style={styles.title} />
      <View style={globalStyles.spacer} />
      <View style={styles.buttons_container}>
        <PrimaryButton onPress={() => router.push('/profile')}>
          <Profile />
        </PrimaryButton>
        <PrimaryButton
          onPress={() => router.push('/home/game/story')}
          style={styles.button_top}
          sizeType='big'
        >
          <Play />
        </PrimaryButton>
        <PrimaryButton
          disabled={!userInfo || !userInfo.gameId}
          onPress={() => router.push('/home/game/chat')}
        >
          <Continue />
        </PrimaryButton>
      </View>
    </>
  )
}

export default HomeScreen
