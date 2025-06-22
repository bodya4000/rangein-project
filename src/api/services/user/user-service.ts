import axios from 'axios'

import { PostUserInfoRequest, PostUserInfoResponse } from '@/api/types'
import { API_URL } from '@/constants'

class UserService {
  async getUserInfo({ deviceId }: PostUserInfoRequest): Promise<PostUserInfoResponse> {
    return (await axios.post(`${API_URL}/user/${deviceId}`)).data
  }
}

export const userService = new UserService()
