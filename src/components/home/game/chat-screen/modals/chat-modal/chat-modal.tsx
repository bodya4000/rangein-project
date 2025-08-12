import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { StyleSheet, View } from 'react-native'
import { AvoidSoftInput } from 'react-native-avoid-softinput'

import { Send } from '@/components/icons'
import { GameModal, GradientText, Touchable } from '@/components/ui'
import { DefaultInput } from '@/components/ui/inputs'
import { colors, IS_ANDROID, spacing, WINDOW_WIDTH } from '@/constants'

interface Props {
  handleSendMessage: (_: string) => void
  onClose: () => void
}

export const ChatModal = ({ handleSendMessage, onClose }: Props) => {
  const { t } = useTranslation()
  const [textValue, setTextValue] = useState('')

  const onSend = () => {
    handleSendMessage(textValue)
  }

  useEffect(() => {
    if (IS_ANDROID) {
      AvoidSoftInput.setAdjustNothing()
    }
    return () => {
      if (IS_ANDROID) {
        AvoidSoftInput.setAdjustPan()
      }
    }
  }, [])

  return (
    <GameModal onClose={onClose}>
      <View style={styles.body}>
        <GradientText style={styles.title} tx='game.chat.enterYourAnswer' />
        <View style={styles.inputContainer}>
          <DefaultInput
            placeholder={t('game.chat.enterYourAnswer')}
            placeholderTextColor={colors.grey}
            value={textValue}
            onChangeText={setTextValue}
            style={{ flex: 1 }}
            containerStyle={{ flex: 1 }}
          />
          <Touchable onPress={onSend}>
            <Send />
          </Touchable>
        </View>
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

// import { useEffect, useRef, useState } from 'react'
// import { useTranslation } from 'react-i18next'
// import { View, TextInput } from 'react-native'

// import { Send } from '@/components/icons'
// import { GameModal, GradientText, Touchable } from '@/components/ui'
// import { DefaultInput } from '@/components/ui/inputs'
// import { globalStyles, IS_ANDROID, spacing } from '@/constants'
// import { useChatStore } from '@/store'
// import { isStringEmpty } from '@/utils'

// import { styles } from './chat-modal.style'
// import { AvoidSoftInput } from 'react-native-avoid-softinput'

// interface Props {
//   handleSendMessage: (_: string, __?: { onSuccess?: () => void; onError?: () => void }) => void
//   onClose: () => void
// }

// const ChatModal = ({ handleSendMessage, onClose }: Props) => {
//   const { t } = useTranslation()
//   const textRef = useRef<TextInput | null>(null)
//   const [text, setText] = useState('')

//   const setUserOption = useChatStore(state => state.setUserOption)

//   const onMyOptionSend = () => {
//     const msg = text
//     handleSendMessage(msg, {
//       onSuccess: () => {
//         setUserOption(msg)
//         onClose()
//       },
//       onError: onClose,
//     })
//   }

//   useEffect(() => {
//     textRef.current?.focus()
//   }, [])

//   return (
//     <>
//       <GameModal>
//         <View style={styles.view}>
//           <DefaultInput
//             ref={textRef}
//             containerStyle={globalStyles.spacer}
//             placeholder={t('game.chat.typeYourAnswer')}
//             value={text}
//             onChangeText={setText}
//           />
//           <Touchable onPress={onMyOptionSend} disabled={isStringEmpty(text)}>
//             <Send />
//           </Touchable>
//         </View>
//       </GameModal>
//     </>
//   )
// }

// export default ChatModal
