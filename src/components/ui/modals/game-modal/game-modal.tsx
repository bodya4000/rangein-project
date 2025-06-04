import { BlurView } from 'expo-blur'
import React, { JSX } from 'react'
import { View, Modal, ModalProps, Image, Pressable } from 'react-native'

import { globalStyles } from '@/constants/global-styles'

import BronzeModalPng from '@assets/images/modals/bronze.png'
import GoldModalPng from '@assets/images/modals/gold.png'
import MetalModalPng from '@assets/images/modals/metal.png'
import SilverModalPng from '@assets/images/modals/silver.png'

import { styles } from './game-modal.style'

const BLUR_INTENSITY = 50
const BLUR_TINT = 'dark'

const MODAL_IMAGES = {
  gold: GoldModalPng,
  silver: SilverModalPng,
  bronze: BronzeModalPng,
  metal: MetalModalPng,
}

export type ModalType = keyof typeof MODAL_IMAGES

interface Props extends Partial<ModalProps> {
  type?: ModalType
  onClose?: () => void
  visible?: boolean
  renderHeader?: () => React.ReactNode
  renderBody?: () => React.ReactNode
  renderFooter?: () => React.ReactNode
}

export default function GameModal({
  type = 'metal',
  onClose = () => {},
  visible = true,
  renderHeader,
  renderBody,
  renderFooter,
  ...modalProps
}: Props) {
  return (
    <Modal
      transparent={true}
      style={{ backgroundColor: 'red' }}
      visible={visible}
      animationType='fade'
      onRequestClose={onClose}
      {...modalProps}
    >
      <Pressable style={globalStyles.spacer} onPress={onClose}>
        <BlurView intensity={BLUR_INTENSITY} tint={BLUR_TINT} style={styles.overlay}>
          <View style={styles.container}>
            <Image source={MODAL_IMAGES[type]} style={styles.background} resizeMode='stretch' />
            <View style={styles.view}>
              {renderHeader && renderHeader?.()}
              {renderBody && renderBody?.()}
              {renderFooter && renderFooter?.()}
            </View>
          </View>
        </BlurView>
      </Pressable>
    </Modal>
  )
}
