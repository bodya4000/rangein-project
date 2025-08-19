import { useChatStore } from '@/store'

import { Continue } from '../icons'
import HomeButton from './home-button'

const ToChatButton = () => {
  const gameId = useChatStore(state => state.gameId)
  return <HomeButton disabled={!gameId} icon={<Continue />} href={'/home/game/chat'} />
}

export default ToChatButton
