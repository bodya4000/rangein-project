import axios from 'axios'

import { API_URL } from '@/constants'

class GameService {
  async getGameInfo() {
    return (await axios.post(`${API_URL}/game/user/user-test-1`)).data
  }

  async getGameMessages(gameId: number) {
    return (await axios.post(`${API_URL}/game/messages/${gameId}`)).data
  }

  async sendMessage({ gameId, message }: { gameId: string; message: string }) {
    return (await axios.post(`${API_URL}/game/messages`, { gameId, message })).data
  }
}

export const gameService = new GameService()
