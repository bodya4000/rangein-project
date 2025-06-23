import { useQuery } from '@tanstack/react-query'

import { gameService } from '@/api/services'
import { GameInfoRequest } from '@/api/types'
import { QUERIES } from '@/constants'

export const useGameInfo = ({ userId }: GameInfoRequest) => {
  return useQuery({
    queryKey: [QUERIES.GAME],
    queryFn: () => gameService.getGameInfo({ userId }),
    enabled: !!userId,
  })
}
