import { Control, Controller } from 'react-hook-form'

import { UpdateUserData } from '@/api'
import { AgeContainer } from '@/components/ui/containers/age-container/age-container'

interface Props {
  control: Control<UpdateUserData>
}

export const ProfileAge = ({ control }: Props) => {
  return (
    <Controller
      name='age'
      control={control}
      render={({ field: { value, onChange } }) => {
        return <AgeContainer age={value || 0} setAge={onChange} />
      }}
    />
  )
}
