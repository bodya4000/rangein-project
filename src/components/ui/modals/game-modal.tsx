import React, { forwardRef, ReactNode, useEffect, useImperativeHandle, useMemo } from 'react'
import { View, Image, Pressable, StyleSheet, Modal, BackHandler } from 'react-native'
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'

import { globalStyles, spacing, WINDOW_HEIGHT, WINDOW_WIDTH } from '@/constants'

export interface GameModalRef {
  handleClose: () => void
}
const duration = 300

interface Props {
  children?: ReactNode
  onClose?: () => void
  type?: 'gold' | 'silver' | 'bronze' | 'metal'
}

const GameModal = forwardRef<GameModalRef, Props>(
  ({ children, onClose = () => {}, type = 'metal' }, ref) => {
    const top = useSharedValue(WINDOW_HEIGHT)

    const handleClose = () => {
      if (onClose)
        top.value = withTiming(WINDOW_HEIGHT, { duration }, () => {
          runOnJS(onClose)()
        })
    }

    useImperativeHandle(ref, () => ({
      handleClose,
    }))

    useEffect(() => {
      top.value = withTiming(0, { duration })
    }, [])

    const animatedStyle = useAnimatedStyle(() => ({
      transform: [{ translateY: top.value }],
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
        pointerEvents='none'
        onRequestClose={handleClose}
        style={styles.wrapper}
        transparent
        statusBarTranslucent
      >
        {/* <KeyboardAvoidingView style={globalStyles.spacer}> */}
        <Pressable onPress={handleClose} style={styles.backdrop} />
        <Animated.View pointerEvents='box-none' style={[styles.modal, animatedStyle]}>
          <View style={styles.container}>
            <Image source={modalImage} style={styles.image} resizeMode='stretch' />
            <View style={styles.body}>{children}</View>
          </View>
        </Animated.View>
        {/* </KeyboardAvoidingView> */}
      </Modal>
    )
  },
)

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
