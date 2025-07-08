import uuid from 'react-native-uuid'

import { GameMessage } from '@/api'

export const newId = () => uuid.v4()
export const newUserMessage = (message: string, username?: string): GameMessage => ({
  messageId: newId(),
  message,
  sender: username || 'PlAYER',
})
