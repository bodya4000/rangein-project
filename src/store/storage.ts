import { MMKV } from 'react-native-mmkv'
import { PersistStorage, StorageValue } from 'zustand/middleware'

import { StorageSchema } from '@/constants'

const mmkv = new MMKV()

export const zustandStorage: PersistStorage<any> = {
  setItem(key: string, value: any) {
    mmkv.set(key, JSON.stringify(value))
  },
  getItem(key: string): StorageValue<any> | Promise<StorageValue<any> | null> | null {
    const value = mmkv.getString(key)
    return value ? (JSON.parse(value) as StorageValue<any>) : null
  },
  removeItem(key: string) {
    mmkv.delete(key)
  },
}

export const storage = {
  setItem<K extends keyof StorageSchema>(key: K, value: StorageSchema[K]) {
    mmkv.set(key, JSON.stringify(value))
  },
  getItem<K extends keyof StorageSchema>(key: K): StorageSchema[K] | null {
    const raw = mmkv.getString(key)
    return raw ? JSON.parse(raw) : null
  },
  removeItem<K extends keyof StorageSchema>(key: K) {
    mmkv.delete(key)
  },
}
