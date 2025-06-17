import axios from 'axios'

import { API_URL } from '@/constants'

class GameService {
  async getGameInfo() {
    return (await axios.post(`${API_URL}/game/user/user-test-1`)).data
  }
}

export const gameService = new GameService()
