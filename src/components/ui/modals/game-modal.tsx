import React, { forwardRef, ReactNode, useEffect, useImperativeHandle, useMemo } from 'react'
import { View, Image, Pressable, StyleSheet, Modal, Keyboard } from 'react-native'
import Animated, {
  Easing,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'

import { spacing, WINDOW_HEIGHT, WINDOW_WIDTH } from '@/constants'

export interface GameModalRef {
  handleClose: () => void
}
const DURATION = 350
const VISIBLE_LEVEL = 0
const HIDDEN_LEVEL = WINDOW_HEIGHT

interface Props {
  children?: ReactNode
  onClose?: () => void
  type?: 'gold' | 'silver' | 'bronze' | 'metal'
}

const GameModal = forwardRef<GameModalRef, Props>(({ children, onClose, type = 'metal' }, ref) => {
  const backdropOpacity = useSharedValue(VISIBLE_LEVEL)
  const top = useSharedValue(WINDOW_HEIGHT)

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: top.value }],
  }))

  const backdropStyle = useAnimatedStyle(() => ({
    opacity: backdropOpacity.value,
  }))

  useEffect(() => {
    backdropOpacity.value = withTiming(1, { duration: DURATION, easing: Easing.out(Easing.quad) })
    setTimeout(() => {
      top.value = withTiming(VISIBLE_LEVEL, { duration: DURATION, easing: Easing.out(Easing.quad) })
    }, 100)
  }, [])

  const handleClose = () => {
    if (Keyboard.isVisible()) Keyboard.dismiss()
    if (onClose) {
      backdropOpacity.value = withTiming(0, { duration: DURATION / 2 })
      top.value = withTiming(
        HIDDEN_LEVEL,
        { duration: DURATION, easing: Easing.in(Easing.quad) },
        () => {
          runOnJS(onClose)()
        },
      )
    }
  }

  useImperativeHandle(ref, () => ({
    handleClose,
  }))
  const modalImage = useMemo(() => {
    switch (type) {
      case 'gold':
        return require('@assets/images/modals/gold.webp')
      case 'silver':
        return require('@assets/images/modals/silver.webp')
      case 'bronze':
        return require('@assets/images/modals/bronze.webp')
      case 'metal':
      default:
        return require('@assets/images/modals/metal.webp')
    }
  }, [type])

  return (
    <Modal
      onRequestClose={handleClose}
      style={styles.wrapper}
      transparent
      statusBarTranslucent
      navigationBarTranslucent
    >
      <Animated.View style={[styles.backdrop, backdropStyle]}>
        <Pressable onPress={handleClose} style={StyleSheet.absoluteFill} />
      </Animated.View>

      <Animated.View pointerEvents='box-none' style={[styles.modal, animatedStyle]}>
        <View style={styles.container}>
          <Image source={modalImage} style={styles.image} resizeMode='stretch' />
          <View style={styles.body}>{children}</View>
        </View>
      </Animated.View>
    </Modal>
  )
})

GameModal.displayName = 'GameModal'

export default GameModal

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
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
