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

  function findBox(pos: { x: number; y: number }): Box | undefined {
    return boxs.find((box) => box.x === pos.x && box.y === pos.y);
  }

  function resetBoxs() {
    boxs.splice(0, boxs.length);
  }

  return { boxs, createBox, addBox, findBox, resetBoxs };
});
