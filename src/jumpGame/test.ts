import { canJump } from '.'

describe('JumpGame-true', () => {
  it('-->1', () => {
    expect(canJump([2, 3, 1, 1, 4])).toBe(true)
  })
  it('-->2', () => {
    expect(canJump([1, 2, 3, 0, 0, 1])).toBe(true)
  })
  it('-->3', () => {
    expect(canJump([1, 2, 0, 1, 0])).toBe(true)
  })
  it('-->4', () => {
    expect(canJump([5, 0, 1, 1, 0, 1])).toBe(true)
  })
  it('-->5', () => {
    expect(canJump([5, 0, 4, 0, 0, 0, 0])).toBe(true)
  })
})

describe('JumpGame-false', () => {
  it('-->1', () => {
    expect(canJump([0, 3, 1])).toBe(false)
  })
  it('-->2', () => {
    expect(canJump([1, 0, 3])).toBe(false)
  })
  it('-->3', () => {
    expect(canJump([1, 2, 0, 1, 0, 0])).toBe(false)
  })
})
