import { thirdMax } from '.'

test('thirdMax', () => {
  expect(thirdMax([3, 2, 1])).toBe(1)
})

test('thirdMax', () => {
  expect(thirdMax([1, 2])).toBe(2)
})

test('thirdMax', () => {
  expect(thirdMax([2, 2, 3, 1])).toBe(1)
})

test('thirdMax', () => {
  expect(thirdMax([3, 2, 1, 1, 3])).toBe(1)
})

test('thirdMax', () => {
  expect(thirdMax([3, -2, 1])).toBe(-2)
})

test('thirdMax', () => {
  expect(thirdMax([3, 3, 4, 3, 4, 3, 0, 3, 3])).toBe(0)
})
