import React from 'react'
import { Image, TextInput, TouchableOpacity, View } from 'react-native'

import { GradientTitle } from '@/components/common/text/gradient-title'
import { icons } from '@/components/ui'

import { styles } from './profile-username.style'

export default function ProfileUsername() {
  return (
    <View style={styles.container}>
      <GradientTitle style={styles.input}>Benjamin Button</GradientTitle>
      <TouchableOpacity>
        <Image style={{ width: 32, height: 32 }} source={icons.edit} />
      </TouchableOpacity>
    </View>
  )
}
