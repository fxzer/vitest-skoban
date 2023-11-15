import { createPinia, setActivePinia } from 'pinia'
import { beforeEach, describe, expect, it } from 'vitest'
import { useBoxStore, useGameStore, useTargetStore, useMapStore } from '..'
describe('game', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })
  it('setup game', () => {
    const { setupGame } = useGameStore()
    const { game } = useGameStore()
    const { map } = useMapStore()
    expect(setupGame).not.toThrow()
    expect(map.length).toBe(gameData[game.level].map.length)
  })
  it('pass when all boxs on targets', () => {{
    const { setNewMap } = useMapStore()
    const { boxs, createBox, addBox, moveBox } = useBoxStore()
    const { createTarget, addTarget } = useTargetStore()
    const { game } = useGameStore()
    setNewMap([
      [1, 1, 1, 1, 1, 1, 1],
      [1, 2, 2, 2, 2, 2, 1],
      [1, 2, 2, 2, 2, 2, 1],
      [1, 2, 2, 2, 2, 2, 1],
      [1, 2, 2, 2, 2, 2, 1],
      [1, 2, 2, 2, 2, 2, 1],
      [1, 1, 1, 1, 1, 1, 1],
    ])
    addTarget(createTarget(2, 1))
    addTarget(createTarget(3, 3))
    addBox(createBox(2, 2))
    addBox(createBox(3, 2))
    moveBox(boxs[0], 0, -1)
    moveBox(boxs[1], 0, 1)

    expect(game.isPassed).toBe(true)
  }})
})
