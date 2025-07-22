import { Control, Controller } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { Text, View } from 'react-native'

import { AgeContainer } from '@/components/ui/containers/age-container/age-container'
import { RegisterForm } from '@/screens/auth'

interface Props {
  control: Control<RegisterForm>
}

export const AgeStep = ({ control }: Props) => {
  const { t } = useTranslation()
  return (
    <Controller
      control={control}
      name='age'
      render={({ field: { value, onChange }, fieldState: { error } }) => (
        <View>
          <AgeContainer age={value || 0} setAge={onChange} />
          {error && (
            <Text style={{ color: 'red', marginTop: 8 }}>
              {error.message || t('auth.invalidAge')}
            </Text>
          )}
        </View>
      )}
    />
  )
}
