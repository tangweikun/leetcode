import { removeDuplicates2 } from '.'

test('RemoveDuplicatesFromSortedArray2-1', () => {
  expect(removeDuplicates2([1, 1, 1, 2, 2, 3])).toBe(5)
})

test('RemoveDuplicatesFromSortedArray2-2', () => {
  expect(removeDuplicates2([1, 2, 3, 4])).toBe(4)
})

test('RemoveDuplicatesFromSortedArray2-3', () => {
  expect(removeDuplicates2([1, 1, 1, 2, 2, 2, 3])).toBe(5)
})

test('RemoveDuplicatesFromSortedArray2-4', () => {
  expect(removeDuplicates2([1, 1, 1])).toBe(2)
})

test('RemoveDuplicatesFromSortedArray2-5', () => {
  expect(removeDuplicates2([])).toBe(0)
})
