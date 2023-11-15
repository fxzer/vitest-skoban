import { defineStore, storeToRefs } from "pinia";
import { useBoxStore, usePlayerStore, useMapStore, useTargetStore} from ".";
import { gameData } from "~/composables/gameData";
export interface Game {
  level:number
  step:number
  isPassed: boolean
}

export const useGameStore = defineStore("game", () => {
  const { boxs } = storeToRefs(useBoxStore());
  const game: Game = reactive({
    level: 0,
    step: 0,
    isPassed: computed(() => boxs.value.every((box) => box.onTarget)),
  });

  function setupGame() {
    const { setNewMap } = useMapStore();
    const { player } = usePlayerStore();
    const { generateBoxs } = useBoxStore();
    const { generateTargets } = useTargetStore();
    const data = JSON.parse(JSON.stringify(gameData[game.level]));
    setNewMap(data.map);
    player.x = data.player.x;
    player.y = data.player.y;
    generateBoxs(data.boxs);
    generateTargets(data.targets);
  }

  function restart(){
    window.location.reload()
  }

  function nextLevel() {
    game.level++
    game.step = 0
    setupGame()
  }

  return { game, setupGame,nextLevel, restart };
});
