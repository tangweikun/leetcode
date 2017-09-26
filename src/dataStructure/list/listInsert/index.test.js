import test from 'ava'
import { listInsert } from '.'

test(t => {
  const result = listInsert([1, 2, 3, 5], 3, 'inserted')
  t.deepEqual(result, [1, 2, 3, 'inserted', 5])
})

test(t => {
  const result = listInsert([1, 2, 3, 5], 0, 'inserted')
  t.deepEqual(result, ['inserted', 1, 2, 3, 5])
})

test(t => {
  const result = listInsert([1, 2, 3, 5], -1, 'inserted')
  t.deepEqual(result, [1, 2, 3, 5])
})

test(t => {
  const result = listInsert([1, 2, 3, 5], 5, 'inserted')
  t.deepEqual(result, [1, 2, 3, 5])
})
