import { isContainsDuplicate2 } from '.'

test('isContainsDuplicate2-1', () => {
  expect(isContainsDuplicate2([1, 1, 2], 2)).toBe(true)
})

test('isContainsDuplicate2-2', () => {
  expect(isContainsDuplicate2([], 1)).toBe(false)
})

test('isContainsDuplicate2-3', () => {
  expect(isContainsDuplicate2([1, 3, 2, 1, 4, 1], 1)).toBe(false)
})

test('isContainsDuplicate2-4', () => {
  expect(isContainsDuplicate2([1, 3, 2], 0)).toBe(false)
})

test('isContainsDuplicate2-5', () => {
  expect(isContainsDuplicate2([1, 0, 2, 0], 2)).toBe(true)
})

test('isContainsDuplicate2-6', () => {
  expect(isContainsDuplicate2([1, -3, 2, -3], 2)).toBe(true)
})

test('isContainsDuplicate2-7', () => {
  expect(isContainsDuplicate2([1, -3, 2, -3, 4, 4], 1)).toBe(true)
})

test('isContainsDuplicate2-8', () => {
  expect(isContainsDuplicate2([-1, -1], 1)).toBe(true)
})
