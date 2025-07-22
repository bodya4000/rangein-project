import { useGameSetup } from '@/api/hooks'
import { BluredHeader } from '@/components/ui'
import ScreenContainer from '@/components/ui/containers/screen-container/screen-container'
import ChatScreen from '@/screens/chat-screen/chat-screen'
import { getDeviceId } from '@/utils'

import Background from '@assets/images/screens/screen_chat.png'

export default function Chat() {
  const { data: gameData } = useGameSetup({ userId: getDeviceId() })
  if (!gameData) return null

  return (
    <>
      <BluredHeader title={gameData.title} />
      <ScreenContainer type='fullscreen' background={Background}>
        <ChatScreen />
      </ScreenContainer>
    </>
  )
}
