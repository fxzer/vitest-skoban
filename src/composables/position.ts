import { usePlayerStore } from '~/stores'

export function usePosition() {
  const STEP = 50
  const { player } = usePlayerStore()
  const style = computed(() => ({
    width: `${STEP}px`,
    height: `${STEP}px`,
    left: `${player.x * STEP}px`,
    top: `${player.y * STEP}px`,
  }))
  return { style }
}
