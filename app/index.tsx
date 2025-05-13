import { Text, View } from 'react-native'

import { GameButton } from '@/components/common/buttons/game-button/game-button'

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <GameButton />
    </View>
  )
}
