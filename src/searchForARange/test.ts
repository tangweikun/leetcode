import { searchRange } from '.'

test('SearchForARange-1', () => {
  expect(searchRange([5, 7, 7, 8, 8, 10], 8)).toEqual([3, 4])
})

test('SearchForARange-2', () => {
  expect(searchRange([8, 10], 8)).toEqual([0, 0])
})

test('SearchForARange-3', () => {
  expect(searchRange([5, 7, 7, 8], 8)).toEqual([3, 3])
})

test('SearchForARange-4', () => {
  expect(searchRange([5, 7, 7, 8, 8, 10], 9)).toEqual([-1, -1])
})
