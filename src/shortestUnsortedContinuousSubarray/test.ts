import { findUnsortedSubarray } from '.'

// test('Shortest Unsorted Continuous Subarray', () => {
//   expect(findUnsortedSubarray([])).toBe(0)
// })

test('Shortest Unsorted Continuous Subarray', () => {
  expect(findUnsortedSubarray([2, 6, 4, 8, 10, 9, 15])).toBe(5)
})

test('Shortest Unsorted Continuous Subarray', () => {
  expect(findUnsortedSubarray([4, 8, 10])).toBe(0)
})

test('Shortest Unsorted Continuous Subarray', () => {
  expect(findUnsortedSubarray([2, 1, 4, 5, 3, 6])).toBe(5)
})

test('Shortest Unsorted Continuous Subarray', () => {
  expect(findUnsortedSubarray([3, 2, 1])).toBe(3)
})
