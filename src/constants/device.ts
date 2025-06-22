import { Dimensions, Platform } from 'react-native'

export const IS_IOS = Platform.OS === 'ios'
export const WINDOW_HEIGHT = Dimensions.get('window').height
export const WINDOW_WIDTH = Dimensions.get('window').width
