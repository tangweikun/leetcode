import { minSteps } from '.'

test('2 Keys Keyboard -->1', () => {
  expect(minSteps(1)).toBe(0)
})

test('2 Keys Keyboard -->2', () => {
  expect(minSteps(2)).toBe(2)
})

test('2 Keys Keyboard -->3', () => {
  expect(minSteps(3)).toBe(3)
})

test('2 Keys Keyboard -->4', () => {
  expect(minSteps(4)).toBe(4)
})

test('2 Keys Keyboard -->5', () => {
  expect(minSteps(5)).toBe(5)
})

test('2 Keys Keyboard -->6', () => {
  expect(minSteps(6)).toBe(5)
})

test('2 Keys Keyboard -->7', () => {
  expect(minSteps(7)).toBe(7)
})

test('2 Keys Keyboard -->8', () => {
  expect(minSteps(8)).toBe(6)
})

test('2 Keys Keyboard -->9', () => {
  expect(minSteps(9)).toBe(6)
})

test('2 Keys Keyboard -->10', () => {
  expect(minSteps(10)).toBe(7)
})

test('2 Keys Keyboard -->11', () => {
  expect(minSteps(11)).toBe(11)
})

test('2 Keys Keyboard -->12', () => {
  expect(minSteps(12)).toBe(7)
})

test('2 Keys Keyboard -->13', () => {
  expect(minSteps(13)).toBe(13)
})

test('2 Keys Keyboard -->14', () => {
  expect(minSteps(14)).toBe(9)
})

test('2 Keys Keyboard -->15', () => {
  expect(minSteps(15)).toBe(8)
})

test('2 Keys Keyboard -->16', () => {
  expect(minSteps(16)).toBe(8)
})

test('2 Keys Keyboard -->17', () => {
  expect(minSteps(17)).toBe(17)
})

test('2 Keys Keyboard -->18', () => {
  expect(minSteps(18)).toBe(8)
})

test('2 Keys Keyboard -->100', () => {
  expect(minSteps(100)).toBe(14)
})
