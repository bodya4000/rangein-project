import { useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import { RegisterStepper, RegisterStepperRef } from '@/components/(auth)/register'
import { Header, SmoothButton } from '@/components/ui'
import { globalStyles } from '@/constants'
import { Sex } from '@/types'

import { styles } from './index.style'

export interface RegisterForm {
  username: string
  sex: Sex
  age: string
}

const Register = () => {
  const [value, setValue] = useState('')

  const { control } = useForm<RegisterForm>()
  const stepperRef = useRef<RegisterStepperRef>(null)

  const onNext = () => {
    stepperRef.current?.nextStep()
  }
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
        <RegisterStepper ref={stepperRef} />
        <SmoothButton onPress={onNext} txTitle='Next' />
      </KeyboardAwareScrollView>
    </View>
  )
}

export default Register
