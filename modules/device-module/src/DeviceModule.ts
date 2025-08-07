import { NativeModule, requireNativeModule } from 'expo'

declare class DeviceModule extends NativeModule {
  DEVICE_ID: () => string
}

export default requireNativeModule<DeviceModule>('DeviceModule')
