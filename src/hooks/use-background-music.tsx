import { Audio } from 'expo-av'

export const useBackgroundMusic = () => {
  const audioSource = require('@assets/sound/background.mp3')
  let sound: Audio.Sound | null = null

  const playMusic = async () => {
    if (sound) {
      await sound.unloadAsync()
    }
    const { sound: loadedSound } = await Audio.Sound.createAsync(audioSource)
    sound = loadedSound
    await sound.setIsLoopingAsync(true)
    await sound.setVolumeAsync(0.2)
    await sound.playAsync()
  }

  const stopMusic = async () => {
    if (sound) {
      await sound.stopAsync()
      await sound.unloadAsync()
      sound = null
    }
  }

  return { playMusic, stopMusic }
}
