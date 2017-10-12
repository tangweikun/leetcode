import test from 'ava'
import { longestCommonPrefix } from '.'

test(t => {
  const result = longestCommonPrefix(['twka', 'twk', 'twkb'])
  t.deepEqual(result, 'twk')
})

test(t => {
  const result = longestCommonPrefix(['twk'])
  t.deepEqual(result, 'twk')
})

test(t => {
  const result = longestCommonPrefix([''])
  t.deepEqual(result, '')
})

test(t => {
  const result = longestCommonPrefix(['twk', 'twkb', 'twka'])
  t.deepEqual(result, 'twk')
})

test(t => {
  const result = longestCommonPrefix([])
  t.deepEqual(result, '')
})

test(t => {
  const result = longestCommonPrefix(['a', 'b'])
  t.deepEqual(result, '')
})
