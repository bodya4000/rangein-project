import { useRouter } from 'expo-router'
import { useEffect, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { FlatList, View } from 'react-native'

import { Cross } from '@/components/icons'
import { GradientText, Touchable, TouchableBlock } from '@/components/ui'
import { useSendMessageFlow } from '@/hooks/home/game/chat/use-send-message-flow'
import { useChatStore } from '@/store'

import { styles } from './chat-options.style'

const ChatOptions = () => {
  const { t } = useTranslation()
  const router = useRouter()

  const options = useChatStore(state => state.options)
  const userOption = useChatStore(state => state.userOption)
  const showOptions = useChatStore(state => state.showOptions)
  const gameId = useChatStore(state => state.gameId)
  const setShowOptions = useChatStore(state => state.setShowOptions)

  const extendedOptions: string[] = useMemo(() => {
    if (!options && !userOption) return [t('game.chat.createOption')]
    if (!options && userOption) return [userOption, t('game.chat.createOption')]
    return [...options, userOption, t('game.chat.createOption')].filter(
      (opt): opt is string => opt !== null,
    )
  }, [options, userOption])

  const { handleSendMessage } = useSendMessageFlow()

  useEffect(() => {
    return () => {
      showOptions && setShowOptions(false)
    }
  }, [showOptions, extendedOptions])

  if (!showOptions) return

  const onCrossPress = () => setShowOptions(false)
  const onAnyOptionClick = (option: string) => {
    if (gameId) handleSendMessage({ message: option })
  }

  const onBlockPress = (option: string) => {
    if (option.toLocaleLowerCase() == t('game.chat.createOption').toLocaleLowerCase()) {
      setShowOptions(false)
      router.push('/home/game/chat/option-modal')
    } else {
      onAnyOptionClick(option)
    }
  }

  const isMyOption = (option: string) => {
    return option.toLocaleLowerCase() === t('game.chat.createOption').toLocaleLowerCase()
  }

  return (
    <View style={styles.optionsWrapper}>
      <View style={styles.optionsContainer}>
        <Touchable onPress={onCrossPress}>
          <Cross style={styles.cross} />
        </Touchable>
        <FlatList
          data={extendedOptions}
          keyExtractor={item => item}
          scrollEnabled={false}
          renderItem={({ item }) => {
            return (
              <TouchableBlock
                onPress={() => onBlockPress(item)}
                style={[styles.option, isMyOption(item) && styles.myOption]}
              >
                <GradientText>
                  {isMyOption(item) ? t('game.chat.createOption') : `"${item}"`}
                </GradientText>
              </TouchableBlock>
            )
          }}
        />
      </View>
    </View>
  )
}

export default ChatOptions
