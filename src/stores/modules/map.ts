import { defineStore } from "pinia";

export enum MapTile {
  WALL = 1,
  FLOOR = 2,
}
export type Map = MapTile[][];

export const useMapStore = defineStore("map", () => {
  const map = ref([
    [1, 1, 1, 1, 1],
    [1, 2, 2, 2, 1],
    [1, 2, 2, 2, 1],
    [1, 2, 2, 2, 1],
    [1, 1, 1, 1, 1],
  ]);

  function setNewMap(newMap: Map) {
    map.value.splice(0, map.value.length, ...newMap);
  }
  return { map, setNewMap };
});
