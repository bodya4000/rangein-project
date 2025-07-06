import { useState } from 'react'
import { StyleSheet, View } from 'react-native'

import { DefaultInput } from '@/components/ui/inputs'

export const UsernameStep = () => {
  const [value, setValue] = useState('')
  return (
    <View style={styles.container}>
      <DefaultInput value={value} onChangeText={setValue} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
})
