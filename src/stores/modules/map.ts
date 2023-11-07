import { defineStore } from 'pinia'
export enum MapTile {
  WALL = 1,
  FLOOR = 2
}
export type Map = MapTile[][]

export const useMapStore = defineStore('map', () => {
  const count = ref(0)
  const increment = () => count.value++
  const dobule = computed(() => count.value * 2)
  return { count, increment, dobule }
})
