import { useMutation } from '@tanstack/react-query'

import { gameService } from '@/api/services'
import { QUERIES } from '@/constants'

export const useSendMessage = () => {
  const data = useMutation({
    mutationKey: [QUERIES.MESSAGES],
    mutationFn: (data: { gameId: string; message: string }) => gameService.sendMessage(data),
  })

  return data
}
