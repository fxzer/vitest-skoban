import { defineStore } from 'pinia'
import { MapTile, useMapStore } from './map'

export const usePlayerStore = defineStore('player', () => {
  const { map } = useMapStore()
  const player = reactive({
    x: 0,
    y: 0,
  })

  function movePlayerToLeft() {
    const isLeftWall = map[player.y][player.x - 1] === MapTile.WALL
    if(isLeftWall) return console.log('left is wall')
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
