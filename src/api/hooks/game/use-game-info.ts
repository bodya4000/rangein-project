import { useQuery } from '@tanstack/react-query'

import { gameService } from '@/api/services'

export const useGameInfo = () => {
  return useQuery({
    queryKey: [],
    queryFn: () => gameService.getGameInfo(),
  })
}
