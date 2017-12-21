import { listDelete } from '.'

test('list delete', () => {
  expect(listDelete([1, 2, 3, 5], 3)).toEqual([1, 2, 3])
})

test('list delete', () => {
  expect(listDelete([1, 2, 3, 5], 3)).toEqual([1, 2, 3])
})

test('list delete', () => {
  expect(listDelete([1, 2, 3, 5], 0)).toEqual([2, 3, 5])
})

test('list delete', () => {
  expect(listDelete([1, 2, 3, 5], -1)).toEqual([1, 2, 3, 5])
})

test('list delete', () => {
  expect(listDelete([1, 2, 3, 5], 5)).toEqual([1, 2, 3, 5])
})

test('list delete', () => {
  expect(listDelete([1, 2, 3, 5], 1)).toEqual([1, 3, 5])
})
