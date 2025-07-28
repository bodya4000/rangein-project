import { BlurView } from 'expo-blur'
import React, { ReactNode } from 'react'
import { Modal, ModalProps, StyleProp, ViewStyle } from 'react-native'

import { styles } from './blur-modal.style'

interface DarkModalProps extends Partial<ModalProps> {
  children: ReactNode
  blurIntensity?: number
  blurTint?: 'light' | 'dark' | 'default'
  overlayStyle?: StyleProp<ViewStyle>
}

export const BlurModal = ({
  children,
  blurIntensity = 50,
  blurTint = 'dark',
  overlayStyle,
  onRequestClose,
  ...rest
}: DarkModalProps) => {
  return (
    <Modal transparent onRequestClose={onRequestClose} animationType='fade' {...rest}>
      <BlurView intensity={blurIntensity} tint={blurTint} style={[styles.overlay, overlayStyle]}>
        {children}
      </BlurView>
    </Modal>
  )
}
