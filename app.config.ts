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
  jsEngine: 'hermes',
  newArchEnabled: true,
  android: {
    package: 'com.bodya4000.rangeinproject',
    edgeToEdgeEnabled: false,
    softwareKeyboardLayoutMode: 'resize',
    adaptiveIcon: {
      foregroundImage: './assets/images/adaptive-icon.png',
      backgroundColor: '#000000',
    },
  },
  plugins: [
    'expo-router',
    [
      'expo-splash-screen',
      {
        image: './assets/images/splash-icon.png',
        imageWidth: 200,
        resizeMode: 'contain',
        backgroundColor: '#000',
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
    turboModules: true,
  },
}

export default config
