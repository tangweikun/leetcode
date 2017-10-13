import test from 'ava'
import { isValidParentheses } from '.'

test(t => {
  const result = isValidParentheses('()[]{}')
  t.deepEqual(result, true)
})

test(t => {
  const result = isValidParentheses('()')
  t.deepEqual(result, true)
})

test(t => {
  const result = isValidParentheses('{[()]}')
  t.deepEqual(result, true)
})

test(t => {
  const result = isValidParentheses('[{[]}()]')
  t.deepEqual(result, true)
})

test(t => {
  const result = isValidParentheses('')
  t.deepEqual(result, true)
})

test(t => {
  const result = isValidParentheses('{')
  t.deepEqual(result, false)
})

test(t => {
  const result = isValidParentheses('{[])}')
  t.deepEqual(result, false)
})

test(t => {
  const result = isValidParentheses('{[}]')
  t.deepEqual(result, false)
})
