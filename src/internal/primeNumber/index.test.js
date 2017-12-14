import test from 'ava'
import { isPrime } from '.'

test(t => {
  const result = isPrime(2)
  t.deepEqual(result, true)
})

test(t => {
  const result = isPrime(3)
  t.deepEqual(result, true)
})

test(t => {
  const result = isPrime(4)
  t.deepEqual(result, false)
})

test(t => {
  const result = isPrime(5)
  t.deepEqual(result, true)
})

test(t => {
  const result = isPrime(11)
  t.deepEqual(result, true)
})

test(t => {
  const result = isPrime(121)
  t.deepEqual(result, false)
})