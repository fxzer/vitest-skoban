<script setup lang='ts'>
import keeper from '~/assets/keeper.png'

useMove()
const { style } = usePosition()
</script>

<template>
  <div absolute :style="style">
    <img wh-full :src="keeper">
  </div>
</template>

<style scoped lang='scss'>
</style>
