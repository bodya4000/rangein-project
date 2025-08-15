import { useRouter } from 'expo-router'
import { useEffect } from 'react'
import { StyleSheet } from 'react-native'

import { useGetGame } from '@/api'
import { BlurModal, NetworkModal } from '@/components/ui'
import { AnimatedScreenContainer } from '@/components/ui/containers/screen-container'
import HomeScreen from '@/screens/home/home-screen/home-screen'
import { useAuthStore, useChatStore } from '@/store'
import { getDeviceId } from '@/utils'

export default function Home() {
  const router = useRouter()

  const login = useAuthStore(state => state.login)
  const authLoading = useAuthStore(state => state.authLoading)
  const user = useAuthStore(state => state.user)
  const error = useAuthStore(state => state.error)
  const initGame = useChatStore(state => state.initGame)

  const { data: gameData, isLoading: gameDataLoading } = useGetGame({ userId: getDeviceId() })

  useEffect(() => {
    if (gameData && gameData.gameId && gameData.options) {
      initGame(gameData.gameId, gameData.options)
    }
  }, [gameData])

  useEffect(() => {
    if (!user) {
      login()
    }
  }, [user])

  useEffect(() => {
    if (error == 'bad') {
      router.push('/(auth)')
    }
  }, [error])

  if (!user || authLoading || gameDataLoading) {
    return (
      <AnimatedScreenContainer animated={false} padding='md'>
        <BlurModal overlayStyle={styles.container}>
          <></>
        </BlurModal>
      </AnimatedScreenContainer>
    )
  }

  return (
    <AnimatedScreenContainer animated={true} padding='md'>
      {error && <NetworkModal error={'network'} />}
      <HomeScreen />
    </AnimatedScreenContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ai: {
    transform: [{ scale: 2 }],
  },
})
