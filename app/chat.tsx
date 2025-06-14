import { BluredHeader } from '@/components/ui'
import ScreenContainer from '@/components/ui/containers/screen-container/screen-container'
import ChatScreen from '@/screens/chat-screen/chat-screen'

import Background from '@assets/images/screens/screen_chat.png'

export default function Home() {
  return (
    <>
      <BluredHeader txTitle='Shore of Whispers' />
      <ScreenContainer background={Background}>
        <ChatScreen />
      </ScreenContainer>
    </>
  )
}
