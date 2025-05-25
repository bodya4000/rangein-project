import React, { useState } from 'react'
import { Image, TouchableOpacity } from 'react-native'

import { useGalleryPhoto } from '@/hooks'

import ProfileLogoPng from '@assets/images/profile-logo.png'

import { styles } from './profile-logo.style'

export default function ProfileLogo() {
  const [imageUri, setImageUri] = useState<string | null>(null)

  const { pickPhoto } = useGalleryPhoto()
  const onBigImagePress = async () => {
    const uri = await pickPhoto()
    if (uri) {
      setImageUri(uri)
    }
  }

  return (
    <TouchableOpacity style={styles.container} onPress={onBigImagePress}>
      {imageUri && <Image style={styles.logo} resizeMode='cover' source={{ uri: imageUri }} />}
      {!imageUri && <Image style={styles.logo} resizeMode='cover' source={ProfileLogoPng} />}
    </TouchableOpacity>
  )
}
