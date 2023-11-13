import { defineStore } from 'pinia'
import { useMapStore, useBoxStore } from '~/stores'

export const usePlayerStore = defineStore('player', () => {
  const { isWall } = useMapStore()
  const { findBox } = useBoxStore()
  const player = reactive({
    x: 2,
    y: 2,
  })

  function movePlayerToLeft() {
    const x = player.x - 1
    if (isWall({ x, y: player.y }))
      return
    player.x = x

    const box = findBox(x, player.y)
    if(box) {
      box.x = box.x - 1
    }
  }

  function movePlayerToRight() {
    const x = player.x + 1
    if (isWall({ x, y: player.y }))
      return
    player.x = x
    const box = findBox(x, player.y)
    if(box) {
      box.x = box.x + 1
    }
  }

  function movePlayerToUp() {
    const y = player.y - 1
    if (isWall({ x: player.x, y }))
      return
    player.y = y
    const box = findBox(player.x, y)
    if(box) {
      box.y = box.y - 1
    }
  }

  function movePlayerToDown() {
    const y = player.y + 1
    if (isWall({ x: player.x, y }))
      return
    player.y = y
    const box = findBox(player.x, y)
    if(box) {
      box.y = box.y + 1
    }
  }
  return { player, movePlayerToLeft, movePlayerToRight, movePlayerToUp, movePlayerToDown }
})
