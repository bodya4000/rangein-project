import { create } from 'zustand'

interface ChatStore {
  typing: boolean
  setTyping: (_: boolean) => void
}

export const useChatStore = create<ChatStore>(set => ({
  typing: false,
  setTyping: (value: boolean) => set({ typing: value }),
}))
