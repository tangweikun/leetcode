import { isOneBitCharacter } from '.'

test('IsOneBitCharacter-1', () => {
  expect(isOneBitCharacter([1, 0, 0])).toBe(true)
})

test('IsOneBitCharacter-2', () => {
  expect(isOneBitCharacter([0, 1, 0, 0])).toBe(true)
})

test('IsOneBitCharacter-3', () => {
  expect(isOneBitCharacter([1, 1, 0])).toBe(true)
})

test('IsOneBitCharacter-4', () => {
  expect(isOneBitCharacter([1, 1, 1, 0])).toBe(false)
})

test('IsOneBitCharacter-5', () => {
  expect(isOneBitCharacter([1, 1, 1, 1])).toBe(false)
})

test('IsOneBitCharacter-6', () => {
  expect(isOneBitCharacter([0, 0, 1, 1])).toBe(false)
})

test('IsOneBitCharacter-7', () => {
  expect(isOneBitCharacter([0, 0, 1, 0])).toBe(false)
})

test('IsOneBitCharacter-8', () => {
  expect(isOneBitCharacter([0, 0, 0, 1, 0])).toBe(false)
})

test('IsOneBitCharacter-9', () => {
  expect(isOneBitCharacter([0, 0, 0, 0])).toBe(true)
})

test('IsOneBitCharacter-10', () => {
  expect(isOneBitCharacter([1, 0, 1, 0])).toBe(false)
})

test('IsOneBitCharacter-11', () => {
  expect(isOneBitCharacter([1, 0, 1, 0, 0, 1, 1])).toBe(false)
})
