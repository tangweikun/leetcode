import test from 'ava'

import { convertFunctionNameToCamelCase } from './'

test(t => {
  const result = convertFunctionNameToCamelCase('get_user_id')
  t.deepEqual(result, 'getUserId')
})

test(t => {
  const result = convertFunctionNameToCamelCase('get__user_id')
  t.deepEqual(result, 'getUserId')
})

test(t => {
  const result = convertFunctionNameToCamelCase('_get__user_id')
  t.deepEqual(result, 'getUserId')
})

test(t => {
  const result = convertFunctionNameToCamelCase('_get__user_id_')
  t.deepEqual(result, 'getUserId')
})
