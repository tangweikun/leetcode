import { twoSum2 } from './pro'

test('twoSum2-1', () => {
  expect(twoSum2([2, 7, 11, 15], 9)).toEqual([1, 2])
})

test('twoSum2-2', () => {
  expect(twoSum2([-2, 2, 3, 7], 10)).toEqual([3, 4])
})

test('twoSum2-3', () => {
  expect(twoSum2([2, 7, 8, 15], 15)).toEqual([2, 3])
})

test('twoSum2-4', () => {
  expect(twoSum2([1, 2, 3, 4], 4)).toEqual([1, 3])
})
