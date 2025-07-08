import React, { useState } from 'react'
import { Controller, Control, UseFormTrigger } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { TouchableOpacity, View } from 'react-native'

import { UpdateUserData } from '@/api'
import { Check, Edit } from '@/components/icons'
import { GradientText, Text } from '@/components/ui'
import { GradientInput } from '@/components/ui/inputs/gradient-input/gradient-input'

import { ProfileUsernameModal } from './profile-username-modal'
import { styles } from './profile-username.style'

interface Props {
  control: Control<UpdateUserData>
  trigger: UseFormTrigger<UpdateUserData>
  username?: string
}

export default function ProfileUsername({ control, username, trigger }: Props) {
  const { t } = useTranslation()
  const [showModal, setShowModal] = useState(false)
  const [text, setText] = useState(username)

  return (
    <View style={styles.container}>
      <Controller
        control={control}
        name='username'
        rules={{
          required: true,
          minLength: {
            value: 3,
            message: 'Min 3 symbols',
          },
          maxLength: {
            value: 20,
            message: 'Max 20 symbols',
          },
        }}
        render={({ field: { value, onChange } }) => (
          <>
            <TouchableOpacity
              style={styles.usernameContainer}
              onPress={() => {
                setShowModal(true)
              }}
            >
              <GradientText>{value}</GradientText>
              <Edit />
            </TouchableOpacity>

            {showModal && (
              <ProfileUsernameModal
                text={text || ''}
                setText={setText}
                onSubmit={() => onChange(text)}
                onClose={() => setShowModal(false)}
              />
            )}
          </>
        )}
      />
    </View>
  )
}
