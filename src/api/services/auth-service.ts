import { API_URL } from '@/constants/api'
import { Sex } from '@/types'

import { GetUserRequest, GetUserResponse } from './user-service'
import { ApiError } from '../types'

export type LoginRequest = GetUserRequest
export type LoginResponse = GetUserResponse

export type RegisterRequest = {
  deviceId: string
  username: string
  age: number
  sex: Sex
  // avatarColors: string[]
}

class AuthService {
  async login({ deviceId }: LoginRequest): Promise<LoginResponse> {
    const response = await fetch(`${API_URL}/auth/login/${deviceId}`, {
      method: 'POST',
    })

    if (!response.ok) {
      throw new ApiError('Login failed', response.status)
    }

    return (await response.json()) as LoginResponse
  }

  async register(data: RegisterRequest): Promise<LoginResponse> {
    const response = await fetch(`${API_URL}/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    if (!response.ok) {
      throw new ApiError('Register failed', response.status)
    }

    return (await response.json()) as LoginResponse
  }
}

export const authService = new AuthService()
