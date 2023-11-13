import { defineStore } from "pinia";
import { useMapStore, useBoxStore } from "~/stores";

export const usePlayerStore = defineStore("player", () => {
  const { isWall } = useMapStore();
  const { findBox } = useBoxStore();
  const player = reactive({
    x: 2,
    y: 2,
  });

  function _move(dx: number, dy: number) {
    const nextPosition = { x: player.x + dx, y: player.y + dy };
    if (isWall(nextPosition)) return;
    player.x = nextPosition.x;
    player.y = nextPosition.y;
    const box = findBox(nextPosition);
    if (box) {
      box.x = box.x + dx;
      box.y = box.y + dy;
    }
  }

  function movePlayerToLeft() {
    _move(-1, 0);
  }

  function movePlayerToRight() {
    _move(1, 0);
  }

  function movePlayerToUp() {
    _move(0, -1);
  }

  function movePlayerToDown() {
    _move(0, 1);
  }
  return {
    player,
    movePlayerToLeft,
    movePlayerToRight,
    movePlayerToUp,
    movePlayerToDown,
  };
});
