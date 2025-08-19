import { StatusBar, StatusBarStyle } from 'react-native'

export type StatusBarContainerProps = {
  statusBarBackgroundColor?: string
  statusBarElementColor?: StatusBarStyle
}

const StatusBarContainer = (props: StatusBarContainerProps) => {
  return (
    <>
      <StatusBar
        barStyle={props.statusBarElementColor ?? 'light-content'}
        backgroundColor={props.statusBarBackgroundColor ?? 'transparent'}
        translucent={true}
      />
    </>
  )
}

export default StatusBarContainer
