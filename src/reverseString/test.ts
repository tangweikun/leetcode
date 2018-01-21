import { reverseString } from '.'
import { reverse } from 'dns'

test('reverseString-1', () => {
  expect(reverseString('Hello')).toBe('olleH')
})

test('reverseString-2', () => {
  expect(reverseString('')).toBe('')
})

test('reverseString-3', () => {
  expect(reverseString('h')).toBe('h')
})

test('reverseString-4', () => {
  expect(reverseString(' he')).toBe('eh ')
})

test('reverseString-5', () => {
  expect(reverseString(' h e ')).toBe(' e h ')
})

test('reverseString-6', () => {
  expect(reverseString('he ll ')).toBe(' ll eh')
})
