import uuid from 'react-native-uuid'

import { GameMessage, GameRole } from '@/api'

export const newId = () => uuid.v4()
export const newUserMessage = (message: string): GameMessage => ({
  messageId: newId(),
  message,
  role: GameRole.DETECTIVE_USER,
})
