import axios from 'axios'

import { API_URL } from '@/constants'

export type GetUserRequest = {
  deviceId: string
}

export type GetUserResponse = {
  userId: string
  gameId: string

  username: string
  sex: string
  age: number
}

class UserService {
  async getUserInfo({ deviceId }: GetUserRequest): Promise<GetUserResponse> {
    return (await axios.post(`${API_URL}/user/${deviceId}`)).data
  }
}

export const userService = new UserService()
