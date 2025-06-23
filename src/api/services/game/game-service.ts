import axios from 'axios'

import { GameInfoRequest } from '@/api/types'
import { API_URL } from '@/constants'

class GameService {
  async getGameInfo(data: GameInfoRequest) {
    return (await axios.post(`${API_URL}/game/user/${data.userId}`)).data
  }

  async getGameMessages(gameId: string) {
    return (await axios.get(`${API_URL}/game/messages/${gameId}`)).data
  }

  async sendMessage({ gameId, message }: { gameId: string; message: string }) {
    return (await axios.post(`${API_URL}/game/messages`, { gameId, message })).data
  }
}

export const gameService = new GameService()
