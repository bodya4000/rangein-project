import React from 'react'
import { TouchableOpacity, View } from 'react-native'

import { Edit } from '@/components/icons'
import { GradientTitle } from '@/components/ui/text/gradient-title'

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
