import { useFormContext, useWatch } from 'react-hook-form'

import { UpdateUserData, useUpdateUser } from '@/api'
import { SmoothButton } from '@/components/ui'
import { useInitUserFormValues } from '@/hooks/profile/use-init-user-form-values'
import { useAuthStore } from '@/store'
import { getDeviceId } from '@/utils'
import { successToast } from '@/utils/toast'

export const SubmitButton = () => {
  const { control, handleSubmit } = useFormContext()
  const values = useWatch({ control })
  const { initUserFormValues: defaultValues } = useInitUserFormValues()

  const setUser = useAuthStore(user => user.setUser)
  const { mutate: updateUser } = useUpdateUser()

  const isChanged = JSON.stringify(values) !== JSON.stringify(defaultValues)
  if (!isChanged) return null

  const onSubmit = (data: UpdateUserData) => {
    updateUser(
      { path: getDeviceId(), update: data },
      {
        onSuccess: user => {
          setUser(user)
          successToast('actions.success')
        },
      },
    )
  }

  return <SmoothButton onPress={handleSubmit(onSubmit)} txTitle='profile.update' />
}
