import React, { lazy, memo, Suspense } from 'react'

import { useChatStore } from '@/store'

const ResultModal = lazy(() => import('./result-modal/result-modal'))
const DeadInfoModal = lazy(() => import('./dead-info-modal/dead-info-modal'))

export const ChatModals = memo(() => {
  const gameResult = useChatStore(state => state.gameResult)
  const justBeenDead = useChatStore(state => state.justBeenDead)

  return (
    <>
      <Suspense fallback={null}>
        {/* if some character is dead then show this modal */}
        {justBeenDead && <DeadInfoModal nameOfDeadCharacter={justBeenDead} />}

        {/* If game is over */}
        {/* If dead char is set to null just not to show 2 modals at the same time */}
        {gameResult && <ResultModal summary={gameResult.message} stars={gameResult.score} />}
      </Suspense>
    </>
  )
})

ChatModals.displayName = 'ChatModals'
