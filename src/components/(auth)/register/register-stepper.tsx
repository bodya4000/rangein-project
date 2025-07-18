/* eslint-disable react/display-name */
import React, { forwardRef, useImperativeHandle, useRef } from 'react'
import { Control } from 'react-hook-form'
import { FlatList, Keyboard, StyleSheet, View } from 'react-native'

import { LangContainer, PagedList } from '@/components/ui'
import { WINDOW_WIDTH } from '@/constants'
import { RegisterForm } from '@/screens/auth'

import { AgeStep } from './age-step'
import { SexStep } from './sex-step'
import { UsernameStep } from './username-step'

const STEP_WIDTH = WINDOW_WIDTH - 32
const STEPS = ['lang', 'username', 'sex', 'age']

export type RegisterStepperRef = {
  nextStep: () => void
  prevStep: () => void
  setIndex: (_: number) => void
  getIndex: () => number
}
interface Props {
  control: Control<RegisterForm>
  onNextStep: (_: number) => void
}

export const RegisterStepper = forwardRef<RegisterStepperRef, Props>(
  ({ onNextStep, control }, ref) => {
    const listRef = useRef<FlatList<any>>(null)
    const currentIndexRef = useRef(0)

    const scrollToIndex = (i: number) => {
      currentIndexRef.current = i
      listRef.current?.scrollToIndex({ index: i, animated: true })
      onNextStep(i)
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
        onPageChange={() => Keyboard.dismiss()}
        style={styles.list}
        contentContainerStyle={styles.listContainer}
        horizontal
        keyboardShouldPersistTaps='handled'
        renderItem={item => (
          <View style={{ width: STEP_WIDTH }}>
            {item.item === 'lang' && <LangContainer />}
            {item.item === 'username' && <UsernameStep control={control} />}
            {item.item === 'sex' && <SexStep control={control} />}
            {item.item === 'age' && <AgeStep control={control} />}
          </View>
        )}
      />
    )
  },
)

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
