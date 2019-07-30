import { missingNumber } from '.'

test('MissingNumber-1', () => {
  expect(missingNumber([3, 0, 1])).toBe(2)
})

test('MissingNumber-1', () => {
  expect(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])).toBe(8)
})

test('MissingNumber-1', () => {
  expect(missingNumber([3, 0, 1, 4, 2])).toBe(5)
})

test('MissingNumber-1', () => {
  expect(missingNumber([3, 0, 1, 5, 2])).toBe(4)
})
