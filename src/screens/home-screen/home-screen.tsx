import { Audio } from 'expo-av'
import { useRouter } from 'expo-router'
import { useEffect } from 'react'
import { View } from 'react-native'

import { Continue, Play, Profile } from '@/components/icons'
import { GradientText, PrimaryButton } from '@/components/ui'
import { globalStyles } from '@/constants'

import { styles } from './home-screen.style'

const audioSource = require('@assets/sound/background.mp3')

const HomeScreen = () => {
  const router = useRouter()

  useEffect(() => {
    let sound: Audio.Sound

    const playMysteryMusic = async () => {
      const { sound: loadedSound } = await Audio.Sound.createAsync(audioSource)
      sound = loadedSound
      // await sound.setIsLoopingAsync(true)
      // await sound.setVolumeAsync(0.2)
      // await sound.playAsync()
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
      <View style={globalStyles.spacer} />
      <View style={styles.buttons_container}>
        <PrimaryButton onPress={() => router.push('/profile')}>
          <Profile />
        </PrimaryButton>
        <PrimaryButton
          onPress={() => router.push('/game')}
          style={styles.button_top}
          sizeType='big'
        >
          <Play />
        </PrimaryButton>
        <PrimaryButton onPress={() => router.push('/chat')}>
          <Continue />
        </PrimaryButton>
      </View>
    </>
  )
}

export default HomeScreen
