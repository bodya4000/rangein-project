import { ChatModals } from '../modals'
import ChatBottomBody from './chat-bottom-body'
import ChatOptions from './chat-options/chat-options'

const ChatBottom = () => {
  return (
    <>
      <ChatOptions />
      <ChatBottomBody />
      <ChatModals />
    </>
  )
}

export default ChatBottom
