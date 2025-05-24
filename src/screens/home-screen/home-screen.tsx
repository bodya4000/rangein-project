import { useRouter } from 'expo-router'
import { View } from 'react-native'

import { Continue, Play, Profile } from '@/components/icons'
import { GradientText } from '@/components/ui/text/gradient-text'

import { styles } from './home-screen.style'
import { PrimaryButton } from '../../components/ui/buttons'

const HomeScreen = () => {
  const router = useRouter()
  return (
    <>
      <GradientText txStyle='IR40' tx={'home.title'} style={styles.title} />
      <View style={styles.spacer} />
      <View style={styles.buttons_container}>
        <PrimaryButton onPress={() => router.push('/profile')}>
          <Profile />
        </PrimaryButton>
        <PrimaryButton style={styles.button_top} sizeType='big'>
          <Play />
        </PrimaryButton>
        <PrimaryButton>
          <Continue />
        </PrimaryButton>
      </View>
    </>
  )
}

export default HomeScreen
