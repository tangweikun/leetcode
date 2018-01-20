import { isContainDuplicate } from '.'

test('containDuplicate-1', () => {
  expect(isContainDuplicate([1, 1, 2])).toBe(true)
})

test('containDuplicate-2', () => {
  expect(isContainDuplicate([])).toBe(false)
})

test('containDuplicate-3', () => {
  expect(isContainDuplicate([1, 3, 2, 1, 4, 1])).toBe(true)
})

test('containDuplicate-4', () => {
  expect(isContainDuplicate([1, 3, 2])).toBe(false)
})

test('containDuplicate-5', () => {
  expect(isContainDuplicate([1, 0, 2, 0])).toBe(true)
})

test('containDuplicate-6', () => {
  expect(isContainDuplicate([1, -3, 2, -3])).toBe(true)
})
