import React, { useState } from 'react'
import { TouchableOpacity, View } from 'react-native'

import { Edit } from '@/components/icons'
import { GradientInput } from '@/components/ui/inputs/gradient-input'

import { styles } from './profile-username.style'

export default function ProfileUsername() {
  const [username, setUsername] = useState('')
  return (
    <View style={styles.container}>
      <GradientInput value={username} setValue={setUsername} placeholder='Hello' />
      <TouchableOpacity>
        <Edit />
      </TouchableOpacity>
    </View>
  )
}
