import { nthUglyNumber } from '.'

test('UglyNumber2-1', () => {
  expect(nthUglyNumber(1)).toBe(1)
})

test('UglyNumber2-2', () => {
  expect(nthUglyNumber(2)).toBe(2)
})

test('UglyNumber2-3', () => {
  expect(nthUglyNumber(3)).toBe(3)
})

test('UglyNumber2-4', () => {
  expect(nthUglyNumber(4)).toBe(4)
})

test('UglyNumber2-5', () => {
  expect(nthUglyNumber(5)).toBe(5)
})

test('UglyNumber2-6', () => {
  expect(nthUglyNumber(6)).toBe(6)
})

test('UglyNumber2-7', () => {
  expect(nthUglyNumber(7)).toBe(8)
})

test('UglyNumber2-8', () => {
  expect(nthUglyNumber(8)).toBe(9)
})

test('UglyNumber2-9', () => {
  expect(nthUglyNumber(9)).toBe(10)
})

test('UglyNumber2-10', () => {
  expect(nthUglyNumber(10)).toBe(12)
})

test('UglyNumber2-11', () => {
  expect(nthUglyNumber(1352)).toBe(402653184)
})
