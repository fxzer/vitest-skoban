import { defineStore } from "pinia";

interface Box {
  x: number;
  y: number;
}
export const useBoxStore = defineStore("box", () => {
  const boxs:Box[] = reactive([]);

  function createBox(x: number, y: number): Box {
    return { x, y };
  }

  function addBox(box: Box) {
    boxs.push(box);
  }

  function findBox(x: number, y: number) {
    return boxs.find((box) => box.x === x && box.y === y);
  }

  function resetBoxs() {
    boxs.splice(0, boxs.length);
  }

  return { boxs, createBox, addBox, findBox, resetBoxs };
});
