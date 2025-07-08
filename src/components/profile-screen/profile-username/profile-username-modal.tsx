import { useState } from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'

import { Send } from '@/components/icons'
import { GameModal, SmoothButton, Text, Touchable } from '@/components/ui'
import { DefaultInput } from '@/components/ui/inputs'
import { colors, spacing } from '@/constants'

interface Props {
  text: string
  setText: (_: string) => void
  onSubmit: () => void
  onClose?: () => void
}

export const ProfileUsernameModal = ({ text, setText, onSubmit, onClose = () => {} }: Props) => {
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = () => {
    if (text.length >= 3 && text.length <= 20) {
      onSubmit()
      onClose()
    } else {
      setError('Max 20 and Min 3 symbols')
    }
  }
  return (
    <GameModal
      renderHeader={() => <Text>New Username</Text>}
      renderBody={() => (
        <View style={styles.container}>
          <DefaultInput
            containerStyle={styles.inputContainer}
            value={text}
            onChangeText={setText}
            placeholder='Write your new username'
          />
          <Touchable onPress={handleSubmit}>
            <Send />
          </Touchable>
        </View>
      )}
      renderFooter={() => {
        return (
          <Text txStyle='IB16' style={styles.error} color={colors.red}>
            {error && error}
          </Text>
        )
      }}
      onClose={onClose}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: spacing.md,
    alignItems: 'center',
  },
  inputContainer: {
    flex: 1,
  },
  error: {
    height: 25,
    marginTop: spacing.sm,
    marginLeft: spacing.md,
    alignSelf: 'flex-start',
  },
})
