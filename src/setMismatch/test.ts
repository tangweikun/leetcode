import { findErrorNums } from '.'

test('SetMismatch-1', () => {
  expect(findErrorNums([1, 2, 2, 4])).toEqual([2, 3])
})

test('SetMismatch-2', () => {
  expect(findErrorNums([2, 3, 4, 1, 1])).toEqual([1, 5])
})

test('SetMismatch-3', () => {
  expect(findErrorNums([2, 4, 3, 5, 4])).toEqual([4, 1])
})

test('SetMismatch-4', () => {
  expect(findErrorNums([1, 1, 4, 3])).toEqual([1, 2])
})

test('SetMismatch-5', () => {
  expect(findErrorNums([1, 1])).toEqual([1, 2])
})

test('SetMismatch-6', () => {
  expect(findErrorNums([2, 2])).toEqual([2, 1])
})
