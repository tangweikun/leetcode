import { isPowerOf2 } from '.'

describe('isPowerOf2-->true', () => {
  it('-->1', () => {
    expect(isPowerOf2(1)).toBe(true)
  })
  it('-->2', () => {
    expect(isPowerOf2(2)).toBe(true)
  })
  it('-->3', () => {
    expect(isPowerOf2(32)).toBe(true)
  })
})

describe('isPowerOf2-->false', () => {
  it('-->4', () => {
    expect(isPowerOf2(3)).toBe(false)
  })
  it('-->5', () => {
    expect(isPowerOf2(6)).toBe(false)
  })
  it('-->6', () => {
    expect(isPowerOf2(18)).toBe(false)
  })
  it('-->7', () => {
    expect(isPowerOf2(-4)).toBe(false)
  })
  it('-->8', () => {
    expect(isPowerOf2(0)).toBe(false)
  })
})
