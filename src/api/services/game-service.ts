import { API_URL } from '@/constants/api'

import { api } from './api'

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
  justBeenDead: string[]
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
  async setupGameForUser({ userId }: GameSetupRequest) {
    return (await api.post<GameSetupResponse>(`${BASE_URL}/users/${userId}`)).data
  }

  async sendMessage({ gameId, message }: SendMessageRequest): Promise<SendMessageResponse> {
    return (await api.post<SendMessageResponse>(`${BASE_URL}/messages`, { gameId, message })).data
  }

  async fetchMessages({ gameId }: GameInfoRequest): Promise<MessageData> {
    return (await api.get<MessageData>(`${BASE_URL}/messages/${gameId}`)).data
  }
}

export const gameService = new GameService()
