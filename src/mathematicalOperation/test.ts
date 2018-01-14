import { mathematicalOperation } from '.'

describe('mathematicalOperation-addAndSubtract', () => {
  it('-->1', () => {
    expect(mathematicalOperation([1, '+', 12, '+', 10, '+', 1])).toBe(true)
  })
  it('-->2', () => {
    expect(mathematicalOperation([3, '+', 12, '+', 10, '-', 1])).toBe(true)
  })
  it('-->3', () => {
    expect(mathematicalOperation([4, '-', 6, '+', 13, '+', 13])).toBe(true)
  })
  it('-->4', () => {
    expect(mathematicalOperation([13, '-', 1, '-', 1, '+', 13])).toBe(true)
  })
})

describe('mathematicalOperation-multiplyDivide', () => {
  it('-->1', () => {
    expect(mathematicalOperation([24, '/', 2, '+', 1, '+', 11])).toBe(true)
  })
  it('-->2', () => {
    expect(mathematicalOperation([2, '*', 4, '*', 3, '/', 1])).toBe(true)
  })
  it('-->3', () => {
    expect(mathematicalOperation([3, '*', 7, '+', 1, '*', 3])).toBe(true)
  })
  it('-->4', () => {
    expect(mathematicalOperation([12, '*', 2, '-', 4, '+', 4])).toBe(true)
  })
  it('-->5', () => {
    expect(mathematicalOperation([12, '-', 8, '+', 4, '*', 5])).toBe(true)
  })
})

describe('mathematicalOperation-mix', () => {
  it('-->1', () => {
    expect(mathematicalOperation(['(', 10, '+', 2, ')', '*', 2, '/', 1])).toBe(
      true,
    )
  })
  it('-->2', () => {
    expect(mathematicalOperation(['(', 5, '-', 1, '/', 5, ')', '*', 5])).toBe(
      true,
    )
  })
  it('-->3', () => {
    expect(
      mathematicalOperation(['(', 12, '-', '(', 8, '-', 2, ')', ')', '*', 4]),
    ).toBe(true)
  })
  it('-->4', () => {
    expect(
      mathematicalOperation([
        '(',
        1,
        '+',
        2,
        ')',
        '*',
        '(',
        8,
        '/',
        2,
        ')',
        '+',
        '(',
        3,
        '-',
        2,
        ')',
        '*',
        '(',
        2,
        '+',
        3,
        '+',
        3,
        '+',
        4,
        ')',
      ]),
    ).toBe(true)
  })
})

describe('mathematicalOperation-false', () => {
  it('-->1', () => {
    expect(mathematicalOperation(['(', '(', '+', 2, ')', '*', 2, '/', 1])).toBe(
      false,
    )
  })
  it('-->2', () => {
    expect(mathematicalOperation([])).toBe(false)
  })
  it('-->3', () => {
    expect(mathematicalOperation(['(', ')'])).toBe(false)
  })
  it('-->4', () => {
    expect(
      mathematicalOperation([
        '(',
        '+',
        -2,
        ')',
        '*',
        '(',
        '/',
        2,
        ')',
        '+',
        '(',
        3,
        '-',
        2,
        ')',
        '*',
        '(',
        2,
        '+',
        3,
        '+',
        3,
        '+',
        4,
        ')',
      ]),
    ).toBe(false)
  })
  it('-->5', () => {
    expect(mathematicalOperation([0, '/', 0])).toBe(false)
  })
})
