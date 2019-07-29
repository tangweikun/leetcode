import { plusOne } from '.'

test('plusOne-1', () => {
  expect(plusOne([0])).toEqual([1])
})

test('plusOne-2', () => {
  expect(plusOne([1, 9])).toEqual([2, 0])
})

test('plusOne-3', () => {
  expect(plusOne([2, 0, 9, 9])).toEqual([2, 1, 0, 0])
})

test('plusOne-4', () => {
  expect(plusOne([9, 9, 9])).toEqual([1, 0, 0, 0])
})
