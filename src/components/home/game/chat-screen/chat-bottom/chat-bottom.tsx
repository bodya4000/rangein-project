import { useSendMessageFlow } from '@/hooks/home/game/chat/use-send-message-flow'

import { ChatModals } from '../modals'
import ChatBottomBody from './chat-bottom-body'
import ChatOptions from './chat-options/chat-options'

const ChatBottom = () => {
  const { handleSendMessage } = useSendMessageFlow()

  return (
    <>
      <ChatOptions handleSendMessage={handleSendMessage} />
      <ChatBottomBody handleSendMessage={handleSendMessage} />
      <ChatModals />
    </>
  )
}

export default ChatBottom
