import { useGameSetup } from '@/api/hooks'
import { BluredHeader, ImageBackgroundScreenContainer } from '@/components/ui'
import ChatScreen from '@/screens/home/game/chat-screen/chat-screen'
import { getDeviceId } from '@/utils'

import Background from '@assets/images/screens/screen_chat.png'

export default function Chat() {
  const { data: gameData } = useGameSetup({ userId: getDeviceId() })
  if (!gameData) return null

  return (
    <>
      <BluredHeader title={gameData.title} />
      <ImageBackgroundScreenContainer padding='md' background={Background}>
        <ChatScreen />
      </ImageBackgroundScreenContainer>
    </>
  )
}
