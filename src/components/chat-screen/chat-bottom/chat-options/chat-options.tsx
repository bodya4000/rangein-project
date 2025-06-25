import { useMemo } from 'react'
import { FlatList, View } from 'react-native'

import { Cross } from '@/components/icons'
import { GradientText, Touchable, TouchableBlock } from '@/components/ui'
import { useChatStore } from '@/store'

import { styles } from './chat-options.style'

interface Props {
  options: string[]
  onCrossPress: () => void
  onAnyOptionClick: (_: string) => void
  onMyOptionClick: () => void
}

const ChatOptions = ({ options, onCrossPress, onMyOptionClick, onAnyOptionClick }: Props) => {
  const userOption = useChatStore(state => state.userOption)
  const extendedOptions = useMemo(() => {
    if (userOption) return [...options, userOption, 'My option']
    return [...options, 'My option']
  }, [options, userOption])

  const onBlockPress = (option: string) => {
    if (option == 'My Option') {
      onMyOptionClick()
    } else {
      onAnyOptionClick(option)
    }
  }
  return (
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
            <TouchableBlock onPress={() => onBlockPress(item)} style={styles.option}>
              <View>
                <GradientText>{item}</GradientText>
              </View>
            </TouchableBlock>
          )
        }}
      />
    </View>
  )
}

export default ChatOptions
