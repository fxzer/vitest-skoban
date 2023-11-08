import { defineStore } from 'pinia'

export const usePlayerStore = defineStore('player', () => {
  const player = reactive({
    x: 0,
    y: 0,
  })

  function movePlayerToLeft() {
    player.x = player.x - 1
  }

  function movePlayerToRight() {
    player.x = player.x + 1
  }

  function movePlayerToUp() {
    player.y = player.y - 1
  }

  function movePlayerToDown() {
    player.y = player.y + 1
  }
  return { player, movePlayerToLeft, movePlayerToRight, movePlayerToUp, movePlayerToDown }
})
