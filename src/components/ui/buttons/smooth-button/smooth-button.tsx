import { ButtonProps, Pressable, TouchableOpacity } from 'react-native'

import { colors } from '@/constants'
import { TxKeyPath } from '@/i18n/react-i18next'

import { styles } from './smooth-button.style'
import { Text } from '../../text'

interface Props extends Partial<ButtonProps> {
  txTitle: TxKeyPath
}

export const SmoothButton = ({ txTitle, ...props }: Props) => {
  return (
    <TouchableOpacity {...props} style={styles.container}>
      <Text txStyle='IB20' color={colors.white} tx={txTitle} />
    </TouchableOpacity>
  )
}
