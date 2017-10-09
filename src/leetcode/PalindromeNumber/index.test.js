import test from 'ava'
import { isPalindrome } from '.'

test(t => {
  const result = isPalindrome(1)
  t.deepEqual(result, true)
})

test(t => {
  const result = isPalindrome(11)
  t.deepEqual(result, true)
})

test(t => {
  const result = isPalindrome(111)
  t.deepEqual(result, true)
})

test(t => {
  const result = isPalindrome(121)
  t.deepEqual(result, true)
})

test(t => {
  const result = isPalindrome(1221)
  t.deepEqual(result, true)
})

test(t => {
  const result = isPalindrome(12321)
  t.deepEqual(result, true)
})

test(t => {
  const result = isPalindrome(1232)
  t.deepEqual(result, false)
})

test(t => {
  const result = isPalindrome(123)
  t.deepEqual(result, false)
})

test(t => {
  const result = isPalindrome(-1)
  t.deepEqual(result, false)
})
