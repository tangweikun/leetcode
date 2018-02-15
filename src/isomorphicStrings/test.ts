import { isIsomorphic } from '.'

describe('IsomorphicStrings-true', () => {
  it('-->1', () => {
    expect(isIsomorphic('', '')).toBe(true)
  })
  it('-->2', () => {
    expect(isIsomorphic('egg', 'add')).toBe(true)
  })
  it('-->3', () => {
    expect(isIsomorphic('paper', 'title')).toBe(true)
  })
  it('-->4', () => {
    expect(isIsomorphic('abc', 'cba')).toBe(true)
  })
})

describe('IsomorphicStrings-false', () => {
  it('-->1', () => {
    expect(isIsomorphic('aabb', 'aaaa')).toBe(false)
  })
  it('-->2', () => {
    expect(isIsomorphic('foo', 'bar')).toBe(false)
  })
  it('-->3', () => {
    expect(isIsomorphic('aaaa', 'aabb')).toBe(false)
  })
})
