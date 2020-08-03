import { rob } from '.'
import { TREE_1, TREE_3, TREE_5, TREE_7, TREE_9 } from '../_testData'

test('HouseRobber3', () => {
  expect(rob(TREE_1)).toBe(8)
})

test('HouseRobber3', () => {
  expect(rob(TREE_3)).toBe(23)
})

test('HouseRobber3', () => {
  expect(rob(TREE_5)).toBe(0)
})

test('HouseRobber3', () => {
  expect(rob(TREE_7)).toBe(18)
})

test('HouseRobber3', () => {
  expect(rob(TREE_9)).toBe(4)
})
