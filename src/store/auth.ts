import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import { authService, GetUserResponse, RegisterRequest } from '@/api'
import { getDeviceId } from '@/constants'

type Error = 'network' | 'bad' | '500' | null

interface ChatStore {
  user: GetUserResponse | null
  login: () => void
  register: (_: RegisterRequest) => void
  error: Error

  authLoading: boolean
}

export const useAuthStore = create<ChatStore>()(
  persist(
    set => ({
      user: null,
      authLoading: false,
      error: null,

      login: async () => {
        set({ authLoading: true })
        try {
          const user = await authService.login({ deviceId: getDeviceId() })
          set({ user, authLoading: false, error: null })
        } catch (err: any) {
          const status = err?.response?.status
          if (!status) {
            set({ authLoading: false, error: 'network' })
          } else if (status === 400) {
            set({ authLoading: false, error: 'bad' })
          } else {
            set({ authLoading: false, error: '500' })
          }
        }
      },

      register: async data => {
        set({ authLoading: true })
        try {
          const user = await authService.register(data)
          set({ user, authLoading: false, error: null })
        } catch (err: any) {
          const status = err?.response?.status
          if (!status) {
            set({ authLoading: false, error: 'network' })
          } else if (status === 400) {
            set({ authLoading: false, error: 'bad' })
          } else {
            set({ authLoading: false, error: '500' })
          }
        }
      },
    }),
    {
      name: 'auth-storage',
    },
  ),
)
