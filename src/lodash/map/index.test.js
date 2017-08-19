import test from 'ava'
import { map } from './'

test(t => {
  const result = map([1, 2, 3, 2, 1])
  t.deepEqual(result, [1, 2, 3, 2, 1])
})

test(t => {
  const result = map([1, 2, 3], item => item + 1)
  t.deepEqual(result, [2, 3, 4])
})

test(t => {
  const result = map([], item => item + 1)
  t.deepEqual(result, [])
})

test(t => {
  const result = map(
    ['a', 'b'],
    (value, key, collection) => `${value}${key}${collection}`,
  )
  t.deepEqual(result, ['a0a,b', 'b1a,b'])
})
