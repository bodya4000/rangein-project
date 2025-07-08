import { STORAGE_KEYS } from '@/constants'
import { storage } from '@/store/storage'

export const getDeviceId = (): string => {
  return storage.getItem(STORAGE_KEYS.DEVICE_ID) ?? ''
}
