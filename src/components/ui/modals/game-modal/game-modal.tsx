import { BlurView } from 'expo-blur'
import React, { JSX } from 'react'
import { View, Modal, ModalProps, Image } from 'react-native'

import SilverModalPng from '@assets/images/modals/loser-2.png'

import { styles } from './game-modal.style'

const BLUR_INTENSITY = 50
const BLUR_TINT = 'dark'

interface Props extends Partial<ModalProps> {
  onClose: () => void
  visible?: boolean
  renderHeader?: () => JSX.Element
  renderBody?: () => JSX.Element
  renderFooter?: () => JSX.Element
}

export default function GameModal({
  onClose,
  visible = true,
  renderHeader,
  renderBody,
  renderFooter,
  ...modalProps
}: Props) {
  return (
    <Modal
      transparent
      visible={visible}
      animationType='fade'
      onRequestClose={onClose}
      {...modalProps}
    >
      <BlurView intensity={BLUR_INTENSITY} tint={BLUR_TINT} style={styles.overlay}>
        <View style={styles.container}>
          <Image source={SilverModalPng} style={styles.background} resizeMode='stretch' />
          <View style={styles.view}>
            {renderHeader?.()}
            {renderBody?.()}
            {renderFooter?.()}
          </View>
        </View>
      </BlurView>
    </Modal>
  )
}


// export default function GameModal({ onClose, type = 'silver' }: Props) {
//   return (
//     <Modal transparent={true}>
//       <BlurView intensity={BLUR_INTENSITY} tint={BLUR_TINT} style={styles.overlay}>
//         <View style={styles.container}>
//           <Image source={modalPngMap[type]} style={styles.background} resizeMode='stretch' />

//           <View style={styles.view}>
//             <Text style={styles.title}>Loser</Text>

//             <Text style={styles.text}>
//               Terrible result, you are such a bad detective. I think you need one more game to
//               improve it
//             </Text>

//             <View style={styles.starsContainer}>
//               <GoldStar style={[styles.star, styles.star_bottom]} />
//               <GoldStar style={[styles.star]} />
//               <GoldStar style={[styles.star, styles.star_bottom]} />
//             </View>

//             <View style={styles.footer}>
//               <SecondaryButton title='Continue' onPress={onClose} />
//             </View>
//           </View>
//         </View>
//       </BlurView>
//     </Modal>
//   )
// }