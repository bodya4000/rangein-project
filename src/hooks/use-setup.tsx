import { useFonts } from 'expo-font'
import { useEffect, useState } from 'react'
import DeviceInfo from 'react-native-device-info'

import { STORAGE_KEYS } from '@/constants'
import { storage } from '@/store'

export const useSetup = () => {
  const [ready, setReady] = useState(false)

  const [fontsLoaded] = useFonts({
    'Quintessential-Regular': require('@assets/fonts/Quintessential-Regular.ttf'),
  })

  useEffect(() => {
    const initialize = async () => {
      let deviceId = storage.getItem(STORAGE_KEYS.DEVICE_ID)
      if (!deviceId) {
        deviceId = await DeviceInfo.getUniqueId()
        storage.setItem(STORAGE_KEYS.DEVICE_ID, deviceId)
      }
      if (fontsLoaded) {
        setReady(true)
      }
    }
    initialize()
  }, [fontsLoaded])

  return {
    ready,
  }
}
