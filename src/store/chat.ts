import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import { GameMessage } from '@/api'

import { zustandStorage } from './storage'

interface ChatStore {
  typing: boolean
  setTyping: (_: boolean) => void

  userOption: string | null
  setUserOption: (_: string) => void

  messages: GameMessage[]
  setMessages: (_: GameMessage[]) => void
  addMessage: (_: GameMessage) => void

  options: string[]
  setOptions: (_: string[]) => void
}

export const useChatStore = create<ChatStore>()(
  persist(
    (set, get) => ({
      typing: false,
      setTyping: value => set({ typing: value }),

      messages: [],
      setMessages: messages => set({ messages }),
      addMessage: message => set({ messages: [message, ...get().messages] }),

      userOption: null,
      setUserOption: value => set({ userOption: value }),

      options: [],
      setOptions: options => set({ options }),
    }),
    {
      name: 'chat-store',
      storage: zustandStorage,
      partialize: ({ userOption, messages }) => ({
        userOption,
        messages,
      }),
    },
  ),
)
