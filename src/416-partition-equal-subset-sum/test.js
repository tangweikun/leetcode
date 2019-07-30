import { canPartition } from '.'

test('Partition Equal Subset Sum', () => {
  expect(canPartition([1, 5, 11, 5])).toBe(true)
})

test('Partition Equal Subset Sum', () => {
  expect(canPartition([1, 2, 3, 5])).toBe(false)
})

test('Partition Equal Subset Sum', () => {
  expect(canPartition([2, 1, 3, 4])).toBe(true)
})

test('Partition Equal Subset Sum', () => {
  expect(canPartition([2, 1, 3, 4, 1])).toBe(false)
})
