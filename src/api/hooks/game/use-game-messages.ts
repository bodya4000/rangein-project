import { useQuery } from '@tanstack/react-query'

import { gameService } from '@/api/services'
import { QUERIES } from '@/constants'

export const useGameMessages = (gameId?: string) => {
  return useQuery({
    queryKey: [QUERIES.MESSAGES, gameId],
    queryFn: () => gameService.getGameMessages(gameId ?? ''),
    enabled: !!gameId,
  })
}
