import { View } from 'react-native'

import {
  ProfileAge,
  ProfileLang,
  ProfileLogo,
  ProfileSex,
  ProfileUsername,
} from '@/components/profile-screen'

import { styles } from './profile-screen.style'

const ProfileScreen = () => {
  return (
    <View style={styles.screenContainer}>
      <ProfileLogo />
      <ProfileUsername />
      <ProfileSex />
      <ProfileAge />
      <ProfileLang />
    </View>
  )
}

export default ProfileScreen
