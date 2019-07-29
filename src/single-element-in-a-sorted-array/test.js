import { singleNonDuplicate } from '.'

test('singleNonDuplicate', () => {
  expect(singleNonDuplicate([1, 1, 3, 4, 4])).toBe(3)
})

test('singleNonDuplicate', () => {
  expect(singleNonDuplicate([1, 1, 2, 3, 3, 4, 4, 8, 8])).toBe(2)
})

test('singleNonDuplicate', () => {
  expect(singleNonDuplicate([3, 3, 7, 7, 10, 11, 11])).toBe(10)
})

test('singleNonDuplicate', () => {
  expect(singleNonDuplicate([1, 2, 2])).toBe(1)
})

test('singleNonDuplicate', () => {
  expect(singleNonDuplicate([1, 1, 2, 2, 3])).toBe(3)
})
