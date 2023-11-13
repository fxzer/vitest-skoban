<script setup lang='ts'>
import playerSrc from '~/assets/player.png'
import { usePlayerStore } from '~/stores'

const { player } = usePlayerStore()
useMove()
const { style } = usePosition(player)
</script>

<template>
  <div absolute :style="style">
    <img wh-full :src="playerSrc">
  </div>
</template>

<style scoped lang='scss'>
</style>
