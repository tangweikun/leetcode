import test from 'ava'
import { findUniqueElement } from './'

test(t => {
  const result = findUniqueElement([1, 2, 3, 2, 1])
  t.deepEqual(result, [3])
})

test(t => {
  const result = findUniqueElement([1, 2, 3, 1, 1, 4])
  t.deepEqual(result, [2, 3, 4])
})
