import test from 'ava'
import { unionList } from '.'

test(t => {
  const result = unionList([1, 2, 3, false], [false, 0, 2, 4, 3, 5])
  t.deepEqual(result, [1, 2, 3, false, 0, 4, 5])
})

test(t => {
  const result = unionList([], [false, 0, 2, 4])
  t.deepEqual(result, [false, 0, 2, 4])
})

test(t => {
  const result = unionList([false, 0, 2, 4], [])
  t.deepEqual(result, [false, 0, 2, 4])
})

test(t => {
  const result = unionList([], [])
  t.deepEqual(result, [])
})
