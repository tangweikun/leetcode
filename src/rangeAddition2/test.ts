import { maxCount } from '.'

test('Range Addition II', () => {
  expect(maxCount(3, 3, [[2, 2], [3, 3]])).toBe(4)
})

test('Range Addition II', () => {
  expect(maxCount(3, 3, [[2, 2], [3, 3], [1, 1]])).toBe(1)
})

test('Range Addition II', () => {
  expect(maxCount(3, 3, [[2, 2], [3, 3], [2, 2]])).toBe(4)
})

test('Range Addition II', () => {
  expect(maxCount(3, 4, [[4, 4], [5, 5]])).toBe(12)
})

test('Range Addition II', () => {
  expect(maxCount(3, 4, [[2, 4], [5, 3]])).toBe(6)
})
