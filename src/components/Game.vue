<script setup lang='ts'>
import { useBoxStore,useTargetStore } from '~/stores'

const { boxs, addBox, resetBoxs } = useBoxStore()
const { targets, addTarget, resetTargets } = useTargetStore()
function generateBox() {
  resetBoxs()
  addBox({ x: 1, y: 2 })
  addBox({ x: 3, y: 2 })
  // addBox({ x: 2, y: 1 })
  // addBox({ x: 2, y: 3 })
}

function generateTarget() {
  resetTargets()
  addTarget({ x: 4, y: 1 })
}
generateBox()
generateTarget()
</script>

<template>
  <div flex-center>
    <Map relative>
      <Target v-for="target, idx in targets" :key="idx" :target="target" />
      <Box v-for="box, idx in boxs" :key="idx" :box="box" />
      <Player />
    </Map>
  </div>
  <div my-10 btn>
    下一关
  </div>
</template>

<style scoped lang='scss'>
</style>
