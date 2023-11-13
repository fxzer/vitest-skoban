import { defineStore } from 'pinia'
import { useBoxStore } from '~/stores'

export const usePlayerStore = defineStore('player', () => {
  const { findBox, moveBox } = useBoxStore()
  const player = reactive({
    x: 2,
    y: 2,
  })

  function _move(dx: number, dy: number) {
    const nextPosition = { x: player.x + dx, y: player.y + dy }
    // 箱子移动
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
