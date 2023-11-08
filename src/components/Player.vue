<script setup lang='ts'>
import keeper from '~/assets/keeper.png'
import { usePlayerStore } from '~/stores';
const { player, movePlayerToLeft  } = usePlayerStore()

const style = computed(() => ({
  left: `${player.x * 50 }px`,
  top: `${player.y * 50}px`
}))

window.addEventListener('keyup',(e) => {
 switch(e.code){
  case 'ArrowLeft':
  movePlayerToLeft()
    break; 
  case 'ArrowRight':
    break;
  case 'ArrowUp':
    break;
  case 'ArrowDown':
    break;
 } 
  
})
</script>

<template>
  <div  absolute :style="style">
    <img wh-50px :src="keeper"/>
  </div>
</template>

<style scoped lang='scss'>

</style>
