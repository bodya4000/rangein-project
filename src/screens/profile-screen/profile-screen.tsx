import { FormProvider, useForm } from 'react-hook-form'
import { View } from 'react-native'

import { UpdateUserData } from '@/api'
import { ProfileAge, ProfileLogo, ProfileSex, ProfileUsername } from '@/components/profile-screen'
import { SubmitButton } from '@/components/profile-screen/submit-button'
import { LangContainer } from '@/components/ui'
import { globalStyles } from '@/constants'
import { useInitUserFormValues } from '@/hooks/profile/use-init-user-form-values'

import { styles } from './profile-screen.style'

const ProfileScreen = () => {
  const { initUserFormValues: defaultValues } = useInitUserFormValues()
  const form = useForm<UpdateUserData>({ defaultValues })

  return (
    <FormProvider {...form}>
      <View style={styles.screenContainer}>
        <ProfileLogo />
        <ProfileUsername />
        <ProfileSex />
        <ProfileAge />
        <LangContainer />
        <View style={globalStyles.spacer} />
        <SubmitButton />
      </View>
    </FormProvider>
  )
}

export default ProfileScreen
