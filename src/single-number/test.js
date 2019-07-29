import { singleNumber } from '.'

test('singleNumber-1', () => {
  expect(singleNumber([1, 2, 3, 3, 2])).toBe(1)
})

test('singleNumber-2', () => {
  expect(singleNumber([0, 1, 3, 3, 0])).toBe(1)
})

test('singleNumber-3', () => {
  expect(singleNumber([1, 4, 9, 1, 4])).toBe(9)
})

test('singleNumber-4', () => {
  expect(singleNumber([1, 1, 2, 2, 9])).toBe(9)
})

test('singleNumber-5', () => {
  expect(singleNumber([1, 2, 2, 3, 3])).toBe(1)
})

