import { useRouter } from 'expo-router'
import { useTranslation } from 'react-i18next'
import { StyleSheet, View } from 'react-native'
import { KeyboardStickyView } from 'react-native-keyboard-controller'

import { Send } from '@/components/icons'
import { GameModal, GradientText, Touchable } from '@/components/ui'
import { DefaultInput } from '@/components/ui/inputs'
import { colors, spacing, WINDOW_WIDTH } from '@/constants'

const ChatOptionModal = () => {
  const { t } = useTranslation()
  const router = useRouter()

  const handleBgPress = () => {
    router.back()
  }

  return (
    <GameModal onClose={handleBgPress}>
      <View style={styles.body}>
        <GradientText style={styles.title} tx='game.chat.enterYourAnswer' />
        <KeyboardStickyView offset={{ closed: 0, opened: 10 }}>
          <View style={styles.inputContainer}>
            <DefaultInput
              placeholder={t('game.chat.enterYourAnswer')}
              placeholderTextColor={colors.grey}
              style={{ flex: 1 }}
              containerStyle={{ flex: 1 }}
            />
            <Touchable>
              <Send />
            </Touchable>
          </View>
        </KeyboardStickyView>
      </View>
    </GameModal>
  )
}

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: WINDOW_WIDTH - 40,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    height: '100%',
    width: '100%',
    borderRadius: spacing['xl'],
  },

  body: {
    paddingVertical: spacing.lg,
    gap: spacing.lg,
  },

  title: {
    textAlign: 'center',
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.xl,
    paddingHorizontal: spacing.lg,
    height: 40,
  },
})

export default ChatOptionModal
