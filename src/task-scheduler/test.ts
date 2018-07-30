import { leastInterval } from '.'

test('', () => {
  expect(leastInterval(['A', 'A', 'A', 'B', 'B', 'B'], 2)).toBe(8)
})

test('', () => {
  expect(leastInterval(['A', 'A', 'A', 'B', 'B', 'C', 'C'], 2)).toBe(7)
})

test('', () => {
  expect(leastInterval(['A', 'A', 'A'], 2)).toBe(7)
})

test('', () => {
  expect(leastInterval(['A', 'A', 'A', 'B', 'B', 'B'], 50)).toBe(104)
})

test('', () => {
  expect(leastInterval(['A', 'B', 'C', 'C'], 2)).toBe(4)
})

test('', () => {
  expect(leastInterval(['A', 'A'], 0)).toBe(2)
})

test('', () => {
  expect(leastInterval(['A', 'A', 'A'], 1)).toBe(5)
})

test('', () => {
  expect(leastInterval(['A', 'A', 'B', 'B', 'C', 'D'], 2)).toBe(6)
})
