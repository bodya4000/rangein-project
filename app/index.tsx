import { useRouter } from 'expo-router'
import { lazy, Suspense } from 'react'
import { useEffect } from 'react'

import { useGetGame } from '@/api'
import { AnimatedScreenContainer } from '@/components/ui/containers/screen-container'
import HomeScreen from '@/screens/home/home-screen/home-screen'
import { useAuthStore, useChatStore } from '@/store'
import { getDeviceId } from '@/utils'

// lazy import
const NetworkModal = lazy(() => import('@/components/ui/modals/network-modal/network-modal'))

export default function Home() {
  const router = useRouter()

  const login = useAuthStore(state => state.login)
  const authLoading = useAuthStore(state => state.authLoading)
  const user = useAuthStore(state => state.user)
  const error = useAuthStore(state => state.error)
  const initGame = useChatStore(state => state.initGame)

  const { data: gameData, isLoading: gameDataLoading } = useGetGame({ userId: getDeviceId() })

  console.log(gameData)

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

  const showLoading = authLoading || gameDataLoading
  const apiError = error == '500' || error == 'network'

  return (
    <AnimatedScreenContainer animated={showLoading} padding='md'>
      {showLoading || apiError ? (
        <Suspense fallback={null}>{apiError && <NetworkModal error='network' />}</Suspense>
      ) : (
        <>
          <HomeScreen />
        </>
      )}
    </AnimatedScreenContainer>
  )
}
