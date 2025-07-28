import { PixelRatio } from 'react-native'

const SCALE_FONT = PixelRatio.getFontScale()

export const scaleFont = (fontSize: number): number => {
  return fontSize / SCALE_FONT
}

export const isStringEmpty = (str: string) => str.replace(/\s/g, '') === ''
