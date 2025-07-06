import { useState } from 'react'
import { Text, View } from 'react-native'

import { ArrowRight } from '@/components/icons'
import {
  ProfileAge,
  ProfileLang,
  ProfileLogo,
  ProfileSex,
  ProfileUsername,
} from '@/components/profile-screen'
import { ResultModal, TouchableBlock } from '@/components/ui'
import { colors } from '@/constants'

import { styles } from './profile-screen.style'

const ProfileScreen = () => {
  const [modal, setModal] = useState(false)
  return (
    <View style={styles.screenContainer}>
      <ProfileLogo />
      <ProfileUsername />
      <ProfileSex />
      <ProfileAge />
      <ProfileLang />

      <TouchableBlock style={styles.profileBlock} onPress={() => setModal(!modal)}>
        <Text style={{ color: colors.white }}>Modal</Text>
        <ArrowRight />
      </TouchableBlock>

      {modal && <ResultModal stars={3} onClose={() => setModal(false)} />}
    </View>
  )
}

export default ProfileScreen
