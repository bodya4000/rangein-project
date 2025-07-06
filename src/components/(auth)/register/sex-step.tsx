import { Control, Controller } from 'react-hook-form'
import { Text, View } from 'react-native'

import { ProfileSex } from '@/components/profile-screen'
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
          <ProfileSex
            isMale={value === Sex.MALE}
            setIsMale={isMale => onChange(isMale ? Sex.MALE : Sex.FEMALE)}
          />
          {error && (
            <Text style={{ color: 'red', marginTop: 8 }}>
              {error.message || 'Invalid selection'}
            </Text>
          )}
        </View>
      )}
    />
  )
}
