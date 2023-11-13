import { beforeEach, describe, expect, it } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import { useBoxStore, useMapStore, usePlayerStore,useTargetStore } from '~/stores'

describe('box', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
    const { setNewMap } = useMapStore()
    setNewMap([
      [1, 1, 1, 1, 1],
      [1, 2, 2, 2, 1],
      [1, 2, 2, 2, 1],
      [1, 2, 2, 2, 1],
      [1, 1, 1, 1, 1],
    ])
  })

  it('should add a box', () => {
    const { boxs, createBox, addBox } = useBoxStore()
    const box = createBox(1, 1)
    addBox(box)
    expect(boxs.length).toBe(1)
  })

  describe('box nomal move', () => {
    it('should push a box to left', () => {
      const { boxs, createBox, addBox } = useBoxStore()
      addBox(createBox(2, 1))
      const { player, movePlayerToLeft } = usePlayerStore()
      player.x = 3
      player.y = 1
      movePlayerToLeft()
      expect(player.x).toBe(2)
      expect(boxs[0].x).toBe(1)
    })

    it('should push a box to right', () => {
      const { boxs, createBox, addBox } = useBoxStore()
      addBox(createBox(2, 1))
      const { player, movePlayerToRight } = usePlayerStore()
      player.x = 1
      player.y = 1
      movePlayerToRight()
      expect(player.x).toBe(2)
      expect(boxs[0].x).toBe(3)
    })

    it('should push a box to up', () => {
      const { boxs, createBox, addBox } = useBoxStore()
      addBox(createBox(1, 2))
      const { player, movePlayerToUp } = usePlayerStore()
      player.x = 1
      player.y = 3
      movePlayerToUp()
      expect(player.y).toBe(2)
      expect(boxs[0].y).toBe(1)
    })

    it('should push a box to down', () => {
      const { boxs, createBox, addBox } = useBoxStore()
      addBox(createBox(1, 2))
      const { player, movePlayerToDown } = usePlayerStore()
      player.x = 1
      player.y = 1
      movePlayerToDown()
      expect(player.y).toBe(2)
      expect(boxs[0].y).toBe(3)
    })
  })

  describe('box move related wall', () => {
    it('should not move when left is wall', () => {
      const { boxs, createBox, addBox } = useBoxStore()
      addBox(createBox(1, 1))
      const { player, movePlayerToLeft } = usePlayerStore()
      player.x = 2
      player.y = 1
      movePlayerToLeft()
      expect(player.x).toBe(2)
      expect(boxs[0].x).toBe(1)
    })

    it('should not move when right is wall', () => {
      const { boxs, createBox, addBox } = useBoxStore()
      addBox(createBox(3, 1))
      const { player, movePlayerToRight } = usePlayerStore()
      player.x = 2
      player.y = 1
      movePlayerToRight()
      expect(player.x).toBe(2)
      expect(boxs[0].x).toBe(3)
    })

    it('should not move when up is wall', () => {
      const { boxs, createBox, addBox } = useBoxStore()
      addBox(createBox(1, 1))
      const { player, movePlayerToUp } = usePlayerStore()
      player.x = 1
      player.y = 2
      movePlayerToUp()
      expect(player.y).toBe(2)
      expect(boxs[0].y).toBe(1)
    })

    it('should not move when down is wall', () => {
      const { boxs, createBox, addBox } = useBoxStore()
      addBox(createBox(1, 3))
      const { player, movePlayerToDown } = usePlayerStore()
      player.x = 1
      player.y = 2
      movePlayerToDown()
      expect(player.y).toBe(2)
      expect(boxs[0].y).toBe(3)
    })
  })

  describe('box move related box', () => {
    it('should not move when left is box', () => {
      const { boxs, createBox, addBox } = useBoxStore()
      addBox(createBox(1, 1))
      addBox(createBox(2, 1))
      const { player, movePlayerToLeft } = usePlayerStore()
      player.x = 3
      player.y = 1
      movePlayerToLeft()
      expect(player.x).toBe(3)
      expect(boxs[0].x).toBe(1)
      expect(boxs[1].x).toBe(2)
    })

    it('should not move when right is box', () => {
      const { boxs, createBox, addBox } = useBoxStore()
      addBox(createBox(2, 1))
      addBox(createBox(3, 1))
      const { player, movePlayerToRight } = usePlayerStore()
      player.x = 1
      player.y = 1
      movePlayerToRight()
      expect(player.x).toBe(1)
      expect(boxs[0].x).toBe(2)
      expect(boxs[1].x).toBe(3)
    })

    it('should not move when up is box', () => {
      const { boxs, createBox, addBox } = useBoxStore()
      addBox(createBox(1, 1))
      addBox(createBox(1, 2))
      const { player, movePlayerToUp } = usePlayerStore()
      player.x = 1
      player.y = 3
      movePlayerToUp()
      expect(player.y).toBe(3)
      expect(boxs[0].y).toBe(1)
      expect(boxs[1].y).toBe(2)
    })

    it('should not move when down is box', () => {
      const { boxs, createBox, addBox } = useBoxStore()
      addBox(createBox(1, 2))
      addBox(createBox(1, 3))
      const { player, movePlayerToDown } = usePlayerStore()
      player.x = 1
      player.y = 1
      movePlayerToDown()
      expect(player.y).toBe(1)
      expect(boxs[0].y).toBe(2)
      expect(boxs[1].y).toBe(3)
    })
  })

  describe('target', () => {
   it('box is on target when move to left', () => {
      const { boxs, createBox, addBox, moveBox } = useBoxStore()
      const {createTarget, addTarget } = useTargetStore()

      addTarget(createTarget(1, 1))
      addBox(createBox(2, 1))
      moveBox(boxs[0], -1, 0)
     
      expect(boxs[0].onTarget).toBe(true)
   }) 

   it('box is on target when move to right', () => {
      const { boxs, createBox, addBox, moveBox } = useBoxStore()
      const {createTarget, addTarget } = useTargetStore()

      addTarget(createTarget(2, 1))
      addBox(createBox(1, 1))
      moveBox(boxs[0], 1, 0)
     
      expect(boxs[0].onTarget).toBe(true)
   }) 

   it('box is on target when move to up', () => {
      const { boxs, createBox, addBox, moveBox } = useBoxStore()
      const {createTarget, addTarget } = useTargetStore()

      addTarget(createTarget(1, 1))
      addBox(createBox(1, 2))
      moveBox(boxs[0], 0, -1)
     
      expect(boxs[0].onTarget).toBe(true)
   }) 

   it('box is on target when move to down', () => {
      const { boxs, createBox, addBox, moveBox } = useBoxStore()
      const {createTarget, addTarget } = useTargetStore()

      addTarget(createTarget(1, 2))
      addBox(createBox(1, 1))
      moveBox(boxs[0], 0, 1)
     
      expect(boxs[0].onTarget).toBe(true)
   })
  })
})
