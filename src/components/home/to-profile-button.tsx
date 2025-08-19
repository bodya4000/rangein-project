import { Profile } from '../icons'
import HomeButton from './home-button'

const ToProfileButton = () => {
  return <HomeButton icon={<Profile />} href={'/profile'} />
}

export default ToProfileButton
