import { reorderedPowerOf2 } from '.'

test('', () => {
  expect(reorderedPowerOf2(1)).toBe(true)
})

test('', () => {
  expect(reorderedPowerOf2(10)).toBe(false)
})

test('', () => {
  expect(reorderedPowerOf2(16)).toBe(true)
})

test('', () => {
  expect(reorderedPowerOf2(61)).toBe(true)
})

test('', () => {
  expect(reorderedPowerOf2(24)).toBe(false)
})

test('', () => {
  expect(reorderedPowerOf2(64)).toBe(true)
})
