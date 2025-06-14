import * as ImagePicker from 'expo-image-picker'
import { useCallback } from 'react'
import { Alert } from 'react-native'

export const useGalleryPhoto = () => {
  const pickPhoto = useCallback(async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync()
    if (status !== 'granted') {
      Alert.alert('Permission denied')
      return null
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    })

    if (!result.canceled) {
      return result.assets[0].uri
    }

    return null
  }, [])

  return { pickPhoto }
}
