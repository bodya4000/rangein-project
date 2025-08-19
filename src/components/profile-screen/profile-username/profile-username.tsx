import React, { useState, memo, useCallback } from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { TouchableOpacity, View } from 'react-native'

import { Edit } from '@/components/icons'
import { GradientText } from '@/components/ui'
import { useAuthStore } from '@/store'

import { ProfileUsernameModal } from './profile-username-modal'
import { styles } from './profile-username.style'

function ProfileUsernameComponent() {
  const { control } = useFormContext()
  const user = useAuthStore(user => user.user)

  const [showModal, setShowModal] = useState(false)
  const [text, setText] = useState(user?.username)

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
