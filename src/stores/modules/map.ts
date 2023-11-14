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
  const map = reactive<Map>([])

  function isWall(position: Position) {
    return map[position.y][position.x] === MapTile.WALL
  }
  function setNewMap(newMap: Map) {
    map.splice(0, map.length, ...newMap)
  }
  return { map, setNewMap, isWall }
})
