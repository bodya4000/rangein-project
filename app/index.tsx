import { useRouter } from 'expo-router'
import { useEffect } from 'react'
import { ActivityIndicator, StyleSheet, View } from 'react-native'

import { GameModal, GradientText, Text } from '@/components/ui'
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
        <ActivityIndicator size={'large'} style={styles.ai} />
        <Text>Loading...</Text>
        {/* <PrimaryLoader size='lg' /> */}
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

  ai: {
    marginTop: spacing.lg,
    marginBottom: spacing.lg,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    height: 200,
    borderRadius: spacing.md,
    padding: spacing.md,
    shadowOffset: { width: 0, height: 2 },
  },

  body: {
    marginTop: spacing.lg,
  },
})
