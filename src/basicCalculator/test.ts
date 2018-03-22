import { calculate } from '.'

test('calculate', () => {
  expect(calculate('1 + 1')).toBe(2)
})

test('calculate', () => {
  expect(calculate('11 + 1')).toBe(12)
})

test('calculate', () => {
  expect(calculate(' 2-1 + 2 ')).toBe(3)
})

test('calculate', () => {
  expect(calculate('(1+(4+5+2)-3)+(6+8)')).toBe(23)
})

test('calculate', () => {
  expect(calculate('1 + 0-1+0')).toBe(0)
})

test('calculate', () => {
  expect(calculate('2147483647')).toBe(2147483647)
})
