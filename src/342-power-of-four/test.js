import { isPowerOfFour } from '.'

describe('isPowerOfFour-->true', () => {
  it('-->1', () => {
    expect(isPowerOfFour(1)).toBe(true)
  })
  it('-->2', () => {
    expect(isPowerOfFour(4)).toBe(true)
  })
  it('-->3', () => {
    expect(isPowerOfFour(64)).toBe(true)
  })
})

describe('isPowerOfFour-->false', () => {
  it('-->1', () => {
    expect(isPowerOfFour(8)).toBe(false)
  })
  it('-->2', () => {
    expect(isPowerOfFour(-16)).toBe(false)
  })
  it('-->3', () => {
    expect(isPowerOfFour(-9)).toBe(false)
  })
  it('-->4', () => {
    expect(isPowerOfFour(0)).toBe(false)
  })
})
