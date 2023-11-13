import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import { useMapStore, usePlayerStore } from '..'

describe('player', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })
  afterEach(() => {
    setActivePinia(undefined)
  })

  describe('normal move', () => {
    beforeEach(() => {
      const { setNewMap } = useMapStore()
      setNewMap([
        [2, 2, 2],
        [2, 2, 2],
        [2, 2, 2],
      ])
    })
    it('should move to left', () => {
      const { player, movePlayerToLeft } = usePlayerStore()
      player.x = 1
      player.y = 1
      movePlayerToLeft()
      expect(player.x).toBe(0)
    })

    it('should move to right', () => {
      const { player, movePlayerToRight } = usePlayerStore()
      player.x = 1
      player.y = 1
      movePlayerToRight()
      expect(player.x).toBe(2)
    })

    it('should move to up', () => {
      const { player, movePlayerToUp } = usePlayerStore()
      player.x = 1
      player.y = 1
      movePlayerToUp()
      expect(player.y).toBe(0)
    })
    it('should move to down', () => {
      const { player, movePlayerToDown } = usePlayerStore()
      player.x = 1
      player.y = 1
      movePlayerToDown()
      expect(player.y).toBe(2)
    })
  })

  describe('move related wall', () => {
    beforeEach(() => {
      const { setNewMap } = useMapStore()
      setNewMap([
        [1, 1, 1],
        [1, 2, 1],
        [1, 1, 1],
      ])
    })

    it('should not move to left when left is wall', () => {
      const { player, movePlayerToLeft } = usePlayerStore()
      player.x = 1
      player.y = 1
      movePlayerToLeft()
      expect(player.x).toBe(1)
    })

    it('should not move to right when right is wall', () => {
      const { player, movePlayerToRight } = usePlayerStore()
      player.x = 1
      player.y = 1
      movePlayerToRight()
      expect(player.x).toBe(1)
    })

    it('should not move to top when top is wall', () => {
      const { player, movePlayerToUp } = usePlayerStore()
      player.x = 1
      player.y = 1
      movePlayerToUp()
      expect(player.y).toBe(1)
    })

    it('should not move to down when down is wall', () => {
      const { player, movePlayerToDown } = usePlayerStore()
      player.x = 1
      player.y = 1
      movePlayerToDown()
      expect(player.y).toBe(1)
    })
  })
})
