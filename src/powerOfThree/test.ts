import { isPowerOfThree } from '.'

describe('isPowerOfThree-->true', () => {
  it('-->1', () => {
    expect(isPowerOfThree(1)).toBe(true)
  })
  it('-->2', () => {
    expect(isPowerOfThree(3)).toBe(true)
  })
  it('-->3', () => {
    expect(isPowerOfThree(27)).toBe(true)
  })
})

describe('isPowerOfThree-->false', () => {
  it('-->4', () => {
    expect(isPowerOfThree(6)).toBe(false)
  })
  it('-->5', () => {
    expect(isPowerOfThree(12)).toBe(false)
  })
  it('-->6', () => {
    expect(isPowerOfThree(-9)).toBe(false)
  })
  it('-->7', () => {
    expect(isPowerOfThree(0)).toBe(false)
  })
})
