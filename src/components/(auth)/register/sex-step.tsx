import { Control, Controller } from 'react-hook-form'
import { Text, View } from 'react-native'

import { ProfileSex } from '@/components/profile-screen'
import { SexContainer } from '@/components/ui'
import { RegisterForm } from '@/screens/auth'
import { Sex } from '@/types'

interface Props {
  control: Control<RegisterForm>
}

export const SexStep = ({ control }: Props) => {
  return (
    <Controller
      control={control}
      name='sex'
      rules={{
        required: {
          value: true,
          message: 'Please select your sex',
        },
      }}
      render={({ field: { value, onChange }, fieldState: { error } }) => (
        <View>
          <SexContainer
            sex={value}
            setSex={sex => {
              console.log(sex)
              onChange(sex)
            }}
          />
          <Text style={{ color: 'red', marginTop: 8 }}>
            {error && (error.message || 'Invalid selection')}
          </Text>
        </View>
      )}
    />
  )
}
