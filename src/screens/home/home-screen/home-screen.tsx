import { View } from 'react-native'

import ToChatButton from '@/components/home/to-chat-button'
import ToProfileButton from '@/components/home/to-profile-button'
import ToStoryButton from '@/components/home/to-story-button'
import { GradientText } from '@/components/ui'

import { styles } from './home-screen.style'

const HomeScreen = () => {
  return (
    <>
      <GradientText txStyle='IR40' tx={'home.title'} style={styles.title} />
      <View style={styles.buttons_container}>
        <ToProfileButton />
        <ToStoryButton />
        <ToChatButton />
      </View>
    </>
  )
}

export default HomeScreen
