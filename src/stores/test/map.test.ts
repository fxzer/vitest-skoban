import { beforeEach, afterEach, it, expect, describe, vi } from 'vitest'

import { createPinia, setActivePinia } from 'pinia'
import { useMapStore } from '~/stores'

beforeEach(() => {
 setActivePinia(createPinia()) 
})
describe('map', () => {
  it('setmap shuold effect', () => {
    const { map, setNewMap } = useMapStore()
    const newMap = [
      [1, 1, 1, 1, 1],
      [1, 2, 2, 2, 1],
      [1, 2, 2, 2, 1],
      [1, 2, 2, 2, 1],
      [1, 1, 1, 1, 1],
    ]
    setNewMap(newMap)
    expect(map).toEqual(newMap)
  })
  
})
