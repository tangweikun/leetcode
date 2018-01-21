import { countSegments } from '.'

test('countSegments-1', () => {
  expect(countSegments('Hello World')).toBe(2)
})

test('countSegments-2', () => {
  expect(countSegments('Hello ')).toBe(1)
})

test('countSegments-3', () => {
  expect(countSegments('Hello')).toBe(1)
})

test('countSegments-4', () => {
  expect(countSegments('')).toBe(0)
})

test('countSegments-5', () => {
  expect(countSegments('A, ')).toBe(1)
})

test('countSegments-6', () => {
  expect(countSegments('A , B')).toBe(3)
})

test('countSegments-7', () => {
  expect(countSegments(', , , ,        a, eaefa')).toBe(6)
})
