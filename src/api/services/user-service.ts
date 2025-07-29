import { API_URL } from '@/constants/api'
import { Sex } from '@/types'

import { ApiError } from '../types'

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
    const response = await fetch(`${API_URL}/users/${deviceId}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    })

    if (!response.ok) {
      throw new Error(`Get user info failed with status ${response.status}`)
    }

    return (await response.json()) as GetUserResponse
  }

  async updateUser(request: UpdateUserRequest): Promise<UpdateUserResponse> {
    const response = await fetch(`${API_URL}/users/${request.path}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(request.update),
    })

    if (!response.ok) {
      throw new ApiError('Update user failed', response.status)
    }

    return (await response.json()) as UpdateUserResponse
  }
}

export const userService = new UserService()
