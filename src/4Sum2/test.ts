import { fourSumCount } from '.'

test('fourSumCount', () => {
  expect(fourSumCount([1, 2], [-2, -1], [-1, 2], [0, 2])).toBe(2)
})

test('fourSumCount', () => {
  expect(fourSumCount([1, 2, 3], [-3, -1, -2], [0, 1, -2], [2, 1, 4])).toBe(10)
})

test('fourSumCount', () => {
  expect(fourSumCount([], [], [], [])).toBe(0)
})
