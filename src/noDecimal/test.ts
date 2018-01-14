import { noDecimal } from '.'

describe('noDecimal-two-integer', () => {
  it('-->1', () => {
    expect(noDecimal([1], [2], '+')).toEqual([3])
  })
  it('-->2', () => {
    expect(noDecimal([1], [2], '-')).toEqual([-1])
  })
  it('-->3', () => {
    expect(noDecimal([1], [2], '*')).toEqual([2])
  })
  it('-->4', () => {
    expect(noDecimal([1], [2], '/')).toEqual([0, 1, 2])
  })
})

describe('noDecimal-one-integer', () => {
  it('-->1', () => {
    expect(noDecimal([1, 1, 2], [2], '+')).toEqual([3, 1, 2])
  })
  it('-->2', () => {
    expect(noDecimal([1, 1, 2], [2], '-')).toEqual([0, -1, 2])
  })
  it('-->3', () => {
    expect(noDecimal([1, 1, 2], [2], '*')).toEqual([3])
  })
  it('-->4', () => {
    expect(noDecimal([1, 1, 2], [2], '/')).toEqual([0, 3, 4])
  })
})

describe('noDecimal-zero-integer', () => {
  it('-->1', () => {
    expect(noDecimal([1, 1, 2], [0, 1, 3], '+')).toEqual([1, 5, 6])
  })
  it('-->2', () => {
    expect(noDecimal([1, 1, 2], [0, 1, 3], '-')).toEqual([1, 1, 6])
  })
  it('-->3', () => {
    expect(noDecimal([1, 1, 2], [0, 1, 3], '*')).toEqual([0, 1, 2])
  })
  it('-->4', () => {
    expect(noDecimal([1, 1, 2], [0, 1, 3], '/')).toEqual([4, 1, 2])
  })
  it('-->5', () => {
    expect(noDecimal([-1, 1, 2], [0, 1, 3], '/')).toEqual([-4, -1, 2])
  })
  it('-->6', () => {
    expect(noDecimal([-1, 1, 2], [0, -1, 3], '/')).toEqual([4, 1, 2])
  })
  it('-->7', () => {
    expect(noDecimal([-1, 1, 2], [0, -1, 3], '+')).toEqual([-1, -5, 6])
  })
  it('-->8', () => {
    expect(noDecimal([-10], [0, -3, 8], '+')).toEqual([-10, -3, 8])
  })
})
