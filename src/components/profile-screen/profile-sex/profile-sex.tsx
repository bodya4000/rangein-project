import { Controller, useFormContext } from 'react-hook-form'

import { SexContainer } from '@/components/ui'
import { Sex } from '@/types'

export const ProfileSex = () => {
  const { control } = useFormContext()
  return (
    <Controller
      control={control}
      name='sex'
      render={({ field: { value, onChange } }) => {
        return <SexContainer sex={value || Sex.MALE} setSex={onChange} />
      }}
    />
  )
}
