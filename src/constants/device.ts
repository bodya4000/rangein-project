import { Dimensions, Platform } from 'react-native'

import { storage } from '@/store'

import { STORAGE_KEYS } from './storage-keys'

export const IS_IOS = Platform.OS === 'ios'
export const IS_ANDROID = Platform.OS === 'android'
export const WINDOW_HEIGHT = Dimensions.get('window').height
export const WINDOW_WIDTH = Dimensions.get('window').width
export const HEADER_HEIGHT = 55

export const getDeviceId = (): string => {
  return storage.getItem(STORAGE_KEYS.DEVICE_ID) ?? ''
}
