import { canWinNim } from '.'

test('canWinNim', () => {
  expect(canWinNim(1)).toBe(true)
})
test('canWinNim', () => {
  expect(canWinNim(2)).toBe(true)
})
test('canWinNim', () => {
  expect(canWinNim(3)).toBe(true)
})

test('canWinNim', () => {
  expect(canWinNim(4)).toBe(false)
})

test('canWinNim', () => {
  expect(canWinNim(5)).toBe(true)
})

test('canWinNim', () => {
  expect(canWinNim(6)).toBe(true)
})

test('canWinNim', () => {
  expect(canWinNim(7)).toBe(true)
})

test('canWinNim', () => {
  expect(canWinNim(8)).toBe(false)
})

test('canWinNim', () => {
  expect(canWinNim(9)).toBe(true)
})

test('canWinNim', () => {
  expect(canWinNim(10)).toBe(true)
})

test('canWinNim', () => {
  expect(canWinNim(11)).toBe(true)
})

test('canWinNim', () => {
  expect(canWinNim(12)).toBe(false)
})
