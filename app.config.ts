import path from 'path'

import { ExpoConfig } from '@expo/config'
import dotenv from 'dotenv'

import 'dotenv/config'

const envFile = process.env.NODE_ENV ? `env/.env.${process.env.NODE_ENV}` : `env/.env`
dotenv.config({ path: path.join(__dirname, envFile) })

const config: ExpoConfig = {
  name: 'rangein-project',
  slug: 'rangein-project',
  version: '1.0.0',
  orientation: 'portrait',
  icon: './assets/images/icon.png',
  scheme: 'rangeinproject',
  userInterfaceStyle: 'automatic',
  newArchEnabled: true,
  ios: {
    supportsTablet: true,
    bundleIdentifier: 'com.bodya4000.rangein-project',
  },
  android: {
    adaptiveIcon: {
      foregroundImage: './assets/images/adaptive-icon.png',
      backgroundColor: '#ffffff',
    },
    edgeToEdgeEnabled: true,
    package: 'com.bodya4000.rangeinproject',
  },
  web: {
    bundler: 'metro',
    output: 'static',
    favicon: './assets/images/favicon.png',
  },
  plugins: [
    [
      'expo-image-picker',
      {
        photosPermission: 'The app accesses your photos to let you share them with your friends.',
      },
    ],
    'expo-router',
    [
      'expo-splash-screen',
      {
        image: './assets/images/splash-icon.png',
        imageWidth: 200,
        resizeMode: 'contain',
        backgroundColor: '#ffffff',
      },
    ],
    [
      'expo-font',
      {
        fonts: ['./assets/fonts/Quintessential-Regular.ttf'],
      },
    ],
  ],
  experiments: {
    typedRoutes: true,
  },
}

export default config
