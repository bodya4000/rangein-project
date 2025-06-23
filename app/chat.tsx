import { useGameInfo } from '@/api/hooks'
import { BluredHeader } from '@/components/ui'
import ScreenContainer from '@/components/ui/containers/screen-container/screen-container'
import { getDeviceId } from '@/constants'
import ChatScreen from '@/screens/chat-screen/chat-screen'

import Background from '@assets/images/screens/screen_chat.png'

export default function Chat() {
  const { data: gameData } = useGameInfo({ userId: getDeviceId() })

  if (!gameData) return null

  return (
    <>
      <BluredHeader title={gameData.story.title} />
      <ScreenContainer background={Background}>
        <ChatScreen />
      </ScreenContainer>
    </>
  )
}
