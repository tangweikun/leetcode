import { TREE_12, TREE_10, TREE_9 } from '../_testData'
import { isSymmetric } from '.'

test('isSymmetric', () => {
  expect(isSymmetric(TREE_12)).toBe(true)
})

test('isSymmetric', () => {
  expect(isSymmetric(TREE_10)).toBe(false)
})

test('isSymmetric', () => {
  expect(isSymmetric(TREE_9)).toBe(true)
})
