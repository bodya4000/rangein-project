import { Control, Controller } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { StyleSheet, View, Text } from 'react-native'

import { DefaultInput } from '@/components/ui/inputs'
import { colors } from '@/constants'
import { RegisterForm } from '@/screens/auth'

interface Props {
  control: Control<RegisterForm>
}

export const UsernameStep = ({ control }: Props) => {
  const { t } = useTranslation()
  return (
    <Controller
      control={control}
      name='username'
      render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => {
        return (
          <View style={styles.container}>
            <DefaultInput
              value={value || ''}
              placeholder={t('auth.enterUsername')}
              placeholderTextColor={colors.grey}
              cursorColor={colors.white}
              onChangeText={onChange}
              onBlur={onBlur}
            />
            {error && (
              <Text style={styles.errorText}>{error.message || t('auth.invalidUsername')}</Text>
            )}
          </View>
        )
      }}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
  },
  errorText: {
    color: 'red',
    marginTop: 6,
    fontSize: 13,
  },
})
