import React from 'react'
import { TouchableOpacity, View } from 'react-native'

import { Edit } from '@/components/icons'
import { GradientText } from '@/components/ui'

import { styles } from './profile-username.style'

export default function ProfileUsername() {
  return (
    <View style={styles.container}>
      <GradientText textStyle='IR14' text='Benjamin Button' style={styles.input} />
      <TouchableOpacity>
        <Edit />
      </TouchableOpacity>
    </View>
  )
}
