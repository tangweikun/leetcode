import { findUniqueElement } from './'

test('findUniqueElement', () => {
  expect(findUniqueElement([1, 2, 3, 2, 1])).toEqual([3])
})

test('findUniqueElement', () => {
  expect(findUniqueElement([1, 2, 3, 1, 1, 4])).toEqual([2, 3, 4])
})
