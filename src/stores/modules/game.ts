import { defineStore, storeToRefs } from 'pinia'
import { useBoxStore } from '.'

export interface Game {
  isPassed: boolean
}

export const useGameStore = defineStore('game', () => {
  const { boxs } = storeToRefs(useBoxStore())
  const game: Game = reactive({
    isPassed: computed(() => boxs.value.every(box => box.onTarget)),
  })

  watch(game, () => {
    if (game.isPassed)
      congratPass()
  })
  return { game }
})
