import { LinearGradient } from 'expo-linear-gradient'
import React, { useState } from 'react'
import { ColorValue, Image, TouchableOpacity } from 'react-native'

import { Text } from '@/components/ui'
import { useGalleryPhoto } from '@/hooks/use-gallery-photo'
import { useAuthStore } from '@/store'

// import ProfileLogoPng from '@assets/images/profile-logo.png'

import { styles } from './profile-logo.style'

export default function ProfileLogo() {
  const user = useAuthStore(state => state.user)
  const [imageUri, setImageUri] = useState<string | null>(null)

  // const { pickPhoto } = useGalleryPhoto()
  const onBigImagePress = async () => {
    // const uri = await pickPhoto()
    // if (uri) {
    //   setImageUri(uri)
    // }
  }

  return (
    <TouchableOpacity style={styles.container} onPress={onBigImagePress}>
      {imageUri && <Image style={styles.logo} resizeMode='cover' source={{ uri: imageUri }} />}
      {!imageUri && user?.avatarColors && (
        <LinearGradient
          style={styles.logo}
          colors={user?.avatarColors as [ColorValue, ColorValue, ...ColorValue[]]}
          start={[0, 0]}
          end={[1, 1]}
        >
          <Text txStyle='IR80' style={styles.logoText}>
            {user.username[0].toUpperCase()}
          </Text>
        </LinearGradient>
      )}
    </TouchableOpacity>
  )
}
