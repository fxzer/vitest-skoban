<script setup lang='ts'>
import targetSrc from '~/assets/target.png'
import type { Position } from '~/stores'

const { target } = defineProps<{ target: Position }>()
const { style } = usePosition(target)
</script>

<template>
  <div absolute :style="style">
    <img wh-full :src="targetSrc">
  </div>
</template>

<style scoped lang='scss'>
</style>
