import { Text, View } from 'react-native'

import { PrimaryButton } from '@/components/common/buttons'
import { GameModal } from '@/components/common/modals'

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <PrimaryButton />
      {/* <GameModal /> */}
    </View>
  )
}
