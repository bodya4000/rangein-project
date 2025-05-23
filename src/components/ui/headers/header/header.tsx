import React from 'react'
import { View } from 'react-native'

import { styles } from './header.style'
import { BackButton } from '../../buttons/back-button/back-button'
import { GradientText } from '../../text/gradient-text'

export default function Header() {
  return (
    <View style={styles.container}>
      <BackButton containerStyle={styles.back} />
      <GradientText textStyle='IR16' text={'Profile'} style={styles.title} />
    </View>
  )
}
