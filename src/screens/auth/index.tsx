import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'expo-router'
import { useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { View } from 'react-native'

import { RegisterStepper, RegisterStepperRef } from '@/components/(auth)/register'
import { SmoothButton } from '@/components/ui'
import { registerFormSchema } from '@/schemas/register-schema'
import { useAuthStore } from '@/store'
import { Sex } from '@/types'
import { getDeviceId } from '@/utils'
import { successToast } from '@/utils/toast'

import { styles } from './index.style'

export interface RegisterForm {
  username: string
  sex: Sex
  age: number
}

const Register = () => {
  const router = useRouter()
  const stepperRef = useRef<RegisterStepperRef>(null)
  const [stepIndex, setStepIndex] = useState(2)
  const { control, handleSubmit, trigger } = useForm<RegisterForm>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      username: '',
      sex: Sex.MALE,
      age: 18,
    },
  })

  const register = useAuthStore(state => state.register)

  const onNext = async () => {
    let valid = true

    if (stepIndex === 1) {
      valid = await trigger('username')
    }
    if (stepIndex === 2) {
      valid = await trigger('sex')
    }
    if (valid) {
      stepperRef.current?.nextStep()
    }
  }

  const onSubmit = ({ age, sex, username }: RegisterForm) => {
    register(
      { age, sex, username, deviceId: getDeviceId() },
      {
        onSuccess: () => {
          successToast('actions.success')
          router.back()
        },
      },
    )
  }

  return (
    <View style={styles.screenContainer}>
      <RegisterStepper onNextStep={setStepIndex} control={control} ref={stepperRef} />
      {stepIndex <= 2 && <SmoothButton onPress={onNext} txTitle={'auth.register.next'} />}
      {stepIndex == 3 && (
        <SmoothButton onPress={handleSubmit(onSubmit)} txTitle={'auth.register.submit'} />
      )}
    </View>
  )
}

export default Register
