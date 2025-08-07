import React, { ReactNode } from 'react'
import { Modal, ModalProps, Pressable, StyleProp, ViewStyle } from 'react-native'

import { styles } from './blur-modal.style'

interface DarkModalProps extends Partial<ModalProps> {
  children: ReactNode
  blurIntensity?: number
  blurTint?: 'light' | 'dark' | 'default'
  overlayStyle?: StyleProp<ViewStyle>
}

export const BlurModal = ({
  children,
  blurIntensity = 500,
  blurTint = 'dark',
  overlayStyle,
  onRequestClose,
  ...rest
}: DarkModalProps) => {
  // useEffect(() => {
  //   SystemNavigationBar.fullScreen()
  //   StatusBar.setHidden(true)
  // }, [])
  return (
    <Modal
      transparent={true}
      visible={true}
      animationType='none'
      onRequestClose={onRequestClose}
      style={{ backgroundColor: 'red' }}
      {...rest}
    >
      <Pressable style={styles.overlay} onPress={onRequestClose}>
        {children}
        {/* <BlurView intensity={blurIntensity} tint={blurTint} style={[styles.overlay, overlayStyle]}> */}
      </Pressable>
    </Modal>
  )
}
