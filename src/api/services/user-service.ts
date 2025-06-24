import { API_URL } from '@/constants'

import { api } from './api'

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
    return (await api.post(`${API_URL}/users/${deviceId}`)).data
  }
}

export const userService = new UserService()
