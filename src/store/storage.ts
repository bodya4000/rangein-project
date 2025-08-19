import AsyncStorage from '@react-native-async-storage/async-storage'
import { PersistStorage, StorageValue } from 'zustand/middleware'

import { StorageSchema } from '@/constants'

// const mmkv = new MMKV()

export const zustandStorage: PersistStorage<any> = {
  setItem(key: string, value: any) {
    AsyncStorage.setItem(key, JSON.stringify(value))
  },
  async getItem(key: string): Promise<StorageValue<any> | null> {
    const value = await AsyncStorage.getItem(key)
    return value ? (JSON.parse(value) as StorageValue<any>) : null
  },
  removeItem(key: string) {
    AsyncStorage.removeItem(key)
  },
}

export const storage = {
  setItem<K extends keyof StorageSchema>(key: K, value: StorageSchema[K]) {
    AsyncStorage.setItem(key, JSON.stringify(value))
  },
  async getItem<K extends keyof StorageSchema>(key: K): Promise<StorageSchema[K] | null> {
    const raw = await AsyncStorage.getItem(key)
    return raw ? JSON.parse(raw) : null
  },
  removeItem<K extends keyof StorageSchema>(key: K) {
    AsyncStorage.removeItem(key)
  },
}
