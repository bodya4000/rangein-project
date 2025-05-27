import { Audio } from 'expo-av'
import { useRouter } from 'expo-router'
import { useEffect } from 'react'
import { View } from 'react-native'

import { Continue, Play, Profile } from '@/components/icons'
import { GradientText } from '@/components/ui/text/gradient-text'

import { styles } from './home-screen.style'
import { PrimaryButton } from '../../components/ui/buttons'

const audioSource = require('@assets/sound/background.mp3')

const HomeScreen = () => {
  const router = useRouter()

  useEffect(() => {
    let sound: Audio.Sound

    const playMysteryMusic = async () => {
      const { sound: loadedSound } = await Audio.Sound.createAsync(audioSource)
      sound = loadedSound
      await sound.setIsLoopingAsync(true)
      await sound.setVolumeAsync(0.2)
      await sound.playAsync()
    }
    playMysteryMusic()

    return () => {
      if (sound) {
        sound.unloadAsync()
      }
    }
  }, [])

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
