import { maximumSwap } from '.'

test('MaximumSwap-1', () => {
  expect(maximumSwap(9999)).toBe(9999)
})

test('MaximumSwap-2', () => {
  expect(maximumSwap(9923)).toBe(9932)
})

test('MaximumSwap-3', () => {
  expect(maximumSwap(909)).toBe(990)
})

test('MaximumSwap-4', () => {
  expect(maximumSwap(812)).toBe(821)
})

test('MaximumSwap-5', () => {
  expect(maximumSwap(0)).toBe(0)
})

test('MaximumSwap-6', () => {
  expect(maximumSwap(12)).toBe(21)
})

test('MaximumSwap-7', () => {
  expect(maximumSwap(1629)).toBe(9621)
})

test('MaximumSwap-8', () => {
  expect(maximumSwap(9629)).toBe(9926)
})

test('MaximumSwap-9', () => {
  expect(maximumSwap(1993)).toBe(9913)
})

test('MaximumSwap-10', () => {
  expect(maximumSwap(2213)).toBe(3212)
})
