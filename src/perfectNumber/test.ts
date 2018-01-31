import { checkPerfectNumber } from '.'

test('PerfectNumber-1', () => {
  expect(checkPerfectNumber(1)).toBe(false)
})

test('PerfectNumber-2', () => {
  expect(checkPerfectNumber(28)).toBe(true)
})

test('PerfectNumber-3', () => {
  expect(checkPerfectNumber(2)).toBe(false)
})

test('PerfectNumber-4', () => {
  expect(checkPerfectNumber(6)).toBe(true)
})

test('PerfectNumber-5', () => {
  expect(checkPerfectNumber(8)).toBe(false)
})

test('PerfectNumber-6', () => {
  expect(checkPerfectNumber(12)).toBe(false)
})

test('PerfectNumber-7', () => {
  expect(checkPerfectNumber(-6)).toBe(false)
})

test('PerfectNumber-8', () => {
  expect(checkPerfectNumber(0)).toBe(false)
})
