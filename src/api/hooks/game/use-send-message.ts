import { useMutation } from '@tanstack/react-query'

import { gameService } from '@/api/services'
import { QUERIES, queryClient } from '@/constants'

export const useSendMessage = () => {
  const data = useMutation({
    mutationFn: (data: { gameId: string; message: string }) => gameService.sendMessage(data),
    onSuccess: (_, { gameId }) => {
      queryClient.invalidateQueries({ queryKey: [QUERIES.MESSAGES] })
    },
  })

  return data
}
