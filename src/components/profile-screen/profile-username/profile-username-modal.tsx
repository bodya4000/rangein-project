import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Keyboard, StyleSheet, View } from 'react-native'

import { Send } from '@/components/icons'
import { GameModal, Text, Touchable } from '@/components/ui'
import { DefaultInput } from '@/components/ui/inputs'
import { colors, spacing } from '@/constants'

interface Props {
  text: string
  setText: (_: string) => void
  onSubmit: () => void
  onClose?: () => void
}

export const ProfileUsernameModal = ({ text, setText, onSubmit, onClose = () => {} }: Props) => {
  const { t } = useTranslation()
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = () => {
    if (text.length >= 3 && text.length <= 20) {
      onSubmit()
      onClose()
    } else {
      setError(t('auth.register.usernameRequired'))
    }
  }

  const [keyboardHeight, setKeyboardHeight] = useState(0)

  useEffect(() => {
    const onShow = Keyboard.addListener('keyboardDidShow', e => {
      setKeyboardHeight(e.endCoordinates.height)
    })
    const onHide = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardHeight(0)
    })

    return () => {
      onShow.remove()
      onHide.remove()
    }
  }, [])

  return (
    <GameModal
      gap={null}
      renderHeader={() => <Text quintessential tx='profile.newUsername' />}
      renderBody={() => (
        <View style={[styles.container]}>
          <Text txStyle='IB12' style={styles.error} color={colors.red}>
            {error && error}
          </Text>
          <View style={styles.body}>
            <DefaultInput
              containerStyle={styles.inputContainer}
              value={text}
              onChangeText={setText}
              placeholder={t('profile.writeNewUsername')}
            />
            <Touchable onPress={handleSubmit}>
              <Send />
            </Touchable>
          </View>
        </View>
      )}
      onClose={onClose}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: spacing.md,
    gap: spacing.sm,
  },
  body: {
    flexDirection: 'row',
    gap: spacing.md,
    alignItems: 'center',
  },
  inputContainer: {
    flex: 1,
  },
  error: {
    padding: spacing.sm,
    alignSelf: 'flex-start',
  },
})
