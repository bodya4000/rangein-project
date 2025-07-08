import { imageColors } from '@/constants'

export const generateRandomGradientColors = () => {
  const keys = Object.keys(imageColors) as (keyof typeof imageColors)[]
  const random = Math.floor(Math.random() * keys.length)
  return imageColors[keys[random]]
}
