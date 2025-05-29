import { useRef, useState } from 'react'
import { FlatList, KeyboardAvoidingView, TextInput, View } from 'react-native'

import { ReceivedMessage } from '@/components/chat/received-message/received-message'
import { SentMessage } from '@/components/chat/sent-message/sent-message'
import { Burger, Cross, Send } from '@/components/icons'
import { GameModal, GradientText, Text, TouchableBlock } from '@/components/ui'
import Touchable from '@/components/ui/buttons/touchable/touchabe'
import { ChatInput } from '@/components/ui/inputs'
import { spacing } from '@/constants/spacing'
import { IS_IOS } from '@/utils'

import { styles } from './chat-screen.style'
const messagesData = [
  { id: 1, who: 'me', message: 'Hey Sam! I’m goog, it’s been a busy month.' },
  { id: 2, who: 'sam', message: 'Hey Sam! I’m goog, it’s been a busy month.' },
  { id: 3, who: 'me', message: 'Hey Sam! I’m goog, it’s been a busy month.' },
  { id: 4, who: 'me', message: 'Hey Sam! I’m goog, it’s been a busy month.' },
  { id: 5, who: 'sam', message: 'Hey Sam! I’m goog, it’s been a busy month.' },
  { id: 6, who: 'sam', message: 'Hey Sam! I’m goog, it’s been a busy month.' },
  { id: 7, who: 'me', message: 'Hey Sam! I’m goog, it’s been a busy month.' },
  { id: 8, who: 'sam', message: 'Hey Sam! I’m goog, it’s been a busy month.' },
  { id: 9, who: 'sam', message: 'Hey Sam! I’m goog, it’s been a busy month.' },
  { id: 10, who: 'me', message: 'Hey Sam! I’m goog, it’s been a busy month.' },
  { id: 11, who: 'me', message: 'Hey Sam! I’m goog, it’s been a busy month.' },
  { id: 12, who: 'sam', message: 'Hey Sam! I’m goog, it’s been a busy month.' },
  { id: 13, who: 'me', message: 'Hey Sam! I’m goog, it’s been a busy month.' },
  { id: 14, who: 'sam', message: 'Hey Sam! I’m goog, it’s been a busy month.' },
  { id: 15, who: 'me', message: 'Hey Sam! I’m goog, it’s been a busy month.' },
  { id: 16, who: 'me', message: 'Hey Sam! I’m goog, it’s been a busy month.' },
]

const optionsData = [
  { id: 1, option: 'option', label: '"Option"' },
  { id: 2, option: 'option', label: '"Option"' },
  { id: 3, option: 'option', label: '"Option"' },
  { id: 4, option: 'option', label: '"Option"' },
  { id: 5, option: 'my_option', label: 'My Option' },
]

const ChatScreen = () => {
  const inputRef = useRef<TextInput>(null)
  const [userTextInput, setUserTextInput] = useState('')
  const [showOptions, setShowOptions] = useState(false)
  const [showMyOptionModal, setShowMyOptionModal] = useState(false)

  const onBurgerPress = () => {
    if (inputRef.current) {
      inputRef.current.blur()
    }
    setShowOptions(true)
  }

  const onCrossPress = () => {
    setShowOptions(false)
  }

  const onAnyOptionClick = () => {
    setShowMyOptionModal(true)
  }

  const onMyOptionClick = () => {
    setShowOptions(false)
    setShowMyOptionModal(true)
  }
  return (
    <View style={styles.screen}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        contentContainerStyle={{ flex: 1 }}
        behavior={IS_IOS ? 'padding' : 'height'}
        keyboardVerticalOffset={80}
      >
        <View style={{ flex: 1 }}>
          <View style={[styles.messagesContainer, { flex: 1 }]}>
            <FlatList
              data={messagesData}
              contentContainerStyle={{ paddingTop: spacing.lg, gap: spacing['2xl'] }}
              keyExtractor={item => item.id.toString()}
              renderItem={({ item }) => {
                if (item.who == 'me') return <SentMessage text={item.message} />
                return <ReceivedMessage text={item.message} />
              }}
            />
          </View>

          {showOptions ? (
            <View style={{ gap: spacing.sm }}>
              <Touchable onPress={onCrossPress} style={styles.cross}>
                <Cross />
              </Touchable>
              <FlatList
                data={optionsData}
                keyExtractor={({ id }) => id.toString()}
                scrollEnabled={false}
                renderItem={({ item }) => {
                  return (
                    <TouchableBlock
                      onPress={() =>
                        item.option == 'my_option' ? onMyOptionClick() : onAnyOptionClick()
                      }
                      style={styles.option}
                    >
                      <View>
                        <GradientText>{item.label}</GradientText>
                      </View>
                    </TouchableBlock>
                  )
                }}
              />
            </View>
          ) : (
            <View style={styles.bottom}>
              <Touchable onPress={onBurgerPress}>
                <Burger />
              </Touchable>

              <ChatInput ref={inputRef} value={userTextInput} onChangeText={setUserTextInput} />

              <Touchable>
                <Send />
              </Touchable>
            </View>
          )}
        </View>

        {showMyOptionModal && (
          <GameModal
            onClose={() => setShowMyOptionModal(false)}
            renderHeader={() => <Text>Enter your answer</Text>}
            renderBody={() => (
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: spacing.md }}>
                <ChatInput
                  // containerStyle={{ width: '100%' }}
                  ref={inputRef}
                  value={userTextInput}
                  onChangeText={setUserTextInput}
                />

                <Touchable>
                  <Send width={42} height={42} />
                </Touchable>
              </View>
            )}
          />
        )}
      </KeyboardAvoidingView>
    </View>
  )
}

export default ChatScreen
