import { TREE_1, TREE_3, TREE_6 } from '../_testData'
import { largestValues } from '.'

test('largestValues', () => {
  expect(largestValues(TREE_1)).toEqual([1, 3, 5])
})

test('largestValues', () => {
  expect(largestValues(TREE_3)).toEqual([8, 4, 6])
})

test('largestValues', () => {
  expect(largestValues(TREE_6)).toEqual([11])
})
