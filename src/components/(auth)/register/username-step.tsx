import { Control, Controller } from 'react-hook-form'
import { StyleSheet, View, Text } from 'react-native'

import { DefaultInput } from '@/components/ui/inputs'
import { RegisterForm } from '@/screens/auth'

interface Props {
  control: Control<RegisterForm>
}

export const UsernameStep = ({ control }: Props) => {
  return (
    <Controller
      control={control}
      name='username'
      rules={{
        required: {
          value: true,
          message: 'Username is required',
        },
        minLength: {
          value: 3,
          message: 'Minimum 3 characters',
        },
        maxLength: {
          value: 20,
          message: 'Maximum 20 characters',
        },
      }}
      render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
        <View style={styles.container}>
          <DefaultInput
            value={value || ''}
            placeholder='Enter your username'
            cursorColor={'white'}
            onChangeText={onChange}
            onBlur={onBlur}
          />
          {error && <Text style={styles.errorText}>{error.message || 'Invalid username'}</Text>}
        </View>
      )}
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
