import { useRouter } from 'expo-router'
import { useEffect } from 'react'
import { StyleSheet } from 'react-native'

import { BlurModal, NetworkModal } from '@/components/ui'
import { AnimatedScreenContainer } from '@/components/ui/containers/screen-container'
import HomeScreen from '@/screens/home/home-screen/home-screen'
import { useAuthStore } from '@/store'

export default function Home() {
  const router = useRouter()
  const login = useAuthStore(state => state.login)
  const authLoading = useAuthStore(state => state.authLoading)
  const user = useAuthStore(state => state.user)
  const error = useAuthStore(state => state.error)

  useEffect(() => {
    login()
  }, [])

  useEffect(() => {
    if (error == 'bad') {
      router.replace('/(auth)')
    }
    if (error == '500' || error == 'network') {
      router.replace('/(auth)')
    }
  }, [user, error])

  if (!user || authLoading) {
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
