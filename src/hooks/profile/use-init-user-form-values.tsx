import { useMemo } from 'react'

import { UpdateUserData } from '@/api'
import { useAuthStore } from '@/store'

export const useInitUserFormValues = () => {
  const user = useAuthStore(user => user.user)
  const defaultValues: UpdateUserData = useMemo(
    () => ({
      username: user?.username,
      sex: user?.sex,
      age: user?.age,
    }),
    [user],
  )

  return { initUserFormValues: defaultValues }
}
