import { useTranslation } from 'react-i18next'
import { View } from 'react-native'

import { styles } from './network-modal.style'
import { GradientText } from '../../text'
import GameModal from '../game-modal/game-modal'

interface Props {
  error: 'network' | 'bad' | '500' | null
}

export const NetworkModal = ({ error }: Props) => {
  const { t } = useTranslation()

  return (
    <GameModal
      gap='xxs'
      renderHeader={() => (
        <GradientText style={{ width: '100%', textAlign: 'center' }} txStyle='IR24'>
          {error === 'network' ? t('home.noInternet') : t('home.unexpectedError')}
        </GradientText>
      )}
      renderBody={() => (
        <View style={styles.body}>
          <GradientText
            style={{ width: '100%', textAlign: 'center' }}
            txStyle='IR18'
            quintessential
          >
            {t('home.checkConnection')}
          </GradientText>
        </View>
      )}
    />
  )
}
