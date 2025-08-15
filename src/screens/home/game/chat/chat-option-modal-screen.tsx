import { useRouter } from 'expo-router'

import { ChatModal } from '@/components/home/game/chat-screen/modals/chat-modal/chat-modal'
import { useSendMessageFlow } from '@/hooks/home/game/chat/use-send-message-flow'

export const ChatOptionModalScreen = () => {
  const router = useRouter()

  const { handleSendMessage } = useSendMessageFlow()

  return <ChatModal handleSendMessage={handleSendMessage} onClose={router.back} />
}

ChatOptionModalScreen.displayName = 'ChatModal'
