import { useRouter } from 'expo-router'
import { use, useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import { RegisterStepper, RegisterStepperRef } from '@/components/(auth)/register'
import { Header, SmoothButton } from '@/components/ui'
import { getDeviceId, globalStyles } from '@/constants'
import { useAuthStore } from '@/store'
import { Sex } from '@/types'
import { logJson } from '@/utils'

import { styles } from './index.style'

export interface RegisterForm {
  username: string | null
  sex: Sex | null
  age: number | null
}

const initForm: RegisterForm = {
  username: null,
  sex: null,
  age: null,
}

const Register = () => {
  const router = useRouter()
  const stepperRef = useRef<RegisterStepperRef>(null)
  const [stepIndex, setStepIndex] = useState(0)
  const { control, handleSubmit, trigger } = useForm<RegisterForm>({ defaultValues: initForm })

  const register = useAuthStore(state => state.register)
  const user = useAuthStore(state => state.user)
  const authError = useAuthStore(state => state.error)
  const authLoading = useAuthStore(state => state.authLoading)

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
    if (age && sex && username) {
      register({ age, sex, username, deviceId: getDeviceId() })
    }
  }

  useEffect(() => {
    if (user) {
      router.replace('/home')
    }
  }, [user])

  return (
    <View style={globalStyles.spacer}>
      <KeyboardAwareScrollView
        contentContainerStyle={styles.screenContainer}
        enableOnAndroid={true}
        keyboardShouldPersistTaps='handled'
        bounces={false}
        extraScrollHeight={200}
      >
        <Header back={false} txTitle='userDataQuestioner.title' />
        <RegisterStepper onNextStep={setStepIndex} control={control} ref={stepperRef} />
        {stepIndex <= 2 && <SmoothButton onPress={onNext} txTitle={'Next'} />}
        {stepIndex == 3 && <SmoothButton onPress={handleSubmit(onSubmit)} txTitle={'submit'} />}
      </KeyboardAwareScrollView>
    </View>
  )
}

export default Register
