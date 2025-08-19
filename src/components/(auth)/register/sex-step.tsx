import { Control, Controller } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { Text, View } from 'react-native'

import { ProfileSex } from '@/components/profile-screen'
import { SexContainer } from '@/components/ui'
import { RegisterForm } from '@/screens/auth'
import { Sex } from '@/types'

interface Props {
  control: Control<RegisterForm>
}

export const SexStep = ({ control }: Props) => {
  const { t } = useTranslation()
  return (
    <Controller
      control={control}
      name='sex'
      render={({ field: { value, onChange }, fieldState: { error } }) => (
        <View>
          <SexContainer sex={value} setSex={onChange} />
          <Text style={{ color: 'red', marginTop: 8 }}>
            {error && (error.message || t('auth.invalidSex'))}
          </Text>
        </View>
      )}
    />
  )
}
