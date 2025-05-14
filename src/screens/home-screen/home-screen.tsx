import { useRouter } from 'expo-router'
import { View } from 'react-native'

import { GradientTitle } from '@/components/common/text/gradient-title'

import { styles } from './home-screen.style'
import { PrimaryButton } from '../../components/common/buttons'

const HomeScreen = () => {
  const router = useRouter()
  return (
    <>
      <GradientTitle style={styles.title}>Big Logo Beautiful</GradientTitle>
      <View style={styles.spacer} />
      <View style={styles.buttons_container}>
        <PrimaryButton icon='profile' onPress={() => router.push('/profile')} />
        <PrimaryButton icon='play' style={styles.button_top} sizeType='big' />
        <PrimaryButton icon='continue' />
      </View>
    </>
  )
}

export default HomeScreen
