import { isContainsDuplicate } from '.'

test('isContainsDuplicate-1', () => {
  expect(isContainsDuplicate([1, 1, 2])).toBe(true)
})

test('isContainsDuplicate-2', () => {
  expect(isContainsDuplicate([])).toBe(false)
})

test('isContainsDuplicate-3', () => {
  expect(isContainsDuplicate([1, 3, 2, 1, 4, 1])).toBe(true)
})

test('isContainsDuplicate-4', () => {
  expect(isContainsDuplicate([1, 3, 2])).toBe(false)
})

test('isContainsDuplicate-5', () => {
  expect(isContainsDuplicate([1, 0, 2, 0])).toBe(true)
})

test('isContainsDuplicate-6', () => {
  expect(isContainsDuplicate([1, -3, 2, -3])).toBe(true)
})
