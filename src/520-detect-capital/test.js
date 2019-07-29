import { detectCapitalUse } from '.'

test('detectCapitalUse-1', () => {
  expect(detectCapitalUse('USA')).toBe(true)
})

test('detectCapitalUse-2', () => {
  expect(detectCapitalUse('USAb')).toBe(false)
})

test('detectCapitalUse-3', () => {
  expect(detectCapitalUse('Letter')).toBe(true)
})

test('detectCapitalUse-4', () => {
  expect(detectCapitalUse('cool')).toBe(true)
})

test('detectCapitalUse-5', () => {
  expect(detectCapitalUse('HelloW')).toBe(false)
})

test('detectCapitalUse-6', () => {
  expect(detectCapitalUse('mL')).toBe(false)
})

test('detectCapitalUse-7', () => {
  expect(detectCapitalUse('Ca')).toBe(true)
})
