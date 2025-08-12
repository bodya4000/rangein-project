import { useFonts } from 'expo-font'
import { useEffect, useState } from 'react'

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
    if (!fontsLoaded) return

    const initNavigationBar = async () => {
      try {
        setNavReady(true)
      } catch (e) {
        console.warn('Navigation bar setup failed', e)
        setNavReady(true)
      }
    }

    initNavigationBar()
    setFontsReady(true)
  }, [fontsLoaded])

  return {
    ready: navReady && deviceIdReady && fontsReady,
  }
}
