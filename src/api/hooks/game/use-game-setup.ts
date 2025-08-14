import { useQuery } from '@tanstack/react-query'

import { gameService, GameSetupRequest } from '@/api/services'
import { QUERIES } from '@/constants/api'

const FIVE_MINUTES = 1000 * 60 * 5

export const useGameSetup = ({ userId }: GameSetupRequest, enabled: boolean = true) => {
  return useQuery({
    queryFn: () => gameService.setupGameForUser({ userId }),
    queryKey: [QUERIES.GAME],
    retry: 0,
    staleTime: FIVE_MINUTES,
    enabled,
  })
}
