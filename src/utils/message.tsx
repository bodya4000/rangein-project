import { GameMessage } from '@/api'

export const newId = () => `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`

export const newUserMessage = (message: string, username?: string): GameMessage => ({
  messageId: newId(),
  message,
  sender: username || 'PlAYER',
  colors: [],
})
