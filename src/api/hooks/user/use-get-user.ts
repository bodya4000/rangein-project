import { UseMutationOptions, useQuery } from '@tanstack/react-query'

import { GetUserRequest, userService } from '@/api/services'
import { QUERIES } from '@/constants/api'

export const useGetUser = (
  getUserRequest: GetUserRequest,
  options?: UseMutationOptions<any, unknown, void>,
) => {
  return useQuery({
    queryKey: [QUERIES.USER],
    queryFn: () => userService.getUserInfo(getUserRequest),
    ...options,
  })
}
