import { repeatedSubstringPattern } from '.'

describe('RepeatedSubstringPattern-true', () => {
  it('-->1', () => {
    expect(repeatedSubstringPattern('ababcababc')).toBe(true)
  })
  it('-->2', () => {
    expect(repeatedSubstringPattern('abab')).toBe(true)
  })
  it('-->3', () => {
    expect(repeatedSubstringPattern('abcabc')).toBe(true)
  })
  it('-->4', () => {
    expect(repeatedSubstringPattern('abcabcabc')).toBe(true)
  })
  it('-->5', () => {
    expect(repeatedSubstringPattern('abababaabababaabababa')).toBe(true)
  })
  it('-->6', () => {
    expect(repeatedSubstringPattern('abaababaab')).toBe(true)
  })
})

describe('RepeatedSubstringPattern-false', () => {
  it('-->1', () => {
    expect(repeatedSubstringPattern('ab')).toBe(false)
  })
  it('-->2', () => {
    expect(repeatedSubstringPattern('ababc')).toBe(false)
  })
  it('-->3', () => {
    expect(repeatedSubstringPattern('abcabcab')).toBe(false)
  })
  it('-->4', () => {
    expect(repeatedSubstringPattern('a')).toBe(false)
  })
})
