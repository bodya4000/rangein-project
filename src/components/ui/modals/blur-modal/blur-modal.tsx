import React, { ReactNode } from 'react'
import { Modal, ModalProps, Pressable, StyleProp, ViewStyle } from 'react-native'

import { styles } from './blur-modal.style'

interface DarkModalProps extends Partial<ModalProps> {
  children: ReactNode
  blurIntensity?: number
  blurTint?: 'light' | 'dark' | 'default'
  overlayStyle?: StyleProp<ViewStyle>
}

export const BlurModal = ({ children, onRequestClose, ...rest }: DarkModalProps) => {
  return (
    <Modal
      transparent={true}
      visible={true}
      animationType='none'
      onRequestClose={onRequestClose}
      navigationBarTranslucent
      statusBarTranslucent
      style={{ backgroundColor: 'red' }}
      {...rest}
    >
      <Pressable style={styles.overlay} onPress={onRequestClose}>
        {children}
      </Pressable>
    </Modal>
  )
}
