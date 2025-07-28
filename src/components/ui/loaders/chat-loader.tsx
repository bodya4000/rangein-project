// import LottieView from 'lottie-react-native'
import React from 'react'
import { ActivityIndicator, View } from 'react-native'

export const ChatLoader = () => {
  return (
    <View style={{ transform: [{ scale: 5 }] }}>
      {/* <LottieView
        source={require('@assets/animations/chat-loader.json')}
        autoPlay
        loop
        style={{ width: 40, height: 20 }}
      /> */}
      <ActivityIndicator />
    </View>
  )
}
