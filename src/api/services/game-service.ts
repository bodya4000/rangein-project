import { API_URL } from '@/constants/api'

import { ApiError } from '../types'

export type GameMessage = {
  messageId: string
  sender: string
  message: string
  colors: string[]
}

export type MessageData = {
  content: GameMessage[]
  pageNumber: number
  pageSize: number
  totalPages: number
  totalElements: number
}

export type GameSetupRequest = {
  userId: string
}

export type GameInfoRequest = {
  gameId: string
}

export type GetMessagesRequest = {
  gameId: string
}

export type GetMessagesResponse = {
  messageId: string
  sender: string
  message: string
}

export type SendMessageRequest = {
  gameId: string
  message: string
}

export type SendMessageResponse = {
  messages: GameMessage[]
  options: string[]
  listOfDead: string[]
  justBeenDead: string
  finished: boolean
  score: GameResult | null
  summary: string
}

export type GameSetupResponse = {
  gameId: string
  title: string
  parts: string[]
  messageData: MessageData
  options: string[]
}

export type GameResult = 0 | 1 | 2 | 3

const BASE_URL = API_URL + '/games'

class GameService {
  async setupGameForUser({ userId }: GameSetupRequest): Promise<GameSetupResponse> {
    const response = await fetch(`${BASE_URL}/users/${userId}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    })

    if (!response.ok) {
      throw new ApiError('Setup game failed', response.status)
    }

    return (await response.json()) as GameSetupResponse
  }

  async sendMessage({ gameId, message }: SendMessageRequest): Promise<SendMessageResponse> {
    const response = await fetch(`${BASE_URL}/messages`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ gameId, message }),
    })

    if (!response.ok) {
      throw new ApiError('Send message failed', response.status)
    }

    return (await response.json()) as SendMessageResponse
  }

  async fetchMessages({ gameId }: GameInfoRequest): Promise<MessageData> {
    const response = await fetch(`${BASE_URL}/messages/${gameId}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })

    if (!response.ok) {
      throw new ApiError('Fetch message failed', response.status)
    }

    return (await response.json()) as MessageData
  }
}

export const gameService = new GameService()
