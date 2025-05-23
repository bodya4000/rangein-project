import React, { useState } from 'react'
import { Image, TouchableOpacity } from 'react-native'

import ProfileLogoPng from '@assets/images/profile-logo.png'

import { styles } from './profile-logo.style'

export default function ProfileLogo() {
  const [imageUri, setImageUri] = useState<string | null>(null)

  // const pickImage = async () => {
  //   const result = await ImagePicker.launchImageLibraryAsync({
  //     mediaTypes: ImagePicker.MediaTypeOptions.Images,
  //     allowsEditing: true,
  //     quality: 1,
  //   })
  //    const uri = result.assets[0].uri
  // }

  return (
    <TouchableOpacity style={styles.container} onPress={() => {}}>
      <Image style={styles.logo} resizeMode='cover' source={ProfileLogoPng} />
    </TouchableOpacity>
  )
}
