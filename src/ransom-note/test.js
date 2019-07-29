import { canConstruct } from '.'

test('canConstruct', () => {
  expect(canConstruct('a', 'b')).toBe(false)
})

test('canConstruct', () => {
  expect(canConstruct('aa', 'ab')).toBe(false)
})

test('canConstruct', () => {
  expect(canConstruct('aa', 'aab')).toBe(true)
})

test('canConstruct', () => {
  expect(canConstruct('aba', 'aaab')).toBe(true)
})
