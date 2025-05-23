import { Dimensions, PixelRatio, Platform } from 'react-native'

const SCALE_FONT = PixelRatio.getFontScale()
export const IS_IOS = Platform.OS === 'ios'
export const WINDOW_HEIGHT = Dimensions.get('window').height
export const WINDOW_WIDTH = Dimensions.get('window').width

export const scaleFont = (fontSize: number): number => {
  return fontSize / SCALE_FONT
}
