import { useFonts } from 'expo-font'
import { useEffect, useState } from 'react'
import DeviceInfo from 'react-native-device-info'
import SystemNavigationBar from 'react-native-system-navigation-bar'

import { colors, STORAGE_KEYS } from '@/constants'
import { storage } from '@/store'

export const useSetup = () => {
  const [navReady, setNavReady] = useState(false)
  const [deviceIdReady, setDeviceIdReady] = useState(false)
  const [fontsReady, setFontsReady] = useState(false)

  const [fontsLoaded] = useFonts({
    'Quintessential-Regular': require('@assets/fonts/Quintessential-Regular.ttf'),
  })

  useEffect(() => {
    SystemNavigationBar.setNavigationColor(colors.black).finally(() => {
      setNavReady(true)
    })
  }, [])

  useEffect(() => {
    const initDeviceId = async () => {
      let deviceId = storage.getItem(STORAGE_KEYS.DEVICE_ID)
      if (!deviceId) {
        deviceId = await DeviceInfo.getUniqueId()
        storage.setItem(STORAGE_KEYS.DEVICE_ID, deviceId)
      }
      setDeviceIdReady(true)
    }
    initDeviceId()
  }, [])

  useEffect(() => {
    if (fontsLoaded) {
      setFontsReady(true)
    }
  }, [fontsLoaded])

  return { ready: navReady && deviceIdReady && fontsReady }
}
