<script setup lang='ts'>
import { useBoxStore, useGameStore, useTargetStore } from '~/stores'

const { game, setupGame, nextLevel, restart } = useGameStore()
const { boxs } = useBoxStore()
const { targets } = useTargetStore()
setupGame()
watch(game, () => {
  if (game.isPassed) congratPass(game.level * 100 + 80);
});
const hasNext = computed(() => game.isPassed && game.level !== 2);
const passedAll = computed(() => game.isPassed && game.level === 2);
</script>

<template>
  <div flex-center>
    <Map relative>
      <Target v-for="target, idx in targets" :key="idx" :target="target" />
      <Box v-for="box, idx in boxs" :key="idx" :box="box" />
      <Player />
    </Map>
  </div>
  <div w-100 mx-auto my-5 flex justify-between>
    <span>
      第 <span text-blue>{{ game.level + 1 }}</span> 关
    </span>
    <span>
      已走 <span text-amber>{{ game.step }}</span> 步
    </span>
  </div>
  <div my-5 space-x-4>
    <div v-if="hasNext" btn @click="nextLevel">
      下一关
    </div>
    <div v-if="game.step > 0" btn bg-amber @click="restart">
      重玩
    </div>
  </div>
  <div v-if="passedAll" text-center text-lime font-bold>
    通关成功！
  </div>
</template>

<style scoped lang='scss'>
</style>
