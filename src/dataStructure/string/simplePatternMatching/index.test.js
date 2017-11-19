import test from 'ava'
import { getIndex } from '.'

test(t => {
  const result = getIndex('goodjob', 'good', 0)
  t.deepEqual(result, 0)
})

test(t => {
  const result = getIndex('goodjob', 'job', 0)
  t.deepEqual(result, 4)
})

test(t => {
  const result = getIndex('goodjob', 'jot', 0)
  t.deepEqual(result, -1)
})

test(t => {
  const result = getIndex('goodjob', 'o', 2)
  t.deepEqual(result, 2)
})
