import { defineStore, storeToRefs } from "pinia";
import { useBoxStore, usePlayerStore, useMapStore, useTargetStore} from ".";
import { gameData } from "../../composables/gameData";
export interface Game {
  isPassed: boolean;
}

export const useGameStore = defineStore("game", () => {
  const { boxs } = storeToRefs(useBoxStore());
  const game: Game = reactive({
    isPassed: computed(() => boxs.value.every((box) => box.onTarget)),
  });
  function setupGame() {
    const { setNewMap } = useMapStore();
    const { player } = usePlayerStore();
    const { generateBoxs } = useBoxStore();
    const { generateTargets } = useTargetStore();
    setNewMap(gameData.map);
    player.x = 1;
    player.y = 3;
    generateBoxs(gameData.boxs);
    generateTargets(gameData.targets);
  }

  watch(game, () => {
    if (game.isPassed) congratPass();
  });

  return { game, setupGame };
});
