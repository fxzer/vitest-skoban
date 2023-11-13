import { beforeEach, describe, expect, it } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import { usePlayerStore } from '~/stores'

// import { useMove } from '~/composables/move'
describe.todo('player-keyboard', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('should move to left when press up ArrowLeft', () => {
    const { player } = usePlayerStore()
    player.x = 1
    player.y = 1
    // useMove()
    window.dispatchEvent(new KeyboardEvent('keyup', { code: 'ArrowLeft' }))
    expect(player.x).toBe(0)
  })

  // it('should move to left when press up ArrowRight', () => {
  //   const { player } = usePlayerStore()
  //   player.x = 1
  //   player.y = 1
  //   useMove()
  //  window.dispatchEvent(new KeyboardEvent('keyup', { code: 'ArrowRight' }))
  //  expect(player.x).toBe(2)
  // })

  // it('should move to left when press up ArrowUp', () => {
  //   const { player } = usePlayerStore()
  //   player.x = 1
  //   player.y = 1
  //   useMove()
  //  window.dispatchEvent(new KeyboardEvent('keyup', { code: 'ArrowUp' }))
  //  expect(player.y).toBe(0)
  // })

  // it('should move to left when press up ArrowDown', () => {
  //   const { player } = usePlayerStore()
  //   player.x = 1
  //   player.y = 1
  //   useMove()
  //  window.dispatchEvent(new KeyboardEvent('keyup', { code: 'ArrowDown' }))
  //  expect(player.y).toBe(2)
  // })
})
