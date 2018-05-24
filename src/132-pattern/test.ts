import { find132pattern } from '.'

test('132Pattern-1', () => {
  expect(find132pattern([1, 2])).toBe(false)
})

test('132Pattern-2', () => {
  expect(find132pattern([1, 2, 3, 4])).toBe(false)
})

test('132Pattern-3', () => {
  expect(find132pattern([3, 1, 4, 2])).toBe(true)
})

test('132Pattern-4', () => {
  expect(find132pattern([-1, 3, 2, 0])).toBe(true)
})

test('132Pattern-5', () => {
  expect(find132pattern([3, 5, 0, 3, 4])).toBe(true)
})

test('132Pattern-6', () => {
  expect(find132pattern([1, 3, 2])).toBe(true)
})

test('132Pattern-7', () => {
  expect(find132pattern([1, 0, 1, -4, -3])).toBe(false)
})
