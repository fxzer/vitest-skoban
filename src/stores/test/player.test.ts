import { beforeEach, afterEach, it, expect, describe, vi } from 'vitest'
import { usePlayerStore } from '..'
import { createPinia, setActivePinia } from 'pinia'

describe('player', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })
  afterEach(() => {
    setActivePinia(undefined)
  })

 it('should move to left',() => {
    const { player, movePlayerToLeft } = usePlayerStore()
    player.x = 1
    player.y = 1
    movePlayerToLeft()
    expect(player.x).toBe(0)
 }) 


})
