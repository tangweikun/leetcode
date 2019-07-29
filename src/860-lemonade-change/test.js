import { lemonadeChange } from '.'

test('', () => {
  expect(lemonadeChange([5, 5, 5, 10, 20])).toBe(true)
})

test('', () => {
  expect(lemonadeChange([5, 5, 10])).toBe(true)
})

test('', () => {
  expect(lemonadeChange([10, 10])).toBe(false)
})

test('', () => {
  expect(lemonadeChange([5, 5, 10, 10, 20])).toBe(false)
})
