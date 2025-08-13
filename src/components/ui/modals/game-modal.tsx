import React, { ReactNode } from 'react'
import { View, Image, Pressable, StyleSheet, Modal } from 'react-native'
import { KeyboardAvoidingView } from 'react-native-keyboard-controller'

import { globalStyles, spacing, WINDOW_HEIGHT, WINDOW_WIDTH } from '@/constants'

import BronzeModalPng from '@assets/images/modals/bronze.webp'
import GoldModalPng from '@assets/images/modals/gold.webp'
import MetalModalPng from '@assets/images/modals/metal.webp'
import SilverModalPng from '@assets/images/modals/silver.webp'

const MODAL_IMAGES = {
  gold: GoldModalPng,
  silver: SilverModalPng,
  bronze: BronzeModalPng,
  metal: MetalModalPng,
}

export type ModalType = keyof typeof MODAL_IMAGES

interface Props {
  children?: ReactNode
  onClose?: () => void
}

export default function GameModal({ children, onClose = () => {}, ..._ }: Props) {
  return (
    <Modal style={globalStyles.spacer} transparent statusBarTranslucent>
      <KeyboardAvoidingView style={{ height: WINDOW_HEIGHT }}>
        <Pressable onPress={onClose} style={styles.backdrop} />
        <View style={styles.modal}>
          <View style={styles.container}>
            <Image source={MetalModalPng} style={styles.image} resizeMode='stretch' />
            <View style={styles.body}>{children}</View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  )
}

const styles = StyleSheet.create({
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: WINDOW_WIDTH - 20,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    height: '100%',
    width: '100%',
    borderRadius: spacing['xl'],
  },

  body: {
    paddingVertical: spacing.lg,
    gap: spacing.lg,
  },

  title: {
    textAlign: 'center',
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.xl,
    paddingHorizontal: spacing.lg,
    height: 40,
  },
})
