import { moveZeroes } from '.'

test('MoveZeros-1', () => {
  expect(moveZeroes([0, 1, 0, 3, 12])).toEqual([1, 3, 12, 0, 0])
})

test('MoveZeros-2', () => {
  expect(moveZeroes([1, 2, 3])).toEqual([1, 2, 3])
})

test('MoveZeros-3', () => {
  expect(moveZeroes([0, 0])).toEqual([0, 0])
})

test('MoveZeros-4', () => {
  expect(moveZeroes([0, 1, 0, 2, 0, 0, 3])).toEqual([1, 2, 3, 0, 0, 0, 0])
})

test('MoveZeros-5', () => {
  expect(moveZeroes([1, 0, 0, 0, 0, 1])).toEqual([1, 1, 0, 0, 0, 0])
})

test('MoveZeros-6', () => {
  expect(moveZeroes([1, 0, 0, 0])).toEqual([1, 0, 0, 0])
})
