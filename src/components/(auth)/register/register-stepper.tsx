/* eslint-disable react/display-name */
import React, { forwardRef, useImperativeHandle, useRef } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'

import { PagedList } from '@/components/ui'
import { WINDOW_WIDTH } from '@/constants'

import { AgeStep } from './age-step'
import { LangStep } from './lang-step'
import { SexStep } from './sex-step'
import { UsernameStep } from './username-step'

const STEP_WIDTH = WINDOW_WIDTH - 12
const STEPS = ['lang', 'username', 'sex', 'age']

export type RegisterStepperRef = {
  nextStep: () => void
  prevStep: () => void
  setIndex: (_: number) => void
  getIndex: () => number
}

export const RegisterStepper = forwardRef<RegisterStepperRef>((_, ref) => {
  const listRef = useRef<FlatList<any>>(null)
  const currentIndexRef = useRef(0)

  const scrollToIndex = (i: number) => {
    currentIndexRef.current = i
    listRef.current?.scrollToIndex({ index: i, animated: true })
  }

  useImperativeHandle(ref, () => ({
    nextStep: () => {
      const next = Math.min(currentIndexRef.current + 1, STEPS.length - 1)
      scrollToIndex(next)
    },
    prevStep: () => {
      const prev = Math.max(currentIndexRef.current - 1, 0)
      scrollToIndex(prev)
    },
    setIndex: (i: number) => {
      if (i >= 0 && i < STEPS.length) scrollToIndex(i)
    },
    getIndex: () => currentIndexRef.current,
  }))

  return (
    <PagedList
      ref={listRef}
      bounces={false}
      scrollEnabled={false}
      containerWidth={STEP_WIDTH * STEPS.length}
      pagingEnabled
      data={STEPS}
      style={styles.list}
      contentContainerStyle={styles.listContainer}
      horizontal
      keyboardShouldPersistTaps='handled'
      renderItem={item => (
        <View style={{ width: STEP_WIDTH }}>
          {item.item === 'lang' && <LangStep />}
          {item.item === 'username' && <UsernameStep />}
          {item.item === 'sex' && <SexStep />}
          {item.item === 'age' && <AgeStep />}
        </View>
      )}
    />
  )
})

const styles = StyleSheet.create({
  list: {
    maxHeight: 100,
    width: '100%',
  },
  listContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    maxHeight: 100,
  },
})
