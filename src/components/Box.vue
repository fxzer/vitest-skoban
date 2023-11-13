<script setup lang='ts'>
import boxSrc from '~/assets/box.png'
import boxOnTargetSrc from '~/assets/box_on_target.png'
import type { Box } from '~/stores'

const { box } = defineProps<{ box: Box }>()
const { style } = usePosition(box)
</script>

<template>
  <div absolute :style="style">
    <img v-if="box.onTarget" wh-full :src="boxOnTargetSrc">
    <img v-else wh-full :src="boxSrc">
  </div>
</template>

<style scoped lang='scss'>
</style>
