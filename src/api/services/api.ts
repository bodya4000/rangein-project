import { log } from 'console'

import axios from 'axios'

import { API_URL } from '@/constants/api'

export const api = axios.create({
  baseURL: API_URL,
  // timeout: 5000,
})

if (process.env.EXPO_PUBLIC_DEBUG === 'true') {
  api.interceptors.response.use(
    response => {
      console.log(
        '[API RESPONSE]',
        JSON.stringify(
          {
            url: response.config.url,
            method: response.config.method,
            status: response.status,
            data: response.data,
          },
          null,
          2,
        ),
      )
      return response
    },
    error => {
      console.error('[API ERROR]', {
        url: error.config?.url,
        method: error.config?.method,
        message: error.message,
        data: error.response?.data,
      })
      return Promise.reject(error)
    },
  )
}
