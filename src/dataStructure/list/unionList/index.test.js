import { unionList } from '.'

test('unionList', () => {
  expect(unionList([1, 2, 3, false], [false, 0, 2, 4, 3, 5])).toEqual([1, 2, 3, false, 0, 4, 5])
})

test('unionList', () => {
  expect(unionList([], [false, 0, 2, 4])).toEqual([false, 0, 2, 4])
})

test('unionList', () => {
  expect(unionList([false, 0, 2, 4], [])).toEqual([false, 0, 2, 4])
})

test('unionList', () => {
  expect(unionList([], [])).toEqual([])
})
