import { searchInsert } from '.'

const nums = [1, 3, 5, 6]

test('searchInsert', () => {
  expect(searchInsert(nums, 5)).toBe(2)
})

test('searchInsert', () => {
  expect(searchInsert(nums, 2)).toBe(1)
})

test('searchInsert', () => {
  expect(searchInsert(nums, 7)).toBe(4)
})

test('searchInsert', () => {
  expect(searchInsert(nums, 0)).toBe(0)
})

test('searchInsert', () => {
  expect(searchInsert(nums, 8)).toBe(4)
})

test('searchInsert', () => {
  expect(searchInsert([1], 2)).toBe(1)
})

test('searchInsert', () => {
  expect(searchInsert([1], 1)).toBe(0)
})

test('searchInsert', () => {
  expect(searchInsert([1], 2)).toBe(1)
})
