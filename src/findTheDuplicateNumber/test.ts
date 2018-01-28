import { findDuplicate } from '.'

test('FindDuplicateNumber-1', () => {
  expect(findDuplicate([1, 2, 2, 4, 3])).toEqual(2)
})

test('FindDuplicateNumber-2', () => {
  expect(findDuplicate([2, 3, 4, 1, 1])).toEqual(1)
})

test('FindDuplicateNumber-3', () => {
  expect(findDuplicate([2, 4, 3, 5, 4, 1])).toEqual(4)
})

test('FindDuplicateNumber-4', () => {
  expect(findDuplicate([1, 1, 4, 3, 2])).toEqual(1)
})

test('FindDuplicateNumber-5', () => {
  expect(findDuplicate([1, 1])).toEqual(1)
})

test('FindDuplicateNumber-6', () => {
  expect(findDuplicate([2, 2, 2, 2, 2])).toEqual(2)
})
