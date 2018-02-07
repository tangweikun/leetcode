import { findShortestSubArray } from '.'

test('DegreeOfAnArray-1', () => {
  expect(findShortestSubArray([1, 2, 2, 3, 1])).toBe(2)
})

test('DegreeOfAnArray-1', () => {
  expect(findShortestSubArray([1, 2, 2, 3, 1, 4, 2])).toBe(6)
})

test('DegreeOfAnArray-1', () => {
  expect(findShortestSubArray([1, 2, 1, 2])).toBe(3)
})

test('DegreeOfAnArray-1', () => {
  expect(findShortestSubArray([1, 2, 3, 2, 1])).toBe(3)
})

test('DegreeOfAnArray-1', () => {
  expect(findShortestSubArray([1, 1, 3, 2, 1, 3, 3, 2])).toBe(5)
})

test('DegreeOfAnArray-1', () => {
  expect(findShortestSubArray([0, 2, 3])).toBe(1)
})

test('DegreeOfAnArray-1', () => {
  expect(findShortestSubArray([1, 1, 3, 3, 3])).toBe(3)
})
