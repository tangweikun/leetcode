import { calculate2 } from '.'

test('calculate2', () => {
  expect(calculate2('1 + 1')).toBe(2)
})

test('calculate2', () => {
  expect(calculate2('3+2*2')).toBe(7)
})

test('calculate2', () => {
  expect(calculate2(' 3/2 ')).toBe(1)
})

test('calculate2', () => {
  expect(calculate2(' 3+5 / 2 ')).toBe(5)
})

test('calculate2', () => {
  expect(calculate2('11 + 1')).toBe(12)
})

test('calculate2', () => {
  expect(calculate2(' 2-1 + 2 ')).toBe(3)
})

test('calculate2', () => {
  expect(calculate2('1 + 0-1+0')).toBe(0)
})

test('calculate2', () => {
  expect(calculate2('2147483647')).toBe(2147483647)
})
