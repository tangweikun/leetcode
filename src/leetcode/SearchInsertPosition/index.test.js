import test from 'ava'
import { searchInsert } from '.'

const nums = [1, 3, 5, 6]

test(t => {
  const result = searchInsert(nums, 5)
  t.deepEqual(result, 2)
})

test(t => {
  const result = searchInsert(nums, 2)
  t.deepEqual(result, 1)
})

test(t => {
  const result = searchInsert(nums, 7)
  t.deepEqual(result, 4)
})

test(t => {
  const result = searchInsert(nums, 0)
  t.deepEqual(result, 0)
})

test(t => {
  const result = searchInsert(nums, 8)
  t.deepEqual(result, 4)
})

test(t => {
  const result = searchInsert([1], 2)
  t.deepEqual(result, 1)
})
