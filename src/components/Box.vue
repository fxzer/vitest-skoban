<script setup lang='ts'>
import boxSrc from '~/assets/box.png'
import type { Position } from '~/stores'

const { box } = defineProps<{ box: Position }>()
const { style } = usePosition(box)
</script>

<template>
  <div absolute :style="style">
    <img wh-full :src="boxSrc">
  </div>
</template>

<style scoped lang='scss'>
</style>
