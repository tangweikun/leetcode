import { listInsert } from '.'

test('list insert', () => {
  expect(listInsert([1, 2, 3, 5], 3, 'inserted')).toEqual([1, 2, 3, 'inserted', 5])
})

test('list insert', () => {
  expect(listInsert([1, 2, 3, 5], 0, 'inserted')).toEqual(['inserted', 1, 2, 3, 5])
})

test('list insert', () => {
  expect(listInsert([1, 2, 3, 5], -1, 'inserted')).toEqual([1, 2, 3, 5])
})

test('list insert', () => {
  expect(listInsert([1, 2, 3, 5], 5, 'inserted')).toEqual([1, 2, 3, 5])
})
