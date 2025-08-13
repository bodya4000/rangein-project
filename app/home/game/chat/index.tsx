import { useGameSetup } from '@/api/hooks'
import { DefaultScreenContainer } from '@/components/ui'
import { BluredHeader } from '@/components/ui/headers/blured-header/blured-header'
import { colors } from '@/constants'
import ChatScreen from '@/screens/home/game/chat/chat-screen'
import { getDeviceId } from '@/utils'

import Background from '@assets/images/screens/screen_chat.webp'

export default function Chat() {
  const { data: gameData } = useGameSetup({ userId: getDeviceId() })
  if (!gameData) return null

  return (
    <>
      <BluredHeader title={gameData.title} />
      <DefaultScreenContainer
        padding='md'
        background={Background}
        statusBarBackgroundColor={colors.black}
      >
        <ChatScreen />
      </DefaultScreenContainer>
    </>
  )
}
