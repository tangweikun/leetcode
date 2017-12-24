import { convertFunctionNameToCamelCase } from './'

test('convertFunctionNameToCamelCase', () => {
  expect(convertFunctionNameToCamelCase('get_user_id')).toBe('getUserId')
})

test('convertFunctionNameToCamelCase', () => {
  expect(convertFunctionNameToCamelCase('get__user_id')).toBe('getUserId')
})

test('convertFunctionNameToCamelCase', () => {
  expect(convertFunctionNameToCamelCase('_get__user_id')).toBe('getUserId')
})

test('convertFunctionNameToCamelCase', () => {
  expect(convertFunctionNameToCamelCase('_get__user_id_')).toBe('getUserId')
})
