import { fractionCalculate } from '.'

describe('fractionCalculate-two-integer', () => {
  it('-->1', () => {
    expect(fractionCalculate([1], [2], '+')).toEqual([3])
  })
  it('-->2', () => {
    expect(fractionCalculate([1], [2], '-')).toEqual([-1])
  })
  it('-->3', () => {
    expect(fractionCalculate([1], [2], '*')).toEqual([2])
  })
  it('-->4', () => {
    expect(fractionCalculate([1], [2], '/')).toEqual([0, 1, 2])
  })
})

describe('fractionCalculate-one-integer', () => {
  it('-->1', () => {
    expect(fractionCalculate([1, 1, 2], [2], '+')).toEqual([3, 1, 2])
  })
  it('-->2', () => {
    expect(fractionCalculate([1, 1, 2], [2], '-')).toEqual([0, -1, 2])
  })
  it('-->3', () => {
    expect(fractionCalculate([1, 1, 2], [2], '*')).toEqual([3])
  })
  it('-->4', () => {
    expect(fractionCalculate([1, 1, 2], [2], '/')).toEqual([0, 3, 4])
  })
})

describe('fractionCalculate-zero-integer', () => {
  it('-->1', () => {
    expect(fractionCalculate([1, 1, 2], [0, 1, 3], '+')).toEqual([1, 5, 6])
  })
  it('-->2', () => {
    expect(fractionCalculate([1, 1, 2], [0, 1, 3], '-')).toEqual([1, 1, 6])
  })
  it('-->3', () => {
    expect(fractionCalculate([1, 1, 2], [0, 1, 3], '*')).toEqual([0, 1, 2])
  })
  it('-->4', () => {
    expect(fractionCalculate([1, 1, 2], [0, 1, 3], '/')).toEqual([4, 1, 2])
  })
  it('-->5', () => {
    expect(fractionCalculate([-1, -1, 2], [0, 1, 3], '/')).toEqual([-4, -1, 2])
  })
  it('-->6', () => {
    expect(fractionCalculate([-1, -1, 2], [0, -1, 3], '/')).toEqual([4, 1, 2])
  })
  it('-->7', () => {
    expect(fractionCalculate([-1, -1, 2], [0, -1, 3], '+')).toEqual([-1, -5, 6])
  })
  it('-->8', () => {
    expect(fractionCalculate([-10], [0, -3, 8], '+')).toEqual([-10, -3, 8])
  })
  it('-->9', () => {
    expect(fractionCalculate([0], [0], '+')).toEqual([0])
  })
  it('-->10', () => {
    expect(fractionCalculate([0, -2, 3], [0, -1, 3], '+')).toEqual([-1])
  })
})
