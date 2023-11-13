export interface Position {
  x: number
  y: number
}
export function usePosition(pos: Position) {
  const STEP = 50
  const style = computed(() => ({
    width: `${STEP}px`,
    height: `${STEP}px`,
    left: `${pos.x * STEP}px`,
    top: `${pos.y * STEP}px`,
  }))
  return { style }
}
