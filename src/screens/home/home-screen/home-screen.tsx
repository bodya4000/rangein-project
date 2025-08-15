import { useRouter } from 'expo-router'
import { View } from 'react-native'

import { Continue, Play, Profile } from '@/components/icons'
import { GradientText, PrimaryButton } from '@/components/ui'
import { globalStyles } from '@/constants'
import { useChatStore } from '@/store'

import { styles } from './home-screen.style'

const HomeScreen = () => {
  const router = useRouter()
  const gameId = useChatStore(state => state.gameId)

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
        <PrimaryButton disabled={!gameId} onPress={() => router.push('/home/game/chat', {})}>
          <Continue />
        </PrimaryButton>
      </View>
    </>
  )
}

export default HomeScreen
