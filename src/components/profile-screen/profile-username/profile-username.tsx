import React, { useState, memo, useCallback } from 'react'
import { Controller, Control, UseFormTrigger } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { TouchableOpacity, View } from 'react-native'

import { UpdateUserData } from '@/api'
import { Edit } from '@/components/icons'
import { GradientText } from '@/components/ui'

import { ProfileUsernameModal } from './profile-username-modal'
import { styles } from './profile-username.style'

interface Props {
  control: Control<UpdateUserData>
  trigger: UseFormTrigger<UpdateUserData>
  username?: string
}

function ProfileUsernameComponent({ control, username }: Props) {
  const { t } = useTranslation()
  const [showModal, setShowModal] = useState(false)
  const [text, setText] = useState(username)

  const openModal = useCallback(() => setShowModal(true), [])
  const closeModal = useCallback(() => setShowModal(false), [])

  return (
    <View style={styles.container}>
      <Controller
        control={control}
        name='username'
        rules={{
          required: true,
          minLength: { value: 3, message: 'Min 3 symbols' },
          maxLength: { value: 20, message: 'Max 20 symbols' },
        }}
        render={({ field: { value, onChange } }) => (
          <>
            <TouchableOpacity style={styles.usernameContainer} onPress={openModal}>
              <GradientText>{value}</GradientText>
              <Edit />
            </TouchableOpacity>

            {showModal && (
              <ProfileUsernameModal
                text={text || ''}
                setText={setText}
                onSubmit={() => {
                  onChange(text)
                  closeModal()
                }}
                onClose={closeModal}
              />
            )}
          </>
        )}
      />
    </View>
  )
}

export default memo(ProfileUsernameComponent)
