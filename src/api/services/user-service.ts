import { API_URL } from '@/constants/api'
import { Sex } from '@/types'

import { api } from './api'

export type GetUserRequest = {
  deviceId: string
}

export type GetUserResponse = {
  userId: string
  gameId: string

  username: string
  sex: Sex
  age: number
}

export type UpdateUserResponse = GetUserResponse

export type UpdateUserRequest = {
  path: string
  update: UpdateUserData
}

export interface UpdateUserData {
  username?: string
  sex?: Sex
  age?: number
}

class UserService {
  async getUserInfo({ deviceId }: GetUserRequest): Promise<GetUserResponse> {
    return (await api.post(`${API_URL}/users/${deviceId}`)).data
  }

  async updateUser(request: UpdateUserRequest): Promise<UpdateUserResponse> {
    return (await api.patch(`${API_URL}/users/${request.path}`, request.update)).data
  }
}

export const userService = new UserService()
