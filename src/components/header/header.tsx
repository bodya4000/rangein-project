import React from 'react'
import { View } from 'react-native'

import { styles } from './header.style'
import { BackButton } from '../ui/buttons/back-button/back-button'
import { GradientTitle } from '../ui/text/gradient-title'

export default function Header() {
  return (
    <View style={styles.container}>
      <BackButton containerStyle={styles.back} />
      <GradientTitle style={styles.title}>Profile</GradientTitle>
    </View>
  )
}
