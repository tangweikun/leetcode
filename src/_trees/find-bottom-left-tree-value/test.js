import { TREE_1, TREE_3, TREE_7, TREE_8, TREE_10 } from '../_testData'
import { findBottomLeftValue } from '.'

test('findBottomLeftValue', () => {
  expect(findBottomLeftValue(TREE_1)).toBe(5)
})

test('findBottomLeftValue', () => {
  expect(findBottomLeftValue(TREE_3)).toBe(3)
})

test('findBottomLeftValue', () => {
  expect(findBottomLeftValue(TREE_7)).toBe(7)
})

test('findBottomLeftValue', () => {
  expect(findBottomLeftValue(TREE_8)).toBe(1)
})

test('findBottomLeftValue', () => {
  expect(findBottomLeftValue(TREE_10)).toBe(0)
})
