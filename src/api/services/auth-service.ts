import { API_URL } from '@/constants'
import { Sex } from '@/types'

import { api } from './api'
import { GetUserRequest, GetUserResponse } from './user-service'

export type LoginRequest = GetUserRequest
export type LoginResponse = GetUserResponse

export type RegisterRequest = {
  deviceId: string
  username: string
  age: number
  sex: Sex
  avatarColors: string[]
}

class AuthService {
  async login({ deviceId }: LoginRequest): Promise<LoginResponse> {
    return (await api.post(`${API_URL}/auth/login/${deviceId}`)).data
  }

  async register(data: RegisterRequest): Promise<LoginResponse> {
    return (await api.post(`${API_URL}/auth/register`, data)).data
  }
}

export const authService = new AuthService()
