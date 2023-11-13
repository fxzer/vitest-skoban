<script setup lang='ts'>
import { MapTile, useMapStore } from '~/stores'
import wall from '~/assets/wall.png'
import floor from '~/assets/floor.png'

const { map } = useMapStore()
</script>

<template>
  <div of-hidden>
    <div v-for="row, r in map" :key="r" flex>
    <div v-for="col, c in row" :key="c" class="wh-50px">
        <img v-if="col === MapTile.WALL" wh-full :src="wall">
        <img v-if="col === MapTile.FLOOR" wh-full :src="floor">
      </div>
    </div>
    <slot />
  </div>
</template>

<style scoped lang='scss'>
</style>
