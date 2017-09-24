import test from 'ava'
import { swapPosition } from '.'

test(t => {
  const result = swapPosition(['a', 'b', 'c', 'd'], 0, 3)
  t.deepEqual(result, ['d', 'b', 'c', 'a'])
})

test(t => {
  const result = swapPosition(['a', 'b', 'c', 'd'], 1, 3)
  t.deepEqual(result, ['a', 'd', 'c', 'b'])
})

test(t => {
  const result = swapPosition(['a', 'b', 'c', 'd'], 1, 1)
  t.deepEqual(result, ['a', 'b', 'c', 'd'])
})
