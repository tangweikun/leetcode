import { oddTimes } from './index'

test('oddTimes-1', () => {
  expect(oddTimes([1, 1, 2, 3, 2])).toBe(3)
})

test('oddTimes-2', () => {
  expect(oddTimes([1, 1, 2, 3, 2, 2, 3])).toBe(2)
})

test('oddTimes-3', () => {
  expect(oddTimes([1, 1, 2])).toBe(2)
})
