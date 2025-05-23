import React from 'react'
import { Image, TouchableOpacity, View } from 'react-native'

import { GradientTitle } from '@/components/common/text/gradient-title'
import { Edit } from '@/components/icons'

import { styles } from './profile-username.style'

export default function ProfileUsername() {
  return (
    <View style={styles.container}>
      <GradientTitle style={styles.input}>Benjamin Button</GradientTitle>
      <TouchableOpacity>
        <Edit />
      </TouchableOpacity>
    </View>
  )
}
