import { FlatList, View } from 'react-native'

import { Cross } from '@/components/icons'
import { GradientText, Touchable, TouchableBlock } from '@/components/ui'

import { styles } from './chat-options.style'

const optionsData = [
  { id: 1, option: 'option', label: '"Option"' },
  { id: 2, option: 'option', label: '"Option"' },
  { id: 3, option: 'option', label: '"Option"' },
  { id: 4, option: 'option', label: '"Option"' },
  { id: 5, option: 'my_option', label: 'My Option' },
]

interface Props {
  onCrossPress: () => void
  onAnyOptionClick: () => void
  onMyOptionClick: () => void
}

const ChatOptions = ({ onCrossPress, onMyOptionClick, onAnyOptionClick }: Props) => {
  return (
    <View style={styles.optionsContainer}>
      <Touchable onPress={onCrossPress}>
        <Cross style={styles.cross} />
      </Touchable>
      <FlatList
        data={optionsData}
        keyExtractor={({ id }) => id.toString()}
        scrollEnabled={false}
        renderItem={({ item }) => {
          return (
            <TouchableBlock
              onPress={() => (item.option == 'my_option' ? onMyOptionClick() : onAnyOptionClick())}
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
  )
}

export default ChatOptions
