import { QueryClient } from '@tanstack/react-query'

export const API_URL = process.env.EXPO_PUBLIC_API_URL + '/api/v1'

export enum QUERIES {
  GAME,
  USER,
  MESSAGES,
}

export const queryClient = new QueryClient()
