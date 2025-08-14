import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import { GameMessage, GameResult, SendMessageResponse } from '@/api'

import { zustandStorage } from './storage'

interface ChatStore {
  gameId: string | null
  options: string[]
  setOptions: (_: string[]) => void
  initGame: (_: string, __: string[]) => void

  typing: boolean
  setTyping: (_: boolean) => void

  userOption: string | null
  setUserOption: (_: string) => void

  messages: GameMessage[]
  setMessages: (_: GameMessage[]) => void
  addMessage: (_: GameMessage) => void

  newMessages: GameMessage[]
  setNewMessages: (_: GameMessage[]) => void
  popNewMessages: () => void

  showMyOptionModal: boolean
  setShowMyOptionModal: (_: boolean) => void
  showOptions: boolean
  setShowOptions: (_: boolean) => void

  gameResult: { message: string; score: GameResult } | null
  justBeenDead: string | null
  setJustBeenDead: (_: string | null) => void

  // flow actions
  onSendMessage: (_: GameMessage) => void
  onSuccessfullyMessageSent: (_: SendMessageResponse) => void
  reset: () => void
}

export const useChatStore = create<ChatStore>()(
  persist<ChatStore>(
    (set, get) => ({
      gameId: null,
      options: [],
      setOptions: options => set({ options }),
      initGame: (gameId, options) => set({ gameId, options }),

      typing: false,
      setTyping: value => set({ typing: value }),

      messages: [],
      setMessages: messages => set({ messages }),
      addMessage: message => set({ messages: [message, ...get().messages] }),

      newMessages: [],
      setNewMessages: newMessages => set({ newMessages }),
      popNewMessages: () =>
        set(state => {
          if (state.newMessages.length > 0) {
            const message = state.newMessages[0]
            return {
              newMessages: state.newMessages.slice(1),
              messages: [message, ...state.messages],
            }
          }
          return {}
        }),

      userOption: null,
      setUserOption: value => set({ userOption: value }),

      showMyOptionModal: false,
      setShowMyOptionModal: showMyOptionModal => {
        set({ showMyOptionModal })
      },
      showOptions: false,
      setShowOptions(showOptions) {
        set({ showOptions })
      },

      gameResult: null,
      justBeenDead: null,
      setJustBeenDead: value => set({ justBeenDead: value }),

      // flow actions
      onSendMessage: message =>
        set({
          messages: [message, ...get().messages],
          typing: true,
          showOptions: false,
          showMyOptionModal: false,
        }),
      onSuccessfullyMessageSent: ({
        messages: newMessages,
        options,
        justBeenDead,
        finished,
        score,
        summary,
      }) => {
        set({
          newMessages,
          options,
          justBeenDead,
          gameResult: finished ? { message: summary, score: score ?? 0 } : null,
          typing: false,
        })
      },
      reset: () =>
        set({
          gameId: null,
          options: [],
          typing: false,
          userOption: null,
          messages: [],
          newMessages: [],
          showMyOptionModal: false,
          showOptions: false,
          gameResult: null,
          justBeenDead: null,
        }),
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
