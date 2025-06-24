import { useQuery } from '@tanstack/react-query'

import { gameService, GameSetupRequest } from '@/api/services'
import { QUERIES } from '@/constants'

export const useGameSetup = ({ userId }: GameSetupRequest) => {
  return useQuery({
    queryFn: () => gameService.setupGameForUser({ userId }),
    queryKey: [QUERIES.GAME],
    retry: 1,
    staleTime: 0,
    refetchOnWindowFocus: false,
  })
}
