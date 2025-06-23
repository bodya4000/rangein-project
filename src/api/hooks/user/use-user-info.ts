import { useQuery } from '@tanstack/react-query'

import { userService } from '@/api/services'
import { PostUserInfoRequest } from '@/api/types'
import { QUERIES } from '@/constants'

export const useUserInfo = (postUserInfoRequest: PostUserInfoRequest) => {
  return useQuery({
    queryKey: [QUERIES.USER],
    queryFn: () => userService.getUserInfo(postUserInfoRequest),
  })
}
