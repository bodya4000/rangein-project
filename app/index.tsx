import { useRouter } from 'expo-router'
import { useEffect } from 'react'
import { StyleSheet, View } from 'react-native'

import { GameModal, GradientText, PrimaryLoader, Text } from '@/components/ui'
import ScreenContainer from '@/components/ui/containers/screen-container/screen-container'
import { spacing } from '@/constants'
import { useAuthStore } from '@/store'

export default function Splash() {
  const router = useRouter()
  const login = useAuthStore(state => state.login)
  const authLoading = useAuthStore(state => state.authLoading)
  const user = useAuthStore(state => state.user)
  const error = useAuthStore(state => state.error)

  useEffect(() => {
    login()
  }, [])

  useEffect(() => {
    if (user) {
      router.replace('/home')
    }
    if (error == 'bad') {
      router.replace('/(auth)')
    }
  }, [user, error])

  if (authLoading) {
    return (
      <ScreenContainer style={styles.container}>
        <PrimaryLoader />
      </ScreenContainer>
    )
  }
  return (
    <ScreenContainer>
      <GameModal
        renderHeader={() => {
          if (error === 'network') return <GradientText>No internet</GradientText>
          return <GradientText>Unexpected error</GradientText>
        }}
        renderBody={() => (
          <View style={styles.body}>
            <Text>Check your connection and try again.</Text>
          </View>
        )}
      />
    </ScreenContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  body: {
    marginTop: spacing.lg,
  },
})
