import { defineStore } from 'pinia'
import { useMapStore } from './map'

export const usePlayerStore = defineStore('player', () => {
  const { isWall } = useMapStore()
  const player = reactive({
    x: 1,
    y: 1,
  })

  function movePlayerToLeft() {
    const x = player.x - 1
    if (isWall({ x, y: player.y }))
      return
    player.x = x
  }

  function movePlayerToRight() {
    const x = player.x + 1
    if (isWall({ x, y: player.y }))
      return
    player.x = x
  }

  function movePlayerToUp() {
    const y = player.y - 1
    if (isWall({ x: player.x, y }))
      return
    player.y = y
  }

  function movePlayerToDown() {
    const y = player.y + 1
    if (isWall({ x: player.x, y }))
      return
    player.y = y
  }
  return { player, movePlayerToLeft, movePlayerToRight, movePlayerToUp, movePlayerToDown }
})
