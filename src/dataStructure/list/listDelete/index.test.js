import test from 'ava'
import { listDelete } from '.'

test(t => {
  const result = listDelete([1, 2, 3, 5], 3)
  t.deepEqual(result, [1, 2, 3])
})

test(t => {
  const result = listDelete([1, 2, 3, 5], 0)
  t.deepEqual(result, [2, 3, 5])
})

test(t => {
  const result = listDelete([1, 2, 3, 5], -1)
  t.deepEqual(result, [1, 2, 3, 5])
})

test(t => {
  const result = listDelete([1, 2, 3, 5], 5)
  t.deepEqual(result, [1, 2, 3, 5])
})

test(t => {
  const result = listDelete([1, 2, 3, 5], 1)
  t.deepEqual(result, [1, 3, 5])
})
