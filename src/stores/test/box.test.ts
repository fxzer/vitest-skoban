import { beforeEach, afterEach, it, expect, describe, vi } from "vitest";
import { createPinia, setActivePinia } from "pinia";
import { usePlayerStore, useBoxStore } from "~/stores";
describe("box", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("should add a box", () => {
    const { boxs, createBox, addBox } = useBoxStore();
    const box = createBox(1, 1);
    addBox(box);
    expect(boxs.length).toBe(1);
  });

  it('should push a box to left', () => {
      const { boxs, createBox, addBox } = useBoxStore();
      addBox(createBox(2, 1));
      const { player, movePlayerToLeft } = usePlayerStore()
      player.x = 3
      player.y = 1
      movePlayerToLeft()
      expect(player.x).toBe(2)
      expect(boxs[0].x).toBe(1)
  })
  
  it('should push a box to right', () => {
    const { boxs, createBox, addBox } = useBoxStore();
    addBox(createBox(2, 1));
    const { player, movePlayerToRight } = usePlayerStore()
    player.x = 1
    player.y = 1
    movePlayerToRight()
    expect(player.x).toBe(2)
    expect(boxs[0].x).toBe(3)
})

it('should push a box to up', () => {
    const { boxs, createBox, addBox } = useBoxStore();
    addBox(createBox(1, 2));
    const { player, movePlayerToUp } = usePlayerStore()
    player.x = 1
    player.y = 3
    movePlayerToUp()
    expect(player.y).toBe(2)
    expect(boxs[0].y).toBe(1)
})

it('should push a box to down', () => {
    const { boxs, createBox, addBox } = useBoxStore();
    addBox(createBox(1, 2));
    const { player, movePlayerToDown } = usePlayerStore()
    player.x = 1
    player.y = 1
    movePlayerToDown()
    expect(player.y).toBe(2)
    expect(boxs[0].y).toBe(3)
})
});
