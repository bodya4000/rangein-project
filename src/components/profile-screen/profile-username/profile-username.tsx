import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { TouchableOpacity, View } from 'react-native'

import { Check, Edit } from '@/components/icons'
import { GradientInput } from '@/components/ui/inputs/gradient-input/gradient-input'

import { styles } from './profile-username.style'

export default function ProfileUsername() {
  const { t } = useTranslation()
  const [editState, setEditState] = useState(false)
  const [username, setUsername] = useState('he')
  return (
    <View style={styles.container}>
      <GradientInput
        typeable={editState}
        value={username}
        onChangeText={setUsername}
        placeholder={t('profile.writeName')}
      />
      <TouchableOpacity onPress={() => setEditState(!editState)}>
        {!editState ? <Edit /> : <Check />}
      </TouchableOpacity>
    </View>
  )
}
