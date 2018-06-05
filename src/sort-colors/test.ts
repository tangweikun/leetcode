import { sortColors } from '.'

test('', () => {
  expect(sortColors([1, 2, 0])).toEqual([0, 1, 2])
})

test('', () => {
  expect(sortColors([0, 1, 2, 1])).toEqual([0, 1, 1, 2])
})

test('', () => {
  expect(sortColors([2, 1, 0, 2, 1])).toEqual([0, 1, 1, 2, 2])
})

test('', () => {
  expect(sortColors([0, 1, 2])).toEqual([0, 1, 2])
})

test('', () => {
  expect(sortColors([2, 0, 2, 1, 1, 0])).toEqual([0, 0, 1, 1, 2, 2])
})
