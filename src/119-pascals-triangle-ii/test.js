import { getRow } from '.'

test('PascalsTriangle', () => {
  expect(getRow(0)).toEqual([1])
})

test('PascalsTriangle', () => {
  expect(getRow(1)).toEqual([1, 1])
})

test('PascalsTriangle', () => {
  expect(getRow(2)).toEqual([1, 2, 1])
})

test('PascalsTriangle', () => {
  expect(getRow(4)).toEqual([1, 4, 6, 4, 1])
})

test('PascalsTriangle', () => {
  expect(getRow(5)).toEqual([1, 5, 10, 10, 5, 1])
})
