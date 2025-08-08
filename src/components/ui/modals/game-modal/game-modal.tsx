// import { BlurView } from 'expo-blur'
import React from 'react'
import { View, Modal, ModalProps, Image, Pressable } from 'react-native'

import { IS_IOS, spacing, WINDOW_HEIGHT } from '@/constants'
import { globalStyles } from '@/constants/global-styles'

import BronzeModalPng from '@assets/images/modals/bronze.png'
import GoldModalPng from '@assets/images/modals/gold.png'
import MetalModalPng from '@assets/images/modals/metal.png'
import SilverModalPng from '@assets/images/modals/silver.png'

import { styles } from './game-modal.style'

const BLUR_INTENSITY = IS_IOS ? 50 : 100
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
  gap?: keyof typeof spacing | null
}

export default function GameModal({
  type = 'metal',
  onClose = () => {},
  visible = true,
  renderHeader,
  renderBody,
  renderFooter,
  gap = 'md',
  ...modalProps
}: Props) {
  return (
    <Modal
      transparent={true}
      visible={visible}
      animationType='none'
      onRequestClose={onClose}
      {...modalProps}
    >
      <Pressable style={{ height: WINDOW_HEIGHT }} onPress={onClose}>
        <View style={styles.overlay}>
          <View style={styles.container}>
            <Image source={MODAL_IMAGES[type]} style={styles.background} resizeMode='stretch' />
            <Pressable style={[styles.view, { gap: gap ? spacing[gap] : 0 }]}>
              {renderHeader && renderHeader?.()}
              {renderBody && renderBody?.()}
              {renderFooter && renderFooter?.()}
            </Pressable>
          </View>
        </View>
      </Pressable>
    </Modal>
  )
}
