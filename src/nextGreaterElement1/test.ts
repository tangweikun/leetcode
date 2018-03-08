import { nextGreaterElement } from '.'

test('nextGreaterElement-1', () => {
  expect(nextGreaterElement([], [])).toEqual([])
})

test('nextGreaterElement-2', () => {
  expect(nextGreaterElement([4, 1, 2], [1, 3, 4, 2])).toEqual([-1, 3, -1])
})

test('nextGreaterElement-1', () => {
  expect(nextGreaterElement([2, 4], [1, 2, 3, 4])).toEqual([3, -1])
})

test('nextGreaterElement-1', () => {
  expect(nextGreaterElement([2, 5], [2, 1, 5, 6])).toEqual([5, 6])
})

test('nextGreaterElement-1', () => {
  expect(nextGreaterElement([6, 3], [2, 3, 2, 6, 7])).toEqual([7, 6])
})
