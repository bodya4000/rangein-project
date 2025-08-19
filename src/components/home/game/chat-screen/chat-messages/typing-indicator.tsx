import { colors } from '@/constants'
import { useChatStore } from '@/store'

import { ReceivedMessage } from './messages/received-message/received-message'

export const TypingIndicator = () => {
  const typing = useChatStore(state => state.typing)
  if (typing) return <ReceivedMessage colors={colors.gradientMetal4} typing />
}
