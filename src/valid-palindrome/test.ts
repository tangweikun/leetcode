import { isPalindromeStr } from '.'

describe('isPalindromeStr-true', () => {
  it('-->1', () => {
    expect(isPalindromeStr('')).toBe(true)
  })
  it('-->2', () => {
    expect(isPalindromeStr(' ')).toBe(true)
  })
  it('-->3', () => {
    expect(isPalindromeStr('a')).toBe(true)
  })
  it('-->4', () => {
    expect(isPalindromeStr('A man, a plan, a canal: Panama')).toBe(true)
  })
  it('-->5', () => {
    expect(isPalindromeStr('ata,,')).toBe(true)
  })
  it('-->6', () => {
    expect(isPalindromeStr('43,.4,,')).toBe(true)
  })
})

describe('isPalindromeStr-false', () => {
  it('-->1', () => {
    expect(isPalindromeStr('race a car')).toBe(false)
  })
  it('-->2', () => {
    expect(isPalindromeStr('991')).toBe(false)
  })
  it('-->3', () => {
    expect(isPalindromeStr('a t t d')).toBe(false)
  })
})

