import React, { useCallback, useMemo } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'

import { HEADER_HEIGHT, spacing } from '@/constants'

import { ReceivedMessage } from '../messages/received-message/received-message'
import { SentMessage } from '../messages/sent-message/sent-message'

interface Props {
  messages: any[]
  user: { username?: string } | null
}

export default function MessagesList({ messages, user }: Props) {
  const renderItem = useCallback(
    ({ item }: { item: any }) => {
      return item.sender == user?.username || item.sender === 'PLAYER' ? (
        <SentMessage text={item.message} />
      ) : (
        <ReceivedMessage colors={item.colors} sender={item.sender} text={item.message} />
      )
    },
    [user?.username],
  )
  const Separator = React.useCallback(() => <View style={{ height: spacing.lg }} />, [])

  return (
    <FlatList
      data={messages}
      bounces
      inverted
      scrollEnabled={true}
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps='handled'
      keyExtractor={item => item.messageId}
      ListFooterComponent={<View style={styles.footer} />}
      renderItem={renderItem}
      ItemSeparatorComponent={Separator}
      windowSize={30}
      scrollEventThrottle={32}
      removeClippedSubviews={true}
    />
  )
}

export const styles = StyleSheet.create({
  footer: {
    height: HEADER_HEIGHT + spacing.lg,
  },
})
