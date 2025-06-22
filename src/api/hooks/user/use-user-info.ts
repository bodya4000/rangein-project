import { useQuery } from '@tanstack/react-query'

import { userService } from '@/api/services'
import { PostUserInfoRequest } from '@/api/types'

export const useGameInfo = (postUserInfoRequest: PostUserInfoRequest) => {
  return useQuery({
    queryKey: [],
    queryFn: () => userService.getUserInfo(postUserInfoRequest),
  })
}
