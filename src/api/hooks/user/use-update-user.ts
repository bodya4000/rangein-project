import { useMutation, UseMutationOptions } from '@tanstack/react-query'

import { UpdateUserRequest, userService } from '@/api/services'
import { QUERIES, queryClient } from '@/constants'

export const useUpdateUser = (options?: UseMutationOptions<any, unknown, UpdateUserRequest>) => {
  return useMutation<any, unknown, UpdateUserRequest>({
    mutationFn: (request: UpdateUserRequest) => userService.updateUser(request),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERIES.USER] })
    },
    ...options,
  })
}
