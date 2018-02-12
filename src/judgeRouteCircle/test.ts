import { judgeCircle } from '.'

describe('JudgeRouteCircle-true', () => {
  it('-->1', () => {
    expect(judgeCircle('LR')).toBe(true)
  })
  it('-->2', () => {
    expect(judgeCircle('RLLR')).toBe(true)
  })
  it('-->3', () => {
    expect(judgeCircle('UUUDLDDR')).toBe(true)
  })
  it('-->4', () => {
    expect(judgeCircle('')).toBe(true)
  })
})

describe('JudgeRouteCircle-false', () => {
  it('-->1', () => {
    expect(judgeCircle('L')).toBe(false)
  })
  it('-->2', () => {
    expect(judgeCircle('RLL')).toBe(false)
  })
  it('-->3', () => {
    expect(judgeCircle('UUUDLDD')).toBe(false)
  })
  it('-->4', () => {
    expect(judgeCircle('U')).toBe(false)
  })
})
