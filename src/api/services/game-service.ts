import { API_URL } from '@/constants'

import { api } from './api'

export enum GameRole {
  SYSTEM_BACKEND = 'SYSTEM_BACKEND',
  STORYTELLER_AI = 'STORYTELLER_AI',
  DETECTIVE_ASSISTANT_AI = 'DETECTIVE_ASSISTANT_AI',
  DETECTIVE_USER = 'DETECTIVE_USER',
}

export type GameStory = {
  title: string
  parts: string[]
}

export type GameMessage = {
  messageId: string
  role: GameRole
  message: string
}

export type MessageData = {
  messages: GameMessage[]
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

export type SendMessageRequest = {
  gameId: string
  message: string
}

export type SendMessageResponse = GameMessage

export type GameSetupResponse = {
  gameId: string
  story: GameStory
  messageData: MessageData
  options: string[]
}

const BASE_URL = API_URL + '/games'

class GameService {
  async setupGameForUser({ userId }: GameSetupRequest) {
    return (await api.post<GameSetupResponse>(`${BASE_URL}/users/${userId}`)).data
  }

  async sendMessage({ gameId, message }: SendMessageRequest): Promise<GameMessage> {
    return (await api.post<SendMessageResponse>(`${BASE_URL}/messages`, { gameId, message })).data
  }
}

export const gameService = new GameService()
