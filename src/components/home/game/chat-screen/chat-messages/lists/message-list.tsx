import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'

import { HEADER_HEIGHT, spacing } from '@/constants'

import { ReceivedMessage } from '../messages/received-message/received-message'
import { SentMessage } from '../messages/sent-message/sent-message'

interface Props {
  messages: any[]
  user: { username?: string } | null
}

export default function MessagesList({ messages, user }: Props) {
  return (
    <FlatList
      data={[...messages]}
      bounces
      inverted
      scrollEnabled={true}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.messageListContainer}
      keyboardShouldPersistTaps='handled'
      keyExtractor={item => item.messageId}
      scrollEventThrottle={32}
      ListFooterComponent={() => <View style={styles.footer} />}
      renderItem={({ item }) => {
        return item.sender == user?.username || item.sender === 'PLAYER' ? (
          <SentMessage text={item.message} />
        ) : (
          <ReceivedMessage colors={item.colors} sender={item.sender} text={item.message} />
        )
      }}
    />
  )
}

export const styles = StyleSheet.create({
  footer: {
    height: HEADER_HEIGHT + spacing.lg,
  },

  messageListContainer: {
    gap: spacing.lg,
  },
})
