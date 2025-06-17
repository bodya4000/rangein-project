import { useQuery } from '@tanstack/react-query'

import { gameService } from '@/api/services'

export const useGameMessages = (gameId: number) => {
  return useQuery({
    queryKey: [],
    queryFn: () => gameService.getGameMessages(gameId),
  })
}
