import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'expo-router'
import { useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Keyboard, KeyboardAvoidingView, Pressable } from 'react-native'

import { RegisterStepper, RegisterStepperRef } from '@/components/(auth)/register'
import { Header, SmoothButton } from '@/components/ui'
import { globalStyles } from '@/constants'
import { registerFormSchema } from '@/schemas/register-schema'
import { useAuthStore } from '@/store'
import { Sex } from '@/types'
import { getDeviceId } from '@/utils'

import { styles } from './index.style'

export interface RegisterForm {
  username: string
  sex: Sex
  age: number
}

const Register = () => {
  const router = useRouter()
  const stepperRef = useRef<RegisterStepperRef>(null)
  const [stepIndex, setStepIndex] = useState(0)
  const { control, handleSubmit, trigger } = useForm<RegisterForm>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      username: '',
      sex: Sex.MALE,
      age: 18,
    },
  })

  const register = useAuthStore(state => state.register)
  const user = useAuthStore(state => state.user)

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
    // if (age && sex && username) {
    register({ age, sex, username, deviceId: getDeviceId() })
    // }
  }

  useEffect(() => {
    if (user) {
      router.replace('/home')
    }
  }, [user])

  return (
    <Pressable onPress={Keyboard.dismiss} style={globalStyles.spacer}>
      <KeyboardAvoidingView style={styles.screenContainer} behavior='padding'>
        <Header back={false} txTitle={stepIndex > 0 ? 'auth.register.title' : 'nothing'} />
        <RegisterStepper onNextStep={setStepIndex} control={control} ref={stepperRef} />
        {stepIndex <= 2 && <SmoothButton onPress={onNext} txTitle={'auth.register.next'} />}
        {stepIndex == 3 && (
          <SmoothButton onPress={handleSubmit(onSubmit)} txTitle={'auth.register.submit'} />
        )}
      </KeyboardAvoidingView>
    </Pressable>
  )
}

export default Register
