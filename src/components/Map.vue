<script setup lang='ts'>
import { MapTile } from '~/stores';
import wall from '~/assets/wall.png'
import floor from '~/assets/floor.png'
const map = [
  [1, 1, 1, 1, 1],
  [1, 2, 2, 2, 1],
  [1, 2, 2, 2, 1],
  [1, 2, 2, 2, 1],
  [1, 1, 1, 1, 1],
]
</script>

<template>
  <div>
    <div flex v-for="row, r in map" :key="r">
      <div wh-50px v-for="col, c in row" :key="c">
        <img wh-full :src="wall" v-if="col === MapTile.WALL" />
        <img wh-full :src="floor" v-if="col === MapTile.FLOOR" />
      </div>
    </div>
    <slot></slot>
  </div>
</template>

<style scoped lang='scss'>
</style>
