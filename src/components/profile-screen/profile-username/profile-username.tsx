import React, { useState } from 'react'
import { Controller, Control } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { TouchableOpacity, View } from 'react-native'

import { UpdateUserData } from '@/api'
import { Check, Edit } from '@/components/icons'
import { GradientInput } from '@/components/ui/inputs/gradient-input/gradient-input'

import { styles } from './profile-username.style'

interface Props {
  control: Control<UpdateUserData>
  username?: string
}

export default function ProfileUsername({ control, username }: Props) {
  const { t } = useTranslation()
  const [editState, setEditState] = useState(false)
  const [text, setText] = useState(username)

  return (
    <View style={styles.container}>
      <Controller
        control={control}
        name='username'
        rules={{ required: true }}
        render={({ field: { onChange } }) => (
          <>
            <GradientInput
              typeable={editState}
              value={text}
              onChangeText={setText}
              placeholder={t('profile.writeName')}
            />
            <TouchableOpacity
              onPress={() => {
                if (editState) onChange(text)
                setEditState(!editState)
              }}
            >
              {!editState ? <Edit /> : <Check />}
            </TouchableOpacity>
          </>
        )}
      />
    </View>
  )
}
