import { t } from 'i18next'
import { ToastAndroid } from 'react-native'

import { TxKeyPath } from '@/i18n/react-i18next'

export const successToast = (tx: TxKeyPath) => {
  ToastAndroid.showWithGravity(`✅ ${t(tx)}`, ToastAndroid.SHORT, ToastAndroid.TOP)
}

export const errorToast = (tx: TxKeyPath) => {
  ToastAndroid.showWithGravity(`❌ ${t(tx)}`, ToastAndroid.SHORT, ToastAndroid.TOP)
}

export const warningToast = (tx: TxKeyPath) => {
  ToastAndroid.showWithGravity(`⚠️ ${t(tx)}`, ToastAndroid.SHORT, ToastAndroid.TOP)
}
