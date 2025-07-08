import { useMemo } from 'react'
import { useForm } from 'react-hook-form'
import { Alert, View } from 'react-native'

import { UpdateUserData, useUpdateUser } from '@/api'
import { ProfileAge, ProfileLogo, ProfileSex, ProfileUsername } from '@/components/profile-screen'
import { LangContainer, SmoothButton } from '@/components/ui'
import { globalStyles } from '@/constants'
import { useAuthStore } from '@/store'
import { getDeviceId } from '@/utils'

import { styles } from './profile-screen.style'

const ProfileScreen = () => {
  const user = useAuthStore(user => user.user)
  const setUser = useAuthStore(user => user.setUser)
  const defaultValues: UpdateUserData = useMemo(
    () => ({
      username: user?.username,
      sex: user?.sex,
      age: user?.age,
    }),
    [user],
  )
  const { control, watch, handleSubmit } = useForm<UpdateUserData>({ defaultValues })
  const isChanged = JSON.stringify(watch()) !== JSON.stringify(defaultValues)

  const { mutate: updateUser } = useUpdateUser()

  const onSubmit = (data: UpdateUserData) => {
    updateUser(
      { path: getDeviceId(), update: data },
      {
        onSuccess: user => {
          setUser(user)
          Alert.alert('User data updated successfully')
        },
      },
    )
  }
  return (
    <View style={styles.screenContainer}>
      <ProfileLogo />
      <ProfileUsername control={control} username={user?.username} />
      <ProfileSex control={control} />
      <ProfileAge control={control} />
      <LangContainer />
      <View style={globalStyles.spacer} />
      {isChanged && <SmoothButton onPress={handleSubmit(onSubmit)} txTitle='Update' />}
    </View>
  )
}

export default ProfileScreen
