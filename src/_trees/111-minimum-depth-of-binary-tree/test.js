import { TREE_1, TREE_3, TREE_4, TREE_5, TREE_8 } from '../_testData'
import { minDepth } from '.'

test('minDepth-1', () => {
  expect(minDepth(TREE_1)).toBe(2)
})

test('minDepth-2', () => {
  expect(minDepth(TREE_3)).toBe(3)
})

test('minDepth-3', () => {
  expect(minDepth(TREE_4)).toBe(3)
})

test('minDepth-4', () => {
  expect(minDepth(TREE_5)).toBe(3)
})

test('minDepth-5', () => {
  expect(minDepth(TREE_8)).toBe(1)
})
