import { backspaceCompare } from '.'

test('', () => {
  expect(backspaceCompare('ab#c', 'ad#c')).toBe(true)
})

test('', () => {
  expect(backspaceCompare('ab##', 'c#d#')).toBe(true)
})

test('', () => {
  expect(backspaceCompare('a##c', '#a#c')).toBe(true)
})

test('', () => {
  expect(backspaceCompare('a#c', 'b')).toBe(false)
})
