import { QueryClient } from '@tanstack/react-query'

export const API_URL = process.env.EXPO_PUBLIC_API_URL + '/api'

export enum QUERIES {
  GAME,
	USER
}

export const queryClient = new QueryClient()
