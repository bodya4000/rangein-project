import { useFocusEffect } from 'expo-router'
import React, { ReactNode } from 'react'
import { StatusBar } from 'react-native'
import SystemNavigationBar from 'react-native-system-navigation-bar'

import { colors } from '@/constants'

interface Props {
  children: ReactNode
  type?: 'fullscreen' | 'noTab' | 'noStatus' | 'default'
  navBarColor?: string
}

export function ScreenLayoutContainer({
  children,
  navBarColor = colors.dark,
  type = 'default',
}: Props) {
  useFocusEffect(
    React.useCallback(() => {
      switch (type) {
        case 'fullscreen': {
          SystemNavigationBar.fullScreen()
          StatusBar.setHidden(true)
          break
        }
        case 'noStatus': {
          SystemNavigationBar.navigationShow()
          StatusBar.setHidden(true)
          break
        }
        case 'noTab': {
          SystemNavigationBar.navigationHide()
          StatusBar.setHidden(false)
          break
        }
        default: {
          SystemNavigationBar.navigationShow()
          StatusBar.setHidden(false)
          break
        }
      }
    }, [type]),
  )

  useFocusEffect(
    React.useCallback(() => {
      SystemNavigationBar.setNavigationColor(navBarColor)
    }, [navBarColor]),
  )

  return <>{children}</>
}
