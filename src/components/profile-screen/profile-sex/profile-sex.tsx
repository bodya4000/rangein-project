import { Control, Controller } from 'react-hook-form'

import { UpdateUserData } from '@/api'
import { SexContainer } from '@/components/ui'
import { Sex } from '@/types'

interface Props {
  control: Control<UpdateUserData>
}

export const ProfileSex = ({ control }: Props) => {
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
