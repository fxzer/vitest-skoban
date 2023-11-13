import { defineStore } from 'pinia'
import { useBoxStore, useMapStore } from '~/stores'

export const usePlayerStore = defineStore('player', () => {
  const { isWall } = useMapStore()
  const { findBox, moveBox } = useBoxStore()
  const player = reactive({
    x: 2,
    y: 2,
  })

  function _move(dx: number, dy: number) {
    const nextPosition = { x: player.x + dx, y: player.y + dy }
    // 判断下一个位置是不是墙
    if(isWall(nextPosition)) return 
    // 判断下一个位置是否是箱子，并判断箱子移动能否移动
    const box = findBox(nextPosition)
    if (box) {
      const canMove = moveBox(box, dx, dy)
      if (!canMove)
        return
    }
    // 玩家移动
    player.x = nextPosition.x
    player.y = nextPosition.y
  }

  function movePlayerToLeft() {
    _move(-1, 0)
  }

  function movePlayerToRight() {
    _move(1, 0)
  }

  function movePlayerToUp() {
    _move(0, -1)
  }

  function movePlayerToDown() {
    _move(0, 1)
  }
  return {
    player,
    movePlayerToLeft,
    movePlayerToRight,
    movePlayerToUp,
    movePlayerToDown,
  }
})
