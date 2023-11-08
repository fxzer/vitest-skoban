import { defineStore } from 'pinia'

export const usePlayerStore = defineStore('player', () => {
  const player = reactive({
    x:0,
    y:0
  })

  function movePlayerToLeft(){
   player.x = player.x - 1  
  }
  return { player, movePlayerToLeft }
})
