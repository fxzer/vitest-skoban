import { describe, expect, it } from 'vitest'
import { usePosition } from '../position'

describe('usePosition', () => {
  it('should return position', () => {
    const STEP = 50
    const pos = { x: 1, y: 2 }
    const { style } = usePosition(pos)
    expect(style.value).toEqual({
      width: `${STEP}px`,
      height: `${STEP}px`,
      left: `${pos.x * STEP}px`,
      top: `${pos.y * STEP}px`,
    })
  })

  it('should update style when reative position changed', () => {
    const STEP = 50
    const pos = reactive({ x: 1, y: 2 })
    const { style } = usePosition(pos)
    expect(style.value).toEqual({
      width: `${STEP}px`,
      height: `${STEP}px`,
      left: `${pos.x * STEP}px`,
      top: `${pos.y * STEP}px`,
    })
    pos.x = 3
    pos.y = 4
    expect(style.value).toEqual({
      width: `${STEP}px`,
      height: `${STEP}px`,
      left: `${pos.x * STEP}px`,
      top: `${pos.y * STEP}px`,
    })
  })
})
