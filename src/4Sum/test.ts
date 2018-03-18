import { fourSum } from '.'

test('fourSum', () => {
  expect(fourSum([1, 0, -1, 0, -2, 2], 0)).toEqual([
    [-2, -1, 1, 2],
    [-2, 0, 0, 2],
    [-1, 0, 0, 1],
  ])
})

test('fourSum', () => {
  expect(fourSum([0, 0, 0, 0], 0)).toEqual([[0, 0, 0, 0]])
})

test('fourSum', () => {
  expect(fourSum([0, 0, 0, 0], 1)).toEqual([])
})

test('fourSum', () => {
  expect(fourSum([-2, 0, 0, 3, 3, -1], 5)).toEqual([[-1, 0, 3, 3]])
})

test('fourSum', () => {
  expect(fourSum([0, 4, -5, 2, -2, 4, 2, -1, 4], 12)).toEqual([
    [0, 4, 4, 4],
    [2, 2, 4, 4],
  ])
})

test('fourSum', () => {
  expect(fourSum([-1, 0, 1, 2, -1, -4], -1)).toEqual([
    [-4, 0, 1, 2],
    [-1, -1, 0, 1],
  ])
})

test('fourSum', () => {
  expect(fourSum([-3, -2, -1, 0, 0, 1, 2, 3], 0)).toEqual([
    [-3, -2, 2, 3],
    [-3, -1, 1, 3],
    [-3, 0, 0, 3],
    [-3, 0, 1, 2],
    [-2, -1, 0, 3],
    [-2, -1, 1, 2],
    [-2, 0, 0, 2],
    [-1, 0, 0, 1],
  ])
})
