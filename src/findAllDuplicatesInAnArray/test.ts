import { findDuplicates } from '.'

test('FindAllDuplicatesInAnArray-1', () => {
  expect(findDuplicates([4, 3, 2, 7, 8, 2, 3, 1]).sort()).toEqual([2, 3])
})

test('FindAllDuplicatesInAnArray-2', () => {
  expect(findDuplicates([3, 3, 1]).sort()).toEqual([3])
})

test('FindAllDuplicatesInAnArray-3', () => {
  expect(findDuplicates([1, 4, 4, 1]).sort()).toEqual([1, 4])
})

test('FindAllDuplicatesInAnArray-4', () => {
  expect(findDuplicates([1, 3, 4, 2]).sort()).toEqual([])
})
