<script setup lang='ts'>
import keeper from '~/assets/keeper.png'
const props =   defineProps(['pos']) 
const { pos } = toRefs(props)
const style = computed(() => ({
  left: `${pos?.value.x * 50 }px`,
  top: `${pos?.value.y * 50}px`
}))
</script>

<template>
  <div  absolute :style="style">
    <img wh-50px :src="keeper"/>
  </div>
</template>

<style scoped lang='scss'>

</style>
