import { Control, Controller } from 'react-hook-form'
import { Text, View } from 'react-native'

import { ProfileAge } from '@/components/profile-screen'
import { AgeContainer } from '@/components/ui/containers/age-container/age-container'
import { RegisterForm } from '@/screens/auth'

interface Props {
  control: Control<RegisterForm>
}

export const AgeStep = ({ control }: Props) => {
  return (
    <Controller
      control={control}
      name='age'
      rules={{
        required: true,
        min: {
          value: 12,
          message: 'You must be at least 12 years old',
        },
      }}
      render={({ field: { value, onChange }, fieldState: { error } }) => (
        <View>
          <AgeContainer age={value || 0} setAge={onChange} />
          {error && (
            <Text style={{ color: 'red', marginTop: 8 }}>{error.message || 'Invalid age'}</Text>
          )}
        </View>
      )}
    />
  )
}
