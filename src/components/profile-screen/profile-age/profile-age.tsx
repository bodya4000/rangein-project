import { Controller, useFormContext } from 'react-hook-form'

import { AgeContainer } from '@/components/ui/containers/age-container/age-container'

export const ProfileAge = () => {
  const { control } = useFormContext()
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
