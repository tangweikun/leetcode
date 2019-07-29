import { minCostClimbingStairs } from '.'

test('MinCostClimbingStairs-1', () => {
  expect(minCostClimbingStairs([10])).toBe(0)
})

test('MinCostClimbingStairs-1', () => {
  expect(minCostClimbingStairs([0, 0, 0, 0])).toBe(0)
})

test('MinCostClimbingStairs-2', () => {
  expect(minCostClimbingStairs([10, 15, 20])).toBe(15)
})

test('MinCostClimbingStairs-3', () => {
  expect(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1])).toBe(6)
})

test('MinCostClimbingStairs-4', () => {
  expect(minCostClimbingStairs([2, 1, 1, 2, 1, 2])).toBe(3)
})

test('MinCostClimbingStairs-5', () => {
  expect(minCostClimbingStairs([1, 1, 1, 1])).toBe(2)
})

test('MinCostClimbingStairs-6', () => {
  expect(minCostClimbingStairs([1, 2, 4, 1])).toBe(3)
})

test('MinCostClimbingStairs-7', () => {
  expect(minCostClimbingStairs([1, 4, 5, 3, 1])).toBe(7)
})
