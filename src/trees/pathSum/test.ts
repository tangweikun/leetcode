import { TREE_1, TREE_3, TREE_5 } from '../_testData'
import { hasPathSum } from '.'

test('hasPathSum', () => {
  expect(hasPathSum(TREE_1, 8)).toBe(true)
  expect(hasPathSum(TREE_1, 11)).toBe(false)
})

test('hasPathSum', () => {
  expect(hasPathSum(TREE_3, 10)).toBe(false)
  expect(hasPathSum(TREE_3, 11)).toBe(true)
  expect(hasPathSum(TREE_3, 9)).toBe(false)
})

test('hasPathSum', () => {
  expect(hasPathSum(TREE_5, 0)).toBe(true)
  expect(hasPathSum(TREE_5, 1)).toBe(false)
})
