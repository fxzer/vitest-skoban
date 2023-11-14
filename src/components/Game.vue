<script setup lang='ts'>
import { useBoxStore, useGameStore, useTargetStore} from '~/stores'

const { game,setupGame } = useGameStore()
const { boxs} = useBoxStore()
const { targets} = useTargetStore()
setupGame()
</script>

<template>
  <div flex-center>
    <Map relative>
      <Target v-for="target, idx in targets" :key="idx" :target="target" />
      <Box v-for="box, idx in boxs" :key="idx" :box="box" />
      <Player />
    </Map>
  </div>
  <div v-if="game.isPassed" my-10 btn>
    下一关
  </div>
</template>

<style scoped lang='scss'>
</style>
