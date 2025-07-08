import { useQuery } from '@tanstack/react-query'

import { gameService, GetMessagesRequest } from '@/api/services'
import { QUERIES } from '@/constants'

export const useMessages = ({ gameId }: GetMessagesRequest) => {
  return useQuery({
    queryFn: () => gameService.fetchMessages({ gameId }),
    queryKey: ['anu'],
    retry: 0,
    enabled: !!gameId,
  })
}
