import { createPinia, setActivePinia } from 'pinia'
import { beforeEach, describe, expect, it ,vi} from 'vitest'
import { useBoxStore, useGameStore, useTargetStore, useMapStore } from '..'
import { gameData } from '~/composables/gameData'
describe('game', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })
  it.skip('pass when all boxs on targets', () => {
    const { setNewMap } = useMapStore()
    const { boxs, createBox, addBox, moveBox } = useBoxStore()
    const { createTarget, addTarget } = useTargetStore()
    const { game } = useGameStore()
    setNewMap(gameData.map)
    addTarget(createTarget(2, 1))
    addTarget(createTarget(3, 3))
    addBox(createBox(2, 2))
    addBox(createBox(3, 2))
    moveBox(boxs[0], 0, -1)
    moveBox(boxs[1], 0, 1)

    expect(game.isPassed).toBe(true)
  })
})
