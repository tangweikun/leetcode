import { isHappyNumber } from '.'

describe('isHappyNumber-true', () => {
  it('-->1', () => {
    expect(isHappyNumber(1)).toBe(true)
  })
  it('-->2', () => {
    expect(isHappyNumber(7)).toBe(true)
  })
  it('-->3', () => {
    expect(isHappyNumber(19)).toBe(true)
  })
})

describe('isHappyNumber-false', () => {
  it('-->1', () => {
    expect(isHappyNumber(2)).toBe(false)
  })
  it('-->2', () => {
    expect(isHappyNumber(4)).toBe(false)
  })
  it('-->3', () => {
    expect(isHappyNumber(5)).toBe(false)
  })
  it('-->4', () => {
    expect(isHappyNumber(6)).toBe(false)
  })
  it('-->5', () => {
    expect(isHappyNumber(8)).toBe(false)
  })
  it('-->6', () => {
    expect(isHappyNumber(9)).toBe(false)
  })
})
