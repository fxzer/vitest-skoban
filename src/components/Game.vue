<script setup lang='ts'>
import { useBoxStore } from '~/stores'

const { boxs, addBox, resetBoxs } = useBoxStore()
function generateBox() {
  resetBoxs()
  addBox({ x: 1, y: 2 })
  addBox({ x: 3, y: 2 })
  addBox({ x: 2, y: 1 })
  addBox({ x: 2, y: 3 })
}
generateBox()
</script>

<template>
  <div flex-center>
    <Map relative>
      <Player />
      <Box v-for="box, idx in boxs" :key="idx" :box="box" />
    </Map>
  </div>
  <div my-10 btn>
    下一关
  </div>
</template>

<style scoped lang='scss'>
</style>
