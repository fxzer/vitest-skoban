import { defineStore } from 'pinia'

export enum MapTile {
  WALL = 1,
  FLOOR = 2,
}
export type Map = MapTile[][]
export interface Position {
  x: number
  y: number
}

export const useMapStore = defineStore('map', () => {
  const map = ref([
    [1, 1, 1, 1, 1],
    [1, 2, 2, 2, 1],
    [1, 2, 2, 2, 1],
    [1, 2, 2, 2, 1],
    [1, 1, 1, 1, 1],
  ])

  function isWall(position: Position) {
    return map.value[position.y][position.x] === MapTile.WALL
  }
  function setNewMap(newMap: Map) {
    map.value.splice(0, map.value.length, ...newMap)
  }
  return { map, setNewMap, isWall }
})
