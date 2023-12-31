import { defineStore } from 'pinia'
import { useMapStore, useTargetStore, type Position} from '.'

export interface Box {
  x: number
  y: number
  onTarget?: boolean
}
export const useBoxStore = defineStore('box', () => {
  const { isWall } = useMapStore()
  const boxs: Box[] = reactive([])
  function createBox(x: number, y: number): Box {
    return { x, y }
  }
   
  function addBox(box: Box) {
    boxs.push(box) 
  }

  function findBox(pos: { x: number; y: number }): Box | undefined {
    return boxs.find(box => box.x === pos.x && box.y === pos.y)
  }

  function resetBoxs() {
    boxs.splice(0, boxs.length)
  }

  function isBox(pos: { x: number; y: number }) {
    return !!findBox(pos)
  }

  function generateBoxs(positions: Position[] = []) {
    resetBoxs()
    positions.forEach((position) => addBox(position))
  }

  function moveBox(box: Box, dx: number, dy: number) {
    const boxNextPosition = { x: box.x + dx, y: box.y + dy }
    if (isBox(boxNextPosition) || isWall(boxNextPosition))
      return false
    box.x = box.x + dx
    box.y = box.y + dy

    const { targets } = useTargetStore()
    box.onTarget = targets.some(target => target.x === box.x && target.y === box.y)

    return true
  }

  return { boxs, createBox, addBox, findBox, resetBoxs, moveBox, generateBoxs }
})
