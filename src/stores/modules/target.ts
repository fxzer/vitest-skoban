import { defineStore } from 'pinia'

interface Target {
  x: number
  y: number
}
export const useTargetStore = defineStore('target', () => {
  const targets: Target[] = reactive([])

  function createTarget(x: number, y: number): Target {
    return { x, y }
  }

  function addTarget(Target: Target) {
    targets.push(Target)
  }


  function resetTargets() {
    targets.splice(0, targets.length)
  }


  return { targets, createTarget, addTarget, resetTargets}
})
