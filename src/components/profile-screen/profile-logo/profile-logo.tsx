import React, { useState } from 'react'
import { Image, TouchableOpacity } from 'react-native'

import { LinearGradientContainer, Text } from '@/components/ui'
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
        <LinearGradientContainer
          style={styles.logo}
          colors={user?.avatarColors}
          start={[0, 0]}
          end={[1, 1]}
        >
          <Text txStyle='IR80' style={styles.logoText}>
            {user.username[0].toUpperCase()}
          </Text>
        </LinearGradientContainer>
      )}
    </TouchableOpacity>
  )
}
