import { useEffect, useState } from 'react'
import { StatusBar, StatusBarStyle } from 'react-native'

import { colors } from '@/constants'

export type StatusBarContainerProps = {
  statusBarBackgroundColor?: string
  statusBarElementColor?: StatusBarStyle
}

const StatusBarContainer = (props: StatusBarContainerProps) => {
  const [ready, setReady] = useState(false)
  useEffect(() => {
    const timeout = setTimeout(() => setReady(true), 0)
    return () => clearTimeout(timeout)
  }, [])
  return (
    <>
      {ready && (
        <StatusBar
          barStyle={props.statusBarElementColor ?? 'light-content'}
          backgroundColor={props.statusBarBackgroundColor ?? colors.light_dark[1]}
        />
      )}
    </>
  )
}

export default StatusBarContainer
